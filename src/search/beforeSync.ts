// import { BeforeSync, DocToSync } from '@payloadcms/plugin-search/types'

// export const beforeSyncWithSearch: BeforeSync = async ({ originalDoc, searchDoc, payload }) => {
//   const {
//     doc: { relationTo: collection },
//   } = searchDoc

//   const { slug, id, categories, title, meta, excerpt } = originalDoc

//   const modifiedDoc: DocToSync = {
//     ...searchDoc,
//     slug,
//     meta: {
//       ...meta,
//       title: meta?.title || title,
//       image: meta?.image?.id || meta?.image,
//       description: meta?.description,
//     },
//     categories: [],
//   }

//   if (categories && Array.isArray(categories) && categories.length > 0) {
//     // get full categories and keep a flattened copy of their most important properties
//     try {
//       const mappedCategories = categories.map((category) => {
//         const { id, title } = category

//         return {
//           relationTo: 'categories',
//           id,
//           title,
//         }
//       })

//       modifiedDoc.categories = mappedCategories
//     } catch (err) {
//       console.error(
//         `Failed. Category not found when syncing collection '${collection}' with id: '${id}' to search.`,
//       )
//     }
//   }

//   return modifiedDoc
// }






// import { BeforeSync, DocToSync } from '@payloadcms/plugin-search/types'

// export const beforeSyncWithSearch: BeforeSync = async ({ originalDoc, searchDoc }) => {
//   const {
//     doc: { relationTo: collection },
//   } = searchDoc

//   const { slug, id, categories, title, meta } = originalDoc

//   const modifiedDoc: DocToSync = {
//     ...searchDoc,
//     slug,
//     meta: {
//       ...meta,
//       title: meta?.title || title,
//       image: typeof meta?.image === 'object' ? meta.image?.id : meta?.image || null,
//       description: meta?.description || '',
//     },
//     categories: [],
//   }

//   if (Array.isArray(categories)) {
//     try {
//       const mappedCategories = categories.map((category) => {
//         if (typeof category === 'string') {
//           return { relationTo: 'categories', id: category }
//         }

//         return {
//           relationTo: 'categories',
//           id: category?.id,
//           title: category?.title,
//         }
//       })

//       modifiedDoc.categories = mappedCategories
//     } catch (err) {
//       console.error(
//         `Failed. Error mapping categories in collection '${collection}' with id: '${id}'`,
//       )
//     }
//   }

//   return modifiedDoc
// }


import { BeforeSync, DocToSync } from '@payloadcms/plugin-search/types'

export const beforeSyncWithSearch: BeforeSync = async ({ originalDoc, searchDoc }) => {
  const {
    doc: { relationTo: collection },
  } = searchDoc

  const { slug, id, categories, title, meta } = originalDoc

  const modifiedDoc: DocToSync = {
    ...searchDoc,
    doc: searchDoc.doc, // ✅ This is what was missing
    slug,
    meta: {
      ...meta,
      title: meta?.title || title,
      image: typeof meta?.image === 'object' ? meta.image?.id : meta?.image || null,
      description: meta?.description || '',
    },
    categories: [],
  }

  if (Array.isArray(categories)) {
    try {
      const mappedCategories = categories.map((category) => {
        if (typeof category === 'string') {
          return { relationTo: 'categories', id: category }
        }

        return {
          relationTo: 'categories',
          id: category?.id,
          title: category?.title,
        }
      })

      modifiedDoc.categories = mappedCategories
    } catch (err) {
      console.error(
        `Failed. Error mapping categories in collection '${collection}' with id: '${id}'`,
      )
    }
  }

  return modifiedDoc
}
