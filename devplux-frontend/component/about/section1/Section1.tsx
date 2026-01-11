"use client";

import { motion } from "framer-motion";

export default function AboutSection1() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-black px-6 pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl">
            WE ARE <br />
            <span className="text-blue-600">
              Dev
            </span>
            <span className="text-white">
              plux
            </span>
          </h1>
          

        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl"
        >
          A collective of visionaries, designers, and engineers defining the next generation of digital experiences.
        </motion.p>
      </div>
    </section>
  );
}
