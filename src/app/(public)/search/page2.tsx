'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Download, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  // Mock materials data
  const allMaterials = [
    { id: 1, title: 'Week 1-2 Lecture Slides', course: 'Introduction to CS', type: 'PDF', downloads: 245, date: '2024-01-15' },
    { id: 2, title: 'Programming Assignment 1', course: 'Data Structures', type: 'ZIP', downloads: 189, date: '2024-01-14' },
    { id: 3, title: 'Calculus Final Exam Solutions', course: 'Advanced Calculus', type: 'PDF', downloads: 432, date: '2024-01-13' },
    { id: 4, title: 'Research Paper Template', course: 'Research Methods', type: 'DOCX', downloads: 156, date: '2024-01-12' },
    { id: 5, title: 'Physics Lab Report Guide', course: 'Experimental Physics', type: 'PDF', downloads: 267, date: '2024-01-11' },
    { id: 6, title: 'Chemistry Molecular Models', course: 'Organic Chemistry', type: 'ZIP', downloads: 198, date: '2024-01-10' },
  ]

  const filtered = allMaterials
    .filter(m => selectedType === 'all' || m.type === selectedType)
    .filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.course.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'downloads') return b.downloads - a.downloads
      if (sortBy === 'recent') return new Date(b.date).getTime() - new Date(a.date).getTime()
      return a.title.localeCompare(b.title)
    })

  const fileTypes = ['all', 'PDF', 'ZIP', 'DOCX', 'VIDEO']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold mb-2">Search Materials</h1>
        <p className="text-muted-600 dark:text-muted-400">Find the resources you need from our collection</p>
      </motion.div>

      {/* Search Bar */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-muted-800 rounded-lg shadow-md p-4">
        <div className="flex items-center gap-2 border border-muted-200 dark:border-muted-700 rounded-lg px-4">
          <input
            type="text"
            placeholder="Search materials by title or course..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 py-3 bg-transparent outline-none"
          />
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">File Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="input-base w-full sm:w-48"
          >
            {fileTypes.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-base w-full sm:w-48"
          >
            <option value="recent">Most Recent</option>
            <option value="downloads">Most Downloaded</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </motion.div>

      {/* Results */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-sm text-muted-600 dark:text-muted-400 mb-4">
          Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </p>

        {filtered.length > 0 ? (
          <div className="grid gap-4">
            {filtered.map((material, i) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="card p-6 hover:shadow-lg transition-all"
              >
                <Link href={`/levels/1/1/${material.id}`} className="group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors">{material.title}</h3>
                      <p className="text-sm text-muted-600 dark:text-muted-400">{material.course}</p>
                    </div>
                    <span className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">{material.type}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-600 dark:text-muted-400">
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      {material.downloads} downloads
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {material.date}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg font-medium">No materials found</p>
            <p className="text-muted-600 dark:text-muted-400">Try adjusting your search criteria</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
