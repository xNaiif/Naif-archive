import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naif Archive - Academic Materials Hub',
  description: 'Your comprehensive resource for organizing and accessing academic materials across all levels and courses.',
  keywords: ['archive', 'academic', 'materials', 'courses', 'learning'],
  authors: [{ name: 'Naif Alotaibi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://naif-archive.vercel.app',
    siteName: 'Naif Archive',
    title: 'Naif Archive - Academic Materials Hub',
    description: 'Your comprehensive resource for organizing and accessing academic materials across all levels and courses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naif Archive - Academic Materials Hub',
    description: 'Your comprehensive resource for organizing and accessing academic materials across all levels and courses.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white dark:bg-muted-900">
          {children}
        </div>

        {/* Toast Container */}
        <div id="toast-container" className="fixed bottom-4 right-4 z-50 space-y-2" />

        {/* Modal Root */}
        <div id="modal-root" />
      </body>
    </html>
  )
}
