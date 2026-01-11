"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-500 md:px-12 ${
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent py-6"
      }`} 
      suppressHydrationWarning
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tighter text-white">
          <span className="text-blue-600">Dev</span>plux
        </span>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                isActive ? "text-blue-500" : "text-zinc-300 hover:text-blue-400"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Toggle Placeholder */}
      <button className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden">
        <div className="h-0.5 w-5 bg-white" />
        <div className="h-0.5 w-5 bg-white" />
      </button>
    </nav>
  );
}
