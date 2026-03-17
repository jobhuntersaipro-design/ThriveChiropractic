'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import BookButton from '@/components/shared/BookButton'

interface Slide {
  condition: string
  description: string
  sub: string
  image: string
}

const slides: Slide[] = [
  {
    condition: 'Back Pain',
    description: 'Reclaim your life from chronic back pain',
    sub: 'Precise Gonstead adjustments targeting the root cause of your discomfort for lasting relief.',
    image: '/images/hero/back-pain.jpg',
  },
  {
    condition: 'Neck & Shoulder Pain',
    description: 'Resolve tension from modern lifestyle strain',
    sub: 'Desk work, screens, and stress take a toll. We restore natural alignment and relieve tension.',
    image: '/images/hero/neck-pain.jpg',
  },
  {
    condition: 'Headaches & Migraines',
    description: 'Find lasting relief through spinal correction',
    sub: 'Many headaches originate in the cervical spine. Address the source, not just the symptom.',
    image: '/images/hero/headaches.jpg',
  },
  {
    condition: 'Sciatica',
    description: 'Address the root cause, not just the symptoms',
    sub: 'Targeted care for sciatic nerve compression to reduce radiating pain down the leg.',
    image: '/images/hero/sciatica.jpg',
  },
  {
    condition: 'Disc Bulge / Herniation',
    description: 'Precise Gonstead adjustments for disc issues',
    sub: 'Careful, specific corrections to relieve nerve pressure and support disc recovery.',
    image: '/images/hero/disc.jpg',
  },
  {
    condition: 'Sports Injuries',
    description: 'Get back to peak performance faster',
    sub: 'From acute injuries to performance optimisation, we help athletes recover and excel.',
    image: '/images/hero/sports.jpg',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section
      className="relative overflow-hidden flex items-center pt-24 pb-20 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-live="polite"
      aria-label="Featured conditions carousel"
    >
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt=""
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-charcoal/70" />
        </motion.div>
      </AnimatePresence>

      {/* Slides */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 py-12 md:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="text-center"
          >
            <p className="uppercase text-gold text-xs font-semibold tracking-[0.2em] mb-3">
              Condition We Treat
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {slides[current].condition}
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-3 font-light italic"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {slides[current].description}
            </p>
            <p className="text-white/60 max-w-md mx-auto mb-8 text-sm leading-relaxed">
              {slides[current].sub}
            </p>
            <BookButton variant="gold" size="md" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prev}
        className="absolute z-10 left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute z-10 right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot navigation */}
      <div className="absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-7 h-2 bg-gold'
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
