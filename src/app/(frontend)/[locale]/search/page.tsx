import type { Metadata } from 'next/types'
import { CollectionArchive } from '@/components/CollectionArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Post, Recipe, Search } from '@/payload-types'
import { Search as SearchInput } from '@/search/Component'
import PageClient from './page.client'
import { getTranslations } from 'next-intl/server'
import { TypedLocale } from 'payload'

type Args = {
  searchParams: Promise<{ q?: string }>
  params: Promise<{ locale: TypedLocale }>
}

export default async function Page({
  searchParams: searchParamsPromise,
  params: paramsPromise,
}: Args) {
  const { q: query } = await searchParamsPromise
  const { locale } = await paramsPromise
  const payload = await getPayload({ config: configPromise })
  const t = await getTranslations()

  const searchResults = await payload.find({
    collection: 'search',
    depth: 2,
    overrideAccess: false,
    locale,
    limit: 24,
    ...(query
      ? {
        where: {
          or: [
            { title: { like: query } },
            { 'meta.description': { like: query } },
            { 'meta.title': { like: query } },
            { slug: { like: query } },
          ],
        },
      }
      : {}),
  })

  const postsResults: Post[] = []
  const recipesResults: Recipe[] = []

  for (const doc of searchResults.docs as Search[]) {
    const relationTo = doc.doc?.relationTo
    const value = doc.doc?.value

    if (!relationTo || !value) continue

    if (typeof value === 'number') {
      try {
        const fullDoc = await payload.findByID({
          collection: relationTo,
          id: value,
          locale,
        })

        if (relationTo === 'posts') {
          postsResults.push(fullDoc as Post)
        } else if (relationTo === 'recipes') {
          recipesResults.push(fullDoc as Recipe)
        }
      } catch (err) {
        console.error(`Failed to fetch full doc for ${relationTo} with ID ${value}`)
      }
    } else {
      if (relationTo === 'posts') {
        postsResults.push(value as Post)
      } else if (relationTo === 'recipes') {
        recipesResults.push(value as Recipe)
      }
    }
  }

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="sr-only">{t('search')}</h1>
          <SearchInput />
        </div>
      </div>

      {searchResults.totalDocs > 0 ? (
        <>
          {postsResults.length > 0 && (
            <div className="container mb-8">
              <h2 className="text-xl font-semibold mb-4">{t('posts')}</h2>
              <CollectionArchive docs={postsResults} relationTo="posts" />
            </div>
          )}

          {recipesResults.length > 0 && (
            <div className="container mb-8">
              <h2 className="text-xl font-semibold mb-4">{t('recipes')}</h2>
              <CollectionArchive docs={recipesResults} relationTo="recipes" />
            </div>
          )}
        </>
      ) : (
        <div className="container">No results found.</div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Search`,
  }
}
