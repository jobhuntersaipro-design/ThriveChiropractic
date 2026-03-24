import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thrive Gonstead Chiropractic',
  description:
    'Thrive Gonstead Chiropractic offers expert Gonstead chiropractic care for back pain, neck pain, headaches, sciatica, disc issues, and more. Book your appointment today.',
  keywords: [
    'Gonstead chiropractor',
    'chiropractic care',
    'back pain relief',
    'neck pain',
    'sciatica treatment',
    'Thrive Gonstead Chiropractic',
  ],
  icons: {
    icon: [
      { url: '/images/showcase/favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/showcase/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/showcase/favicon.png', sizes: '180x180', type: 'image/png' },
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
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased bg-cream text-charcoal`}
      >
        {children}
      </body>
    </html>
  )
}
