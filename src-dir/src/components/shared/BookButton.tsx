'use client'

import { BOOKING_URL } from '@/lib/constants'

interface BookButtonProps {
  variant?: 'primary' | 'outline' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-7 py-3 text-base sm:px-9 sm:py-4 sm:text-lg',
}

const variantClasses = {
  primary: 'bg-sage text-white hover:bg-sage-dark border-2 border-sage',
  outline: 'bg-cream text-sage border-2 border-sage hover:bg-sage hover:text-white',
  gold: 'bg-gold text-charcoal border-2 border-gold hover:bg-gold-light',
}

export default function BookButton({
  variant = 'primary',
  size = 'md',
  className = '',
}: BookButtonProps) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full font-semibold transition-all duration-200 text-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      Book an Appointment
    </a>
  )
}
