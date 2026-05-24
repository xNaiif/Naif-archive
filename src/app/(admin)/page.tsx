'use client'

import { motion } from 'framer-motion'
import { TrendingUp, FileText, AlertCircle, Users } from 'lucide-react'

export default function AdminPage() {
  const stats = [
    { label: 'Total Materials', value: '1,234', icon: FileText, color: 'bg-blue-100 dark:bg-blue-900/30' },
    { label: 'Downloads', value: '45.2K', icon: TrendingUp, color: 'bg-green-100 dark:bg-green-900/30' },
    { label: 'Broken Links', value: '12', icon: AlertCircle, color: 'bg-red-100 dark:bg-red-900/30' },
    { label: 'Active Users', value: '2,345', icon: Users, color: 'bg-purple-100 dark:bg-purple-900/30' },
  ]

  const recentActivity = [
    { id: 1, action: 'New material uploaded', material: 'Week 1-5 Slides', time: '2 hours ago' },
    { id: 2, action: 'Material request approved', material: 'Quantum Physics Notes', time: '4 hours ago' },
    { id: 3, action: 'Broken link reported', material: 'Final Exam PDF', time: '6 hours ago' },
    { id: 4, action: 'New user registered', material: 'Ahmed Al-Rashid', time: '1 day ago' },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-600 dark:text-muted-400 mt-2">Welcome back! Here's what's happening today.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 space-y-3"
            >
              <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                <Icon className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-muted-600 dark:text-muted-400">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Recent Activity */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-3 hover:bg-muted-50 dark:hover:bg-muted-800/50 rounded-lg"
            >
              <div className="h-10 w-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full" />
              <div className="flex-1">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-muted-600 dark:text-muted-400">{activity.material}</p>
              </div>
              <p className="text-xs text-muted-500">{activity.time}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
