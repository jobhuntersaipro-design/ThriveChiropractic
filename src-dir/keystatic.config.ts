import { config, collection, fields } from '@keystatic/core'

const isProd = process.env.NODE_ENV === 'production'

export default config({
  storage: isProd
    ? {
        kind: 'cloud',
        pathPrefix: 'src-dir',
      }
    : {
        kind: 'local',
      },
  cloud: {
    project: process.env.NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT!,
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*/',
      entryLayout: 'content',
      format: { contentField: 'content' },
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            description: 'The blog post title. This will also generate the URL slug.',
            validation: { isRequired: true },
          },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'A short summary shown in blog listing cards.',
          multiline: true,
          validation: { isRequired: true, length: { min: 10 } },
        }),
        author: fields.text({
          label: 'Author',
          description: 'Name of the blog post author.',
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Publish Date',
          description: 'The date this post will be published.',
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          description: 'Add tags to help categorize the blog post.',
          itemLabel: (props) => props.value,
        }),
        coverImage: fields.image({
          label: 'Cover Image',
          description: 'A cover image displayed at the top of the blog post. Recommended size: 1200x630px.',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
          validation: { isRequired: true },
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
  ui: {
    brand: { name: 'Thrive Chiropractic' },
  },
})
