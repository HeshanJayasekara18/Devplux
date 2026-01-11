'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Code, Smartphone, Palette } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Building high-performance, scalable web applications with modern technologies",
    icon: Code,
  },
  {
    title: "Mobile Solutions",
    description: "Crafting seamless mobile experiences for iOS and Android using Flutter and React Native for Cross-Platform excellence.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually stunning user interfaces that prioritize user experience and brand identity.",
    icon: Palette,
  },
];

export default function Section2() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Scroll tracking - Triggers as Section 2 leaves the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // TRANSFORMATIONS: Move from Section 2 (Right) to Section 3 (Left)
  // 1. Move Horizontal: Right -> Left
  const x = useTransform(scrollYProgress, [0.4, 0.8], ["0%", "-110%"]);
  
  // 2. Move Vertical: Drifting down into Section 3
  const y = useTransform(scrollYProgress, [0.4, 0.8], ["0%", "80%"]);

  // 3. FLIP: 3D Rotation from pointing inwards (Right side) to pointing inwards (Left side)
  // Initial state: scaleX(-1) which points LEFT.
  // Target state: scaleX(1) which points RIGHT.
  // We can animate scaleX linearly.
  const scaleX = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [-1, 0, 1]);
  
  const rotate = useTransform(scrollYProgress, [0.4, 0.8], [0, 15]);
  const scale = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [1, 0.8, 1]);

  // Combined transforms for mouse 3D effect
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    // overflow-visible is CRITICAL here so the hand can leave the section bounds
    <section ref={containerRef} className="relative w-full min-h-screen bg-black py-16 px-6 md:px-12 overflow-visible z-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Top Header */}
        <div className="relative mb-2 min-h-[450px] flex items-start">
          <div className="relative z-10 pt-8 max-w-xl">
            <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600">
              OUR EXPERTISE
            </h2>
            <h1 className="text-[56px] font-bold leading-[1.1] text-white mb-1">
              Digital Solutions for the
            </h1>
            <h1 className="text-[56px] font-bold leading-[1.1] text-gray-600">
              Modern Era.
            </h1>
          </div>

          {/* Right - 3D Robotic Hand */}
          <div className="absolute mr-12 mtop-0 right-0 w-[70%] h-full flex items-start justify-end pointer-events-none">
            {/* Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[150px]"></div>
            
            {/* 3D Hand */}
            <motion.div 
              style={{
                x, // Moves Left
                y, // Moves Down into next section
                scaleX, // Flips orientation
                scale,
                rotate,
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[800px] -mr-24 will-change-transform z-50 origin-center"
            >
              <img 
                src="/res/images/robohandbg.png" 
                alt="Robotic Hand" 
                className="h-auto w-full object-contain animate-float-subtle"
                style={{
                  filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 50px rgba(59,130,246,0.15))',
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-3 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-start rounded-[28px] border border-zinc-800/60 bg-gradient-to-br from-zinc-900/40 to-black/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-gradient-to-br hover:from-zinc-900/60 hover:to-black/80"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900/50 border border-zinc-800/60 transition-all duration-300 group-hover:bg-blue-950/30 group-hover:border-blue-500/20">
                <service.icon size={22} className="text-blue-500" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-subtle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float-subtle {
          animation: float-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}