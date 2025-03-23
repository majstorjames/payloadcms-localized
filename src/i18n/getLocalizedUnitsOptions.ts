import { getMessages } from 'next-intl/server'

export async function getLocalizedUnitOptions(unitKeys: string[]) {
  const messages = await getMessages()

  return unitKeys.map((key) => ({
    value: key,
    label: {
      en: messages.units?.[key] ?? key,
      hr: messages.units?.[key] ?? key,
    },
  }))
}
