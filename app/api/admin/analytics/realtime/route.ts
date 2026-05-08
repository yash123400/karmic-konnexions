import { google } from 'googleapis'
import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function getAnalyticsAuth() {
  const client = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH_CLIENT_ID!,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET!
  )
  client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN! })
  return client
}

export async function GET() {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const analyticsdata = google.analyticsdata({ version: 'v1beta', auth: getAnalyticsAuth() })
    const property = `properties/${process.env.GA4_PROPERTY_ID!}`

    const [usersRes, pagesRes, countriesRes] = await Promise.all([
      analyticsdata.properties.runRealtimeReport({
        property,
        requestBody: {
          metrics: [{ name: 'activeUsers' }],
        },
      }),
      analyticsdata.properties.runRealtimeReport({
        property,
        requestBody: {
          dimensions: [{ name: 'unifiedPagePathScreen' }],
          metrics: [{ name: 'activeUsers' }],
          orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
          limit: '5',
        },
      }),
      analyticsdata.properties.runRealtimeReport({
        property,
        requestBody: {
          dimensions: [{ name: 'country' }],
          metrics: [{ name: 'activeUsers' }],
          orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
          limit: '5',
        },
      }),
    ])

    const activeUsers = parseInt(usersRes.data.rows?.[0]?.metricValues?.[0]?.value ?? '0')

    const activePages = pagesRes.data.rows?.map(row => ({
      page: row.dimensionValues?.[0]?.value ?? '/',
      users: parseInt(row.metricValues?.[0]?.value ?? '0'),
    })) ?? []

    const countries = countriesRes.data.rows?.map(row => ({
      country: row.dimensionValues?.[0]?.value ?? 'Unknown',
      users: parseInt(row.metricValues?.[0]?.value ?? '0'),
    })) ?? []

    return NextResponse.json({ activeUsers, activePages, countries })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Realtime analytics error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
