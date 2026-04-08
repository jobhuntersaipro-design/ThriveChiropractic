export interface GoogleReview {
  authorName: string
  rating: number
  relativeTimeDescription: string
  text: string
  profilePhotoUrl: string
}

export interface PlacePhoto {
  url: string
}

export interface GoogleReviewsData {
  reviews: GoogleReview[]
  rating: number
  totalReviews: number
  photos: PlacePhoto[]
  googleMapsUrl: string
}

export async function fetchGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    console.warn('Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID')
    return null
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=en`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews,photos,googleMapsUri',
        },
        next: { revalidate: 86400 }, // revalidate once per day
      }
    )

    if (!res.ok) {
      console.error('Google Places API error:', res.status, await res.text())
      return null
    }

    const data = await res.json()

    const reviews: GoogleReview[] = (data.reviews ?? []).map(
      (r: {
        authorAttribution?: { displayName?: string; photoUri?: string }
        rating?: number
        relativePublishTimeDescription?: string
        text?: { text?: string }
      }) => ({
        authorName: r.authorAttribution?.displayName ?? 'Anonymous',
        rating: r.rating ?? 5,
        relativeTimeDescription: r.relativePublishTimeDescription ?? '',
        text: r.text?.text ?? '',
        profilePhotoUrl: r.authorAttribution?.photoUri ?? '',
      })
    )

    const photos: PlacePhoto[] = (data.photos ?? []).map(
      (p: { name?: string }) => ({
        url: `https://places.googleapis.com/v1/${p.name}/media?maxWidthPx=600&key=${apiKey}`,
      })
    )

    return {
      reviews,
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      photos,
      googleMapsUrl: data.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${placeId}`,
    }
  } catch (error) {
    console.error('Failed to fetch Google reviews:', error)
    return null
  }
}
