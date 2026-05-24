'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { LEVELS, COURSES_BY_LEVEL } from '@/lib/constants'

export default function LevelPage({
  params,
}: {
  params: { levelId: string }
}) {
  const level = LEVELS.find(l => l.id === params.levelId)
  const courses = COURSES_BY_LEVEL[params.levelId as keyof typeof COURSES_BY_LEVEL] || []

  if (!level) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold">Level not found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className={`w-16 h-16 ${level.color} rounded-lg`} />
        <h1 className="text-4xl font-bold">{level.name}</h1>
        <p className="text-lg text-muted-600 dark:text-muted-400">{level.description}</p>
      </motion.div>

      {/* Courses Grid */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold mb-6">Courses</h2>
        {courses.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/levels/${params.levelId}/${course.id}`} className="card p-6 hover:shadow-lg transition-all group h-full flex flex-col">
                  <BookOpen className="h-10 w-10 text-primary-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors">{course.name}</h3>
                  <p className="text-sm text-muted-600 dark:text-muted-400 mb-4 flex-1">{course.description}</p>
                  <div className="flex items-center gap-2 text-primary-600 group-hover:gap-3 transition-all">
                    View Materials
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-600 dark:text-muted-400">No courses available yet</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
