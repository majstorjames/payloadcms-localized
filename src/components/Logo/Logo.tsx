// import React from 'react'

// export const Logo = () => {
//   return (
//     /* eslint-disable @next/next/no-img-element */
//     <img
//       alt="Payload Logo"
//       className="max-w-[9.375rem] invert dark:invert-0"
//       src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
//     />
//   )
// }
import React from 'react'
import logo from './logo.svg' // Import the logo.svg file

export const Logo = () => {
  return (
    // /* eslint-disable @next/next/no-img-element */
    // <img
    //   alt="Payload Logo"
    //   className="max-w-[9.375rem] invert dark:invert-0"
    //   src={logo} // Use the imported logo as the src
    // />

    <span className="text-2xl inline font-bold text-gray-800 dark:text-white">WEB<span className="text-2xl font-thin inline text-gray-800 dark:text-white">SITE</span></span>
  )
}