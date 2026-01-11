"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Successful Projects", value: 3, suffix: "+" },
  { label: "Years of Experience", value: 1, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "%" },
  { label: "Technologies Mastered", value: 15, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <span className="flex items-center justify-center">
      <motion.span ref={ref}>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function AboutSection2() {
  return (
    <section className="relative w-full bg-black py-24 px-6 md:px-12">
      {/* Stats Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4 border-b border-white/10 pb-24">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-4xl font-bold text-white md:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="mt-2 text-sm uppercase tracking-widest text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission Statement */}
      <div className="mx-auto mt-24 flex max-w-5xl flex-col gap-12 md:flex-row md:items-center">
         <div className="flex-1">
             <motion.h2 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-4xl font-bold leading-tight text-white md:text-5xl"
             >
                 Our mission is to bridge the gap between <span className="text-blue-500">imagination</span> and <span className="text-blue-500">reality</span>.
             </motion.h2>
         </div>
         <div className="flex-1">
             <motion.p
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
               className="text-lg text-zinc-400"
             >
                 We believe that great design is not just about how things look, but how they work. Every pixel, every interaction, and every line of code is crafted with purpose and precision. We partner with brands to build digital products that leave a lasting impact.
             </motion.p>
         </div>
      </div>
    </section>
  );
}
