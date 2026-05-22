import type { Metadata } from 'next'
import ConditionsGrid from '@/components/home/ConditionsGrid'

export const metadata: Metadata = {
  title: 'Chiropractic Services & Conditions Treated',
  description:
    'Gonstead chiropractic care for back pain, neck pain, headaches, sciatica, disc issues, sports injuries, posture, scoliosis, pregnancy, and paediatric care in Bandar Rimbayu, Selangor.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Chiropractic Services & Conditions Treated',
    description:
      'Gonstead chiropractic care for back pain, neck pain, headaches, sciatica, disc issues, and more in Bandar Rimbayu, Selangor.',
    url: '/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-0 bg-cream text-center">
      </section>

      {/* Conditions Grid */}
      <ConditionsGrid />
    </>
  )
}
