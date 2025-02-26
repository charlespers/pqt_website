/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value:
                "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self';",
            },
          ],
        },
      ];
    },
    reactStrictMode: true,
    swcMinify: true,
  };
  
  module.exports = nextConfig;
  