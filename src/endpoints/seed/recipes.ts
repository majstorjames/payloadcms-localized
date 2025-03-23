// import type { Recipe } from '@/payload-types'

// export type RecipeInput = Omit<Recipe, 'id' | 'updatedAt' | 'createdAt' | 'sizes'>

// export const recipe1_en = (authorID: number, imageID: number): RecipeInput => ({


//   title: 'Grilled Sea Bass with Lemon',
//   slug: 'grilled-sea-bass-lemon',
//   slugLock: false,
//   _status: 'published',
//   authors: [authorID],
//   featuredImage: imageID,
//   servings: 2,
//   cookingTime: 25,
//   difficulty: 'Easy',
//   description: 'A light and healthy grilled sea bass recipe with fresh lemon zest.',
//   ingredients: [
//     { name: 'Sea Bass Fillet', quantity: 2, unitSystem: 'general', generalUnit: 'whole' },
//     { name: 'Lemon', quantity: 1, unitSystem: 'general', generalUnit: 'whole' },
//     { name: 'Olive Oil', quantity: 2, unitSystem: 'imperial', imperialUnit: 'tbsp' },
//   ],
//   steps: [
//     { instruction: 'Preheat grill to medium-high. Rub the fillets with olive oil and lemon juice.' },
//     { instruction: 'Grill each side for 4–5 minutes, or until fully cooked.' },
//   ],
//   meta: {
//     title: 'Grilled Sea Bass with Lemon',
//     description: 'A quick, flavorful sea bass recipe perfect for summer dinners.',
//     image: imageID,
//   },
// })

// export const recipe1_hr = (imageID: number): RecipeInput => ({
//   title: 'Grilani Brancin s Limunom',
//   slug: 'grilani-brancin-s-limunom',
//   slugLock: false,
//   _status: 'published',
//   authors: [],
//   featuredImage: imageID,
//   servings: 2,
//   cookingTime: 25,
//   difficulty: 'Easy',
//   description: 'Lagani i zdravi recept za brancina s limunom s roštilja.',
//   ingredients: [
//     { name: 'Fileti brancina', quantity: 2, unitSystem: 'general', generalUnit: 'whole' },
//     { name: 'Limun', quantity: 1, unitSystem: 'general', generalUnit: 'whole' },
//     { name: 'Maslinovo ulje', quantity: 2, unitSystem: 'imperial', imperialUnit: 'tbsp' },
//   ],
//   steps: [
//     { instruction: 'Zagrijte roštilj na srednje jaku vatru. Natrljajte filete maslinovim uljem i limunom.' },
//     { instruction: 'Pecite s obje strane 4–5 minuta ili dok ne budu gotovi.' },
//   ],
//   meta: {
//     title: 'Grilani Brancin s Limunom',
//     description: 'Brz i ukusan recept za ribu savršen za ljetne večere.',
//     image: imageID,
//   },
// })

// export const recipe2_en = (authorID: number, imageID: number): RecipeInput => ({
//   title: 'Creamy Garlic Mashed Potatoes',
//   slug: 'creamy-garlic-mashed-potatoes',
//   slugLock: false,
//   _status: 'published',
//   authors: [authorID],
//   featuredImage: imageID,
//   servings: 4,
//   cookingTime: 35,
//   difficulty: 'Medium',
//   description: 'Classic mashed potatoes made extra creamy with garlic and butter.',
//   ingredients: [
//     { name: 'Potatoes', quantity: 1, unitSystem: 'imperial', imperialUnit: 'lb' },
//     { name: 'Garlic Cloves', quantity: 4, unitSystem: 'general', generalUnit: 'cloves' },
//     { name: 'Butter', quantity: 3, unitSystem: 'imperial', imperialUnit: 'tbsp' },
//   ],
//   steps: [
//     { instruction: 'Boil the potatoes and garlic until tender.' },
//     { instruction: 'Mash with butter and a splash of milk until smooth and creamy.' },
//   ],
//   meta: {
//     title: 'Creamy Garlic Mashed Potatoes',
//     description: 'Perfect comfort food side dish with rich, garlicky flavor.',
//     image: imageID,
//   },
// })

