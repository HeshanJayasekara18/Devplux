"use client";

import { Handshake, Zap, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    title: "Agile Methodology",
    description: "We adapt to changes quickly and deliver value iteratively, ensuring your project evolves with your needs.",
    icon: <Zap size={28} className="text-blue-500" />,
  },
  {
    title: "Client-Centric Approach",
    description: "Your vision is our priority. We maintain transparent communication and involve you at every critical stage.",
    icon: <Users size={28} className="text-blue-500" />,
  },
  {
    title: "Future-Proof Tech",
    description: "We build with the latest, supported technologies to ensure your solution remains relevant and scalable.",
    icon: <Handshake size={28} className="text-blue-500" />,
  },
  {
    title: "Rigorous Security",
    description: "Security isn't an afterthought. We implement industry-standard practices to protect your data and users.",
    icon: <ShieldCheck size={28} className="text-blue-500" />,
  },
];

export default function Section3() {
  return (
    <section className="relative w-full bg-black py-24 px-6 md:px-12 md:py-32" suppressHydrationWarning>
      {/* Background Gradient */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why Choose Us
              </h2>
              <h3 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Partners in Your <br />
                <span className="text-zinc-500">Digital Growth.</span>
              </h3>
            </div>
            
            <p className="text-lg leading-relaxed text-zinc-400">
              We don't just write code; we build relationships. Our commitment to excellence and user satisfaction sets us apart in the crowded digital landscape.
            </p>

            <button 
              onClick={() => {
                const phoneNumber = "+94706096401"; // Replace with your WhatsApp number
                const message = "Hello! I'd like to collaborate with Devplux on a project.";
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, "_blank");
              }}
              className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95"
            >
              Let's Collaborate
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-3xl border border-white/5 bg-white/2 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/20 hover:bg-white/4"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 transition-colors group-hover:bg-blue-600/20">
                  {feature.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-blue-400">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
