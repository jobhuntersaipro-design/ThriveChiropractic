import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import LocalBusinessJsonLd from '@/components/seo/LocalBusinessJsonLd'

const SITE_URL = 'https://www.thrivechiropractic.com.my'
const SITE_NAME = 'Thrive Gonstead Chiropractic'
const DEFAULT_DESCRIPTION =
  'Gonstead chiropractor in Bandar Rimbayu, Selangor. Precise spinal adjustments for back pain, neck pain, headaches, sciatica, disc issues, and posture. Book your consultation today.'
const OG_IMAGE = '/images/logo/thrive-logo-words.png'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chiropractor in Bandar Rimbayu, Selangor | Thrive Gonstead Chiropractic',
    template: '%s | Thrive Gonstead Chiropractic',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Chiropractor in Bandar Rimbayu, Selangor | Thrive Gonstead Chiropractic',
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 512,
        height: 512,
        alt: 'Thrive Gonstead Chiropractic logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Chiropractor in Bandar Rimbayu, Selangor | Thrive Gonstead Chiropractic',
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Mo5PpMvGlNO8Fhc_VP6zwece-Udw1lQGZCL64Dy1APg',
  },
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
    <html lang="en-MY">
      <body>
        {children}
        <LocalBusinessJsonLd />
        <Analytics />
      </body>
    </html>
  )
}
