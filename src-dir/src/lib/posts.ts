import 'server-only'
import { createReader } from '@keystatic/core/reader'
import Markdoc, { Tag, type Schema } from '@markdoc/markdoc'
import keystaticConfig from '../../keystatic.config'

export interface Post {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  tags: string[]
  coverImage: string
  status: 'draft' | 'published'
  readingTime: number
  contentHtml: string
}

const reader = createReader(process.cwd(), keystaticConfig)

const tableTag: Schema = {
  render: 'table',
  attributes: {},
  transform(node, config) {
    const children = node.transformChildren(config)
    const rows: unknown[][] = []
    let current: unknown[] = []
    for (const child of children) {
      const isSeparator = child instanceof Tag && child.name === 'hr'
      if (isSeparator) {
        if (current.length) rows.push(current)
        current = []
      } else {
        current.push(child)
      }
    }
    if (current.length) rows.push(current)
    if (rows.length === 0) return new Tag('table', {}, [])

    const renderRow = (rowChildren: unknown[], cellTag: 'th' | 'td') => {
      const cells: Tag[] = []
      for (const child of rowChildren) {
        if (child instanceof Tag && child.name === 'ul') {
          for (const li of child.children) {
            if (li instanceof Tag && li.name === 'li') {
              cells.push(new Tag(cellTag, {}, li.children))
            }
          }
        }
      }
      return new Tag('tr', {}, cells)
    }

    const elements: Tag[] = []
    elements.push(new Tag('thead', {}, [renderRow(rows[0], 'th')]))
    if (rows.length > 1) {
      elements.push(
        new Tag('tbody', {}, rows.slice(1).map((r) => renderRow(r, 'td'))),
      )
    }
    return new Tag('table', {}, elements)
  },
}

const markdocConfig = {
  tags: { table: tableTag },
}

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

async function loadPost(slug: string): Promise<Post | null> {
  const entry = await reader.collections.posts.read(slug, { resolveLinkedFiles: true })
  if (!entry) return null

  const contentNode = entry.content.node
  const transformed = Markdoc.transform(contentNode, markdocConfig)
  const contentHtml = Markdoc.renderers.html(transformed)
  const plainText = nodeToPlainText(contentNode)

  return {
    slug,
    title: entry.title.name,
    excerpt: entry.excerpt,
    author: entry.author,
    date: entry.date ?? '',
    tags: [...entry.tags],
    coverImage: entry.coverImage ?? '',
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
