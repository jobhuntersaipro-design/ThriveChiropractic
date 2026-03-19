'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import BookButton from '@/components/shared/BookButton'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/chiropractic', label: 'Chiropractic' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-cream transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <span
            className="text-2xl font-bold text-charcoal"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Thrive
          </span>
          <span
            className="text-sm font-medium text-charcoal"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Chiropractic
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-sage ml-0.5" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-charcoal transition-colors duration-200 hover:text-sage"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <BookButton size="sm" />
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <button
              className="lg:hidden p-2 rounded-md text-charcoal"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream w-72 pt-12">
            <div className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-charcoal font-medium rounded-lg hover:bg-sage/10 hover:text-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 px-4">
                <BookButton size="md" className="w-full text-center" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
