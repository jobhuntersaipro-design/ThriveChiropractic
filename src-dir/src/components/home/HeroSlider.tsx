'use client'

import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import BookButton from '@/components/shared/BookButton'

const images = [
  '/images/showcase/thrive_1.webp',
  '/images/showcase/thrive_2.webp',
  '/images/showcase/thrive_3.webp',
]

export default function HeroSlider() {
  return (
    <section className="relative h-[85vh] min-h-[500px] max-h-[900px] overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          className="h-full"
        >
          <CarouselContent className="h-full">
            {images.map((src, i) => (
              <CarouselItem key={src} className="h-full">
                <div className="relative w-full h-[85vh] min-h-[500px] max-h-[900px]">
                  <Image
                    src={src}
                    alt={`Thrive Chiropractic clinic ${i + 1}`}
                    fill
                    priority={i === 0}
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="uppercase text-gold text-xs font-semibold tracking-[0.2em] mb-5">
              Gonstead Chiropractic Specialists
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-[1.1]"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Precise Care.{' '}
              <span className="text-gold">Lasting Results.</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
              We identify and correct the root cause of spinal dysfunction using
              the Gonstead system — the gold standard in chiropractic care.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <BookButton variant="gold" size="lg" />
              <Link
                href="/chiropractic"
                className="px-7 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                How We Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
