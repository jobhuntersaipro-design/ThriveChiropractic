import Link from 'next/link'
import HeroSlider from '@/components/home/HeroSlider'
import ConditionsGrid from '@/components/home/ConditionsGrid'
import TreatmentRoadmap from '@/components/home/TreatmentRoadmap'
import GoogleReviews from '@/components/home/GoogleReviews'
import BookButton from '@/components/shared/BookButton'
import Image from 'next/image'
import { CheckCircle, Award, Clock, MapPin, Phone, Mail } from 'lucide-react'
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

      {/* Section B — Conditions Slider */}
      <ConditionsGrid />

      {/* Section C — Intro Strip */}
      <section className="py-14 sm:py-20 md:py-24 bg-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-gold text-xs sm:text-sm font-semibold tracking-widest mb-3 sm:mb-4">
            Thrive Gonstead Chiropractic
          </p>
          <h2
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Your Health. Our Purpose.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6 sm:mb-8" />
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            At Thrive Gonstead Chiropractic, we believe that great health is not the absence of pain — it&apos;s the freedom to live fully. Using the world-renowned Gonstead technique, we identify and correct the root causes of spinal dysfunction so you can thrive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <BookButton variant="gold" size="lg" className="w-full sm:w-auto" location="home-mission" />
            <Link
              href="/chiropractic"
              className="px-7 sm:px-9 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

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
                The Gonstead Approach
              </h2>
              <div className="w-16 h-px bg-gold mb-6 sm:mb-8" />
              <p className="text-muted-green leading-relaxed mb-8">
                The Gonstead System is considered the gold standard in chiropractic care. Developed by Dr. Clarence Gonstead over decades of research and practice, it uses five distinct criteria to precisely identify spinal subluxations and correct only those that truly need attention.
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
              <Image
                src="/media/Gonstead Logo.svg"
                alt="Gonstead System logo"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <h3
                className="text-3xl font-bold text-charcoal mb-4"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                The Gonstead System
              </h3>
              <p className="text-muted-green leading-relaxed">
                Six criteria: History Taking, Visualisation, Instrumentation, Static Palpation, Motion Palpation, and X-Ray Analysis — for the most thorough assessment in chiropractic.
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

      {/* Section F — Google Reviews */}
      <GoogleReviews />

      {/* Section G — CTA Banner */}
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
          <BookButton variant="gold" size="lg" className="w-full sm:w-auto" location="home-cta" />
        </div>
      </section>

      {/* Section G — Location & Contact */}
      <section id="find-us" className="py-14 sm:py-20 md:py-24 bg-cream scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <SectionHeading
              eyebrow="Find Us"
              heading="Location & Contact"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left column — Contact details */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Address */}
              <a
                href="https://maps.app.goo.gl/Kuy31p4jtpyjbtKe7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-border-warm hover:border-sage/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Our Location</h3>
                    <p className="text-muted-green text-sm leading-relaxed">
                      C-G-06, Se Ruang Square, 8/3,<br />
                      Persiaran Eco Sanctuary, Bandar Rimbayu,<br />
                      42500 Telok Panglima Garang, Selangor
                    </p>
                    <p className="text-sage text-sm font-medium mt-2 group-hover:underline">
                      View on Google Maps &rarr;
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+60178688789"
                className="bg-white rounded-2xl p-6 border border-border-warm hover:border-sage/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-muted-green text-sm">+60 17-868 8789</p>
                    <p className="text-sage text-sm font-medium mt-2 group-hover:underline">
                      Call now &rarr;
                    </p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:thrivegonsteadchiropractic@gmail.com"
                className="bg-white rounded-2xl p-6 border border-border-warm hover:border-sage/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-muted-green text-sm break-all">thrivegonsteadchiropractic@gmail.com</p>
                    <p className="text-sage text-sm font-medium mt-2 group-hover:underline">
                      Send an email &rarr;
                    </p>
                  </div>
                </div>
              </a>

              {/* Opening Hours */}
              <div className="bg-white rounded-2xl p-6 border border-border-warm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Opening Hours</h3>
                    <div className="text-muted-green text-sm leading-relaxed space-y-1">
                      <div className="flex justify-between gap-6">
                        <span>Tuesday – Thursday</span>
                        <span className="font-medium text-charcoal">10am – 8pm</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Friday – Sunday</span>
                        <span className="font-medium text-charcoal">10am – 6pm</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Monday</span>
                        <span className="font-medium text-charcoal/50">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column — Google Map */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden border border-border-warm flex-1 min-h-[350px] sm:min-h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5!2d101.5448643!3d2.9473265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb1010cae254b%3A0xd1865c2a54958996!2sThrive%20Gonstead%20Chiropractic%20%40%20Rimbayu!5e0!3m2!1sen!2smy!4v1"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[350px] sm:min-h-[450px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thrive Gonstead Chiropractic @ Rimbayu location"
                />
              </div>
              <div className="text-center">
                <BookButton size="lg" location="home-find-us" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
