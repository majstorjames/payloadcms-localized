// 'use client'

// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom'
// import { CMSLink } from '@/components/Link'
// import { LocaleSwitcher } from '@/components/LocaleSwitcher'
// import type { Header as HeaderType } from '@/payload-types'
// import { Hamburger } from '@/globals/Header/Hamburger'

// interface ModalMenuProps {
//   isOpen: boolean
//   onClose: () => void
//   header: HeaderType
// }

// export const ModalMenu: React.FC<ModalMenuProps> = ({ header, isOpen, onClose }) => {
//   const navItems = header?.navItems || []

//   // Escape key to close modal
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose()
//     }
//     window.addEventListener('keydown', handleKeyDown)
//     return () => window.removeEventListener('keydown', handleKeyDown)
//   }, [onClose])

//   return ReactDOM.createPortal(
//     <div
//       className={`fixed z-[100] inset-0 bg-white/30 dark:bg-black/60 backdrop-blur-md flex transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//         }`}
//     >
//       {/* Modal layout: 2-column on md+, 1-column mobile */}
//       <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full relative">

//         {/* Top-right close button using Hamburger */}
//         <div className="absolute top-9 right-11 z-[2000] block">


//           <Hamburger isMenuOpen={true} onClick={onClose} />
//         </div>

//         {/* Left side - Navigation */}
//         <div className="flex flex-col items-center justify-center p-10">
//           <ul className="flex flex-col gap-8 text-gray-800 dark:text-white text-4xl font-bold text-left">
//             {navItems.map(({ link }, i) => (
//               <li key={i} onClick={onClose}>
//                 <CMSLink {...link} className="hover:text-gray-300 transition duration-200" />
//               </li>
//             ))}
//             <LocaleSwitcher className="text-4xl font-bold text-left" />
//           </ul>
//         </div>

//         {/* Right side placeholder */}
//         <div className="hidden md:flex items-center justify-center">
//           <span className="text-gray-600 dark:text-gray-400 text-xl">
//             Placeholder area
//           </span>
//         </div>
//       </div>
//     </div>,
//     typeof window !== 'undefined' && document.body ? document.body : document.createElement('div')
//   )
// }


'use client'

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CMSLink } from '@/components/Link'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import type { Header as HeaderType } from '@/payload-types'
import { Hamburger } from '@/globals/Header/Hamburger'

interface ModalMenuProps {
  isOpen: boolean
  onClose: () => void
  header: HeaderType
}

export const ModalMenu: React.FC<ModalMenuProps> = ({ header, isOpen, onClose }) => {
  const navItems = header?.navItems || []
  const [mounted, setMounted] = useState(false)

  // Escape key to close modal
  useEffect(() => {
    setMounted(true)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!mounted) return null // Prevent SSR crash

  return ReactDOM.createPortal(
    <div
      className={`fixed z-[100] inset-0 bg-background/80 dark:bg-background/80 backdrop-blur-lg flex transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}


    >
      {/* Modal layout: 2-column on md+, 1-column mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full relative">

        {/* Top-right close button using Hamburger */}
        <div className="absolute top-9 right-11 z-[2000] block">
          <Hamburger isMenuOpen={true} onClick={onClose} />
        </div>

        {/* Left side - Navigation */}
        <div className="flex flex-col items-center justify-center p-10">
          <ul className="flex flex-col gap-8 text-gray-800 dark:text-white text-4xl font-bold text-left">
            {navItems.map(({ link }, i) => (
              <li key={i} onClick={onClose}>
                <CMSLink {...link} className="hover:text-gray-300 transition duration-200" />
              </li>
            ))}
            <LocaleSwitcher className="text-4xl font-bold text-left" />
          </ul>
        </div>

        {/* Right side placeholder */}
        <div className="hidden md:flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-400 text-xl">
            Placeholder area
          </span>
        </div>
      </div>
    </div>,
    document.body
  )
}