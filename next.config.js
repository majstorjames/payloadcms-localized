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
          hostname: process.env.NEXT_CONFIG_HOSTNAME,
        }
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
}

export default withNextIntl(withPayload(nextConfig))
