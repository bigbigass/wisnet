/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'crm.wisnet.pro',
            },
          ],
          destination: 'http://你的CRM系统IP:端口',
          permanent: true,
        },
        {
          source: '/:path*',
          destination: 'http://你的默认系统IP:端口',
          permanent: true,
        },
      ];
    },
  }
  
  module.exports = nextConfig