// export const recipe2_hr = (imageID: number): RecipeInput => ({
//   title: 'Kremasti Pire Krumpir s Češnjakom',
//   slug: 'kremasti-pire-krumpir-s-cesnjakom',
//   slugLock: false,
//   _status: 'published',
//   authors: [],
//   featuredImage: imageID,
//   servings: 4,
//   cookingTime: 35,
//   difficulty: 'Medium',
//   description: 'Klasični pire krumpir s dodatkom češnjaka i maslaca.',
//   ingredients: [
//     { name: 'Krumpir', quantity: 1, unitSystem: 'imperial', imperialUnit: 'lb' },
//     { name: 'Češanj češnjaka', quantity: 4, unitSystem: 'general', generalUnit: 'cloves' },
//     { name: 'Maslac', quantity: 3, unitSystem: 'imperial', imperialUnit: 'tbsp' },
//   ],
//   steps: [
//     { instruction: 'Skuhajte krumpir i češnjak dok ne omekšaju.' },
//     { instruction: 'Zgnječite ih s maslacem i malo mlijeka dok ne postanu kremasti.' },
//   ],
//   meta: {
//     title: 'Kremasti Pire Krumpir s Češnjakom',
//     description: 'Savršen prilog s bogatim okusom češnjaka.',
//     image: imageID,
//   },
// })

// export const recipe3_en = (authorID: number, imageID: number): RecipeInput => ({
//   title: 'Classic Oatmeal with Banana',
//   slug: 'classic-oatmeal-banana',
//   slugLock: false,
//   _status: 'published',
//   authors: [authorID],
//   featuredImage: imageID,
//   servings: 1,
//   cookingTime: 10,
//   difficulty: 'Easy',
//   description: 'A nutritious, quick breakfast to kickstart your day.',
//   ingredients: [
//     { name: 'Oats', quantity: 0.5, unitSystem: 'imperial', imperialUnit: 'cups' },
//     { name: 'Milk', quantity: 1, unitSystem: 'metric', metricUnit: 'ml' },
//     { name: 'Banana', quantity: 1, unitSystem: 'general', generalUnit: 'pieces' },
//   ],
//   steps: [
//     { instruction: 'Cook oats with milk over medium heat for 5–7 minutes.' },
//     { instruction: 'Top with sliced banana and serve warm.' },
//   ],
//   meta: {
//     title: 'Classic Oatmeal with Banana',
//     description: 'Simple and wholesome breakfast idea ready in 10 minutes.',
//     image: imageID,
//   },
// })

// export const recipe3_hr = (imageID: number): RecipeInput => ({
//   title: 'Zobena Kaša s Bananom',
//   slug: 'zobena-kasa-s-bananom',
//   slugLock: false,
//   _status: 'published',
//   authors: [],
//   featuredImage: imageID,
//   servings: 1,
//   cookingTime: 10,
//   difficulty: 'Easy',
//   description: 'Nutritivan i brz doručak za dobar početak dana.',
//   ingredients: [
//     { name: 'Zob', quantity: 0.5, unitSystem: 'imperial', imperialUnit: 'cups' },
//     { name: 'Mlijeko', quantity: 1, unitSystem: 'metric', metricUnit: 'ml' },
//     { name: 'Banana', quantity: 1, unitSystem: 'general', generalUnit: 'pieces' },
//   ],
//   steps: [
//     { instruction: 'Kuhajte zob i mlijeko na srednjoj vatri 5–7 minuta.' },
//     { instruction: 'Dodajte narezanu bananu i poslužite toplo.' },
//   ],
//   meta: {
//     title: 'Zobena Kaša s Bananom',
//     description: 'Jednostavan i zdrav doručak gotov za 10 minuta.',
//     image: imageID,
//   },
// })



// // import type { Recipe } from '@/payload-types'

// // const AUTHOR_ID = '{{AUTHOR}}' as unknown as number
// // const IMAGE_1 = '{{IMAGE_1}}' as unknown as number
// // const IMAGE_2 = '{{IMAGE_2}}' as unknown as number
// // const IMAGE_3 = '{{IMAGE_3}}' as unknown as number


// // type RecipeInput = Omit<Recipe, 'id' | 'updatedAt' | 'createdAt' | 'sizes'>

// // //export const recipe1_en: Partial<Recipe> = {
// // export const recipe1_en = (authorID: number, imageID: number): RecipeInput => ({

// //   title: 'Grilled Sea Bass with Lemon',
// //   slug: 'grilled-sea-bass-lemon',
// //   slugLock: false,
// //   _status: 'published',
// //   authors: [AUTHOR_ID],
// //   featuredImage: IMAGE_1,
// //   servings: 2,
// //   cookingTime: 25,
// //   difficulty: 'Easy',
// //   description: 'A light and healthy grilled sea bass recipe with fresh lemon zest.',
// //   ingredients: [
// //     { name: 'Sea Bass Fillet', quantity: 2, unitSystem: 'general', generalUnit: 'whole' },
// //     { name: 'Lemon', quantity: 1, unitSystem: 'general', generalUnit: 'whole' },
// //     { name: 'Olive Oil', quantity: 2, unitSystem: 'imperial', imperialUnit: 'tbsp' },
// //   ],
// //   steps: [
// //     { instruction: 'Preheat grill to medium-high. Rub the fillets with olive oil and lemon juice.' },
// //     { instruction: 'Grill each side for 4–5 minutes, or until fully cooked.' },
// //   ],
// //   meta: {
// //     title: 'Grilled Sea Bass with Lemon',
// //     description: 'A quick, flavorful sea bass recipe perfect for summer dinners.',
// //     image: IMAGE_1,
// //   },
// // })

