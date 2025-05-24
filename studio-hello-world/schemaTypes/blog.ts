import {defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'previousSlug',
      type: 'slug',
      title: 'Previous Slug',
    },
    {
      name: 'nextSlug',
      type: 'slug',
      title: 'Next Slug',
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'code',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
})
