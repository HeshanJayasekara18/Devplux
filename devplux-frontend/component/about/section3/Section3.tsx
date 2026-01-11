"use client";

import { motion } from "framer-motion";
import { Lightbulb, Globe, Rocket } from "lucide-react";

const visionPoints = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pioneering new technologies to solve complex challenges.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating digital solutions that reach and resonate across borders.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Building scalable architectures designed for tomorrow's growth.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function AboutSection3() {
  return (
    <section className="relative w-full bg-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-4xl font-bold text-white md:text-5xl"
          >
            Our Vision
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
             className="mt-4 text-zinc-400"
          >
            Shaping the future of digital interaction through creativity and code.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <div className={`mb-6 inline-flex rounded-xl bg-linear-to-br ${point.color} p-3 text-white shadow-lg`}>
                <point.icon size={24} />
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-white">{point.title}</h3>
              <p className="text-zinc-400">{point.description}</p>
              
              {/* Hover Glow */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br ${point.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
