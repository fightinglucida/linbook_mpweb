"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Play } from "lucide-react"

export default function DemoModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="min-w-[120px] bg-transparent border-white text-white hover:bg-white/20">
          <Play className="mr-2 h-4 w-4" />
          演示
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>产品演示视频</DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
          <p className="text-gray-500">视频演示内容将在此处播放</p>
          {/* 实际项目中可以替换为真实的视频播放器 */}
          {/* <video 
            controls
            className="w-full h-full rounded-md"
            src="/demo-video.mp4"
          /> */}
        </div>
      </DialogContent>
    </Dialog>
  )
}

