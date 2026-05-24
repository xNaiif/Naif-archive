'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto w-full border-t border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-bold text-lg mb-4">Naif Archive</h3>
            <p className="text-sm text-muted-600 dark:text-muted-400">
              Your comprehensive resource for organizing and accessing academic materials across all levels and courses.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  Request Material
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-muted-200 dark:border-muted-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-600 dark:text-muted-400">
              © {currentYear} Naif Archive. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0 text-sm">
              <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                Twitter
              </a>
              <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                GitHub
              </a>
              <a href="#" className="text-muted-600 dark:text-muted-400 hover:text-primary-600">
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
