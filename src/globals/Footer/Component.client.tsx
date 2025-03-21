"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { CMSLink } from '@/components/Link'
import { ModalMenu } from '@/components/ModalMenu'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

import type { Footer as FooterType, Header as HeaderType } from '@/payload-types'

interface FooterClientProps {
    header: HeaderType
    footer: FooterType
}

export const FooterClient: React.FC<FooterClientProps> = ({ header, footer }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false) // ✅ Manage modal state

    const navFooterItems = footer?.navItems || []

    return (
        <footer className="border-t border-border bg-black dark:bg-card text-white">
            <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
                <Link className="flex items-center" href="/">
                    <span className="text-2xl inline font-bold dark:text-white">WEB<span className="text-2xl font-thin inline dark:text-white">SITE</span></span>
                </Link>

                <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
                    <ThemeSelector />
                    <nav className="flex flex-col md:flex-row gap-4">
                        {navFooterItems.map(({ link }, i) => (
                            <CMSLink className="text-white" key={i} {...link} />
                        ))}
                    </nav>

                    ✅ Button to Toggle Modal
                    <button onClick={() => setIsMenuOpen(true)} className="text-white text-lg font-bold">Open Menu</button>
                </div>
            </div>

            {/* ✅ Modal Menu */}
            <ModalMenu header={header} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </footer>
    )
}
