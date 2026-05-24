'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Check, X } from 'lucide-react'
import { useState } from 'react'

export default function BrokenLinksPage() {
  const [filter, setFilter] = useState('all')

  const brokenLinks = [
    { id: 1, material: 'Week 1-2 Lecture Slides', url: 'drive.google.com/file/...', reports: 5, status: 'pending', reported: '2024-01-20' },
    { id: 2, material: 'Final Exam Solutions', url: 'onedrive.com/file/...', reports: 3, status: 'fixed', reported: '2024-01-18' },
    { id: 3, material: 'Programming Assignment', url: 'dropbox.com/file/...', reports: 2, status: 'pending', reported: '2024-01-15' },
    { id: 4, material: 'Course Syllabus', url: 'drive.google.com/file/...', reports: 1, status: 'pending', reported: '2024-01-19' },
  ]

  const filteredLinks = brokenLinks.filter((l) => filter === 'all' || l.status === filter)

  const getStatusColor = (status: string) => {
    return status === 'fixed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">Broken Links Monitor</h1>
        <p className="text-muted-600 dark:text-muted-400 mt-2">Track and manage reported broken links</p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2">
        {['all', 'pending', 'fixed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              filter === tab
                ? 'bg-primary-600 text-white'
                : 'bg-muted-200 dark:bg-muted-700 text-muted-700 dark:text-muted-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Broken Links Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-800/50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Material</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">URL</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Reports</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Reported</th>
                <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLinks.map((link, i) => (
                <motion.tr
                  key={link.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-muted-200 dark:border-muted-700 hover:bg-muted-50 dark:hover:bg-muted-800/50"
                >
                  <td className="px-6 py-4 text-sm font-medium">{link.material}</td>
                  <td className="px-6 py-4 text-sm text-muted-600 dark:text-muted-400 font-mono">{link.url}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
                      <AlertTriangle className="h-3 w-3" />
                      {link.reports}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`badge ${getStatusColor(link.status)}`}>{link.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-600 dark:text-muted-400">{link.reported}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-muted-100 dark:hover:bg-muted-700 rounded transition-colors">
                        <Check className="h-4 w-4 text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-muted-100 dark:hover:bg-muted-700 rounded transition-colors">
                        <X className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
