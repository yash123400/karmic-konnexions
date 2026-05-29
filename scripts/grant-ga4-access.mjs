/**
 * Grants the service account Viewer access on the GA4 property.
 * Uses your own Google account (browser OAuth) — no gcloud needed.
 * Run once: node scripts/grant-ga4-access.mjs
 */
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import http from 'http'
import { exec } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))

const env = Object.fromEntries(
  readFileSync(resolve(__dirname, '../.env.local'), 'utf8')
    .split('\n')
    .filter(l => l && !l.startsWith('#') && l.includes('='))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)

const credentials = JSON.parse(env.GOOGLE_SERVICE_ACCOUNT_KEY)
const propertyId = env.GA4_PROPERTY_ID
const serviceAccountEmail = credentials.client_email
const gcpProjectId = credentials.project_id

console.log(`GA4 Property : ${propertyId}`)
console.log(`Service acct : ${serviceAccountEmail}`)
console.log(`GCP Project  : ${gcpProjectId}`)
console.log()

// ── Step 1: get an OAuth2 client ID for this GCP project ──────────────────
// We use the GA4 Data API OAuth client. You can create one at:
// console.cloud.google.com → APIs → Credentials → Create OAuth Client ID (Desktop)
// For now we use Google's well-known installed-app client (works for personal testing)
const CLIENT_ID = '764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com'
const CLIENT_SECRET = 'd-FL95Q19q7MQmFpd7hHD0Ty'
const REDIRECT_URI = 'http://localhost:9988'
const SCOPE = 'https://www.googleapis.com/auth/analytics.manage.users'

const authUrl =
  `https://accounts.google.com/o/oauth2/v2/auth` +
  `?client_id=${CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&response_type=code` +
  `&scope=${encodeURIComponent(SCOPE)}` +
  `&access_type=offline` +
  `&prompt=consent`

console.log('Opening browser for Google authorization...')
exec(`open "${authUrl}"`)

// ── Step 2: receive the code ───────────────────────────────────────────────
const code = await new Promise((resolve, reject) => {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:9988')
    const code = url.searchParams.get('code')
    if (!code) { res.end('No code received.'); return reject(new Error('No code')) }
    res.end('<h2>Authorized! You can close this tab.</h2>')
    server.close()
    resolve(code)
  })
  server.listen(9988, () => console.log('Waiting for browser redirect on :9988 ...'))
  setTimeout(() => { server.close(); reject(new Error('Timeout')) }, 120_000)
})

// ── Step 3: exchange code for access token ────────────────────────────────
const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
  }),
})
const { access_token, error: tokenErr } = await tokenRes.json()
if (!access_token) throw new Error(`Token exchange failed: ${tokenErr}`)
console.log('Got access token ✓')

// ── Step 4: grant service account Viewer on the GA4 property ─────────────
const apiRes = await fetch(
  `https://analyticsadmin.googleapis.com/v1beta/properties/${propertyId}/accessBindings`,
  {
    method: 'POST',
    headers: { Authorization: `Bearer ${access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: serviceAccountEmail, roles: ['predefinedRoles/viewer'] }),
  }
)
const apiData = await apiRes.json()
if (apiRes.ok) {
  console.log('\n✅ Done! Service account now has Viewer access on GA4 property', propertyId)
  console.log('The admin dashboard analytics widgets should start showing data.')
} else {
  console.error('\n❌ Failed:', apiRes.status, apiData?.error?.message ?? JSON.stringify(apiData))
}
