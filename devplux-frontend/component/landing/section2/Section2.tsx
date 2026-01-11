"use client";

import { Code, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building high-performance, scalable web applications with modern technologies ",
    icon: <Code size={32} className="text-blue-500" />,
  },
  {
    title: "Mobile Solutions",
    description: "Crafting seamless mobile experiences for iOS and Android using Flutter and React Native for Cross-Platform excellence.",
    icon: <Smartphone size={32} className="text-blue-500" />,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually stunning user interfaces that prioritize user experience and brand identity.",
    icon: <Palette size={32} className="text-blue-500" />,
  },
];

export default function Section2() {
  return (
    <section className="relative w-full bg-black py-24 px-6 md:px-12 md:py-32" suppressHydrationWarning>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center md:mb-24 md:text-left">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Expertise
          </h2>
          <h3 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Digital Solutions for the <br />
            <span className="text-zinc-500">Modern Era.</span>
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-blue-500/50 hover:bg-white/10"
            >
              {/* Decorative Gradient Background */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-600/10 blur-3xl transition-all duration-500 group-hover:bg-blue-600/20" />
              
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600/10 transition-colors group-hover:bg-blue-600/20">
                {service.icon}
              </div>

              <h4 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                {service.title}
              </h4>
              <p className="text-base leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
