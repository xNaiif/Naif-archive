'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, FileText, Calendar, Eye } from 'lucide-react'
import { LEVELS, COURSES_BY_LEVEL } from '@/lib/constants'

export default function CoursePage({
  params,
}: {
  params: { levelId: string; courseId: string }
}) {
  const level = LEVELS.find(l => l.id === params.levelId)
  const courses = COURSES_BY_LEVEL[params.levelId as keyof typeof COURSES_BY_LEVEL] || []
  const course = courses.find(c => c.id === params.courseId)

  const materials = [
    { id: 1, title: 'Week 1-2 Lecture Slides', type: 'PDF', downloads: 245, views: 312, date: '2024-01-15', size: '2.4 MB' },
    { id: 2, title: 'Programming Assignment 1', type: 'ZIP', downloads: 189, views: 198, date: '2024-01-14', size: '1.8 MB' },
    { id: 3, title: 'Final Exam Solutions', type: 'PDF', downloads: 432, views: 521, date: '2024-01-13', size: '3.2 MB' },
  ]

  if (!level || !course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold">Course not found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <h1 className="text-4xl font-bold">{course.name}</h1>
        <p className="text-lg text-muted-600 dark:text-muted-400">{course.description}</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-6">
        {materials.map((material, i) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={`/levels/${params.levelId}/${params.courseId}/${material.id}`}
              className="card p-6 hover:shadow-lg transition-all group h-full flex flex-col"
            >
              <FileText className="h-10 w-10 text-primary-600 mb-3" />
              <h3 className="font-bold group-hover:text-primary-600 mb-2">{material.title}</h3>
              <div className="space-y-1 text-sm text-muted-600 flex-1">
                <p>Type: {material.type}</p>
                <p>Size: {material.size}</p>
                <p>Downloads: {material.downloads}</p>
              </div>
              <button className="mt-4 btn-primary w-full text-sm">Download</button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
