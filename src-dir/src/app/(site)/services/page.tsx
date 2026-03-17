import Link from 'next/link'
import { Zap, Syringe, Ruler, Trophy, Heart, Baby } from 'lucide-react'
import BookButton from '@/components/shared/BookButton'
import SectionHeading from '@/components/shared/SectionHeading'

interface Service {
  icon: React.ReactNode
  name: string
  description: string
}

const services: Service[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    name: 'Chiropractic Adjustment',
    description:
      'Precise, specific spinal corrections using the Gonstead technique to restore proper alignment, relieve nerve pressure, and support your body&apos;s innate ability to heal.',
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    name: 'Dry Needling',
    description:
      'Targeted insertion of fine needles into myofascial trigger points to release muscle tension, reduce pain, and improve range of motion in combination with chiropractic care.',
  },
  {
    icon: <Ruler className="w-8 h-8" />,
    name: 'Postural Correction',
    description:
      'Structured programmes combining spinal adjustments, targeted exercises, and ergonomic advice to correct poor posture and prevent long-term structural deterioration.',
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    name: 'Sports Injury Rehabilitation',
    description:
      'Comprehensive recovery care for athletes — from acute injury management to performance enhancement — helping you return to sport faster and stronger.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    name: 'Pregnancy Chiropractic',
    description:
      'Gentle, safe chiropractic care tailored to expectant mothers at every trimester, helping manage pelvic pain, back discomfort, and preparing the body for birth.',
  },
  {
    icon: <Baby className="w-8 h-8" />,
    name: 'Paediatric Chiropractic',
    description:
      'Specialised, gentle techniques adapted for infants and children to support healthy development, address colic, feeding difficulties, and postural concerns.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Services"
            heading="What We Offer"
            subheading="Comprehensive chiropractic and allied health services designed to address the root causes of pain and support your long-term wellbeing."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="group bg-white rounded-2xl p-8 border border-border-warm hover:border-sage transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-sage mb-4 group-hover:text-sage-dark transition-colors">
                  {service.icon}
                </div>
                <h3
                  className="text-2xl font-bold text-charcoal mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-muted-green text-sm leading-relaxed mb-5"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                <Link
                  href="/chiropractic"
                  className="text-sage font-semibold text-sm hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-green mb-6 text-lg">
              Ready to experience the difference of Gonstead chiropractic care?
            </p>
            <BookButton size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
