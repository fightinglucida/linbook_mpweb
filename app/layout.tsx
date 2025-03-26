import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@/lib/analytics'
import { PageAnalytics } from '@/components/analytics/page-analytics'

export const metadata: Metadata = {
  title: '林书公众号助手',
  description: '公众号对标账号文章采集助手',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <PageAnalytics />
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
