'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import SectionHeading from '@/components/shared/SectionHeading'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

interface Condition {
  name: string
  description: string
  image: string
}

const conditions: Condition[] = [
  {
    name: 'Back Pain',
    description:
      'The leading cause of workplace disability, back pain is extremely prevalent and one of the main injuries we treat at Thrive Chiropractic. Chiropractic care can address pain, stiffness, and poor range-of-motion — three of the most common symptoms experienced with back pain. Back pain can be debilitating; but it can be successfully treated with the right expertise.',
    image: '/images/hero/back-pain.jpg',
  },
  {
    name: 'Neck Pain',
    description:
      'Most neck pain is born out of work, sports, or poor posture. As we spend more time looking at our computers and phones than ever before, neck pain is only becoming more common across different age groups. Thrive Chiropractic will find the main cause of your neck and shoulder pain, manually manipulate the area to relieve pain, and provide a treatment plan that corrects misalignments.',
    image: '/images/hero/neck-pain.jpg',
  },
  {
    name: 'Headaches',
    description:
      'Tension headaches and cervicogenic headaches are often caused by stress, poor posture, and spinal misalignment. Rather than masking the pain with medication, chiropractic care targets the root cause — restoring proper alignment to your cervical spine, relieving muscle tension, and improving blood flow so you can find lasting, drug-free relief.',
    image: '/images/hero/headaches.jpg',
  },
  {
    name: 'Sciatica / Hip Pain',
    description:
      'Sciatica and hip pain can make even simple tasks like walking or sitting unbearable. These conditions often stem from nerve compression in the lower spine or pelvic misalignment. Our targeted Gonstead adjustments relieve pressure on the sciatic nerve, reduce inflammation, and restore proper mobility so you can get back to living without radiating pain.',
    image: '/images/hero/sciatica.jpg',
  },
  {
    name: 'Disc Issues',
    description:
      'Disc bulges and herniations can cause severe pain, numbness, and limited mobility. At Thrive Chiropractic, we use specific, low-force Gonstead corrections to take pressure off damaged discs and create the conditions for natural healing. Our precise approach avoids unnecessary force while delivering targeted relief to the affected spinal segments.',
    image: '/images/hero/disc.jpg',
  },
  {
    name: 'Sports Injuries',
    description:
      'Whether you are a weekend warrior or a competitive athlete, sports injuries can set you back significantly. Chiropractic care accelerates recovery by restoring joint function, reducing inflammation, and improving range of motion. We also focus on injury prevention and performance optimisation to help you stay at the top of your game.',
    image: '/images/hero/sports.jpg',
  },
  {
    name: 'Posture & Scoliosis',
    description:
      'Poor posture and scoliosis can lead to chronic pain, fatigue, and reduced quality of life. We assess your spinal curvature thoroughly and create a tailored correction programme. Through targeted adjustments and postural guidance, we help improve alignment, reduce discomfort, and build the foundation for long-term spinal health.',
    image: '/images/blog/gonstead-adjustment.jpg',
  },
  {
    name: 'Pregnancy Care',
    description:
      'Pregnancy places unique demands on the spine and pelvis. Our Webster-certified adjustments help maintain pelvic balance, reduce lower back pain, and support a more comfortable pregnancy at every stage. Safe and gentle, our approach is tailored specifically for expectant mothers to promote optimal foetal positioning and an easier delivery.',
    image: '/images/blog/pregnancy-care.jpg',
  },
  {
    name: 'Paediatric Care',
    description:
      'Children benefit from chiropractic care just as much as adults. From birth trauma to the bumps and falls of growing up, spinal misalignments can occur early. Our specialised, gentle adjustments for infants and children support healthy development, improve posture, and address common childhood issues like colic, sleep difficulties, and growing pains.',
    image: '/images/blog/children-checkup.jpg',
  },
]

export default function ConditionsGrid() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([])

  const scrollChipIntoView = useCallback((index: number) => {
    const chip = chipRefs.current[index]
    if (chip) {
      chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [])

  const handleChipClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index)
      setActiveIndex(index)
      scrollChipIntoView(index)
    }
  }

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Treat"
          heading="Conditions We Care For"
          subheading="We help patients of all ages address a wide range of spinal and musculoskeletal conditions."
        />
      </div>

      {/* Filter chips */}
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide">
            {conditions.map((condition, index) => (
              <button
                key={condition.name}
                ref={(el) => { chipRefs.current[index] = el }}
                onClick={() => handleChipClick(index)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-sage text-white border-sage shadow-sm'
                    : 'bg-white text-charcoal border-border-warm hover:border-sage hover:text-sage'
                }`}
              >
                {condition.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards carousel */}
      <div className="mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.8}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex)
            scrollChipIntoView(swiper.realIndex)
          }}
          breakpoints={{
            640: { slidesPerView: 2.5, spaceBetween: 16 },
            768: { slidesPerView: 3.5, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="px-4 sm:px-6 lg:px-8"
        >
          {conditions.map((condition, index) => (
            <SwiperSlide key={condition.name}>
              <div
                className="p-2 cursor-pointer"
                onClick={() => handleChipClick(index)}
              >
                <div className="rounded-2xl overflow-hidden border border-border-warm bg-white h-[530px] flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 shrink-0">
                    <Image
                      src={condition.image}
                      alt={condition.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 55vw, (max-width: 768px) 30vw, 25vw"
                    />
                  </div>
                  {/* Text content */}
                  <div className="flex flex-col justify-between p-5 flex-1 text-left">
                    <div>
                      <h3 className="font-display text-xl font-bold text-charcoal tracking-tight mb-3">
                        {condition.name}
                      </h3>
                      <p className="font-sans text-sm text-muted-green leading-relaxed line-clamp-6">
                        {condition.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
