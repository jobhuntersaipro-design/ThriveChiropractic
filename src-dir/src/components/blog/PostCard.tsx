import Link from 'next/link'
import Image from 'next/image'

interface PostCardProps {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  tags: readonly string[]
  coverImage: string
  readingTime: number
}

export default function PostCard({ post }: { post: PostCardProps }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-border-warm bg-white overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-white/90 text-sage px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs text-muted-green mb-1">
          {post.author} &middot; {formattedDate}
        </p>
        <p className="text-xs text-muted-green/70 mb-2">
          {post.readingTime} min read
        </p>
        <h3
          className="text-xl font-bold text-charcoal mb-2 group-hover:text-sage transition-colors duration-200 leading-snug"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {post.title}
        </h3>
        <p className="text-sm text-muted-green leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <span className="inline-block mt-4 text-sm font-semibold text-sage group-hover:underline">
          Read More →
        </span>
      </div>
    </Link>
  )
}
