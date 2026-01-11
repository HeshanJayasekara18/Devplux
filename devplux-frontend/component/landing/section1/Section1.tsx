"use client";

import { useRef, useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";

export default function Section1() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showReplay, setShowReplay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setShowReplay(true);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setShowReplay(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white" suppressHydrationWarning>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/res/video/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Replay Button (Subtle/Transparent) */}
      <button
        onClick={handleReplay}
        className={`absolute bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-black/40 hover:border-white/20 ${
          showReplay ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
        title="Replay Video"
      >
        <RotateCcw size={18} className="text-white/60" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 md:px-12">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Transform Your <br />
            Vision into <br />
            <span className="text-white">Reality.</span>
          </h1>
          
          <p className="max-w-md text-lg text-zinc-300 md:text-xl">
            We bridge the gap between abstract concepts and powerful digital solutions.
          </p>

          <a 
            href="mailto:contact@devplux.com?subject=Let's Build Something Amazing&body=Hi Devplux Team,%0D%0A%0D%0AI'm interested in working with you on a project.%0D%0A%0D%0A"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105 active:scale-95"
          >
            Build with Us
          </a>
        </div>
      </div>

      {/* Decorative Glow Elements (Optional, but adds to the "neon" feel of the image) */}
      <div className="absolute bottom-10 right-10 z-10">
        <div className="h-6 w-6 rounded-full bg-white/20 blur-sm flex items-center justify-center">
            <div className="h-2 w-2 bg-white rotate-45" />
        </div>
      </div>
    </section>
  );
}
