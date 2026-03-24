import Link from 'next/link'
import { CheckCircle, CreditCard } from 'lucide-react'
import BookButton from '@/components/shared/BookButton'
import SectionHeading from '@/components/shared/SectionHeading'

const consultIncludes = [
  'Full spinal health history',
  'Postural and orthopaedic assessment',
  'Nervoscope instrumentation scan',
  'X-ray analysis (where indicated)',
  'Personalised care plan',
]

const firstTreatmentIncludes = [
  'First Gonstead adjustment',
  'Detailed findings report',
  'Personalised care plan review',
  'Home care recommendations',
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
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Pricing"
            heading="Simple, Transparent Pricing"
            subheading="No hidden fees. No confusing packages. Just straightforward, honest pricing for world-class chiropractic care."
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-14 sm:pb-20 md:pb-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Initial Consultation */}
            <div className="flex flex-col rounded-2xl border border-border-warm bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sage/40">
              <p className="text-sage text-sm font-semibold uppercase tracking-widest mb-2">
                Initial Consultation
              </p>
              <p
                className="text-5xl font-bold text-charcoal mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                RM 100
              </p>
              <p className="text-muted-green text-sm mb-6">First visit · Approx. 45 min</p>
              <ul className="space-y-3 flex-1">
                {consultIncludes.map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal transition-all duration-200 hover:translate-x-1 hover:text-sage">
                    <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <BookButton variant="outline" size="md" className="w-full text-center mt-8" />
            </div>

            {/* First Treatment */}
            <div className="flex flex-col rounded-2xl border border-border-warm bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sage/40">
              <p className="text-sage text-sm font-semibold uppercase tracking-widest mb-2">
                First Treatment
              </p>
              <p
                className="text-5xl font-bold text-charcoal mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                RM 200
              </p>
              <p className="text-muted-green text-sm mb-6">First adjustment · Approx. 30 min</p>
              <ul className="space-y-3 flex-1">
                {firstTreatmentIncludes.map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal transition-all duration-200 hover:translate-x-1 hover:text-sage">
                    <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <BookButton variant="outline" size="md" className="w-full text-center mt-8" />
            </div>

            {/* Follow-Up Treatment */}
            <div className="flex flex-col rounded-2xl border border-border-warm bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sage/40">
              <p className="text-charcoal text-sm font-semibold uppercase tracking-widest mb-2">
                Follow-Up Treatment
              </p>
              <p
                className="text-5xl font-bold text-charcoal mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                RM 160
              </p>
              <p className="text-muted-green text-sm mb-6">Subsequent visits · Approx. 30 min</p>
              <ul className="space-y-3 flex-1">
                {followUpIncludes.map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal transition-all duration-200 hover:translate-x-1 hover:text-sage">
                    <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <BookButton variant="outline" size="md" className="w-full text-center mt-8" />
            </div>
          </div>

          {/* Payment note */}
          <div className="mt-10 flex items-start gap-3 bg-warm-white border border-border-warm rounded-xl p-5 transition-all duration-300 hover:shadow-md hover:border-sage/30">
            <CreditCard className="w-5 h-5 text-sage shrink-0 mt-0.5" />
            <p className="text-sm text-muted-green leading-relaxed">
              <strong className="text-charcoal">Payment:</strong> We accept cash, credit/debit cards, and online bank transfer. Payment is due at the time of service. Corporate and insurance billing enquiries are welcome — please contact us via WhatsApp.
            </p>
          </div>

          {/* FAQ link */}
          <p className="text-center text-sm text-muted-green mt-8">
            Have more questions about pricing or what to expect?{' '}
            <Link href="/faq#pricing-booking" className="text-sage font-semibold hover:underline transition-colors duration-200 hover:text-charcoal">
              Read our FAQ →
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
