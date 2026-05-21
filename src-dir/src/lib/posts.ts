import 'server-only'
import { createReader } from '@keystatic/core/reader'
import Markdoc from '@markdoc/markdoc'
import keystaticConfig from '../../keystatic.config'

export type FocalPoint = 'center' | 'top' | 'bottom' | 'left' | 'right'

export interface Post {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  tags: string[]
  coverImage: string
  coverFocalPoint: FocalPoint
  coverZoom: number
  status: 'draft' | 'published'
  readingTime: number
  contentHtml: string
}

const reader = createReader(process.cwd(), keystaticConfig)

const WORDS_PER_MINUTE = 200

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

function nodeToPlainText(node: unknown): string {
  if (!node || typeof node !== 'object') return ''
  const n = node as { type?: string; attributes?: { content?: string }; children?: unknown[] }
  if (n.type === 'text' && typeof n.attributes?.content === 'string') {
    return n.attributes.content
  }
  if (Array.isArray(n.children)) {
    return n.children.map(nodeToPlainText).join(' ')
  }
  return ''
}

function readTitle(entryTitle: unknown, fallback: string): string {
  if (typeof entryTitle === 'string') return entryTitle
  if (entryTitle && typeof entryTitle === 'object') {
    const name = (entryTitle as { name?: unknown }).name
    if (typeof name === 'string') return name
  }
  return fallback
}

async function loadPost(slug: string): Promise<Post | null> {
  const entry = await reader.collections.posts.read(slug, { resolveLinkedFiles: true })
  if (!entry) return null

  const contentNode = entry.content.node
  const transformed = Markdoc.transform(contentNode)
  const contentHtml = Markdoc.renderers.html(transformed)
  const plainText = nodeToPlainText(contentNode)

  const focalPoint = (entry as { coverFocalPoint?: string }).coverFocalPoint
  const zoomRaw = (entry as { coverZoom?: string }).coverZoom
  const zoomParsed = zoomRaw ? Number.parseFloat(zoomRaw) : 1
  const coverZoom = Number.isFinite(zoomParsed) && zoomParsed > 0 ? zoomParsed : 1

  return {
    slug,
    title: readTitle(entry.title, slug),
    excerpt: entry.excerpt,
    author: entry.author,
    date: entry.date ?? '',
    tags: [...entry.tags],
    coverImage: entry.coverImage ?? '',
    coverFocalPoint: (focalPoint as FocalPoint) ?? 'center',
    coverZoom,
    status: entry.status as 'draft' | 'published',
    readingTime: estimateReadingTime(plainText),
    contentHtml,
  }
}

export async function getPosts(): Promise<Post[]> {
  const slugs = await reader.collections.posts.list()
  const posts = await Promise.all(slugs.map((slug) => loadPost(slug)))
  return posts
    .filter((p): p is Post => p !== null && p.status === 'published')
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await loadPost(slug)
  if (!post || post.status !== 'published') return null
  return post
}
