import Link from 'next/link'
import { CheckCircle, CreditCard } from 'lucide-react'
import BookButton from '@/components/shared/BookButton'
import SectionHeading from '@/components/shared/SectionHeading'

const initialIncludes = [
  'Full spinal health history',
  'Postural and orthopaedic assessment',
  'Nervoscope instrumentation scan',
  'X-ray analysis (where indicated)',
  'Personalised care plan',
  'First Gonstead adjustment',
]

const followUpIncludes = [
  'Gonstead spinal adjustment',
  'Progress reassessment',
  'Nervoscope scan',
  'Home care recommendations',
]

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Pricing"
            heading="Simple, Transparent Pricing"
            subheading="No hidden fees. No confusing packages. Just straightforward, honest pricing for world-class chiropractic care."
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Initial Consultation */}
            <div className="relative rounded-2xl border-2 border-sage bg-white p-8 shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most Recommended
              </span>
              <p className="text-sage text-sm font-semibold uppercase tracking-widest mb-2">
                Initial Consultation
              </p>
              <p
                className="text-5xl font-bold text-charcoal mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                RM 200
              </p>
              <p className="text-muted-green text-sm mb-6">First visit · Approx. 60 min</p>
              <ul className="space-y-3 mb-8">
                {initialIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                    <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <BookButton variant="primary" size="md" className="w-full text-center" />
            </div>

            {/* Follow-Up Session */}
            <div className="rounded-2xl border border-border-warm bg-white p-8">
              <p className="text-charcoal text-sm font-semibold uppercase tracking-widest mb-2">
                Follow-Up Session
              </p>
              <p
                className="text-5xl font-bold text-charcoal mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                RM 160
              </p>
              <p className="text-muted-green text-sm mb-6">Subsequent visits · Approx. 30 min</p>
              <ul className="space-y-3 mb-8">
                {followUpIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                    <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <BookButton variant="outline" size="md" className="w-full text-center" />
            </div>
          </div>

          {/* Payment note */}
          <div className="mt-10 flex items-start gap-3 bg-warm-white border border-border-warm rounded-xl p-5">
            <CreditCard className="w-5 h-5 text-sage shrink-0 mt-0.5" />
            <p className="text-sm text-muted-green leading-relaxed">
              <strong className="text-charcoal">Payment:</strong> We accept cash, credit/debit cards, and online bank transfer. Payment is due at the time of service. Corporate and insurance billing enquiries are welcome — please contact us via WhatsApp.
            </p>
          </div>

          {/* FAQ link */}
          <p className="text-center text-sm text-muted-green mt-8">
            Have more questions about pricing or what to expect?{' '}
            <Link href="/faq#pricing-booking" className="text-sage font-semibold hover:underline">
              Read our FAQ →
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
