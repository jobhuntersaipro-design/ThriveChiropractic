import Link from 'next/link'
import HeroSlider from '@/components/home/HeroSlider'
import ConditionsGrid from '@/components/home/ConditionsGrid'
import TreatmentRoadmap from '@/components/home/TreatmentRoadmap'
import BookButton from '@/components/shared/BookButton'
import { CheckCircle, Award, Clock } from 'lucide-react'

const gonsteadPoints = [
  {
    icon: <CheckCircle className="w-5 h-5 text-gold" />,
    text: 'Specific, targeted adjustments — no generalised "cracking"',
  },
  {
    icon: <Award className="w-5 h-5 text-gold" />,
    text: 'Evidence-based analysis using X-ray, palpation, and instrumentation',
  },
  {
    icon: <Clock className="w-5 h-5 text-gold" />,
    text: 'Proven 70-year track record with outstanding patient outcomes',
  },
]

export default function Home() {
  return (
    <>
      {/* Section A — Hero Slider */}
      <HeroSlider />

      {/* Section B — Intro Strip */}
      <section className="py-24 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-gold text-sm font-semibold tracking-widest mb-4">
            Thrive Chiropractic
          </p>
          <h2
            className="text-5xl sm:text-6xl font-bold text-charcoal leading-tight mb-6"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '56px' }}
          >
            Your Health. Our Purpose.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-muted-green text-lg leading-relaxed mb-10">
            At Thrive Chiropractic, we believe that great health is not the absence of pain — it&apos;s the freedom to live fully. Using the world-renowned Gonstead technique, we identify and correct the root causes of spinal dysfunction so you can thrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookButton size="lg" />
            <Link
              href="/chiropractic"
              className="px-9 py-4 rounded-full border-2 border-sage text-sage font-semibold text-lg hover:bg-sage hover:text-white transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Section C — Conditions Slider */}
      <ConditionsGrid />

      {/* Section D — Treatment Roadmap */}
      <TreatmentRoadmap />

      {/* Section E — Gonstead Highlight Strip */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase text-gold text-sm font-semibold tracking-widest mb-4">
                Our Method
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Why Gonstead?
              </h2>
              <div className="w-16 h-px bg-gold mb-8" />
              <p className="text-muted-green leading-relaxed mb-8">
                The Gonstead System is considered the gold standard in chiropractic care. Developed by Dr. Clarence Gonstead over decades of research and practice, it uses five distinct criteria to precisely identify spinal misalignments — and correct only those that truly need attention.
              </p>
              <ul className="space-y-4">
                {gonsteadPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {point.icon}
                    <span className="text-charcoal">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-sage/10 border border-border-warm p-10 text-center">
              <span
                className="text-8xl font-bold text-sage/20 block mb-4"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                G
              </span>
              <h3
                className="text-3xl font-bold text-charcoal mb-4"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                The Gonstead System
              </h3>
              <p className="text-muted-green leading-relaxed">
                Five criteria: Visualisation, Instrumentation, Static Palpation, Motion Palpation, and X-Ray Analysis — for the most thorough assessment in chiropractic.
              </p>
              <Link
                href="/chiropractic#gonstead"
                className="inline-block mt-6 text-sage font-semibold hover:underline"
              >
                Learn more about Gonstead →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section F — CTA Banner */}
      <section className="py-24 bg-sage text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-white/70 text-sm font-semibold tracking-widest mb-4">
            Take the first step
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Join hundreds of patients who have found lasting relief and renewed vitality through Gonstead chiropractic care at Thrive.
          </p>
          <BookButton variant="gold" size="lg" />
        </div>
      </section>
    </>
  )
}
