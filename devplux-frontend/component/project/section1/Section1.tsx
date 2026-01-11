"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Section1() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20 text-center md:px-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="z-10 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-400 backdrop-blur-md">
            Our Portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl text-5xl font-bold tracking-tighter text-white md:text-7xl lg:text-8xl"
        >
          Crafting Digital <br />
          <span className="bg-linear-to-r bg-blue-600 bg-clip-text text-transparent">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-2xl text-lg text-zinc-400 md:text-xl"
        >
          Explore our collection of cutting-edge web applications, brand identities, and immersive interfaces designed for the future.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-zinc-500">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-zinc-500" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
