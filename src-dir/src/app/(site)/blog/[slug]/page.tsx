import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { getPostBySlug, getPosts } from '@/lib/posts'

const SITE_URL = 'https://www.thrivechiropractic.com.my'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  const url = `/blog/${slug}`
  const hasCover = Boolean(post.coverImage)
  const ogImage = post.coverImage || '/images/logo/thrive-logo-words.png'
  const ogImageMeta = hasCover
    ? { url: ogImage, width: 1200, height: 630, alt: post.title }
    : { url: ogImage, width: 512, height: 512, alt: 'Thrive Gonstead Chiropractic logo' }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [ogImageMeta],
    },
    twitter: {
      card: hasCover ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
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

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const postUrl = `${SITE_URL}/blog/${slug}`
  const imageUrl = post.coverImage
    ? `${SITE_URL}${post.coverImage}`
    : `${SITE_URL}/images/showcase/main_1.jpg`
  const isoDate = post.date ? `${post.date}T00:00:00+08:00` : ''

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Thrive Gonstead Chiropractic',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo/thrive-logo-words.png` },
    },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Cover image header */}
      <section className="relative pt-24">
        <div className="relative h-85 md:h-105">
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
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />
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
                className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {post.title}
              </h1>
              <p className="text-white/70 text-sm">
                By {post.author} &middot; {formattedDate} &middot; {post.readingTime} min read
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14 md:py-16 bg-cream">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose md:prose-lg prose-headings:font-bold prose-headings:text-charcoal prose-h1:text-3xl sm:prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:text-2xl sm:prose-h2:text-3xl prose-p:text-muted-green prose-p:leading-relaxed prose-a:text-sage prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:pl-5 prose-blockquote:italic prose-img:rounded-2xl prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-border-warm prose-th:bg-sage/10 prose-th:text-charcoal prose-th:px-4 prose-th:py-2 prose-th:text-left prose-td:border prose-td:border-border-warm prose-td:px-4 prose-td:py-2 prose-td:text-muted-green max-w-none"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
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
