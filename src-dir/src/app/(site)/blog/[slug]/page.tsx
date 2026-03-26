import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { getPostBySlug } from '@/lib/hashnode'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.seo?.title ?? `${post.title} — Thrive Gonstead Chiropractic`,
    description: post.seo?.description ?? post.brief,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const coverUrl = post.coverImage?.url ?? ''
  const tags = post.tags.map((t) => t.name)

  return (
    <>
      {/* Cover image header */}
      <section className="relative pt-24">
        <div className="relative h-[340px] md:h-[420px]">
          {coverUrl && (
            <Image
              src={coverUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 w-full">
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1
                className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {post.title}
              </h1>
              <p className="text-white/70 text-sm">
                By {post.author.name} &middot; {formattedDate} &middot; {post.readTimeInMinutes} min read
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14 md:py-16 bg-cream">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose prose-lg prose-headings:font-bold prose-headings:text-charcoal prose-p:text-muted-green prose-p:leading-relaxed prose-a:text-sage prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-5 prose-blockquote:italic prose-img:rounded-2xl max-w-none"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />

          <div className="border-t border-border-warm mt-12 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sage font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </article>
      </section>
    </>
  )
}
