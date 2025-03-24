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

const translations = getAdminLabels()

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
      label: {
        en: translations.en.labels.title,
        hr: translations.hr.labels.title,
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: translations.en.labels.featuredImage,
        hr: translations.hr.labels.featuredImage,
    }
  },
    {
    
      type: 'tabs',
      tabs: [
        {
          label: {
            en: translations.en.tabs.content,
            hr: translations.hr.tabs.content,
          },
          fields: [
     
            {
              name: 'description',
              label: {
                en: translations.en.labels.description,
                hr: translations.hr.labels.description,
              },
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
              label: {
                en: translations.en.arrayLabels.ingredient.plural,
                hr: translations.hr.arrayLabels.ingredient.plural
              },
              fields: [
                {
                  name: 'name',
                  label: {
                    en: translations.en.labels.ingredientName,
                    hr: translations.hr.labels.ingredientName,
                  },
                  type: 'text',
                  required: true,
                  localized: true,
                },
                {
                  name: 'quantity',
                  label: {
                    en: translations.en.labels.quantity,
                    hr: translations.hr.labels.quantity,
                  },
                  type: 'number',
                  required: false,
                },
                {
                  name: 'unitSystem',
                  label: {
                    en: translations.en.labels.unitSystem,
                    hr: translations.hr.labels.unitSystem,
                  },
                  type: 'radio',
                  required: false,
                  options: [
                    { 
                      label: {
                        en: translations.en.labels.unitSystems.metric,
                        hr: translations.hr.labels.unitSystems.metric,
                      }, value: 'metric' },
                    // { label: labels.labels.unitSystems.imperial, value: 'imperial' },
                    // { label: labels.labels.unitSystems.general, value: 'general' },
                    { 
                      label: {
                        en: translations.en.labels.unitSystems.imperial,
                        hr: translations.hr.labels.unitSystems.imperial,
                      }, value: 'imperial' },
                    { 
                      label: {
                        en: translations.en.labels.unitSystems.general,
                        hr: translations.hr.labels.unitSystems.general,
                      }, value: 'general' },
                  ],
                  defaultValue: 'metric',
                },
                {
                  name: 'metricUnit',
                  //label: labels.labels.metricUnit,
                  label:{
                    en: translations.en.labels.metricUnit,
                    hr: translations.hr.labels.metricUnit,
                  },
                  type: 'select',
                  required: false,
                  admin: {
                    condition: (_, siblingData) => siblingData?.unitSystem === 'metric',
                  },
                  options: ['ml', 'l', 'g', 'kg'].map((value) => ({
                    //label: labels.units[value],
                  label: {
                    en: translations.en.units[value],
                    hr: translations.hr.units[value],
                  },
                    value,
                  })),
                },
                {
                  name: 'imperialUnit',
                  //label: labels.labels.imperialUnit,
                  label:{
                    en: translations.en.labels.imperialUnit,
                    hr: translations.hr.labels.imperialUnit,
                  },
                  type: 'select',
                  required: false,
                  admin: {
                    condition: (_, siblingData) => siblingData?.unitSystem === 'imperial',
                  },
                  options: ['tsp', 'tbsp', 'oz', 'lb', 'cups'].map((value) => ({
                    //label: labels.units[value],
                    label: {
                      en: translations.en.units[value],
                      hr: translations.hr.units[value],
                    },
                    value,
                  })),
                },
                {
                  name: 'generalUnit',
                  //label: labels.labels.generalUnit,
                  label:{
                    en: translations.en.labels.generalUnit,
                    hr: translations.hr.labels.generalUnit,
                  },
                  type: 'select',
                  required: false,
                  admin: {
                    condition: (_, siblingData) => siblingData?.unitSystem === 'general',
                  },
                  options: ['pieces', 'cloves', 'whole'].map((value) => ({
                    //label: labels.units[value],
                    label: {
                      en: translations.en.units[value],
                      hr: translations.hr.units[value],
                    },
                    value,
                  })),
                },
                {
                  name: 'unit',
                  //label: labels.labels.unit,
                  label:{
                    en: translations.en.labels.unit,
                    hr: translations.hr.labels.unit,
                  },
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
              //labels: labels.arrayLabels.step,
              label:{
                en: translations.en.arrayLabels.step.plural,
                hr: translations.hr.arrayLabels.step.plural,
              },
              fields: [
                {
                  name: 'instruction',
                  //label: labels.labels.instruction,
                  label:{
                    en: translations.en.labels.instruction,
                    hr: translations.hr.labels.instruction,
                  },
                  type: 'textarea',
                  required: true,
                  localized: true,
                },
                {
                  name: 'image',
                  //label: labels.labels.image,
                  label:{
                    en: translations.en.labels.image,
                    hr: translations.hr.labels.image,
                  },
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
            {
              name: 'content',
              //label: labels.labels.content,
              label:{
                en: translations.en.labels.content,
                hr: translations.hr.labels.content,
              },
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
          //label: labels.tabs.meta,
          label:{
            en: translations.en.tabs.meta,
            hr: translations.hr.tabs.meta,
          },
          fields: [
            {
              name: 'cookingTime',
              //label: labels.labels.cookingTime,
              label:{
                en: translations.en.labels.cookingTime,
                hr: translations.hr.labels.cookingTime,
              },
              type: 'number',
            },
            {
              name: 'servings',
              //label: labels.labels.servings,
              label:{
                en: translations.en.labels.servings,
                hr: translations.hr.labels.servings,
              },
              type: 'number',
              required: true,
            },
            {
              name: 'difficulty',
              //label: labels.labels.difficulty,
              label:{
                en: translations.en.labels.difficulty,
                hr: translations.hr.labels.difficulty,
              },
              type: 'select',
              options: ['Easy', 'Medium', 'Hard'].map((value) => ({
                //label: labels.labels.difficulties[value],
                label: {
                  en: translations.en.labels.difficulties[value],
                  hr: translations.hr.labels.difficulties[value],
                },
                value,
              })),
              defaultValue: 'Easy',
            },
            {
              name: 'relatedRecipes',
              //label: labels.labels.relatedRecipes,
              label:{
                en: translations.en.labels.relatedRecipes,
                hr: translations.hr.labels.relatedRecipes,
              },
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
              //label: labels.labels.categories,
              label:{
                en: translations.en.labels.categories,
                hr: translations.hr.labels.categories,
              },
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
          label:{
            en: translations.en.tabs.seo,
            hr: translations.hr.tabs.seo,
          },
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
      //label: labels['date-published']
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
      //label: labels.author,
      label:{
        en: translations.en.labels.authors,
        hr: translations.hr.labels.authors,
      },
      type: 'relationship',
      hasMany: true,
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'populatedAuthors',
      //abel: labels.labels.populatedAuthors,
      label:{
        en: translations.en.labels.populatedAuthors,
        hr: translations.hr.labels.populatedAuthors,
      },
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



