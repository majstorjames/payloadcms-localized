import type { CollectionConfig } from 'payload'

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
import { getAdminLabels } from '@/i18n/getAdminLabels'

const labels = getAdminLabels('hr')

export const Recipes: CollectionConfig = {
  slug: 'recipes',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
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
      label: labels.labels.title,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: labels.labels.featuredImage,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: labels.tabs.content,
          fields: [
            // {
            //   name: 'description',
            //   label: labels.labels.description,
            //   type: 'textarea',
            //   localized: true,
            // },

            {
              name: 'description',
              label: labels.labels.description,
              type: 'richText',
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  // HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
            },
            
            {
              name: 'ingredients',
              type: 'array',
              required: true,
              labels: labels.arrayLabels.ingredient,
              fields: [
                {
                  name: 'name',
                  label: labels.labels.ingredientName,
                  type: 'text',
                  required: true,
                  localized: true,
                },
                {
                  name: 'quantity',
                  label: labels.labels.quantity,
                  type: 'number',
                  required: false,
                },
                {
                  name: 'unitSystem',
                  label: labels.labels.unitSystem,
                  type: 'radio',
                  required: false,
                  options: [
                    { label: labels.labels.unitSystems.metric, value: 'metric' },
                    { label: labels.labels.unitSystems.imperial, value: 'imperial' },
                    { label: labels.labels.unitSystems.general, value: 'general' },
                  ],
                  defaultValue: 'metric',
                },
                {
                  name: 'metricUnit',
                  label: labels.labels.metricUnit,
                  type: 'select',
                  required: false,
                  admin: {
                    condition: (_, siblingData) => siblingData?.unitSystem === 'metric',
                  },
                  options: ['ml', 'l', 'g', 'kg'].map((value) => ({
                    label: labels.units[value],
                    value,
                  })),
                },
                {
                  name: 'imperialUnit',
                  label: labels.labels.imperialUnit,
                  type: 'select',
                  required: false,
                  admin: {
                    condition: (_, siblingData) => siblingData?.unitSystem === 'imperial',
                  },
                  options: ['tsp', 'tbsp', 'oz', 'lb', 'cups'].map((value) => ({
                    label: labels.units[value],
                    value,
                  })),
                },
                {
                  name: 'generalUnit',
                  label: labels.labels.generalUnit,
                  type: 'select',
                  required: false,
                  admin: {
                    condition: (_, siblingData) => siblingData?.unitSystem === 'general',
                  },
                  options: ['pieces', 'cloves', 'whole'].map((value) => ({
                    label: labels.units[value],
                    value,
                  })),
                },
                {
                  name: 'unit',
                  label: labels.labels.unit,
                  type: 'text',
                  required: false,
                  admin: {
                    readOnly: true,
                  },
                  hooks: {
                    beforeChange: [
                      ({ siblingData }) => {
                        if (siblingData?.unitSystem === 'metric') return siblingData?.metricUnit
                        if (siblingData?.unitSystem === 'imperial') return siblingData?.imperialUnit
                        if (siblingData?.unitSystem === 'general') return siblingData?.generalUnit
                        return null
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'steps',
              type: 'array',
              labels: labels.arrayLabels.step,
              fields: [
                {
                  name: 'instruction',
                  label: labels.labels.instruction,
                  type: 'textarea',
                  required: true,
                  localized: true,
                },
                {
                  name: 'image',
                  label: labels.labels.image,
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            {
              name: 'content',
              label: labels.labels.content,
              type: 'richText',
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  // HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
              required: false,
            },
          ],
        },
        {
          label: labels.tabs.meta,
          fields: [
            {
              name: 'cookingTime',
              label: labels.labels.cookingTime,
              type: 'number',
            },
            {
              name: 'servings',
              label: labels.labels.servings,
              type: 'number',
              required: true,
            },
            {
              name: 'difficulty',
              label: labels.labels.difficulty,
              type: 'select',
              options: ['Easy', 'Medium', 'Hard'].map((value) => ({
                label: labels.labels.difficulties[value],
                value,
              })),
              defaultValue: 'Easy',
            },
            {
              name: 'relatedRecipes',
              label: labels.labels.relatedRecipes,
              type: 'relationship',
              hasMany: true,
              relationTo: 'recipes',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => ({
                id: { not_in: [id] },
              }),
            },
            {
              name: 'categories',
              label: labels.labels.categories,
              type: 'relationship',
              hasMany: true,
              relationTo: 'categories',
              admin: {
                position: 'sidebar',
              },
              defaultValue: async ({ locale, req }) => {
                const result = await req.payload.find({
                  collection: 'categories',
                  where: {
                    title: {
                      equals: locale === 'hr' ? 'Recepti' : 'Recipes',
                    },
                  },
                  locale,
                })
                return result?.docs?.[0]?.id ? [result.docs[0].id] : []
              },
            },
          ],
        },
        {
          name: 'meta',
          label: labels.tabs.seo,
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'featuredImage',
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: 'media' }),
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
      label: labels['date-published'],
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
      label: labels.author,
      type: 'relationship',
      hasMany: true,
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'populatedAuthors',
      label: labels.labels.populatedAuthors,
      type: 'array',
      access: { update: () => false },
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



