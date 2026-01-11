"use client";

import { motion } from "framer-motion";

export default function Section2() {
  return (
    <section className="relative w-full bg-black px-6 pb-24 md:px-12">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-md md:p-12"
        >
           <h2 className="mb-8 text-3xl font-bold text-white">Send us a Message</h2>
           <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                 </div>
              </div>
              
              <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
              </div>

              <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
              </div>

              <button 
                type="button" // Prevent submission for now
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
              >
                Send Message
              </button>
           </form>
        </motion.div>
      </div>
    </section>
  );
}
