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

interface TagLike {
  name: string
  attributes?: Record<string, unknown>
  children?: unknown[]
}

function isTag(value: unknown): value is TagLike {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof (value as { name?: unknown }).name === 'string' &&
    Array.isArray((value as { children?: unknown }).children)
  )
}

interface RawNode {
  type?: string
  children?: RawNode[]
  attributes?: { content?: string; [k: string]: unknown }
  [k: string]: unknown
}

function collectItemsAndSeparators(
  nodes: RawNode[] | undefined,
  out: Array<{ kind: 'item' | 'hr'; node?: RawNode }>,
): void {
  if (!nodes) return
  for (const n of nodes) {
    if (!n || typeof n !== 'object') continue
    if (n.type === 'item') {
      out.push({ kind: 'item', node: n })
    } else if (n.type === 'hr') {
      out.push({ kind: 'hr' })
    } else if (Array.isArray(n.children)) {
      collectItemsAndSeparators(n.children, out)
    }
  }
}

const tableTag: Schema = {
  render: 'table',
  attributes: {},
  transform(node, config) {
    const collected: Array<{ kind: 'item' | 'hr'; node?: RawNode }> = []
    collectItemsAndSeparators(
      (node as unknown as RawNode).children,
      collected,
    )

    const rows: RawNode[][] = []
    let current: RawNode[] = []
    for (const entry of collected) {
      if (entry.kind === 'hr') {
        if (current.length) rows.push(current)
        current = []
      } else if (entry.node) {
        current.push(entry.node)
      }
    }
    if (current.length) rows.push(current)
    if (rows.length === 0) return new Tag('table', {}, [])

    const transformItem = (item: RawNode): unknown[] => {
      const fakeNode = {
        children: item.children ?? [],
        transformChildren(cfg: unknown) {
          // delegate to Markdoc on the inner children
          const out: unknown[] = []
          for (const c of item.children ?? []) {
            const transformed = Markdoc.transform(c as never, cfg as never)
            if (Array.isArray(transformed)) out.push(...transformed)
            else if (transformed != null) out.push(transformed)
          }
          return out
        },
      }
      return fakeNode.transformChildren(config)
    }

    const renderRow = (cells: RawNode[], cellTag: 'th' | 'td') => {
      const cellTags = cells.map(
        (cell) => new Tag(cellTag, {}, transformItem(cell) as never),
      )
      return new Tag('tr', {}, cellTags)
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
  const transformed = Markdoc.transform(contentNode, markdocConfig)
  const contentHtml = Markdoc.renderers.html(transformed)
  const plainText = nodeToPlainText(contentNode)

  return {
    slug,
    title: readTitle(entry.title, slug),
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
