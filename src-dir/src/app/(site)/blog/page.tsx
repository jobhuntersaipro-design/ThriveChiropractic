import type { Metadata } from 'next'
import fs from 'fs/promises'
import path from 'path'
import { reader } from '@/lib/reader'
import PostCard from '@/components/blog/PostCard'

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 150))
}

export const metadata: Metadata = {
  title: 'Blog — Thrive Chiropractic',
  description:
    'Health insights and spinal care education from our practitioners.',
}

export default async function BlogPage() {
  const slugs = await reader.collections.posts.list()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await reader.collections.posts.read(slug)
      if (!post) return null

      const filePath = path.join(
        process.cwd(),
        'src/content/posts',
        slug,
        'index.mdoc'
      )
      let readingTime = 1
      try {
        const raw = await fs.readFile(filePath, 'utf-8')
        const body = raw.replace(/^---[\s\S]*?---/, '').trim()
        readingTime = getReadingTime(body)
      } catch {}

      return {
        slug,
        title: post.title,
        excerpt: post.excerpt,
        author: post.author,
        date: post.date,
        tags: post.tags,
        coverImage: post.coverImage ?? '',
        readingTime,
      }
    })
  )

  const sortedPosts = posts
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage to-sage-dark text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="uppercase text-white/70 text-sm font-semibold tracking-widest mb-4">
            From Our Practitioners
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Insights &amp; Education
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/80 text-lg leading-relaxed">
            Health articles written by our practitioners to help you understand your body and make informed decisions about your care.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
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
