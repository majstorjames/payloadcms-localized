import { code } from "node_modules/payload/dist/fields/validations"

const localization = {
  defaultLocale: 'hr',
  // fallback: true,
  locales: [
    {
      code: 'en',
      label: '🇬🇧 English',
    },
    {
      code: 'hr',
      label: '🇭🇷 Hrvatski',
    },
  
  ],
}

export default localization
