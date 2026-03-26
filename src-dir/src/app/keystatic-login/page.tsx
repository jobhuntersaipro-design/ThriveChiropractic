'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function KeystaticLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/keystatic-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (res.ok) {
        router.push('/keystatic')
        router.refresh()
      } else {
        setError('Invalid username or password')
      }
    } catch {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-cream flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-warm-white)_0%,_var(--color-cream)_70%)]" />

      <motion.div
        className="relative z-10 w-full max-w-sm px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl text-charcoal tracking-tight">Thrive</h1>
          <p className="font-display text-sm text-gold tracking-[0.25em] uppercase mt-1">
            Blog Admin
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-3 bg-warm-white border border-border-warm rounded-lg text-charcoal placeholder:text-muted-green/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all duration-300 text-sm"
              autoFocus
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 bg-warm-white border border-border-warm rounded-lg text-charcoal placeholder:text-muted-green/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all duration-300 text-sm"
            />
          </div>

          {error && (
            <motion.p
              className="text-sm text-red-500/80 text-center"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading || !username || !password}
            className="w-full py-3 bg-sage text-white rounded-lg text-sm tracking-wide hover:bg-sage-dark transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <motion.div
          className="mx-auto mt-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    </div>
  )
}