// // export const recipe1_hr: Partial<Recipe> = {
// //   title: 'Grilani Brancin s Limunom',
// //   description: 'Lagani i zdravi recept za brancina s limunom s roštilja.',
// //   ingredients: [
// //     { name: 'Fileti brancina', quantity: 2, unitSystem: 'general', generalUnit: 'whole' },
// //     { name: 'Limun', quantity: 1, unitSystem: 'general', generalUnit: 'whole' },
// //     { name: 'Maslinovo ulje', quantity: 2, unitSystem: 'imperial', imperialUnit: 'tbsp' },
// //   ],
// //   steps: [
// //     { instruction: 'Zagrijte roštilj na srednje jaku vatru. Natrljajte filete maslinovim uljem i limunom.' },
// //     { instruction: 'Pecite s obje strane 4–5 minuta ili dok ne budu gotovi.' },
// //   ],
// //   meta: {
// //     title: 'Grilani Brancin s Limunom',
// //     description: 'Brz i ukusan recept za ribu savršen za ljetne večere.',
// //     image: IMAGE_1,
// //   },
// // }

// // export const recipe2_en: Partial<Recipe> = {
// //   title: 'Creamy Garlic Mashed Potatoes',
// //   slug: 'creamy-garlic-mashed-potatoes',
// //   _status: 'published',
// //   authors: [AUTHOR_ID],
// //   featuredImage: IMAGE_2,
// //   servings: 4,
// //   cookingTime: 35,
// //   difficulty: 'Medium',
// //   description: 'Classic mashed potatoes made extra creamy with garlic and butter.',
// //   ingredients: [
// //     { name: 'Potatoes', quantity: 1, unitSystem: 'imperial', imperialUnit: 'lb' },
// //     { name: 'Garlic Cloves', quantity: 4, unitSystem: 'general', generalUnit: 'cloves' },
// //     { name: 'Butter', quantity: 3, unitSystem: 'imperial', imperialUnit: 'tbsp' },
// //   ],
// //   steps: [
// //     { instruction: 'Boil the potatoes and garlic until tender.' },
// //     { instruction: 'Mash with butter and a splash of milk until smooth and creamy.' },
// //   ],
// //   meta: {
// //     title: 'Creamy Garlic Mashed Potatoes',
// //     description: 'Perfect comfort food side dish with rich, garlicky flavor.',
// //     image: IMAGE_2,
// //   },
// // }

// // export const recipe2_hr: Partial<Recipe> = {
// //   title: 'Kremasti Pire Krumpir s Češnjakom',
// //   description: 'Klasični pire krumpir s dodatkom češnjaka i maslaca.',
// //   ingredients: [
// //     { name: 'Krumpir', quantity: 1, unitSystem: 'imperial', imperialUnit: 'lb' },
// //     { name: 'Češanj češnjaka', quantity: 4, unitSystem: 'general', generalUnit: 'cloves' },
// //     { name: 'Maslac', quantity: 3, unitSystem: 'imperial', imperialUnit: 'tbsp' },
// //   ],
// //   steps: [
// //     { instruction: 'Skuhajte krumpir i češnjak dok ne omekšaju.' },
// //     { instruction: 'Zgnječite ih s maslacem i malo mlijeka dok ne postanu kremasti.' },
// //   ],
// //   meta: {
// //     title: 'Kremasti Pire Krumpir s Češnjakom',
// //     description: 'Savršen prilog s bogatim okusom češnjaka.',
// //     image: IMAGE_2,
// //   },
// // }

