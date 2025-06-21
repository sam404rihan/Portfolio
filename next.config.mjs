/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Turning off strict mode can help with hydration issues
  swcMinify: true,
  // Add this experimental feature to improve hydration behavior
  experimental: {
    // This helps with proper hydration
    optimizeCss: true,
    // Use browser print for faster initial rendering
    scrollRestoration: true,
  },
};

export default nextConfig;