import { google } from 'googleapis'
import { auth } from '@/auth'
import { NextResponse } from 'next/server'

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
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const analyticsdata = google.analyticsdata({ version: 'v1beta', auth: getAnalyticsAuth() })
    const property = `properties/${process.env.GA4_PROPERTY_ID!}`

    const [overviewRes, topPagesRes, sourcesRes] = await Promise.all([
      analyticsdata.properties.runReport({
        property,
        requestBody: {
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          metrics: [
            { name: 'sessions' },
            { name: 'activeUsers' },
            { name: 'bounceRate' },
            { name: 'averageSessionDuration' },
          ],
        },
      }),
      analyticsdata.properties.runReport({
        property,
        requestBody: {
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          dimensions: [{ name: 'pagePath' }],
          metrics: [{ name: 'screenPageViews' }],
          orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
          limit: '5',
        },
      }),
      analyticsdata.properties.runReport({
        property,
        requestBody: {
          dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
          dimensions: [{ name: 'sessionDefaultChannelGroup' }],
          metrics: [{ name: 'sessions' }],
          orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
          limit: '5',
        },
      }),
    ])

    const overview = overviewRes.data.rows?.[0]?.metricValues
    const topPages = topPagesRes.data.rows?.map(row => ({
      page: row.dimensionValues?.[0]?.value,
      views: parseInt(row.metricValues?.[0]?.value ?? '0'),
    }))
    const sources = sourcesRes.data.rows?.map(row => ({
      source: row.dimensionValues?.[0]?.value,
      sessions: parseInt(row.metricValues?.[0]?.value ?? '0'),
    }))

    return NextResponse.json({
      sessions: parseInt(overview?.[0]?.value ?? '0'),
      users: parseInt(overview?.[1]?.value ?? '0'),
      bounceRate: parseFloat(overview?.[2]?.value ?? '0').toFixed(1),
      avgDuration: Math.round(parseFloat(overview?.[3]?.value ?? '0')),
      topPages,
      sources,
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('Analytics error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