// // export const recipe3_en: Partial<Recipe> = {
// //   title: 'Classic Oatmeal with Banana',
// //   slug: 'classic-oatmeal-banana',
// //   _status: 'published',
// //   authors: [AUTHOR_ID],
// //   featuredImage: IMAGE_3,
// //   servings: 1,
// //   cookingTime: 10,
// //   difficulty: 'Easy',
// //   description: 'A nutritious, quick breakfast to kickstart your day.',
// //   ingredients: [
// //     { name: 'Oats', quantity: 0.5, unitSystem: 'imperial', imperialUnit: 'cups' },
// //     { name: 'Milk', quantity: 1, unitSystem: 'metric', metricUnit: 'ml' },
// //     { name: 'Banana', quantity: 1, unitSystem: 'general', generalUnit: 'pieces' },
// //   ],
// //   steps: [
// //     { instruction: 'Cook oats with milk over medium heat for 5–7 minutes.' },
// //     { instruction: 'Top with sliced banana and serve warm.' },
// //   ],
// //   meta: {
// //     title: 'Classic Oatmeal with Banana',
// //     description: 'Simple and wholesome breakfast idea ready in 10 minutes.',
// //     image: IMAGE_3,
// //   },
// // }

// // export const recipe3_hr: Partial<Recipe> = {
// //   title: 'Zobena Kaša s Bananom',
// //   description: 'Nutritivan i brz doručak za dobar početak dana.',
// //   ingredients: [
// //     { name: 'Zob', quantity: 0.5, unitSystem: 'imperial', imperialUnit: 'cups' },
// //     { name: 'Mlijeko', quantity: 1, unitSystem: 'metric', metricUnit: 'ml' },
// //     { name: 'Banana', quantity: 1, unitSystem: 'general', generalUnit: 'pieces' },
// //   ],
// //   steps: [
// //     { instruction: 'Kuhajte zob i mlijeko na srednjoj vatri 5–7 minuta.' },
// //     { instruction: 'Dodajte narezanu bananu i poslužite toplo.' },
// //   ],
// //   meta: {
// //     title: 'Zobena Kaša s Bananom',
// //     description: 'Jednostavan i zdrav doručak gotov za 10 minuta.',
// //     image: IMAGE_3,
// //   },
// // }


// // // import type { Recipe } from '@/payload-types'

// // // export const recipe1_en: Partial<Recipe> = {
// // //   title: 'Grilled Sea Bass with Lemon',
// // //   slug: 'grilled-sea-bass-lemon',
// // //   slugLock: false,
// // //   _status: 'published',
// // //   authors: [1], // Replace 1 with a valid number or User object
// // //   featuredImage: 1, // Replace 1 with a valid number or Media object
// // //   servings: 2,
// // //   cookingTime: 25,
// // //   difficulty: 'Easy',
// // //   description: 'A light and healthy grilled sea bass recipe with fresh lemon zest.',
// // //   ingredients: [
// // //     { name: 'Sea Bass Fillet', quantity: 2, unitSystem: 'general', generalUnit: 'whole' },
// // //     { name: 'Lemon', quantity: 1, unitSystem: 'general', generalUnit: 'whole' },
// // //     { name: 'Olive Oil', quantity: 2, unitSystem: 'imperial', imperialUnit: 'tbsp' },
// // //   ],
// // //   steps: [
// // //     { instruction: 'Preheat grill to medium-high. Rub the fillets with olive oil and lemon juice.' },
// // //     { instruction: 'Grill each side for 4–5 minutes, or until fully cooked.' },
// // //   ],
// // //   meta: {
// // //     title: 'Grilled Sea Bass with Lemon',
// // //     description: 'A quick, flavorful sea bass recipe perfect for summer dinners.',
// // //     image: 1,
// // //   },
// // // }

// // // export const recipe1_hr: Partial<Recipe> = {
// // //   title: 'Grilani Brancin s Limunom',
// // //   description: 'Lagani i zdravi recept za brancina s limunom s roštilja.',
// // //   ingredients: [
// // //     { name: 'Fileti brancina', quantity: 2, unitSystem: 'general', generalUnit: 'whole' },
// // //     { name: 'Limun', quantity: 1, unitSystem: 'general', generalUnit: 'whole' },
// // //     { name: 'Maslinovo ulje', quantity: 2, unitSystem: 'imperial', imperialUnit: 'tbsp' },
// // //   ],
// // //   steps: [
// // //     { instruction: 'Zagrijte roštilj na srednje jaku vatru. Natrljajte filete maslinovim uljem i limunom.' },
// // //     { instruction: 'Pecite s obje strane 4–5 minuta ili dok ne budu gotovi.' },
// // //   ],
// // //   meta: {
// // //     title: 'Grilani Brancin s Limunom',
// // //     description: 'Brz i ukusan recept za ribu savršen za ljetne večere.',
// // //     image: 1,
// // //   },
// // // }

