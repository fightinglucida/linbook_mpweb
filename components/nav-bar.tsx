"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import LoginModal from "@/components/login-modal"

export default function NavBar() {
  return (
    <header className="w-full border-b border-gray-700 bg-gray-900 fixed top-0 z-50">
      <div className="container mx-auto px-0 py-3 flex justify-between items-center">
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
          <Link href="/download">
            <Button className="bg-green-700 hover:bg-green-800 text-white border-none">下载</Button>
          </Link>
          <LoginModal />
        </div>
      </div>
    </header>
  )
}