import type { Metadata } from 'next'

import { RelatedRecipes } from '@/blocks/RelatedRecipes/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image';


import type { Recipe } from '@/payload-types'

import { RecipeHero } from '@/heros/RecipeHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { TypedLocale } from 'payload'
import { getTranslations } from 'next-intl/server'


export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  //const t = await getTranslations()
  const posts = await payload.find({
    collection: 'recipes',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = posts.docs.map(({ slug }) => ({ slug }))

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    locale?: TypedLocale
  }>
}

export default async function Recipe({ params: paramsPromise }: Args) {
  const { slug = '', locale = 'en' } = await paramsPromise
  const url = '/recipes/' + slug
  const post = await queryPost({ slug, locale })
  const t = await getTranslations()


  if (!post) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      <RecipeHero post={post} />




      <div className="container max-w-4xl mx-auto mt-12 space-y-12">
        {/* Meta Info */}
        <div className="flex gap-4 text-xl ">


          {post.cookingTime && <span>🕒 {post.cookingTime} {t('labels.minutes')} </span>}

          <span>
            🍽️ {post.servings}{' '}
            {post.servings === 1
              ? t('arrayLabels.portion.singular')
              : post.servings > 4
                ? t('arrayLabels.portion.>4')
                : t('arrayLabels.portion.plural')}
          </span>


          {post.difficulty && (
            <span>
              ⚙️ {t(`labels.difficulties.${post.difficulty}`)}
            </span>
          )}
          {/* {post.difficulty && <span>⚙️ {post.difficulty}</span>} */}
        </div>
        <div className="flex flex-col items-start text-left text-md rounded-[10px] shadow p-4"
          style={{ backgroundColor: 'hsl(var(--card))' }}>

          {/* {post.description && (
            <p className="">
              {post.description}
            </p>
          )} */}

          {post.description && (
            <RichText content={post.description} enableGutter={false} />
          )}
        </div>
        <h2 className="text-2xl font-bold !mb-[-32]">🧂{t('arrayLabels.ingredient.plural')}
        </h2>
        <div className="flex flex-col items-start text-left text-md rounded-[10px] shadow p-4 mt-[-15px]"
          style={{ backgroundColor: 'hsl(var(--card))' }}>
          {/* Ingredients */}
          {post.ingredients?.length > 0 && (
            <section>

              <ul className="space-y-2 list-disc list-inside">
                {post.ingredients.map((item, i) => (
                  <li key={i} className="text-lg">
                    {item.quantity} {item.unit} {item.name}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>


        {Array.isArray(post.steps) && post.steps.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">👨‍🍳 {t('labels.instruction')}</h2>
            <ol className="list-decimal list-inside space-y-6">
              {post.steps.map((step, i) => {
                const image =
                  typeof step.image === 'object' && step.image !== null && 'url' in step.image
                    ? step.image
                    : null;

                return (
                  <li
                    key={i}
                    className="pt-5 text-lg p-5 rounded-[10px] shadow"
                    style={{ backgroundColor: 'hsl(var(--card))' }}
                  >
                    {step.instruction}
                    {image?.url && (
                      <div className="relative mt-5 p-5 rounded-xl shadow-md max-h-[300px] flex justify-center">
                        <Image
                          src={image.url}
                          alt={`${t('arrayLabels.step.plural')} ${i + 1}`}
                          layout="intrinsic"
                          width={600} // or whatever size works for your layout
                          height={300}
                          className="rounded-xl object-cover"
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        )}



        `      <h2 className="text-2xl font-bold !mb-[-64]">🍴 {t('labels.howToServe')}</h2>`
        <div className="flex flex-col items-start text-left text-md rounded-[10px] shadow p-4"
          style={{ backgroundColor: 'hsl(var(--card))' }}>
          {/* RichText Content */}
          {post.content && (
            <section>

              <RichText content={post.content} enableGutter={false} />
            </section>
          )}
        </div>


        {Array.isArray(post.relatedRecipes) && post.relatedRecipes.length > 0 && (
          <RelatedRecipes
            className="relative mt-12"
            docs={post.relatedRecipes.filter((r): r is Recipe => typeof r === 'object' && r !== null)}
          />
        )}

      </div>


    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale = 'hr' } = await paramsPromise
  const post = await queryPost({ slug, locale })

  return generateMeta({ doc: post })
}

const queryPost = cache(async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'recipes',
    draft,
    limit: 1,
    overrideAccess: draft,
    locale,
    depth: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