// // // export const recipe2_en: Partial<Recipe> = {
// // //   title: 'Creamy Garlic Mashed Potatoes',
// // //   slug: 'creamy-garlic-mashed-potatoes',
// // //   _status: 'published',
// // //   authors: [1], // Replace 1 with a valid number or User object
// // //   featuredImage: 1, // Replace 1 with a valid number or Media object
// // //   servings: 4,
// // //   cookingTime: 35,
// // //   difficulty: 'Medium',
// // //   description: 'Classic mashed potatoes made extra creamy with garlic and butter.',
// // //   ingredients: [
// // //     { name: 'Potatoes', quantity: 1, unitSystem: 'imperial', imperialUnit: 'lb' },
// // //     { name: 'Garlic Cloves', quantity: 4, unitSystem: 'general', generalUnit: 'cloves' },
// // //     { name: 'Butter', quantity: 3, unitSystem: 'imperial', imperialUnit: 'tbsp' },
// // //   ],
// // //   steps: [
// // //     { instruction: 'Boil the potatoes and garlic until tender.' },
// // //     { instruction: 'Mash with butter and a splash of milk until smooth and creamy.' },
// // //   ],
// // //   meta: {
// // //     title: 'Creamy Garlic Mashed Potatoes',
// // //     description: 'Perfect comfort food side dish with rich, garlicky flavor.',
// // //     image: 1
// // //   },
// // // }

// // // export const recipe2_hr: Partial<Recipe> = {
// // //   title: 'Kremasti Pire Krumpir s Češnjakom',
// // //   description: 'Klasični pire krumpir s dodatkom češnjaka i maslaca.',
// // //   ingredients: [
// // //     { name: 'Krumpir', quantity: 1, unitSystem: 'imperial', imperialUnit: 'lb' },
// // //     { name: 'Češanj češnjaka', quantity: 4, unitSystem: 'general', generalUnit: 'cloves' },
// // //     { name: 'Maslac', quantity: 3, unitSystem: 'imperial', imperialUnit: 'tbsp' },
// // //   ],
// // //   steps: [
// // //     { instruction: 'Skuhajte krumpir i češnjak dok ne omekšaju.' },
// // //     { instruction: 'Zgnječite ih s maslacem i malo mlijeka dok ne postanu kremasti.' },
// // //   ],
// // //   meta: {
// // //     title: 'Kremasti Pire Krumpir s Češnjakom',
// // //     description: 'Savršen prilog s bogatim okusom češnjaka.',
// // //     image: 1
// // //   },
// // // }

// // // export const recipe3_en: Partial<Recipe> = {
// // //   title: 'Classic Oatmeal with Banana',
// // //   slug: 'classic-oatmeal-banana',
// // //   _status: 'published',
// // //   authors: [1], // Replace 1 with a valid number or User object
// // //   featuredImage: 1, // Replace 1 with a valid number or Media object,
// // //   servings: 1,
// // //   cookingTime: 10,
// // //   difficulty: 'Easy',
// // //   description: 'A nutritious, quick breakfast to kickstart your day.',
// // //   ingredients: [
// // //     { name: 'Oats', quantity: 0.5, unitSystem: 'imperial', imperialUnit: 'cups' },
// // //     { name: 'Milk', quantity: 1, unitSystem: 'metric', metricUnit: 'ml' },
// // //     { name: 'Banana', quantity: 1, unitSystem: 'general', generalUnit: 'pieces' },
// // //   ],
// // //   steps: [
// // //     { instruction: 'Cook oats with milk over medium heat for 5–7 minutes.' },
// // //     { instruction: 'Top with sliced banana and serve warm.' },
// // //   ],
// // //   meta: {
// // //     title: 'Classic Oatmeal with Banana',
// // //     description: 'Simple and wholesome breakfast idea ready in 10 minutes.',
// // //     image: 1,
// // //   },
// // // }

// // // export const recipe3_hr: Partial<Recipe> = {
// // //   title: 'Zobena Kaša s Bananom',
// // //   description: 'Nutritivan i brz doručak za dobar početak dana.',
// // //   ingredients: [
// // //     { name: 'Zob', quantity: 0.5, unitSystem: 'imperial', imperialUnit: 'cups' },
// // //     { name: 'Mlijeko', quantity: 1, unitSystem: 'metric', metricUnit: 'ml' },
// // //     { name: 'Banana', quantity: 1, unitSystem: 'general', generalUnit: 'pieces' },
// // //   ],
// // //   steps: [
// // //     { instruction: 'Kuhajte zob i mlijeko na srednjoj vatri 5–7 minuta.' },
// // //     { instruction: 'Dodajte narezanu bananu i poslužite toplo.' },
// // //   ],
// // //   meta: {
// // //     title: 'Zobena Kaša s Bananom',
// // //     description: 'Jednostavan i zdrav doručak gotov za 10 minuta.',
// // //     image: 1,
// // //   },
// // // }
