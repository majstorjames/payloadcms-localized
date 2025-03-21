
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'
//import { ModalMenu } from '@/components/ModalMenu'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { TypedLocale } from 'payload'
import { ModalMenu } from '@/components/ModalMenu'
import { Header as HeaderType } from '@/payload-types'

export async function Footer({ locale }: { locale: TypedLocale }) {
  const footer: Footer = await getCachedGlobal('footer', 1, locale)()
  const header: HeaderType = await getCachedGlobal("header", 1, locale)()

  //const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const navItems = header?.navItems || []
  const navFooterItems = footer?.navItems || []

  return (
    <footer className="border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">

        <Link className="flex items-center" href="/">
          <span className="text-2xl inline font-bold dark:text-white ">WEB<span className="text-2xl font-thin inline dark:text-white ">SITE</span></span>

          {/* <picture>
            <img
              alt="Payload Logo"
              className="max-w-[6rem] invert-0"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
            />
          </picture> */}
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navFooterItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
      {/* <  ModalMenu header={header} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}

    </footer>
  )
}
