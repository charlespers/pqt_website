/** @type {import('next').NextConfig} */
const crypto = require("crypto");

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; style-src 'self' 'nonce-${crypto.randomBytes(16).toString("base64")}' 'unsafe-inline';`,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
