'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, Download } from 'lucide-react'

export default function CoursePage({ params }: { params: { levelId: string; courseId: string } }) {
  // Mock course data
  const course = {
    id: params.courseId,
    name: 'Data Structures and Algorithms',
    code: 'CS-201',
    description: 'Comprehensive course covering fundamental data structures and algorithmic problem solving.',
    instructor: 'Dr. Ahmed Hassan',
    credits: 3,
    fileCount: 6,
  }

  // Mock files for this course
  const mockFiles = [
    { id: 'file-1', name: 'Week 1-2 Lecture Slides', category: 'slides', downloads: 145 },
    { id: 'file-2', name: 'Programming Assignment 1', category: 'assignments', downloads: 89 },
    { id: 'file-3', name: 'Midterm Exam Solutions', category: 'solutions', downloads: 234 },
    { id: 'file-4', name: 'Comprehensive Notes', category: 'notes', downloads: 156 },
    { id: 'file-5', name: 'Final Project Guidelines', category: 'assignments', downloads: 112 },
    { id: 'file-6', name: 'Course Syllabus', category: 'syllabus', downloads: 78 },
  ]

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <Link
            href={`/levels/${params.levelId}`}
            className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Level
          </Link>
        </motion.div>

        {/* Course Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">{course.name}</h1>
                <p className="text-lg text-primary-600 font-semibold">{course.code}</p>
                <p className="text-muted-600 dark:text-muted-400">{course.description}</p>
              </div>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-muted-200 dark:border-muted-700">
              <div>
                <p className="text-sm text-muted-600 dark:text-muted-400">Instructor</p>
                <p className="font-semibold mt-1">{course.instructor}</p>
              </div>
              <div>
                <p className="text-sm text-muted-600 dark:text-muted-400">Credits</p>
                <p className="font-semibold mt-1">{course.credits}</p>
              </div>
              <div>
                <p className="text-sm text-muted-600 dark:text-muted-400">Materials</p>
                <p className="font-semibold mt-1">{course.fileCount} files</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Materials List */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <h2 className="text-2xl font-bold">Course Materials</h2>

          <div className="grid gap-4">
            {mockFiles.map((file, i) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/levels/${params.levelId}/${params.courseId}/${file.id}`}
                  className="card-interactive p-6 block"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{file.name}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                            {file.category}
                          </span>
                          <span className="text-sm text-muted-600 dark:text-muted-400">📥 {file.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    <Download className="h-5 w-5 text-muted-400" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
