'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, LayoutDashboard, Settings, LogOut } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-muted-50 dark:bg-muted-900">
      {/* Sidebar */}
      <aside className={`${
        sidebarOpen ? 'w-64' : 'w-20'
      } bg-white dark:bg-muted-800 border-r border-muted-200 dark:border-muted-700 flex flex-col transition-all duration-300`}>
        {/* Header */}
        <div className="p-4 border-b border-muted-200 dark:border-muted-700 flex items-center justify-between">
          {sidebarOpen && <h1 className="font-bold text-lg">Admin</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted-100 dark:hover:bg-muted-700 rounded-lg"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700 transition-colors"
          >
            <LayoutDashboard className="h-5 w-5" />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700 transition-colors"
          >
            <Settings className="h-5 w-5" />
            {sidebarOpen && <span>Settings</span>}
          </Link>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-muted-200 dark:border-muted-700">
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition-colors">
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
