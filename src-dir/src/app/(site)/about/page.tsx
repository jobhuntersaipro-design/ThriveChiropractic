import { Heart, Target, Award, Users, MapPin, Phone } from 'lucide-react'
import BookButton from '@/components/shared/BookButton'
import SectionHeading from '@/components/shared/SectionHeading'

const missionPoints = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Precision Care',
    description:
      'We use the Gonstead System — the most specific chiropractic technique available — to ensure every adjustment is exactly where it needs to be.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Patient-First',
    description:
      'From the moment you walk in, every decision is guided by what is best for your long-term health, not a one-size-fits-all protocol.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Clinical Excellence',
    description:
      'Our practitioners pursue ongoing education and hold advanced certifications to maintain the highest standard of care.',
  },
]

const values = [
  { title: 'Integrity', description: 'We are honest about what chiropractic can and cannot do. We never recommend care you do not need.' },
  { title: 'Specificity', description: 'Every adjustment is based on objective data — never guesswork.' },
  { title: 'Education', description: 'We empower patients to understand their own health and take ownership of their wellness journey.' },
  { title: 'Compassion', description: 'Pain is personal. We listen, we care, and we treat every patient as an individual.' },
  { title: 'Growth', description: 'We continuously invest in education, technology, and processes to deliver better outcomes.' },
]

const teamMembers = [
  {
    initials: 'DL',
    name: 'Dr. Lucas',
    role: 'Principal Chiropractor',
    credentials: 'B.Chiro, Cert. Gonstead (USA)',
    bio: 'Dr. Lucas graduated with distinction and completed advanced Gonstead training at the Gonstead Clinical Studies Society in the USA. He has over 10 years of clinical experience treating patients across all age groups, from newborns to seniors. His passion lies in identifying the root cause of spinal dysfunction and delivering precise, lasting corrections.',
    quote:
      '"Every spine tells a story. My job is to listen, understand, and help write the next chapter — one free from pain."',
  },
  {
    initials: 'DR',
    name: 'Dr. Ruth',
    role: 'Associate Chiropractor',
    credentials: 'B.Chiro (Hons), M.ClinChiro',
    bio: 'Dr. Ruth specialises in pregnancy and paediatric chiropractic care. She holds a Masters in Clinical Chiropractic and is passionate about supporting families through every stage of life. Her gentle, patient-centred approach has helped hundreds of mothers and children achieve better health outcomes.',
    quote:
      '"True healing begins when we address the cause, not just the symptom. That is the foundation of everything we do here."',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-sage to-sage-dark text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-white/70 text-sm font-semibold tracking-widest mb-4">
            Our Story
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            About Thrive Chiropractic
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-white/80 text-lg leading-relaxed">
            Born from a belief that everyone deserves to live without pain and with the freedom to do what they love.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Story"
            heading="Where It All Began"
          />
          <div className="prose prose-lg max-w-none text-muted-green space-y-5">
            <p>
              Thrive Chiropractic was founded on a simple premise: that great chiropractic care — the kind that actually changes lives — should be accessible to everyone. Too many people live with chronic pain, accepting it as an inevitable part of modern life. We knew it did not have to be that way.
            </p>
            <p>
              Our founders, Dr. Lucas and Dr. Ruth, both experienced firsthand the profound impact that precise, Gonstead chiropractic care can have. After years of study and clinical practice across multiple countries, they came together to build the kind of practice they had always wanted to be patients of — one defined by clinical rigour, genuine care, and lasting results.
            </p>
            <p>
              Since opening our doors, we have helped hundreds of patients — from desk workers and athletes to newborns and seniors — reclaim their health and discover what it truly feels like to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-sage/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Mission"
            heading="Why We Do What We Do"
            subheading="We are on a mission to raise the standard of chiropractic care and help people live healthier, freer lives."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-8 border border-border-warm text-center"
              >
                <div className="text-sage mb-4 flex justify-center">{point.icon}</div>
                <h3
                  className="text-xl font-bold text-charcoal mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {point.title}
                </h3>
                <p className="text-muted-green text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Team"
            heading="Meet Our Practitioners"
            subheading="Our chiropractors bring decades of combined experience and a shared commitment to the Gonstead system of care."
          />
          <div className="space-y-16">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 items-start"
              >
                {/* Portrait placeholder */}
                <div className="flex flex-col items-center text-center md:sticky md:top-28">
                  <div className="w-40 h-40 rounded-full bg-sage flex items-center justify-center shadow-lg mb-4">
                    <span
                      className="text-4xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-charcoal"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sage text-sm font-medium">{member.role}</p>
                  <p className="text-muted-green text-xs mt-1">{member.credentials}</p>
                </div>

                {/* Bio & quote */}
                <div>
                  <p className="text-muted-green leading-relaxed text-lg mb-8">
                    {member.bio}
                  </p>
                  <blockquote className="border-l-4 border-gold pl-6 py-2">
                    <p
                      className="italic text-xl text-charcoal/70 leading-relaxed"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {member.quote}
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Gonstead note */}
          <div className="mt-20 text-center">
            <SectionHeading
              eyebrow="Our Method"
              heading="United by Gonstead"
            />
            <p className="text-muted-green leading-relaxed mb-10">
              Both practitioners are trained in the Gonstead technique — a highly specific, evidence-based method of chiropractic analysis and adjustment that focuses on identifying and correcting the underlying causes of spinal dysfunction for superior, long-lasting outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="uppercase text-gold text-sm font-semibold tracking-widest mb-3">
              What We Stand For
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Our Values
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-5 bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <Users className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 bg-cream">
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
              className="bg-white rounded-2xl p-8 border border-border-warm flex flex-col items-center text-center hover:border-sage/40 transition-colors"
            >
              <MapPin className="w-6 h-6 text-sage mb-3" />
              <h3 className="font-semibold text-charcoal mb-2">
                Thrive Gonstead Chiropractic @ Rimbayu
              </h3>
              <p className="text-sage text-xs font-medium mt-1">View on Google Maps &rarr;</p>
            </a>
            <div className="bg-white rounded-2xl p-8 border border-border-warm flex flex-col items-center text-center">
              <Phone className="w-6 h-6 text-sage mb-3" />
              <h3 className="font-semibold text-charcoal mb-2">Opening Hours</h3>
              <div className="text-muted-green text-sm leading-relaxed space-y-1">
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
              height="350"
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
