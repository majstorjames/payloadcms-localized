import type { CollectionAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'
import type { Recipe } from '../../../payload-types'

export const revalidateRecipe: CollectionAfterChangeHook<Recipe> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/recipes/${doc.slug}`

    payload.logger.info(`Revalidating recipe at path: ${path}`)

    revalidatePath(path)
  }

  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/recipes/${previousDoc.slug}`

    payload.logger.info(`Revalidating old recipe at path: ${oldPath}`)

    revalidatePath(oldPath)
  }

  return doc
}
