"use client";

import { Instagram, Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-black pt-24 pb-12 transition-all duration-500" suppressHydrationWarning>
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-1/2 -z-10 h-64 w-[80%] -translate-x-1/2 bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8 flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-blue-500">
                Dev<span className="text-white">plux.</span>
              </span>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-zinc-500">
              Transforming abstract visions into high-performance digital experiences. We build the future, one line of code at a time.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Github size={18} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/2 text-zinc-500 transition-all hover:border-blue-500/30 hover:bg-blue-600/10 hover:text-blue-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Workflow", "Success Stories", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="space-y-4">
              {["Web Development", "Mobile Solutions", "UI/UX Design", "Cloud Architecture", "AI Integration"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-zinc-500 transition-colors hover:text-blue-400">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-widest text-white">Newsletter</h4>
            <p className="mb-6 text-sm text-zinc-500">
              Get the latest insights on digital transformation and tech trends.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-2xl border border-white/5 bg-white/2 py-4 pl-6 pr-14 text-sm text-white outline-hidden placeholder:text-zinc-600 focus:border-blue-500/30"
              />
              <button className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-white/5 pt-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-zinc-600">
              © {currentYear} Devplux Studio, Sri Lanka. Crafted with precision in the digital void.
            </p>
            <div className="flex items-center gap-8 text-sm text-zinc-600">
              <a href="#" className="transition-colors hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-zinc-400">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-zinc-400">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
