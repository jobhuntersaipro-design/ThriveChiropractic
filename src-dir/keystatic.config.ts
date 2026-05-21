import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'cloud',
    pathPrefix: 'src-dir',
  },
  cloud: {
    project: 'thrive-chiropractic/thrivechiropractic',
  },
  ui: {
    brand: { name: 'Thrive Gonstead Chiropractic' },
  },
  collections: {
    posts: {
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date', 'status'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true, length: { min: 1, max: 200 } },
          },
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'published',
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'Short summary shown on the blog index card.',
          multiline: true,
          validation: { length: { min: 1, max: 400 } },
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'Dr. Ruth',
          validation: { length: { min: 1, max: 80 } },
        }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
        }),
        tags: fields.array(
          fields.text({ label: 'Tag', validation: { length: { min: 1, max: 40 } } }),
          {
            label: 'Tags',
            itemLabel: (props) => props.value,
          },
        ),
        coverImage: fields.image({
          label: 'Cover image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'public/images/blog',
              publicPath: '/images/blog/',
            },
          },
        }),
      },
    },
  },
})
