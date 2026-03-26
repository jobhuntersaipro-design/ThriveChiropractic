const HASHNODE_GQL = 'https://gql.hashnode.com'

const HASHNODE_HOST = process.env.NEXT_PUBLIC_HASHNODE_HOST ?? ''

interface HashnodeTag {
  name: string
  slug: string
}

interface HashnodeAuthor {
  name: string
  profilePicture: string
}

interface HashnodeCoverImage {
  url: string
}

interface HashnodeContent {
  html: string
  markdown: string
}

interface HashnodeSEO {
  title: string | null
  description: string | null
}

export interface HashnodePost {
  id: string
  title: string
  subtitle: string | null
  slug: string
  brief: string
  url: string
  coverImage: HashnodeCoverImage | null
  publishedAt: string
  updatedAt: string
  readTimeInMinutes: number
  tags: HashnodeTag[]
  author: HashnodeAuthor
  content: HashnodeContent
  seo: HashnodeSEO | null
}

interface HashnodePostEdge {
  node: HashnodePost
}

interface HashnodePageInfo {
  hasNextPage: boolean
  endCursor: string | null
}

async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(HASHNODE_GQL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Hashnode API error: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()
  if (json.errors) {
    throw new Error(`Hashnode GraphQL error: ${json.errors[0]?.message}`)
  }

  return json.data as T
}

const POST_LIST_QUERY = `
  query PostList($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            title
            slug
            brief
            url
            coverImage { url }
            publishedAt
            readTimeInMinutes
            tags { name slug }
            author { name profilePicture }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`

const POST_BY_SLUG_QUERY = `
  query PostBySlug($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        id
        title
        subtitle
        slug
        brief
        url
        coverImage { url }
        publishedAt
        updatedAt
        readTimeInMinutes
        tags { name slug }
        author { name profilePicture }
        content { html markdown }
        seo { title description }
      }
    }
  }
`

export async function getPosts(first = 20, after?: string) {
  const data = await gql<{
    publication: {
      posts: {
        edges: HashnodePostEdge[]
        pageInfo: HashnodePageInfo
      }
    }
  }>(POST_LIST_QUERY, { host: HASHNODE_HOST, first, after })

  const publication = data.publication
  if (!publication) {
    return { posts: [], pageInfo: { hasNextPage: false, endCursor: null } }
  }

  return {
    posts: publication.posts.edges.map((e) => e.node),
    pageInfo: publication.posts.pageInfo,
  }
}

export async function getPostBySlug(slug: string): Promise<HashnodePost | null> {
  const data = await gql<{
    publication: {
      post: HashnodePost | null
    }
  }>(POST_BY_SLUG_QUERY, { host: HASHNODE_HOST, slug })

  return data.publication?.post ?? null
}
