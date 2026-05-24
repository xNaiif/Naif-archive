'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, FileText } from 'lucide-react'

const FILE_CATEGORIES = {
  slides: { label: 'Slides', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' },
  solutions: { label: 'Solutions', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
  assignments: { label: 'Assignments', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' },
  notes: { label: 'Notes', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' },
  textbooks: { label: 'Textbooks', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' },
}

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'downloads', label: 'Most Downloads' },
  { value: 'recent', label: 'Most Recent' },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('relevance')
  const [showFilters, setShowFilters] = useState(false)

  // Mock search results
  const mockResults = [
    { id: 1, title: 'Week 1-5 Complete Slides', course: 'CS 101', category: 'slides', downloads: 345 },
    { id: 2, title: 'Final Exam Solutions', course: 'MATH 101', category: 'solutions', downloads: 289 },
    { id: 3, title: 'Programming Assignment Examples', course: 'CS 101', category: 'assignments', downloads: 267 },
    { id: 4, title: 'Lecture Notes Summary', course: 'PHYS 101', category: 'notes', downloads: 234 },
    { id: 5, title: 'Introduction to Calculus', course: 'MATH 101', category: 'textbooks', downloads: 198 },
    { id: 6, title: 'Quantum Mechanics Overview', course: 'PHYS 101', category: 'notes', downloads: 176 },
  ]

  const filteredResults = mockResults.filter((result) => {
    const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || result.category === selectedCategory
    return matchesQuery && matchesCategory
  })

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Search Materials</h1>
          <p className="text-lg text-muted-600 dark:text-muted-400">Find the materials you need across all levels and courses</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-400" />
            <input
              type="text"
              placeholder="Search by title, course, instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-base pl-12 py-3 text-base"
            />
          </div>
        </motion.div>

        {/* Filters Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:flex lg:w-64 flex-col gap-6 p-6 bg-muted-50 dark:bg-muted-800/50 rounded-lg h-fit">
            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="font-semibold">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={selectedCategory === ''}
                    onChange={() => setSelectedCategory('')}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">All Categories</span>
                </label>
                {Object.entries(FILE_CATEGORIES).map(([key, value]) => (
                  <label key={key} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={selectedCategory === key}
                      onChange={() => setSelectedCategory(key)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{value.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div className="space-y-3 border-t border-muted-200 dark:border-muted-700 pt-6">
              <h3 className="font-semibold">Sort By</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input-base text-sm">
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden btn-secondary inline-flex items-center justify-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>

          {/* Results */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-600 dark:text-muted-400">
                Found <span className="font-semibold">{filteredResults.length}</span> results
              </p>
            </div>

            <div className="space-y-3">
              {filteredResults.length > 0 ? (
                filteredResults.map((result, i) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="card p-6 cursor-pointer hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-4 w-4 text-primary-600" />
                          <h3 className="font-semibold">{result.title}</h3>
                        </div>
                        <p className="text-sm text-muted-600 dark:text-muted-400">{result.course}</p>
                      </div>
                      <div className="text-right space-y-2">
                        <span className={`badge ${FILE_CATEGORIES[result.category as keyof typeof FILE_CATEGORIES]?.color}`}>
                          {FILE_CATEGORIES[result.category as keyof typeof FILE_CATEGORIES]?.label}
                        </span>
                        <p className="text-xs text-muted-500">📥 {result.downloads}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="card p-12 text-center space-y-4">
                  <p className="text-lg font-medium">No results found</p>
                  <p className="text-muted-600 dark:text-muted-400">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
