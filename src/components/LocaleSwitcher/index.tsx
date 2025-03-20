
'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'
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



    // inspired by https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/components/LocaleSwitcherSelect.tsx
    const locale = useLocale()
    const router = useRouter()
    const [, startTransition] = useTransition()
    const pathname = usePathname()
    const params = useParams()

    function onSelectChange(value: TypedLocale) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: value },
            )
        })
    }

    return (
        <Select onValueChange={onSelectChange} value={locale}>
            <SelectTrigger className={`w-auto text-sm text-gray-800 dark:text-white bg-transparent gap-2 pl-0 md:pl-3 border-none ${className}`}>

                <SelectValue placeholder="Theme" />
            </SelectTrigger>


            <SelectContent>
                {localization.locales
                    .sort((a, b) => a.label.localeCompare(b.label)) // Ordenar por label
                    .map((locale) => (
                        <SelectItem value={locale.code} key={locale.code}>
                            {locale.label}
                        </SelectItem>
                    ))}
            </SelectContent>
        </Select>
    )
}
