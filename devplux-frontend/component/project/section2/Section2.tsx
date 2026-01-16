"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    category: "Web Application",
    description: "A comprehensive data visualization platform for enterprise metrics.",
    image: "/artifacts/project_dashboard_1768131863988.png",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Luxury E-Commerce",
    category: "Online Store",
    description: "Minimalist fashion retail experience with seamless checkout.",
    image: "/artifacts/project_ecommerce_1768131889288.png",
    color: "from-amber-600 to-orange-500",
  },
  {
    id: 3,
    title: "Social Connect",
    category: "Mobile First",
    description: "Vibrant social media interface connecting communities globally.",
    image: "/artifacts/project_social_1768131912326.png",
    color: "from-purple-600 to-pink-500",
  },
];

function getProjectMessage(project: { title: string; category: string }) {
  const cat = project.category.toLowerCase();
  if (cat.includes("web")) return "Future‑proof analytics for bold decisions.";
  if (cat.includes("store") || cat.includes("commerce")) return "Luxury meets code — seamless experiences ahead.";
  if (cat.includes("mobile")) return "Connecting communities — your next big social story.";
  return "Crafting the future — let’s build together.";
}

export default function Section2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative  w-full bg-black py-24">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]" />
             <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px]" />
        </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-32 px-6 md:px-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="mt-24 flex justify-center pb-24">
        <button className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-black transition-all hover:bg-zinc-200">
          {/* <span className="text-sm font-bold uppercase tracking-widest">
            View More Projects
          </span> */}
          <div className="relative h-4 w-4 overflow-hidden">
             <div className="absolute left-0 top-0 flex h-full w-full translate-x-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-full">
               →
             </div>
             <div className="absolute left-0 top-0 flex h-full w-full -translate-x-full items-center justify-center transition-transform duration-300 group-hover:translate-x-0">
               →
             </div>
          </div>
        </button>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;
  const [showPopup, setShowPopup] = useState(false);
  const message = getProjectMessage(project);

  useEffect(() => {
    if (!showPopup) return;
    const t = setTimeout(() => setShowPopup(false), 3000);
    return () => clearTimeout(t);
  }, [showPopup]);
  
  return (
    <div className={`flex flex-col items-center gap-12 md:flex-row ${isEven ? "" : "md:flex-row-reverse"}`}>
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left relative">
        <motion.div
           initial={{ opacity: 0, x: isEven ? -50 : 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
        >
            <span className={`bg-linear-to-r ${project.color} bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent`}>
            {project.category}
            </span>
            <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">{project.title}</h2>
            <p className="mt-4 text-lg text-zinc-400">{project.description}</p>
            
            <button
              onClick={() => setShowPopup(true)}
              className="group mt-8 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 mx-auto md:mx-0"
            >
                View Project
                <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            {showPopup && (
              <motion.div
                role="dialog"
                aria-live="polite"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:top-full md:mt-2 z-50"
              >
                <div className="relative rounded-2xl border border-white/15 bg-black/70 px-4 py-3 shadow-2xl backdrop-blur-md">
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-white/5 to-white/0" />
                  <div className="absolute -inset-0.5 -z-20 rounded-3xl bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-cyan-500/30 blur-md" />
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">✨</span>
                    <p className="text-sm text-white/90">
                      {message}
                    </p>
                    <button
                      aria-label="Close"
                      onClick={() => setShowPopup(false)}
                      className="ml-2 rounded-md px-2 py-1 text-xs text-white/60 hover:text-white/90"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
        </motion.div>
      </div>

      {/* 3D Laptop Mockup */}
      <div className="flex-1 perspective-1000">
        <motion.div
          initial={{ opacity: 0, rotateY: isEven ? 15 : -15, scale: 0.8 }}
          whileInView={{ opacity: 1, rotateY: isEven ? 5 : -5, scale: 1 }}
          whileHover={{ rotateY: 0, scale: 1.05, rotateX: 2 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto aspect-16/10 w-full max-w-[600px] transform-gpu transition-all duration-500 preserve-3d"
        >
          {/* Laptop Lid (Screen) */}
          <div className="absolute inset-0 rounded-xl bg-zinc-800 p-2 ring-1 ring-white/10 shadow-2xl">
             <div className="h-full w-full overflow-hidden rounded-lg bg-black relative">
                {/* Screen Content */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                
                {/* Screen Glare/Reflection */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
             </div>
             
             {/* Camera Dot */}
             <div className="absolute top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-zinc-600/50" />
          </div>

          {/* Laptop Base (Keyboard area implied) - pseudo 3D effect */}
          <div className="absolute -bottom-3 left-1/2 h-4 w-[110%] -translate-x-1/2 rounded-b-xl bg-zinc-900 shadow-xl transform skew-x-12 origin-bottom brightness-50" style={{ transform: "translateX(-50%) rotateX(-80deg)" }}>
              <div className="absolute top-0 left-[10%] w-[80%] h-px bg-zinc-700" />
          </div>
          
          {/* Glow underneath */}
          <div className={`absolute -bottom-10 left-1/2 h-20 w-[90%] -translate-x-1/2 bg-linear-to-t ${project.color} opacity-20 blur-3xl`} />
        </motion.div>
      </div>
    </div>
  );
}
