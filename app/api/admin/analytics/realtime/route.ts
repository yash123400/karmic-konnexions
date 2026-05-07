import { BetaAnalyticsDataClient } from '@google-analytics/data'
import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!)
    const analyticsDataClient = new BetaAnalyticsDataClient({ credentials })
    const propertyId = process.env.GA4_PROPERTY_ID!

    const [usersRes, pagesRes, countriesRes] = await Promise.all([
      analyticsDataClient.runRealtimeReport({
        property: `properties/${propertyId}`,
        metrics: [{ name: 'activeUsers' }],
      }),
      analyticsDataClient.runRealtimeReport({
        property: `properties/${propertyId}`,
        dimensions: [{ name: 'unifiedPagePathScreen' }],
        metrics: [{ name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
        limit: 5,
      }),
      analyticsDataClient.runRealtimeReport({
        property: `properties/${propertyId}`,
        dimensions: [{ name: 'country' }],
        metrics: [{ name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
        limit: 5,
      }),
    ])

    const activeUsers = parseInt(usersRes[0]?.rows?.[0]?.metricValues?.[0]?.value ?? '0')

    const activePages = pagesRes[0]?.rows?.map(row => ({
      page: row.dimensionValues?.[0]?.value ?? '/',
      users: parseInt(row.metricValues?.[0]?.value ?? '0'),
    })) ?? []

    const countries = countriesRes[0]?.rows?.map(row => ({
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
