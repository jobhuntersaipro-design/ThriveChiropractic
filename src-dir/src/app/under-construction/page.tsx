'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function FloatingLeaf({ delay, x, size, duration }: { delay: number; x: string; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: '-5%' }}
      animate={{
        y: ['0vh', '105vh'],
        x: [0, Math.random() > 0.5 ? 30 : -30, Math.random() > 0.5 ? -20 : 20, 0],
        rotate: [0, 45, -30, 60, 0],
        opacity: [0, 0.15, 0.15, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg width={size} height={size * 1.6} viewBox="0 0 24 38" fill="none">
        <path
          d="M12 0C12 0 24 12 24 24C24 32 18.627 38 12 38C5.373 38 0 32 0 24C0 12 12 0 12 0Z"
          fill="currentColor"
          className="text-sage/20"
        />
        <path
          d="M12 6V34M12 14L7 10M12 20L17 16M12 26L8 23"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-sage/30"
        />
      </svg>
    </motion.div>
  )
}

function GoldRing({ delay, scale }: { delay: number; scale: number }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
      style={{ width: scale, height: scale }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.08, 0.2, 0.08],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default function UnderConstructionPage() {
  return (
    <div className="relative min-h-screen bg-cream overflow-hidden flex items-center justify-center">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-warm-white)_0%,_var(--color-cream)_70%)]" />

      {/* Animated gold rings */}
      <GoldRing delay={0} scale={300} />
      <GoldRing delay={2} scale={500} />
      <GoldRing delay={4} scale={700} />

      {/* Floating leaves */}
      <FloatingLeaf delay={0} x="10%" size={18} duration={14} />
      <FloatingLeaf delay={3} x="30%" size={14} duration={18} />
      <FloatingLeaf delay={6} x="55%" size={20} duration={16} />
      <FloatingLeaf delay={9} x="75%" size={16} duration={20} />
      <FloatingLeaf delay={12} x="90%" size={12} duration={15} />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Decorative top line */}
        <motion.div
          className="mx-auto mb-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          style={{ width: 120 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        />

        {/* Logo / Brand name */}
        <motion.h1
          className="font-display text-5xl md:text-7xl text-charcoal tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Thrive
        </motion.h1>

        <motion.p
          className="font-display text-lg md:text-xl text-gold tracking-[0.3em] uppercase mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        >
          Gonstead Chiropractic
        </motion.p>

        {/* Breathing dot divider */}
        <motion.div
          className="mx-auto my-10 w-1.5 h-1.5 rounded-full bg-gold"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main message */}
        <motion.p
          className="font-sans text-base md:text-lg text-slate-green/80 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        >
          We&apos;re crafting something beautiful.
          <br />
          <span className="text-muted-green">Our new home is coming soon.</span>
        </motion.p>

        {/* Decorative bottom line */}
        <motion.div
          className="mx-auto mt-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          style={{ width: 80 }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: 'easeOut' }}
        />

        {/* Admin link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Link
            href="/login"
            className="inline-block mt-12 text-xs text-muted-green/40 hover:text-gold/60 transition-colors duration-500 tracking-widest uppercase"
          >
            Admin Access
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
