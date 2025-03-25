import Link from "next/link"
import { Button } from "@/components/ui/button"
import LoginModal from "@/components/login-modal"

export default function Download() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <header className="w-full border-b border-gray-700 bg-gray-900 fixed top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              林书公众号助手
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-12">
            <Link href="/benchmark" className="text-lg font-medium text-white hover:text-gray-300 hover:underline">
              对标账号库
            </Link>
            <Link href="/crawler" className="text-lg font-medium text-white hover:text-gray-300 hover:underline">
              批量采集
            </Link>
            <Link href="/rewrite" className="text-lg font-medium text-white hover:text-gray-300 hover:underline">
              批量改写
            </Link>
            <Link href="/contact" className="text-lg font-medium text-white hover:text-gray-300 hover:underline">
              联系我
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LoginModal />
          </div>
        </div>
      </header>

      {/* 下载区域 */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white mt-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">下载林书公众号助手</h1>
          <p className="text-xl text-gray-200 mb-12">适用于 Windows 10, 11 系统</p>

          <div className="flex flex-col items-center justify-center mb-12">
            <div className="w-24 h-24 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Windows</h2>
            <p className="text-gray-300 mb-6">Windows 10, 11</p>
            <Button className="bg-green-700 hover:bg-green-800 text-white border-none text-lg px-8 py-6">
              下载 Windows 版本
            </Button>
          </div>

          <div className="text-left bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">系统要求</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Windows 10 或 Windows 11 操作系统</li>
              <li>4GB 及以上内存</li>
              <li>1GB 可用磁盘空间</li>
              <li>稳定的网络连接</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}