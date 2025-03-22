// import { cn } from '@/utilities/ui'
// import React from 'react'

// import type { Post } from '@/payload-types'

// import { Card } from '@/components/Card'

// export type Props = {
//   posts: Post[]
// }

// export const CollectionArchive: React.FC<Props> = (props) => {
//   const { posts } = props

//   return (
//     <div className={cn('container')}>
//       <div>
//         <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
//           {posts?.map((result, index) => {
//             if (typeof result === 'object' && result !== null) {
//               return (
//                 <div className="col-span-4" key={index}>
//                   <Card className="h-full" doc={result} relationTo="posts" showCategories />
//                 </div>
//               )
//             }

//             return null
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }




import { cn } from '@/utilities/ui'
import React from 'react'
import type { Post, Recipe } from '@/payload-types'
import { Card } from '@/components/Card'

export type Props = {
  docs: (Post | Recipe)[]
  relationTo: 'posts' | 'recipes'
}

export const CollectionArchive: React.FC<Props> = ({ docs, relationTo }) => {
  return (
    <div className={cn('container')}>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
        {docs?.map((doc, index) => (
          <div className="col-span-4" key={index}>
            <Card className="h-full" doc={doc} relationTo={relationTo} showCategories />
          </div>
        ))}
      </div>
    </div>
  )
}


// import { cn } from '@/utilities/ui'
// import React from 'react'

// import type { Post, Recipe } from '@/payload-types'

// import { Card } from '@/components/Card'

// export type Props = {
//   docs: (Post | Recipe)[]
//   relationTo: 'posts' | 'recipes'
// }

// export const CollectionArchive: React.FC<Props> = (props) => {
//   const { docs, relationTo } = props

//   return (
//     <div className={cn('container')}>
//       <div>
//         <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
//           {docs?.map((result, index) => {
//             if (typeof result === 'object' && result !== null) {
//               return (
//                 <div className="col-span-4" key={index}>
//                   <Card className="h-full" doc={result} relationTo={relationTo} showCategories />
//                 </div>
//               )
//             }

//             return null
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }