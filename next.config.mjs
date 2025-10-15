/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  // Enable static optimization for better performance
  output: 'standalone',
  // Optimize for server-side rendering
  trailingSlash: false,
  // Enable React 19 features
  reactStrictMode: true,
}

export default nextConfig
