'use client'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import type { Session } from 'next-auth'

export default function AdminHeader({ session }: { session: Session }) {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      <div />
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {session.user?.name ?? session.user?.email}
        </span>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>
    </header>
  )
}
