"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link"

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ""


export default function Hero() {
  return (
    <section className="pt-32 pb-16 overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ephemeral environments for{" "}
            <span className="text-[#5E5AFF]">faster development</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg">
            Create, test, and destroy development environments on demand.
            Accelerate your development workflow with DevEnvs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/get-started">
              <Button className="bg-[#5E5AFF] hover:bg-[#4A46FF] text-white h-12 px-8 w-full sm:w-auto">
                Get started
              </Button>
            </Link>
            <Link href="/schedule-demo">
              <Button
                variant="outline"
                className="h-12 px-8 border-zinc-800 text-zinc-400 hover:text-white w-full sm:w-auto"
              >
              Book a demo
            </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
        >
          <div className="w-full h-full rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              // playsInline
              className="w-full h-full object-contain"
            >
              <source src={`${prefix}/devenvs-demo.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
