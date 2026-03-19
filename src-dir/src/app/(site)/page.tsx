import Link from 'next/link'
import HeroSlider from '@/components/home/HeroSlider'
import ConditionsGrid from '@/components/home/ConditionsGrid'
import TreatmentRoadmap from '@/components/home/TreatmentRoadmap'
import BookButton from '@/components/shared/BookButton'
import { CheckCircle, Award, Clock, MapPin, Phone } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

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
      <section className="py-14 sm:py-20 md:py-24 bg-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-gold text-xs sm:text-sm font-semibold tracking-widest mb-3 sm:mb-4">
            Thrive Chiropractic
          </p>
          <h2
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Your Health. Our Purpose.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6 sm:mb-8" />
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            At Thrive Chiropractic, we believe that great health is not the absence of pain — it&apos;s the freedom to live fully. Using the world-renowned Gonstead technique, we identify and correct the root causes of spinal dysfunction so you can thrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <BookButton variant="gold" size="lg" className="w-full sm:w-auto" />
            <Link
              href="/chiropractic"
              className="px-7 sm:px-9 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto text-center"
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
      <section className="py-14 sm:py-20 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="uppercase text-gold text-xs sm:text-sm font-semibold tracking-widest mb-3 sm:mb-4">
                Our Method
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4 sm:mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Why Gonstead?
              </h2>
              <div className="w-16 h-px bg-gold mb-6 sm:mb-8" />
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
            <div className="rounded-2xl sm:rounded-3xl bg-sage/10 border border-border-warm p-6 sm:p-10 text-center">
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
      <section className="py-14 sm:py-20 md:py-24 bg-sage text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-white/70 text-xs sm:text-sm font-semibold tracking-widest mb-3 sm:mb-4">
            Take the first step
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            Join hundreds of patients who have found lasting relief and renewed vitality through Gonstead chiropractic care at Thrive.
          </p>
          <BookButton variant="gold" size="lg" className="w-full sm:w-auto" />
        </div>
      </section>

      {/* Section G — Location & Contact */}
      <section className="py-14 sm:py-20 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            eyebrow="Find Us"
            heading="Location & Contact"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <a
              href="https://maps.app.goo.gl/Kuy31p4jtpyjbtKe7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-5 sm:p-8 border border-border-warm flex flex-col items-center text-center hover:border-sage/40 transition-colors"
            >
              <MapPin className="w-6 h-6 text-sage mb-3" />
              <h3 className="font-semibold text-charcoal mb-2 text-sm sm:text-base">
                Thrive Gonstead Chiropractic @ Rimbayu
              </h3>
              <p className="text-sage text-sm font-medium mt-1">View on Google Maps &rarr;</p>
            </a>
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-border-warm flex flex-col items-center text-center">
              <Phone className="w-6 h-6 text-sage mb-3" />
              <h3 className="font-semibold text-charcoal mb-2">Opening Hours</h3>
              <div className="text-muted-green text-base leading-relaxed space-y-1">
                <p>Tuesday – Thursday: 10am – 8pm</p>
                <p>Friday – Sunday: 10am – 6pm</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-border-warm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5!2d101.5448643!3d2.9473265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb1010cae254b%3A0xd1865c2a54958996!2sThrive%20Gonstead%20Chiropractic%20%40%20Rimbayu!5e0!3m2!1sen!2smy!4v1"
              width="100%"
              height="250"
              className="w-full h-[250px] sm:h-[350px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thrive Gonstead Chiropractic @ Rimbayu location"
            />
          </div>

          <div className="mt-10">
            <BookButton size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
