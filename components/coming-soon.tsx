"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DevEnvsLogo } from "@/components/devenvs-logo"
import { motion } from "framer-motion"

interface ComingSoonProps {
  title: string
  description?: string
  path: string
}

export default function ComingSoon({ title, description, path }: ComingSoonProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("Please enter your email")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email")
      return
    }

    setError("")
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="container py-8">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#5E5AFF]/20 via-black to-black p-8 md:p-12 lg:p-16 border border-white/10 overflow-hidden text-center"
          >
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Glow effect */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5E5AFF]/20 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10">
              <DevEnvsLogo size="lg" className="mx-auto mb-8" />

              <div className="space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                  {description ||
                    `We're working hard to bring you an amazing ${path.split("/").pop()} experience. Stay tuned!`}
                </p>
              </div>

              {isSubmitted ? (
                <div className="max-w-md mx-auto p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-center bg-[#5E5AFF]/20 w-16 h-16 rounded-full mx-auto mb-4">
                    <Bell className="h-8 w-8 text-[#5E5AFF]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank you for subscribing!</h3>
                  <p className="text-zinc-400">We'll notify you when our {path.split("/").pop()} page is ready.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <p className="text-sm text-zinc-400 mb-4">Get notified when this page launches:</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border border-white/10 focus:border-[#5E5AFF] text-white h-12"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#5E5AFF] hover:bg-[#4A46FF] text-white h-12 px-6 whitespace-nowrap"
                    >
                      {isSubmitting ? "Subscribing..." : "Notify Me"}
                    </Button>
                  </div>
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="container py-8 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} DevEnvs. All rights reserved.
      </footer>
    </div>
  )
}
