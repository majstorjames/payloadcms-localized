
import React from 'react'

interface HamburgerProps {
    isMenuOpen: boolean
    onClick: () => void
}

export const Hamburger: React.FC<HamburgerProps> = ({ isMenuOpen, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-col justify-center items-center relative"

        >
            <span className={`bg-gray-800 dark:bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
            </span>
            <span className={`bg-gray-800 dark:bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} >
            </span>
            <span className={`bg-gray-800 dark:bg-white block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>
            </span>
        </button>
    )
}
