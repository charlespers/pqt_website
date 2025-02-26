/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value: "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self';",
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  