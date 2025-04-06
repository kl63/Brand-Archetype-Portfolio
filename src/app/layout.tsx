import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Build with Brilliance | Creative Portfolio',
  description: 'A platform for creatives and visionaries to showcase their story, connect through rich media, and spark new collaborations.',
  keywords: 'creative portfolio, design, brand storytelling, innovation, AI-powered',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {children}
      </body>
    </html>
  )
}
