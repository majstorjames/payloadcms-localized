import en from './messages/en.json'
import hr from './messages/hr.json'

// const messages = {
//   en,
//   hr,
// } as const

// export function getAdminLabels(locale: keyof typeof messages) {
//   return messages[locale]
// }



export const getAdminLabels = () => ({
  en,
  hr,
})