import type { Metadata } from 'next'
import { getPosts } from '@/lib/hashnode'
import PostCard from '@/components/blog/PostCard'

export const metadata: Metadata = {
  title: 'Blog — Thrive Gonstead Chiropractic',
  description:
    'Health insights and spinal care education from our practitioners.',
}

export default async function BlogPage() {
  const { posts } = await getPosts(50)

  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16 bg-gradient-to-b from-sage to-sage-dark text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-white/70 text-xs sm:text-sm font-semibold tracking-widest mb-3 sm:mb-4">
            From Our Practitioners
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Insights &amp; Education
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Health articles written by our practitioners to help you understand your body and make informed decisions about your care.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-14 sm:py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={{
                    slug: post.slug,
                    title: post.title,
                    excerpt: post.brief,
                    author: post.author.name,
                    date: post.publishedAt,
                    tags: post.tags.map((t) => t.name),
                    coverImage: post.coverImage?.url ?? '',
                    readingTime: post.readTimeInMinutes,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-green text-lg">
                No posts yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
