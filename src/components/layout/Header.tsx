'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-muted-200 dark:border-muted-700 bg-white/95 dark:bg-muted-800/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
            <span className="hidden sm:inline">Naif Archive</span>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-400" />
              <input
                type="text"
                placeholder="Search materials..."
                className="input-base pl-9 py-2 text-sm w-full"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/search"
              className="px-3 py-2 text-sm font-medium text-muted-700 hover:text-primary-600 transition-colors"
            >
              Search
            </Link>
            <Link
              href="/request"
              className="px-3 py-2 text-sm font-medium text-muted-700 hover:text-primary-600 transition-colors"
            >
              Request
            </Link>
            <Link href="/admin" className="btn-primary text-sm">
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted-100 dark:hover:bg-muted-700 rounded-lg"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-2 border-t border-muted-200 dark:border-muted-700 pt-4"
          >
            <Link href="/search" className="block px-3 py-2 text-sm hover:bg-muted-100 dark:hover:bg-muted-700 rounded">
              Search
            </Link>
            <Link href="/request" className="block px-3 py-2 text-sm hover:bg-muted-100 dark:hover:bg-muted-700 rounded">
              Request
            </Link>
            <Link href="/admin" className="block btn-primary text-sm text-center">
              Admin
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
