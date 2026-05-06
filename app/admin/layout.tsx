import { auth } from '@/auth'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'

export const metadata = {
  title: 'Admin Portal — Karmic Konnexions',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  // Login page shares this layout — render children only, no shell
  if (!session) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader session={session} />
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
