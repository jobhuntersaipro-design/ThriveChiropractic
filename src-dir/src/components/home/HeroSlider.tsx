'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel'
import BookButton from '@/components/shared/BookButton'

const images = [
  '/images/showcase/thrive_1.webp',
  '/images/showcase/thrive_2.webp',
  '/images/showcase/thrive_3.jpg',
  '/images/showcase/thrive_4.png'

]

function CarouselDots() {
  const { api } = useCarousel()
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (!api) return
    setSelected(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <div className="flex justify-center gap-2 mt-3 sm:mt-4">
      {images.map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === selected
              ? 'w-6 bg-sage'
              : 'w-2 bg-charcoal/20 hover:bg-charcoal/40'
          }`}
          onClick={() => api?.scrollTo(i)}
        />
      ))}
    </div>
  )
}

function CarouselNudge() {
  const { api } = useCarousel()
  const [hasNudged, setHasNudged] = useState(false)

  useEffect(() => {
    if (!api || hasNudged) return

    const timer = setTimeout(() => {
      const engine = api.internalEngine()
      const currentLocation = engine.location.get()
      const nudgeDistance = 30

      engine.location.set(currentLocation - nudgeDistance)
      engine.target.set(currentLocation)
      setHasNudged(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [api, hasNudged])

  return null
}

export default function HeroSlider() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 w-full md:max-w-[55%] text-center md:text-left">
            <p className="uppercase text-sage-dark text-[10px] sm:text-xs font-semibold tracking-[0.2em] mb-3 sm:mb-5">
              Gonstead Chiropractic Specialists
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 sm:mb-6 leading-[1.1]"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Precise Care.
              <br />
              <span className="italic text-sage-dark">Lasting Results.</span>
            </h1>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-lg mx-auto md:mx-0">
              We identify and correct the root cause of spinal dysfunction using
              the world-renowned Gonstead system — the gold standard in
              chiropractic care for Bandar Rimbayu families.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-5">
              <BookButton variant="primary" size="lg" className="w-full sm:w-auto" />
              <Link
                href="/chiropractic"
                className="inline-flex items-center gap-2 px-4 py-3 sm:py-4 text-charcoal font-semibold hover:text-sage-dark transition-colors duration-200"
              >
                How We Help
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Image carousel */}
          <div className="flex-1 w-full md:max-w-[45%]">
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
                <CarouselContent>
                  {images.map((src, i) => (
                    <CarouselItem key={src}>
                      <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full">
                        <Image
                          src={src}
                          alt={`Thrive Chiropractic clinic ${i + 1}`}
                          fill
                          priority={i === 0}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 45vw"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </div>
              <CarouselDots />
              <CarouselNudge />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
