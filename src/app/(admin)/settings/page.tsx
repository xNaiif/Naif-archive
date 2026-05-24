'use client'

import { motion } from 'framer-motion'
import { Save } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    appName: 'Naif Archive',
    description: 'Academic materials hub',
    maxFileSize: 100,
    maintenanceMode: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-600 dark:text-muted-400 mt-2">Configure system settings</p>
      </motion.div>

      {/* General Settings */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card p-6 space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4">General Settings</h2>

          <div className="space-y-4">
            {/* App Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Application Name</label>
              <input
                type="text"
                name="appName"
                value={settings.appName}
                onChange={handleChange}
                className="input-base"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={settings.description}
                onChange={handleChange}
                className="input-base h-24 resize-none"
              />
            </div>

            {/* Max File Size */}
            <div>
              <label className="block text-sm font-medium mb-1">Max File Size (MB)</label>
              <input
                type="number"
                name="maxFileSize"
                value={settings.maxFileSize}
                onChange={handleChange}
                className="input-base"
              />
            </div>

            {/* Maintenance Mode */}
            <div className="flex items-center gap-3 p-4 bg-muted-50 dark:bg-muted-800/50 rounded-lg">
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <div>
                <label className="font-medium">Maintenance Mode</label>
                <p className="text-sm text-muted-600 dark:text-muted-400">Disable access for regular users</p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button className="btn-primary inline-flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Settings
        </button>
      </motion.div>
    </div>
  )
}
