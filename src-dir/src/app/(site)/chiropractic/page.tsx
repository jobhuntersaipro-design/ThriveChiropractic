import Image from 'next/image'
import { CheckCircle, Eye, Activity, FileText, Hand, BarChart2, ShieldCheck } from 'lucide-react'
import BookButton from '@/components/shared/BookButton'
import SectionHeading from '@/components/shared/SectionHeading'

const gonsteadFeatures = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Visualisation',
    description: 'Trained observation of posture, gait, and spinal movement patterns.',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Instrumentation',
    description: 'The Nervoscope detects temperature differentials indicating nerve irritation.',
  },
  {
    icon: <Hand className="w-6 h-6" />,
    title: 'Static Palpation',
    description: 'Manual assessment of the spine to identify swelling, tenderness, and abnormalities.',
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Motion Palpation',
    description: 'Evaluating spinal joint movement to identify restricted segments.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'X-Ray Analysis',
    description: 'Full-spine X-rays to confirm findings and guide precise adjustments.',
  },
]

const xrayReasons = [
  {
    number: '01',
    title: 'Accuracy',
    description:
      'X-rays reveal the exact position, angle, and condition of each vertebra — information that cannot be obtained through touch alone.',
  },
  {
    number: '02',
    title: 'Safety',
    description:
      'Knowing the precise anatomy ensures adjustments are performed with the appropriate direction and force, minimising risk.',
  },
  {
    number: '03',
    title: 'Progress Tracking',
    description:
      'Comparative X-rays over time demonstrate measurable structural improvements and validate the effectiveness of care.',
  },
]

const faqItems = [
  {
    q: 'Is chiropractic care safe?',
    a: 'Yes. Chiropractic is one of the safest, drug-free healthcare professions. Our chiropractors undergo extensive training and use precise, controlled techniques.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This varies by individual. After your initial assessment we provide a personalised care plan with realistic expectations for your condition.',
  },
  {
    q: 'Does chiropractic hurt?',
    a: 'Most patients experience immediate relief. Some may feel mild soreness for 24–48 hours after an adjustment, similar to post-exercise muscle soreness.',
  },
]

export default function ChiropracticPage() {
  return (
    <>
      {/* Section 1 — What is Chiropractic */}
      <section
        id="what-is-chiropractic"
        className="pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24 bg-gradient-to-b from-sage to-sage-dark"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="uppercase text-white/70 text-sm font-semibold tracking-widest mb-4">
            Understanding Chiropractic
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            What is Chiropractic Care?
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-white/80 text-lg leading-relaxed">
            Chiropractic is more than just back pain relief. It is a comprehensive approach to health that focuses on the relationship between your brain and body via your spine and nervous system.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-left">
          <h3
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Benefits
          </h3>
          <div className="space-y-6">
            {[
              {
                title: 'You are not adjusted unnecessarily',
                description: 'Joints that are functioning normally are not manipulated. This matters more than it sounds — unnecessary joint movement can create instability over time, which compounds rather than resolves the original problem.',
              },
              {
                title: 'Your progress is trackable',
                description: 'Because the assessment is systematic and X-ray based, changes can be measured objectively across visits. You are not relying on feel alone to know whether things are improving.',
              },
              {
                title: 'The adjustment is case-specific',
                description: 'The force, direction, and contact point of every Gonstead adjustment are determined by your X-rays and examination findings, not by a general protocol. Two patients with lower back pain may receive entirely different corrections.',
              },
              {
                title: 'It works across a wide range of conditions',
                description: 'The Gonstead method addresses both spinal and extremity complaints — shoulders, knees, hips, ankles — not just the spine. The same analytical rigour applies regardless of what structure is involved.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-14">
          <blockquote className="border-l-4 border-gold pl-6 py-2">
            <p
              className="text-2xl italic text-white/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              &ldquo;The power that made the body heals the body. It happens no other way.&rdquo;
            </p>
            <footer className="mt-3 text-white/60 text-sm">— B.J. Palmer, Developer of Chiropractic</footer>
          </blockquote>
        </div>

        {/* Icon grid */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: 'Drug-free', icon: <ShieldCheck className="w-6 h-6" /> },
            { label: 'Non-invasive', icon: <Hand className="w-6 h-6" /> },
            { label: 'Evidence-based', icon: <FileText className="w-6 h-6" /> },
            { label: 'Holistic', icon: <CheckCircle className="w-6 h-6" /> },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center bg-white/10 rounded-2xl p-6"
            >
              <div className="text-gold mb-3">{item.icon}</div>
              <span className="text-white font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — Gonstead */}
      <section id="gonstead" className="py-14 sm:py-20 md:py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="uppercase text-gold text-sm font-semibold tracking-widest mb-3">
              Our Technique
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              The Gonstead System
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-4 mb-6" />
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Developed by Dr. Clarence Gonstead in the 1920s and refined over 55 years of clinical practice, the Gonstead System is widely regarded as the most thorough and specific chiropractic technique in the world.
            </p>
          </div>

          {/* 3-column feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {gonsteadFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/40 transition-colors"
              >
                <div className="text-gold mb-3">{feature.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="text-center">
            <h3
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Benefits of the Gonstead Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {['Highly specific & targeted', 'Minimises unnecessary adjustments', 'Superior long-term outcomes'].map((b) => (
                <div key={b} className="flex items-center gap-2 bg-white/5 rounded-xl px-5 py-3">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-white/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — X-Ray */}
      <section id="xray" className="py-14 sm:py-20 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Diagnostic Precision"
            heading="Seeing the Full Picture"
            subheading="X-ray analysis is a cornerstone of the Gonstead System, providing objective data that guides every adjustment we make."
          />

          <div className="rounded-2xl overflow-hidden mb-12 mt-8">
            <Image
              src="/media/seeing_the_full_picture.jpg"
              alt="Seeing the full picture — X-ray analysis at Thrive Gonstead Chiropractic"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {xrayReasons.map((reason) => (
                <div key={reason.number} className="flex gap-5">
                  <span
                    className="text-4xl font-bold text-sage/20 shrink-0"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                  >
                    {reason.number}
                  </span>
                  <div>
                    <h3
                      className="text-xl font-bold text-charcoal mb-2"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {reason.title}
                    </h3>
                    <p className="text-muted-green leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {/* FAQ strip */}
              <h3
                className="text-2xl font-bold text-charcoal mb-4"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                Common Questions
              </h3>
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="border border-border-warm rounded-xl p-5 bg-white"
                >
                  <p className="font-semibold text-charcoal mb-2">{item.q}</p>
                  <p className="text-muted-green text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}

            </div>
          </div>

          <div className="text-center mt-16">
            <BookButton size="lg" location="chiropractic" />
          </div>
        </div>
      </section>
    </>
  )
}
