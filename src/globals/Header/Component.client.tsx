'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import React, { useEffect, useState, useTransition } from 'react'
//import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { usePathname, useRouter } from '@/i18n/routing'
import { ModalMenu } from '@/components/ModalMenu'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()


  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <div>
      <header
        // className="fixed top-2 left-5 right-5 z-[50] backdrop-blur-lg shadow-md border border-white/30 dark:border-white/20 rounded-3xl px-6 py-4 flex justify-between items-center text-white mix-blend-difference bg-black/20
        // supports-backdrop-blur:bg-white/50 dark:supports-backdrop-blur:bg-black/50 text-black dark:text-white"

        className="fixed top-2 left-5 right-5 z-[50] backdrop-blur-lg shadow-md rounded-3xl px-6 py-4 flex justify-between items-center text-foreground bg-background/50 supports-backdrop-blur:bg-background/50"




        {...(theme ? { 'data-theme': theme } : {})}>
        <Link href="/" className="me-auto">
          <Logo />
        </Link>
        <HeaderNav header={header} />

      </header>


    </div>

  )
}
