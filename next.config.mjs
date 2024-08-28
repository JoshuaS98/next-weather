/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.meteoblue.com',
      },
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
