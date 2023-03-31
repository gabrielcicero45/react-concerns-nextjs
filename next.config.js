/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/rooms',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
