

'use client'
import { useParams } from 'next/navigation'
import React, { useTransition } from 'react'
import { useLocale } from 'next-intl'
import localization from '@/i18n/localization'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { TypedLocale } from 'payload'
import { usePathname, useRouter } from '@/i18n/routing'

interface LocaleSwitcherProps {
    className?: string
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ className = '' }) => {
    const locale = useLocale()
    const router = useRouter()
    const [, startTransition] = useTransition()
    const pathname = usePathname()
    const params = useParams()

    // Define the default label for each locale
    const defaultLabels: Record<string, string> = {
        en: 'Language', // Default for English
        hr: 'Jezik', // Croatian
    }

    // Fallback to "Language" if locale is not explicitly listed
    const defaultLabel = defaultLabels[locale] || 'Language'

    function onSelectChange(value: TypedLocale) {
        startTransition(() => {
            router.replace(
                { pathname, query: params },
                { locale: value },
            )
        })
    }

    return (
        <Select onValueChange={onSelectChange} value={locale} defaultValue={locale}>
            {/* <SelectTrigger className={`w-auto text-sm text-gray-800 dark:text-white bg-transparent gap-2 pl-0 md:pl-3 border-none ${className}`}> */}

            <SelectTrigger className={`w-full text-4xl font-bold text-gray-800 dark:text-white bg-transparent border-none px-0 py-0 text-left focus:ring-0 focus:outline-none ${className}`}>
                {/* ✅ Ensure the correct default label is displayed */}
                <SelectValue>{defaultLabel || 'Language'}</SelectValue>
            </SelectTrigger>

            <SelectContent className="z-[999]">
                {localization.locales
                    .sort((a, b) => a.label.localeCompare(b.label)) // Sort by label
                    .map((locale) => (
                        <SelectItem value={locale.code} key={locale.code}>
                            {locale.label}
                        </SelectItem>
                    ))}
            </SelectContent>
        </Select >
    )
}
