'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

import { useTranslations } from 'next-intl'
import { Hamburger } from '../Hamburger'
//import { ModalMenu } from '../ModalMenu'
import { ModalMenu } from '@/globals/ModalMenu'


export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const navItems = header?.navItems || []
  const t = useTranslations()

  return (

    <nav className="flex gap-5 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink className="hidden md:block" key={i} {...link} appearance="link" />
      })}
      <Link href="/search">
        <span className="sr-only">{t('search')}</span>
        <SearchIcon className="w-5 text-primary" />

      </Link>

      {/* Hamburger Button to Toggle Modal */}
      <Hamburger isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <ModalMenu navItems={navItems} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </nav>


  )
}

