export const dynamic = 'force-dynamic'
import { getSupabaseAdmin } from '@/lib/supabase-server'
import ProposalsTable from '@/components/admin/ProposalsTable'

async function getProposals() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return []

  const supabase = getSupabaseAdmin()
  const { data, error } = await supabase
    .from('proposals')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return []
  return data ?? []
}

export default async function ProposalsPage() {
  const proposals = await getProposals()
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Proposals</h1>
        <p className="text-gray-500 mt-1">{proposals.length} total requests</p>
      </div>
      <ProposalsTable proposals={proposals} />
    </div>
  )
}
