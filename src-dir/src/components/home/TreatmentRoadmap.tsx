'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, ScanLine, Zap, Heart } from 'lucide-react'
import BookButton from '@/components/shared/BookButton'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We take a thorough health history and listen to understand your unique situation and goals.',
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Diagnosis & X-Ray',
    description:
      'Detailed spinal analysis including X-rays to pinpoint the exact source of dysfunction.',
    icon: <ScanLine className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Gonstead Adjustment',
    description:
      'Precise, specific chiropractic corrections targeting only the vertebrae that need attention.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    number: '04',
    title: 'Maintenance & Wellness',
    description:
      'Ongoing care and lifestyle guidance to sustain your results and keep you thriving.',
    icon: <Heart className="w-6 h-6" />,
  },
]

export default function TreatmentRoadmap() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-charcoal overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="uppercase text-gold text-sm font-semibold tracking-widest mb-3">
            The Process
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Your Journey to Better Health
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>

        <div ref={ref} className="relative">
          {/* Horizontal connecting line — desktop only */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-white/10">
            <motion.div
              className="h-full bg-gold origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center md:items-center"
              >
                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center bg-charcoal text-gold mb-6 relative z-10">
                  {step.icon}
                </div>
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
                  {step.number}
                </span>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Vertical connector line — mobile only */}
                {i < steps.length - 1 && (
                  <div className="md:hidden w-px h-10 bg-gold/30 mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <BookButton variant="gold" size="lg" />
        </div>
      </div>
    </section>
  )
}
