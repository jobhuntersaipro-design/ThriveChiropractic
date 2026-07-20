import Link from 'next/link'
import PostCard from '@/components/blog/PostCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { getPosts } from '@/lib/posts'

export default async function BlogShowcase() {
  const posts = (await getPosts()).slice(0, 3)
  if (posts.length === 0) return null

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From Our Practitioners"
          heading="Insights & Education"
          subheading="Health articles written by our practitioners to help you understand your body and make informed decisions about your care."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/blog"
            className="inline-block px-7 sm:px-9 py-3 sm:py-4 rounded-full border-2 border-sage text-sage font-semibold text-base sm:text-lg hover:bg-sage hover:text-white transition-all duration-200"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
