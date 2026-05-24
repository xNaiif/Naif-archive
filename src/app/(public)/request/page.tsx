'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Mail, BookOpen } from 'lucide-react'
import { isValidEmail } from '@/lib/utils'

export default function RequestPage() {
  const [formData, setFormData] = useState({
    title: '',
    course: '',
    level: '',
    description: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.course.trim()) newErrors.course = 'Course is required'
    if (!formData.level) newErrors.level = 'Level is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ title: '', course: '', level: '', description: '', email: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Request Missing Material</h1>
          <p className="text-lg text-muted-600 dark:text-muted-400">
            Can't find what you need? Let us know and we'll work to add it to the archive.
          </p>
        </motion.div>

        {/* Form */}
        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="card p-8 space-y-6"
          >
            {/* Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Material Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="e.g., Week 5 Lecture Slides"
                value={formData.title}
                onChange={handleChange}
                className="input-base"
              />
              {errors.title && <p className="text-sm text-red-600">{errors.title}</p>}
            </div>

            {/* Course */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Course
              </label>
              <input
                type="text"
                name="course"
                placeholder="e.g., CS 101 or Introduction to Programming"
                value={formData.course}
                onChange={handleChange}
                className="input-base"
              />
              {errors.course && <p className="text-sm text-red-600">{errors.course}</p>}
            </div>

            {/* Level */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="input-base"
              >
                <option value="">Select a level</option>
                <option value="level-1">Level 1</option>
                <option value="level-2">Level 2</option>
                <option value="level-3">Level 3</option>
                <option value="level-4">Level 4</option>
              </select>
              {errors.level && <p className="text-sm text-red-600">{errors.level}</p>}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Description (Optional)</label>
              <textarea
                name="description"
                placeholder="Provide any additional details about the material you're looking for..."
                value={formData.description}
                onChange={handleChange}
                className="input-base h-24 resize-none"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="input-base"
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full">
              Submit Request
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-8 text-center space-y-4"
          >
            <div className="text-5xl">✅</div>
            <h2 className="text-2xl font-bold">Request Submitted!</h2>
            <p className="text-muted-600 dark:text-muted-400">Thank you for your request. We'll review it and add the material if possible.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
