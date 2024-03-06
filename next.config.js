/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ['www.facebook.com'],
    unoptimized: true
  },
}
