import { Star, ExternalLink } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import ReviewCard from '@/components/home/ReviewCard'
import { fetchGoogleReviews } from '@/lib/google-reviews'

export default async function GoogleReviews() {
  const data = await fetchGoogleReviews()

  if (!data || data.reviews.length === 0) return null

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionHeading
            eyebrow="Patient Reviews"
            heading="What Our Patients Say"
          />
        </div>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-3 mb-10 sm:mb-14">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(data.rating)
                    ? 'fill-gold text-gold'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-charcoal font-semibold text-lg">
            {data.rating.toFixed(1)}
          </span>
          <span className="text-muted-green text-sm">
            ({data.totalReviews} reviews on Google)
          </span>
        </div>

        {/* Place photos */}
        {data.photos.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-4 mb-10 sm:mb-14 snap-x snap-mandatory scrollbar-hide">
            {data.photos.slice(0, 8).map((photo, i) => (
              <div
                key={i}
                className="shrink-0 snap-start rounded-xl overflow-hidden border border-border-warm bg-charcoal/5"
              >
                <img
                  src={photo.url}
                  alt={`Thrive Chiropractic photo ${i + 1}`}
                  className="w-52 h-36 sm:w-64 sm:h-44 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.reviews.slice(0, 6).map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>

        {/* See all reviews link */}
        <div className="text-center mt-10">
          <a
            href={data.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-sage text-sage font-semibold hover:bg-sage hover:text-white transition-all duration-200"
          >
            See All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
