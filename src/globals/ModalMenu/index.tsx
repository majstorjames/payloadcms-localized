// 
import React, { useEffect } from 'react'
import { CMSLink } from '@/components/Link'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
interface ModalMenuProps {
  navItems: { link: any }[]
  isOpen: boolean
  onClose: () => void
}



export const ModalMenu: React.FC<ModalMenuProps> = ({ navItems, isOpen, onClose }) => {

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-black bg-opacity-60 backdrop-blur-md flex 
                  transition-all duration-300 ease-in-out 
                  ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Responsive Grid: Stacks into 1 column on mobile, 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">

        {/* Left column - Menu Items */}
        <div className="flex flex-col items-center justify-center p-10">

          <ul className="flex flex-col gap-8 text-gray-800 dark:text-white text-4xl font-bold text-left">
            {navItems.map(({ link }, i) => (
              <li key={i} onClick={onClose}> {/* ✅ Ensuring `onClick` is attached */}
                <CMSLink {...link} className="hover:text-gray-300 transition duration-200" />
              </li>
            ))}

            <LocaleSwitcher className="text-4xl font-bold text-left" />


          </ul>
        </div>

        {/* Right column - Empty placeholder */}
        <div className="hidden md:flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-400 text-xl">
            Placeholder area
          </span>
        </div>
      </div>
    </div>
  )
}
