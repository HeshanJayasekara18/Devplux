"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import Parallax from "@/component/common/animation/Parallax";
import ScrollReveal from "@/component/common/animation/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/component/common/animation/StaggerContainer";

const projects = [
  {
    title: "Shoe Store",
    category: "ecommerce platform",
    description: "A premium e-commerce platform featuring an immersive shopping experience with dynamic product showcases and seamless checkout.",
    image: "/res/images/shoeweb.png",
    link: "https://online-shoes-store-nine.vercel.app/",
    
  },
  {
    title: "Nova Fintech",
    category: "Banking App",
    description: "Next-generation digital banking experience with seamless crypto integration and smart investments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "Zenith Cloud",
    category: "SaaS Dashboard",
    description: "A premium cloud management workspace for high-growth engineering teams and developers.",
    image: "/res/images/zenith-cloud.png",
    link: "#",
    github: "#",
  },
];

export default function Section3() {
  const router = useRouter();
  
  return (
    <section className="relative w-full bg-black py-24 px-6 md:px-12 md:py-32" suppressHydrationWarning>
      
      <div className="mx-auto ">
        <div className="relative mb-16 flex flex-col items-end text-right md:mb-24">
          {/* Robotic Hand on Left Side */}
          <Parallax speed={-0.3} className="absolute left-0 top-0 -translate-x-[10%] -translate-y-[30%] w-[60%] max-w-[800px] pointer-events-none hidden lg:block">
            <div className="relative">
              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
              
              {/* Hand Image */}
              <Image 
                src="/res/images/robohandbg.png" 
                alt="Robotic Hand" 
                width={500} 
                height={400} 
                className="h-auto w-full object-contain animate-float-subtle"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(59,130,246,0.15))',
                }}
              />
            </div>
          </Parallax>

          <Parallax speed={0.8}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Featured Works
            </h2>
            <h3 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Pushing the Limits of <br />
              <span className="text-zinc-500">Digital Possibilities.</span>
            </h3>
          </Parallax>
        </div>
        
        <ScrollReveal direction="left" duration={0.6} delay={0.5}>
        <StaggerContainer staggerDelay={0.5}  className="grid gap-16 lg:grid-cols-1">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <div
                className="group relative grid gap-12 lg:grid-cols-2 lg:items-center"
              >
              {/* Laptop Mockup Side */}
              <div className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                {/* Mockup Frame */}
                <div className="relative mt-20 mx-auto w-full max-w-[600px] transition-transform duration-700 group-hover:scale-105">
                  {/* Screen Frame */}
                  <div className="relative aspect-16/10 overflow-hidden rounded-t-3xl border-[6px] border-[#1e1e1e] bg-[#0a0a0a] shadow-2xl transition-all duration-500 group-hover:border-blue-500/30">
                    <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-linear-to-b from-white/5 to-transparent" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      priority={index === 0}
                      className="object-cover transition-opacity duration-700 opacity-80 group-hover:opacity-100"
                    />
                    {/* Screen Glare */}
                    <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                  </div>
                  {/* Laptop Base */}
                  <div className="relative h-4 w-[110%] -translate-x-[5%] rounded-b-xl border-t border-white/10 bg-linear-to-b from-[#1e1e1e] to-[#0a0a0a] shadow-xl">
                      <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-md bg-[#2a2a2a]" />
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 -z-10 translate-y-12 bg-blue-600/10 blur-[100px] transition-all duration-500 group-hover:bg-blue-600/20" />
              </div>

              {/* Content Side */}
              <div className="flex flex-col space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
                  {project.category}
                </span>
                <h4 className="text-3xl font-bold text-white md:text-4xl transition-colors group-hover:text-blue-400">
                  {project.title}
                </h4>
                <p className="text-lg leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-blue-400"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-24 text-center">
            <button className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-blue-500/30">
              <span className="relative z-10 transition-colors group-hover:text-blue-400" onClick={() => router.push('/projects')}>View All Masterpieces</span>
              <div className="absolute inset-0 -z-10 bg-blue-600/0 blur-xl transition-all duration-500 group-hover:bg-blue-600/10" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
