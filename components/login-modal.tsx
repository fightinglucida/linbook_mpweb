"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginModal() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理登录逻辑
    console.log("登录提交")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 hover:bg-blue-800 text-white border-none">登录</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>账户</DialogTitle>
          <DialogDescription>登录或注册您的林书公众号助手账户</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">登录</TabsTrigger>
            <TabsTrigger value="register">注册</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email">邮箱</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">密码</Label>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    忘记密码?
                  </Button>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white border-none">
                登录
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="register-email">邮箱</Label>
                <Input id="register-email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">密码</Label>
                <Input id="register-password" type="password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">确认密码</Label>
                <Input id="confirm-password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white border-none">
                注册
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

