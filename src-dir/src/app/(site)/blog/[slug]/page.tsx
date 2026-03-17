import type { Metadata } from 'next'
import fs from 'fs/promises'
import path from 'path'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { reader } from '@/lib/reader'
import { DocumentRenderer } from '@keystatic/core/renderer'

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 225))
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} — Thrive Chiropractic`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await reader.collections.posts.read(slug)
  if (!post) notFound()

  const content = await post.content()

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

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      {/* Cover image header */}
      <section className="relative pt-24">
        <div className="relative h-[340px] md:h-[420px]">
          {post.coverImage && (
            <Image
              src={post.coverImage}
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
                {post.tags.map((tag) => (
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
                By {post.author} &middot; {formattedDate} &middot; {readingTime} min read
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <DocumentRenderer
            document={content}
            renderers={{
              block: {
                heading: ({ level, children }) => {
                  if (level === 2) {
                    return (
                      <h2
                        className="text-3xl font-bold text-charcoal mt-10 mb-4"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                      >
                        {children}
                      </h2>
                    )
                  }
                  if (level === 3) {
                    return (
                      <h3
                        className="text-2xl font-bold text-charcoal mt-8 mb-3"
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                      >
                        {children}
                      </h3>
                    )
                  }
                  return (
                    <h4 className="text-xl font-bold text-charcoal mt-6 mb-2">
                      {children}
                    </h4>
                  )
                },
                paragraph: ({ children, textAlign }) => (
                  <p
                    className="text-muted-green leading-relaxed mb-4"
                    style={{ textAlign }}
                  >
                    {children}
                  </p>
                ),
                list: ({ type, children }) =>
                  type === 'ordered' ? (
                    <ol className="list-decimal list-inside space-y-1.5 text-muted-green mb-4 ml-2">
                      {children}
                    </ol>
                  ) : (
                    <ul className="list-disc list-inside space-y-1.5 text-muted-green mb-4 ml-2">
                      {children}
                    </ul>
                  ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gold pl-5 py-1 my-6">
                    <div
                      className="italic text-lg text-charcoal/70 leading-relaxed"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {children}
                    </div>
                  </blockquote>
                ),
                image: ({ src, alt }) => (
                  <figure className="my-8 rounded-2xl overflow-hidden">
                    <Image
                      src={src}
                      alt={alt ?? ''}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                    {alt && (
                      <figcaption className="text-xs text-muted-green mt-2 text-center italic">
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                ),
              },
              inline: {
                bold: ({ children }) => (
                  <strong className="text-charcoal">{children}</strong>
                ),
              },
            }}
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
