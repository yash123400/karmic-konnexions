import { BetaAnalyticsDataClient } from '@google-analytics/data'
import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!)
    const analyticsDataClient = new BetaAnalyticsDataClient({ credentials })
    const propertyId = process.env.GA4_PROPERTY_ID!

    const [overviewResponse, topPagesResponse, trafficSourceResponse] = await Promise.all([
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'sessions' },
          { name: 'activeUsers' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
        ],
      }),
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 5,
      }),
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 5,
      }),
    ])

    const overview = overviewResponse[0]?.rows?.[0]?.metricValues
    const topPages = topPagesResponse[0]?.rows?.map(row => ({
      page: row.dimensionValues?.[0]?.value,
      views: parseInt(row.metricValues?.[0]?.value ?? '0'),
    }))
    const sources = trafficSourceResponse[0]?.rows?.map(row => ({
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
