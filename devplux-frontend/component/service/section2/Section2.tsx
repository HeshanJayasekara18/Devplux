"use client";

import { Code2, Smartphone, Monitor, Database, Cloud, Cpu, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance web applications built with Next.js and React. We focus on speed, SEO, and scalability.",
    icon: <Monitor size={32} className="text-blue-500" />,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions used by millions. We build for both iOS and Android ecosystems.",
    icon: <Smartphone size={32} className="text-blue-500" />,
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions designed to solve complex business challenges and optimize your workflow.",
    icon: <Code2 size={32} className="text-blue-500" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure and scalable cloud architecture on AWS, Azure, and Google Cloud ensuring 99.9% uptime.",
    icon: <Cloud size={32} className="text-blue-500" />,
  },
  {
    title: "Database Design",
    description: "Optimized database structures for massive data handling, ensuring integrity and lightning-fast queries.",
    icon: <Database size={32} className="text-blue-500" />,
  },
  {
    title: "AI & Automation",
    description: "Leverage the power of Artificial Intelligence to automate processes and gain predictive insights.",
    icon: <Cpu size={32} className="text-blue-500" />,
  },
];

export default function Section2() {
  return (
    <section className="relative w-full bg-black py-24 px-6 md:px-12" suppressHydrationWarning>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Services
          </h2>
          <h3 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Comprehensive <br />
            <span className="text-zinc-500">Tech Solutions.</span>
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/2 p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/20 hover:bg-white/4 hover:-translate-y-1"
            >
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 transition-colors group-hover:bg-blue-600/20">
                  {service.icon}
                </div>
                
                <h4 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 transition-colors group-hover:text-blue-500">
                Learn More <ArrowUpRight size={14} />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-600/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
