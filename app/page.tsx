import Link from "next/link"
import { Button } from "@/components/ui/button"
import LoginModal from "@/components/login-modal"
import DemoModal from "@/components/demo-modal"
import NavBar from "@/components/nav-bar"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />

      {/* 主要内容区 */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white mt-16">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">林书公众号助手</h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">公众号对标文章列表采集，文章批量下载工具</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <DemoModal />
            <Link href="/download">
              <Button className="min-w-[120px] bg-green-700 hover:bg-green-800 text-white">下载</Button>
            </Link>
          </div>

          <div className="relative w-full max-w-[1200px] h-[800px] mx-auto rounded-lg overflow-hidden border border-gray-700 bg-gray-800" style={{width: '100%', height: 'auto'}}>
            <img src="/公众号采集助手.png" alt="林书公众号助手界面预览" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </main>
  )
}

