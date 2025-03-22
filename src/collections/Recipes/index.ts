import type { CollectionConfig, TypedLocale } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from '../Posts/hooks/populateAuthors'
import { revalidateRecipe } from './hooks/revalidateRecipe'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Recipes: CollectionConfig = {
  slug: 'recipes',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // admin: {
  //   defaultColumns: ['title', 'slug', 'updatedAt'],
  //   livePreview: {
  //     url: ({ data, locale }) => {
  //       const path = generatePreviewPath({
  //         slug: typeof data?.slug === 'string' ? data.slug : '',
  //         collection: 'recipes',
  //         locale: locale.code,
  //       })

  //       return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
  //     },
  //   },
  //   preview: (data, { locale }) => {
  //     const path = generatePreviewPath({
  //       slug: typeof data?.slug === 'string' ? data.slug : '',
  //       collection: 'recipes',
  //       locale,
  //     })

  //     return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
  //   },
  //   useAsTitle: 'title',
  // },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, locale }) => {
        const slug = typeof data?.slug === 'string' ? data.slug : ''
        const collection = 'recipes'
        const localeCode = locale || 'en'
  
        const path = `/${localeCode}/recipes/${slug}`
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
        return `${baseUrl}/next/preview?slug=${slug}&collection=${collection}&path=${encodeURIComponent(path)}`
      },
    },
    preview: ({ slug }, { locale }) => {
      const localeCode = locale || 'en'
      return `${process.env.NEXT_PUBLIC_SERVER_URL}/${localeCode}/recipes/${slug}`
    },
    useAsTitle: 'title',
  },
  
  
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'content',
              type: 'richText',
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'relatedRecipes',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => ({
                id: {
                  not_in: [id],
                },
              }),
              hasMany: true,
              relationTo: 'recipes',
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'categories',
            },
          ],
          label: 'Meta',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        { name: 'id', type: 'text' },
        { name: 'name', type: 'text' },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateRecipe],
    afterRead: [populateAuthors],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
}
