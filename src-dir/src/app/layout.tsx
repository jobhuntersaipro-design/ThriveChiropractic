import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Thrive Gonstead Chiropractic @ Rimbayu',
  description:
    'Thrive Gonstead Chiropractic offers expert Gonstead chiropractic care for back pain, neck pain, headaches, sciatica, disc issues, and more. Book your appointment today.',
  keywords: [
    'Gonstead chiropractor',
    'chiropractic care',
    'back pain relief',
    'neck pain',
    'sciatica treatment',
    'Thrive Gonstead Chiropractic',
    'Rimbayu chiropractor',
  ],
  icons: {
    icon: [
      { url: '/images/showcase/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/images/showcase/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/showcase/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/showcase/favicon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
