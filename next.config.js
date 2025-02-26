/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "Content-Security-Policy",
              value: "default-src 'self'; style-src 'self' 'unsafe-inline' 'nonce-random123';",
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;