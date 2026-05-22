import { getPosts } from '@/lib/posts'

const SITE_URL = 'https://www.thrivechiropractic.com.my'
const SITE_NAME = 'Thrive Gonstead Chiropractic'
const FEED_DESCRIPTION =
  'Health articles and spinal care education from Thrive Gonstead Chiropractic — Bandar Rimbayu, Selangor.'

export const revalidate = 3600

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts = await getPosts()
  const lastBuildDate = new Date().toUTCString()

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`
      const pubDate = post.date ? new Date(post.date).toUTCString() : lastBuildDate
      const categories = post.tags
        .map((tag) => `    <category>${escapeXml(tag)}</category>`)
        .join('\n')
      return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description>${escapeXml(post.excerpt)}</description>
    <pubDate>${pubDate}</pubDate>
    <author>noreply@thrivechiropractic.com.my (${escapeXml(post.author)})</author>
${categories}
  </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(SITE_NAME)}</title>
  <link>${SITE_URL}</link>
  <description>${escapeXml(FEED_DESCRIPTION)}</description>
  <language>en-MY</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
  <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
