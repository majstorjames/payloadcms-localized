import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

import redirects from './redirects.js'
import { hostname } from 'os'

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          // hostname: url.hostname,
          // protocol: url.protocol.replace(':', ''),
          protocol: 'https',
          hostname: 'zelxvqcouwvqutkwnrlt.supabase.co',
        }
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
}

export default withNextIntl(withPayload(nextConfig))


// import { withPayload } from '@payloadcms/next/withPayload'
// import createNextIntlPlugin from 'next-intl/plugin'

// const withNextIntl = createNextIntlPlugin()

// import redirects from './redirects.js'

// const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
// const NEXT_PUBLIC_S3_ENDPOINT = process.env.NEXT_PUBLIC_S3_ENDPOINT || 'https://your-project-ref.supabase.co/storage/v1'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       ...[NEXT_PUBLIC_SERVER_URL, NEXT_PUBLIC_S3_ENDPOINT].map((item) => {
//         const url = new URL(item)

//         return {
//           hostname: url.hostname,
//           protocol: url.protocol.replace(':', ''),
//         }
//       }),
//     ],
//   },
//   reactStrictMode: true,
//   redirects,
// }

// export default withNextIntl(withPayload(nextConfig))
