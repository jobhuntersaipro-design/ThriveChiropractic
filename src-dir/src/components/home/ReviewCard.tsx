'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import type { GoogleReview } from '@/lib/google-reviews'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-gold text-gold' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > 200

  return (
    <div className="bg-cream rounded-2xl p-6 border border-border-warm flex flex-col">
      <StarRating rating={review.rating} />
      <div className="mt-4 flex-1">
        <p
          className={`text-charcoal/80 text-sm leading-relaxed ${
            !expanded && isLong ? 'line-clamp-5' : ''
          }`}
        >
          &ldquo;{review.text}&rdquo;
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sage text-sm font-medium mt-2 hover:underline"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
      <div className="mt-4 pt-4 border-t border-border-warm flex items-center gap-3">
        {review.profilePhotoUrl ? (
          <img
            src={review.profilePhotoUrl}
            alt={review.authorName}
            className="w-8 h-8 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sage font-semibold text-sm">
            {review.authorName.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-charcoal font-medium text-sm">
            {review.authorName}
          </p>
          <p className="text-muted-green text-xs">
            {review.relativeTimeDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
