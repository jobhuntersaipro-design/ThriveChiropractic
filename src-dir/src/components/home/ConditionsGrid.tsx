'use client'

import {
  Activity,
  Brain,
  Zap,
  CircleDot,
  Trophy,
  Ruler,
  Baby,
  Heart,
} from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

interface Condition {
  icon: React.ReactNode
  name: string
  description: string
}

const conditions: Condition[] = [
  {
    icon: <Activity className="w-6 h-6" />,
    name: 'Back Pain',
    description: 'From acute sprains to chronic lower back dysfunction.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    name: 'Neck Pain',
    description: 'Cervical stiffness, whiplash, and tech-neck relief.',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    name: 'Headaches',
    description: 'Cervicogenic and tension headaches addressed at the source.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    name: 'Sciatica / Hip Pain',
    description: 'Targeted care for nerve compression and radiating leg pain.',
  },
  {
    icon: <CircleDot className="w-6 h-6" />,
    name: 'Disc Issues',
    description: 'Gonstead corrections for disc bulge and herniation.',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    name: 'Sports Injuries',
    description: 'Recovery and performance care for active individuals.',
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    name: 'Posture & Scoliosis',
    description: 'Postural correction and scoliosis management programmes.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    name: 'Pregnancy Care',
    description: 'Safe, gentle care for expectant mothers at every stage.',
  },
  {
    icon: <Baby className="w-6 h-6" />,
    name: 'Paediatric Care',
    description: 'Specialised, gentle adjustments for infants and children.',
  },
]

export default function ConditionsGrid() {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Treat"
          heading="Conditions We Care For"
          subheading="We help patients of all ages address a wide range of spinal and musculoskeletal conditions."
        />
      </div>

      <div className="mt-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={16}
          slidesPerView={1.4}
          centeredSlides={false}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          freeMode={{ enabled: true, sticky: false }}
          breakpoints={{
            480: { slidesPerView: 2.2, spaceBetween: 16 },
            768: { slidesPerView: 3.2, spaceBetween: 20 },
            1024: { slidesPerView: 4.2, spaceBetween: 20 },
            1280: { slidesPerView: 4.8, spaceBetween: 24 },
          }}
          className="px-4 sm:px-6 lg:px-8"
        >
          {conditions.map((condition) => (
            <SwiperSlide key={condition.name}>
              <div className="group p-6 rounded-2xl border border-border-warm bg-white hover:bg-sage hover:border-sage cursor-default transition-all duration-300 h-full select-none">
                <div className="text-sage group-hover:text-white transition-colors duration-300 mb-3">
                  {condition.icon}
                </div>
                <h3
                  className="text-lg font-bold text-charcoal group-hover:text-white transition-colors duration-300 mb-1"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {condition.name}
                </h3>
                <p className="text-sm text-muted-green group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                  {condition.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
