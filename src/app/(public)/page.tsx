'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Search, FileText } from 'lucide-react'

const MOCK_LEVELS = [
  { id: 'level-1', name: 'Secondary', description: 'High school materials', courseCount: 10, totalFiles: 150 },
  { id: 'level-2', name: 'Undergraduate', description: 'University first year', courseCount: 15, totalFiles: 250 },
  { id: 'level-3', name: 'Advanced', description: 'Upper level courses', courseCount: 8, totalFiles: 180 },
  { id: 'level-4', name: 'Graduate', description: 'Master level materials', courseCount: 5, totalFiles: 120 },
]

const POPULAR_FILES = [
  { title: 'Calculus I Lectures', course: 'Mathematics', category: 'lectures', downloads: 1200 },
  { title: 'Physics Lab Reports', course: 'Science', category: 'reports', downloads: 890 },
  { title: 'English Essay Guide', course: 'Literature', category: 'guides', downloads: 756 },
  { title: 'Chemistry Notes', course: 'Science', category: 'notes', downloads: 645 },
]

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Academic Archive</span>
              </h1>
              <p className="text-xl text-muted-600 dark:text-muted-400">
                Discover, organize, and access academic materials across all levels and courses in one place.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Link href="/search" className="btn-primary inline-flex items-center gap-2">
                <Search className="h-4 w-4" />
                Start Searching
              </Link>
              <Link href="/levels/level-1" className="btn-secondary inline-flex items-center gap-2">
                Browse Materials
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-muted-200 dark:border-muted-700">
              {[
                { label: 'Materials', value: '1200+' },
                { label: 'Courses', value: '40+' },
                { label: 'Users', value: '5000+' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                  <p className="text-sm text-muted-600 dark:text-muted-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 dark:from-blue-900/30 to-purple-100/50 dark:to-purple-900/30 rounded-3xl border border-blue-200/50 dark:border-blue-900/50 flex items-center justify-center">
                <BookOpen className="h-32 w-32 text-blue-600/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browse by Level */}
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Browse by Level</h2>
            <p className="text-lg text-muted-600 dark:text-muted-400">Find materials tailored to your academic level</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_LEVELS.map((level, i) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/levels/${level.id}`} className="card-interactive p-6 block space-y-4 h-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{level.name}</h3>
                      <p className="text-sm text-muted-600 dark:text-muted-400">{level.courseCount} Courses</p>
                    </div>
                    <div className="text-3xl">📚</div>
                  </div>
                  <p className="text-sm text-muted-600 dark:text-muted-400">{level.description}</p>
                  <div className="text-xs text-muted-500">{level.totalFiles} files</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Popular Materials */}
      <section className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Popular Materials</h2>
            <p className="text-lg text-muted-600 dark:text-muted-400">Most downloaded resources</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {POPULAR_FILES.map((file, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-interactive p-6 block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary-600" />
                      <h3 className="font-semibold">{file.title}</h3>
                    </div>
                    <p className="text-sm text-muted-600 dark:text-muted-400">{file.course}</p>
                  </div>
                  <span className={`badge bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300`}>{file.category}</span>
                </div>
                <p className="text-xs text-muted-500 mt-4">📥 {file.downloads} downloads</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-12 text-center space-y-6"
        >
          <h2 className="text-3xl font-bold">Can't Find What You Need?</h2>
          <p className="text-lg text-muted-600 dark:text-muted-400 max-w-2xl mx-auto">
            Submit a request for materials you're looking for. We'll work to add them to the archive.
          </p>
          <Link href="/request" className="btn-primary inline-block">
            Request Material
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
