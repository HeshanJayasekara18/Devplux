"use client";

import { Search, PenTool, Code, Rocket, CheckCircle } from "lucide-react";
import Parallax from "@/component/common/animation/Parallax";
import StaggerContainer, { StaggerItem } from "@/component/common/animation/StaggerContainer";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your vision, target audience, and business goals to build a solid foundation.",
    icon: <Search size={24} className="text-blue-500" />,
  },
  {
    number: "02",
    title: "Design",
    description: "Our design team crafts intuitive and visually stunning interfaces that enhance user engagement.",
    icon: <PenTool size={24} className="text-blue-500" />,
  },
  {
    number: "03",
    title: "Development",
    description: "We bring designs to life with clean, scalable, and high-performance code using modern tech.",
    icon: <Code size={24} className="text-blue-500" />,
  },
  {
    number: "04",
    title: "Testing",
    description: "Rigorous quality assurance and user testing to ensure a bug-free, seamless experience.",
    icon: <CheckCircle size={24} className="text-blue-500" />,
  },
  {
    number: "05",
    title: "Launch",
    description: "Deployment and optimization to ensure a successful and high-impact digital product debut.",
    icon: <Rocket size={24} className="text-blue-500" />,
  },
];

export default function Section4() {
  return (
    <section className="relative w-full bg-black py-24 px-6 md:px-12 md:py-32" suppressHydrationWarning>
      <div className="mx-auto ">
        <Parallax speed={0.2}>
          <div className="mb-16 md:mb-24">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Our Process
            </h2>
            <h3 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              How We Bring Your <br />
              <span className="text-zinc-500">Ideas to Life.</span>
            </h3>
          </div>
        </Parallax>

        <StaggerContainer staggerDelay={0.1} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div
                className="group relative flex flex-col items-start rounded-3xl border border-white/5 bg-white/2 p-8 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/20 hover:bg-white/4"
              >
              {/* Step Number Badge */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-xl font-black text-blue-500 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                {step.number}
              </div>

              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-blue-600/10">
                {step.icon}
              </div>

              <h4 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
                {step.description}
              </p>

              {/* Decorative Connectors for Laptop (Visible on Lg Screens) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-white/5 lg:block" />
              )}
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
