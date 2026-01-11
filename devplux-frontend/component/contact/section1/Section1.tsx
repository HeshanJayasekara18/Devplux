"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Section1() {
  return (
    <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 pt-24 pb-12 text-center md:px-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="z-10 mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-black tracking-tighter text-white md:text-7xl"
        >
          Let&apos;s Start a <br />
          <span className="bg-linear-to-r bg-blue-600 bg-clip-text text-transparent">
            Conversation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-zinc-400"
        >
          Ready to build something extraordinary? Reach out to us directly.
        </motion.p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/94706096401"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-green-500/50"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500 transition-transform duration-500 group-hover:scale-110">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                <p className="mt-1 text-zinc-400">+94 70 609 6401</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-zinc-600 transition-colors group-hover:text-white">
                <ArrowUpRight size={20} />
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:devplux.live@gmail.com"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-blue-500/50"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-500 transition-transform duration-500 group-hover:scale-110">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email Us</h3>
                <p className="mt-1 text-zinc-400">devplux.live@gmail.com</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 text-zinc-600 transition-colors group-hover:text-white">
                <ArrowUpRight size={20} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
