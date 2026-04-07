import SectionHeading from '@/components/shared/SectionHeading'

interface Doctor {
  initials: string
  name: string
  credentials: string
  quote: string
}

const doctors: Doctor[] = [
  {
    initials: 'LC',
    name: 'Lucas Chong',
    credentials: 'BSc (Hons) Chiropractic',
    quote:
      '\u201cIt brings me joy to see my community live a thriving life \u2014 empowering you to achieve what you set out to achieve, without being held back by poor health.\u201d',
  },
  {
    initials: 'RL',
    name: 'Ruth Lai',
    credentials: 'BSc (Hons) Chiropractic',
    quote:
      '\u201cI know what it feels like to grow up in pain and not understand why. Chiropractic gave me my life back \u2014 and now I get to do that for others. That never gets old.\u201d',
  },
]

export default function ChiropractorsIntro() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet Our Team"
          heading="The Hands Behind Your Healing"
          subheading="Our chiropractors bring decades of combined experience and a shared commitment to the Gonstead system of care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {doctors.map((doc) => (
            <div key={doc.name} className="flex flex-col items-center text-center">
              {/* Circular placeholder */}
              <div className="w-32 h-32 rounded-full bg-sage flex items-center justify-center mb-6 shadow-lg">
                <span
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {doc.initials}
                </span>
              </div>

              <h3
                className="text-2xl font-bold text-charcoal mb-1"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {doc.name}
              </h3>
              <p className="text-sm text-muted-green font-medium mb-4">
                {doc.credentials}
              </p>
              <blockquote
                className="italic text-lg text-charcoal/70 leading-relaxed max-w-sm"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {doc.quote}
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border-warm pt-10 text-center">
          <p className="text-muted-green max-w-2xl mx-auto leading-relaxed">
            Both practitioners are trained in the Gonstead technique — a highly specific, evidence-based method of chiropractic analysis and adjustment that focuses on identifying and correcting the underlying causes of spinal dysfunction for superior, long-lasting outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
