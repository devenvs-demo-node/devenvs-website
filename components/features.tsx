"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Zap, Bug, Rocket } from "lucide-react"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""

export default function Features() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container">

        <FeatureRow
          title="No More Staging Bottlenecks"
          description="DevEnvs gives developers an instant environment. So they can test code changes without waiting in the queue to test on staging environment for hours or days."
          icon={<Code className="w-10 h-10 text-[#5E5AFF]" />}
          imageUrl={`${prefix}/staging.png`}
          imageAlt="Developer deploying an environment"
          reversed={false}
        />

        <FeatureRow
          title="Born to innovate, forced to wait for staging Environment?"
          description="No More, With DevEnvs."
          icon={<Zap className="w-10 h-10 text-[#5E5AFF]" />}
          imageUrl={`${prefix}/deploy.png`}
          imageAlt="Issue detection in developer environment"
          reversed={true}
        />

        <FeatureRow
          title="Early Issue Detection"
          description="Identify and address issues early in your development cycle. Catch bugs before they reach production."
          icon={<Bug className="w-10 h-10 text-[#5E5AFF]" />}
          imageUrl={`${prefix}/prometheus.png`}
          imageAlt="Fast development workflow"
          reversed={false}
        />

        <FeatureRow
          title="Boost Your Productivity"
          description="Eliminate environment setup time. Focus on writing code, not configuring infrastructure."
          icon={<Rocket className="w-10 h-10 text-[#5E5AFF]" />}
          imageUrl={`${prefix}/fail-build-ship.png`}
          imageAlt="Productivity boost with ephemeral environments"
          reversed={true}
        />

        <FeatureRow
          title="Fail Fast, Build Fast, Ship Faster"
          description="Accelerate your development workflow. Iterate quickly and ship with confidence."
          icon={<Zap className="w-10 h-10 text-[#5E5AFF]" />}
          imageUrl={`${prefix}/devenvs.png`}
          imageAlt="Fast development workflow"
          reversed={false}
        />

      </div>
    </section>
  )
}

interface FeatureRowProps {
  title: string
  description: string
  icon: React.ReactNode
  imageUrl: string
  imageAlt: string
  reversed: boolean
}

function FeatureRow({ title, description, icon, imageUrl, imageAlt, reversed }: FeatureRowProps) {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        animate={contentInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`flex flex-col gap-6 ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className="p-3 rounded-full bg-[#5E5AFF]/10 w-fit">{icon}</div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-lg text-zinc-400 max-w-lg">{description}</p>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        animate={imageInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={`relative h-[300px] md:h-[400px] rounded-xl overflow-hidden ${reversed ? "lg:order-1" : "lg:order-2"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#5E5AFF]/20 to-transparent rounded-xl" />
        <img src={imageUrl || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover rounded-xl" />
      </motion.div>
    </div>
  )
}
