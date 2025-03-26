/** @type {import('next').NextConfig} */
const userConfig = {
  // 配置域名重定向和headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ]
      }
    ]
  },
  // 允许所有域名的图片优化
  images: {
    domains: ['*']
  }
}

export default userConfig