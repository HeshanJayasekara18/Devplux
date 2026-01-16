"use client";

import { Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ScrollReveal from "@/component/common/animation/ScrollReveal";

export default function Section1() {
  const router = useRouter();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Lerp logic: current = current + (target - current) * ease
      const ease = 0.08;
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * ease;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * ease;

      setPosition({
        x: currentPosition.current.x,
        y: currentPosition.current.y,
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden pt-32 pb-24 px-6 md:px-12 flex items-center" suppressHydrationWarning>
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Interactive Mouse Blob (Blue-White Mix) */}
        <div 
          className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px] will-change-transform filter mix-blend-screen"
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
            background: `radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)`
          }} 
        />
        
        {/* Supporting Ambient Blobs */}
        <div className="animate-blob absolute -left-4 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[80px] filter mix-blend-screen opacity-50" />
        <div className="animate-blob animation-delay-2000 absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[80px] filter mix-blend-screen opacity-50" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal delay={0.1}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 backdrop-blur-md">
              <Sparkles size={14} /> Our Expertise
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              Digital Solutions <br />
              Tailored for <span className="text-blue-500">Excellence.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              We specialize in crafting bespoke digital experiences that combine innovative design with cutting-edge technology to drive your business forward.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10" onClick={() => router.push('/contact')}>
              Start Your Project
            </button>
            
          </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Subtle indicator element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce opacity-20">
        <div className="h-10 w-[1px] bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
