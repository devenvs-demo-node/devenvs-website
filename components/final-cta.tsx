"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function FinalCta() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#5E5AFF]/20 via-black to-black p-8 md:p-12 lg:p-16 border border-white/10 overflow-hidden"
        >
          {/* Background grid effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Glow effect */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#5E5AFF]/20 rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">
              Ready to transform your development workflow?
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Join the teams that are shipping faster with DevEnvs. Create your first ephemeral environment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="bg-[#5E5AFF] hover:bg-[#4A46FF] text-white h-12 px-8">Get started for free</Button>
              <Button variant="outline" className="h-12 px-8 border-zinc-800 text-zinc-400 hover:text-white">
                Schedule a demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
