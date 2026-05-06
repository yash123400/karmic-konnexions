import { google } from 'googleapis'
import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!)
    const googleAuth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    })

    const searchconsole = google.searchconsole({ version: 'v1', auth: googleAuth })
    const siteUrl = process.env.GSC_SITE_URL!

    const endDate = new Date().toISOString().split('T')[0]
    const startDate = new Date(Date.now() - 28 * 86400000).toISOString().split('T')[0]

    const [queriesRes, pagesRes] = await Promise.all([
      searchconsole.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ['query'],
          rowLimit: 10,
        },
      }),
      searchconsole.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ['page'],
          rowLimit: 5,
        },
      }),
    ])

    const queries = queriesRes.data.rows?.map(r => ({
      query: r.keys?.[0],
      clicks: r.clicks,
      impressions: r.impressions,
      position: r.position?.toFixed(1),
    }))

    const pages = pagesRes.data.rows?.map(r => ({
      page: r.keys?.[0]?.replace(siteUrl, '') || '/',
      clicks: r.clicks,
      impressions: r.impressions,
    }))

    return NextResponse.json({ queries, pages, dateRange: `${startDate} → ${endDate}` })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Search Console error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
