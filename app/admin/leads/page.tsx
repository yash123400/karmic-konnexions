export const dynamic = 'force-dynamic'
import { getSupabaseAdmin } from '@/lib/supabase-server'
import LeadsTable from '@/components/admin/LeadsTable'

async function getLeads() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return []

  const supabase = getSupabaseAdmin()
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data ?? []
}

export default async function LeadsPage() {
  const leads = await getLeads()
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Leads &amp; Enquiries</h1>
        <p className="text-gray-500 mt-1">{leads.length} total submissions</p>
      </div>
      <LeadsTable leads={leads} />
    </div>
  )
}
