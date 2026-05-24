'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, Download, Clock, AlertCircle, Share2, Flag } from 'lucide-react'

export default function FilePage({ params }: { params: { levelId: string; courseId: string; fileId: string } }) {
  const [reportOpen, setReportOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const mockFile = {
    id: params.fileId,
    name: 'Week 1-2 Complete Lecture Slides',
    course: 'Data Structures',
    category: 'slides',
    size: '2.4 MB',
    downloads: 145,
    date: '2024-01-08',
    description: 'Comprehensive lecture slides covering Week 1 and Week 2 content. Includes all examples and practice problems discussed in class.',
    url: 'https://onedrive.com/example-file',
  }

  const handleDownload = () => {
    window.open(mockFile.url, '_blank')
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(mockFile.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <Link
            href={`/levels/${params.levelId}/${params.courseId}`}
            className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>
        </motion.div>

        {/* File Details */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-8 space-y-6">
          {/* Title Section */}
          <div className="space-y-4 pb-6 border-b border-muted-200 dark:border-muted-700">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold">{mockFile.name}</h1>
                <p className="text-muted-600 dark:text-muted-400 mt-1">{mockFile.course}</p>
              </div>
            </div>
          </div>

          {/* File Info */}
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-600 dark:text-muted-400">File Size</p>
              <p className="font-semibold mt-1">{mockFile.size}</p>
            </div>
            <div>
              <p className="text-sm text-muted-600 dark:text-muted-400">Downloads</p>
              <p className="font-semibold mt-1">{mockFile.downloads.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-600 dark:text-muted-400">Uploaded</p>
              <p className="font-semibold mt-1 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {mockFile.date}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-600 dark:text-muted-400">Category</p>
              <p className="font-semibold mt-1">Lecture Slides</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-semibold">About This File</h3>
            <p className="text-muted-700 dark:text-muted-300">{mockFile.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <button onClick={handleDownload} className="btn-primary inline-flex items-center justify-center gap-2">
              <Download className="h-4 w-4" />
              Download File
            </button>
            <button onClick={handleCopyLink} className="btn-secondary inline-flex items-center justify-center gap-2">
              <Share2 className="h-4 w-4" />
              {copied ? 'Link Copied!' : 'Copy Link'}
            </button>
          </div>

          {/* Report Section */}
          <div className="pt-4 border-t border-muted-200 dark:border-muted-700">
            <motion.button
              onClick={() => setReportOpen(!reportOpen)}
              className="inline-flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium"
            >
              <Flag className="h-4 w-4" />
              Report Broken Link or Issue
            </motion.button>

            {reportOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-lg space-y-3"
              >
                <div className="flex gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium text-red-800 dark:text-red-200">Report an Issue</p>
                    <textarea
                      placeholder="Please describe the issue..."
                      className="input-base text-sm h-20"
                    />
                    <button className="btn-primary text-sm">Submit Report</button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Related Files */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <h2 className="text-2xl font-bold">Related Materials</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Week 3-4 Slides', downloads: 98 },
              { name: 'Assignment Solutions', downloads: 67 },
            ].map((item, i) => (
              <div key={i} className="card-interactive p-4 block">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary-600" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-xs text-muted-600 dark:text-muted-400">📥 {item.downloads}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
