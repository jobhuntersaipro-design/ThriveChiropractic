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
            description:
              'The headline of the post. Keep under 70 characters for best SEO.',
            validation: { isRequired: true, length: { min: 1, max: 200 } },
          },
          slug: {
            description:
              'The URL part — auto-filled from the title. Only lowercase letters, numbers, and hyphens. Avoid changing after publishing (it breaks the existing URL).',
          },
        }),
        status: fields.select({
          label: 'Status',
          description:
            'Published posts appear on the website. Drafts are saved but hidden from visitors.',
          options: [
            { label: 'Draft', value: 'draft' },
            { label: 'Published', value: 'published' },
          ],
          defaultValue: 'published',
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          description:
            'Short summary shown on the blog index card. 1-3 sentences works best.',
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
            description:
              'Topic labels (e.g. "Sciatica", "Posture"). Click + Add for each one.',
            itemLabel: (props) => props.value,
          },
        ),
        coverImage: fields.image({
          label: 'Cover image (1600×840 px landscape recommended)',
          description:
            'JPG or PNG under 500KB. Crop to 1600×840 before uploading (preview.app or photopea.com works). Rename the file on your computer first — only lowercase letters, numbers, and hyphens (e.g. "spine-health.jpg"). Spaces or parentheses in the filename break image display.',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        content: fields.markdoc({
          label: 'Content',
          description:
            'Write the post body. Use the toolbar buttons (bold, headings, lists, images, etc.) — do not type raw markdown like ![](url). For images, click the picture icon in the toolbar; rename image files to use only lowercase, numbers, and hyphens before uploading.',
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
