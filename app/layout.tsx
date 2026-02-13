import React from "react"
import type { Metadata, Viewport } from "next"
import { Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './global.css'

const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });

/** iPhone 12 (390×844) に最適化 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  title: 'CYBER_STUDENT // ポートフォリオ',
  description: 'サイバーパンク風学生ポートフォリオ - RPGスタイルのステータスと実績',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} font-sans antialiased min-h-screen bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
