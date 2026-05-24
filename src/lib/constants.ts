import { FileCategory, FileType } from './types'

// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// File Categories with Icons and Colors
export const FILE_CATEGORIES: Record<FileCategory, { label: string; color: string }> = {
  slides: { label: 'Slides', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' },
  assignments: { label: 'Assignments', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' },
  exams: { label: 'Exams', color: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' },
  notes: { label: 'Notes', color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
  textbooks: { label: 'Textbooks', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300' },
  solutions: { label: 'Solutions', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' },
  recordings: { label: 'Recordings', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' },
  syllabus: { label: 'Syllabus', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300' },
  other: { label: 'Other', color: 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300' },
}

// File Types
export const FILE_TYPES: Record<FileType, { label: string; icon: string }> = {
  pdf: { label: 'PDF', icon: '📄' },
  docx: { label: 'Word', icon: '📝' },
  pptx: { label: 'PowerPoint', icon: '🎯' },
  xlsx: { label: 'Excel', icon: '📊' },
  zip: { label: 'Compressed', icon: '📦' },
  video: { label: 'Video', icon: '🎥' },
  link: { label: 'Link', icon: '🔗' },
  other: { label: 'Other', icon: '📁' },
}

// Mock Data - Levels
export const MOCK_LEVELS = [
  {
    id: 'level-1',
    name: 'Level 1',
    number: 1,
    description: 'Foundation courses and basic concepts',
    courseCount: 8,
    totalFiles: 250,
  },
  {
    id: 'level-2',
    name: 'Level 2',
    number: 2,
    description: 'Intermediate courses building on fundamentals',
    courseCount: 10,
    totalFiles: 380,
  },
  {
    id: 'level-3',
    name: 'Level 3',
    number: 3,
    description: 'Advanced topics and specializations',
    courseCount: 12,
    totalFiles: 450,
  },
  {
    id: 'level-4',
    name: 'Level 4',
    number: 4,
    description: 'Senior level courses and capstone projects',
    courseCount: 9,
    totalFiles: 280,
  },
]

// Mock Data - Courses (sample for Level 1)
export const MOCK_COURSES = [
  {
    id: 'cs-101',
    levelId: 'level-1',
    code: 'CS 101',
    name: 'Introduction to Programming',
    description: 'Learn the fundamentals of programming with Python',
    instructor: 'Dr. Smith',
    credits: 3,
    fileCount: 45,
    downloadCount: 2340,
  },
  {
    id: 'math-101',
    levelId: 'level-1',
    code: 'MATH 101',
    name: 'Calculus I',
    description: 'Differential calculus and applications',
    instructor: 'Prof. Johnson',
    credits: 4,
    fileCount: 38,
    downloadCount: 1890,
  },
  {
    id: 'eng-101',
    levelId: 'level-1',
    code: 'ENG 101',
    name: 'English Composition',
    description: 'Academic writing and communication skills',
    instructor: 'Dr. Brown',
    credits: 3,
    fileCount: 28,
    downloadCount: 1230,
  },
  {
    id: 'phys-101',
    levelId: 'level-1',
    code: 'PHYS 101',
    name: 'Physics I',
    description: 'Mechanics and wave motion',
    instructor: 'Prof. Wilson',
    credits: 4,
    fileCount: 52,
    downloadCount: 2150,
  },
]

// Popular Files (Mock)
export const POPULAR_FILES = [
  {
    title: 'Week 1-5 Complete Slides',
    downloads: 345,
    course: 'CS 101',
    category: 'slides' as FileCategory,
  },
  {
    title: 'Final Exam Solutions',
    downloads: 289,
    course: 'MATH 101',
    category: 'solutions' as FileCategory,
  },
  {
    title: 'Programming Assignment Examples',
    downloads: 267,
    course: 'CS 101',
    category: 'assignments' as FileCategory,
  },
  {
    title: 'Lecture Notes Summary',
    downloads: 234,
    course: 'PHYS 101',
    category: 'notes' as FileCategory,
  },
]

// Sort Options
export const SORT_OPTIONS = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Downloaded' },
  { value: 'name', label: 'A - Z' },
]

// Request Status Options
export const REQUEST_STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-blue-100 text-blue-800' },
  { value: 'fulfilled', label: 'Fulfilled', color: 'bg-green-100 text-green-800' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-800' },
  { value: 'rejected', label: 'Rejected', color: 'bg-red-100 text-red-800' },
]

// Link Status Options
export const LINK_STATUS_OPTIONS = [
  { value: 'active', label: 'Active', color: 'bg-green-100 text-green-800' },
  { value: 'broken', label: 'Broken', color: 'bg-red-100 text-red-800' },
  { value: 'investigating', label: 'Investigating', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'fixed', label: 'Fixed', color: 'bg-blue-100 text-blue-800' },
]

// Navigation Items
export const MAIN_NAVIGATION = [
  { href: '/', label: 'Home' },
  { href: '/search', label: 'Search' },
  { href: '/request', label: 'Request' },
]

// Admin Navigation
export const ADMIN_NAVIGATION = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/content', label: 'Content', icon: '📁' },
  { href: '/admin/analytics', label: 'Analytics', icon: '📈' },
  { href: '/admin/requests', label: 'Requests', icon: '📥' },
  { href: '/admin/broken-links', label: 'Broken Links', icon: '🔗' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
]

// Pagination
export const ITEMS_PER_PAGE = 12
export const ADMIN_ITEMS_PER_PAGE = 20

// Animations
export const ANIMATIONS = {
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  slideIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
}

// Form Validation
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL_REGEX: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  MIN_PASSWORD_LENGTH: 8,
}

// Error Messages
export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_URL: 'Please enter a valid URL',
  REQUIRED_FIELD: 'This field is required',
  FILE_TOO_LARGE: 'File size must be less than 10MB',
  INVALID_FILE_TYPE: 'Invalid file type',
  SERVER_ERROR: 'An error occurred. Please try again.',
}

// Success Messages
export const SUCCESS_MESSAGES = {
  REQUEST_SUBMITTED: 'Request submitted successfully',
  LINK_REPORTED: 'Thank you for reporting. We will look into it.',
  FILE_UPLOADED: 'File uploaded successfully',
  CHANGES_SAVED: 'Changes saved successfully',
}
