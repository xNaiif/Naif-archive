'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Download, FileText } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const dashboardData = [
  { month: 'Jan', downloads: 400, views: 2400 },
  { month: 'Feb', downloads: 300, views: 1398 },
  { month: 'Mar', downloads: 200, views: 9800 },
  { month: 'Apr', downloads: 278, views: 3908 },
  { month: 'May', downloads: 189, views: 4800 },
  { month: 'Jun', downloads: 239, views: 3800 },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stats Cards */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-4 gap-6">
        {[
          { label: 'Total Downloads', value: '2,453', icon: Download, color: 'bg-blue-100 dark:bg-blue-900/30' },
          { label: 'Total Views', value: '12,456', icon: TrendingUp, color: 'bg-green-100 dark:bg-green-900/30' },
          { label: 'Files', value: '156', icon: FileText, color: 'bg-purple-100 dark:bg-purple-900/30' },
          { label: 'Users', value: '1,234', icon: BarChart3, color: 'bg-orange-100 dark:bg-orange-900/30' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-muted-800 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-600 dark:text-muted-400">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-2 gap-6">
        {/* Downloads Chart */}
        <div className="bg-white dark:bg-muted-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4">Downloads Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="month" stroke="rgba(0,0,0,0.5)" />
              <YAxis stroke="rgba(0,0,0,0.5)" />
              <Tooltip />
              <Area type="monotone" dataKey="downloads" stroke="#3b82f6" fill="#93c5fd" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Views Chart */}
        <div className="bg-white dark:bg-muted-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4">Views Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dashboardData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="month" stroke="rgba(0,0,0,0.5)" />
              <YAxis stroke="rgba(0,0,0,0.5)" />
              <Tooltip />
              <Bar dataKey="views" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-muted-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'New file uploaded', file: 'Week 5 Slides', time: '2 hours ago' },
            { action: 'File downloaded', file: 'Assignment 3.pdf', time: '4 hours ago' },
            { action: 'New user registered', file: 'ahmed@example.com', time: '1 day ago' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-muted-200 dark:border-muted-700 last:border-b-0">
              <div>
                <p className="font-medium">{item.action}</p>
                <p className="text-sm text-muted-600 dark:text-muted-400">{item.file}</p>
              </div>
              <p className="text-xs text-muted-500">{item.time}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
