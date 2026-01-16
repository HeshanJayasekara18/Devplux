"use client";

import { useState } from "react";
import { Briefcase, Heart, Rocket, Users, Zap, Target, Mail, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/component/common/navbar/Navbar";
import Footer from "@/component/common/footer/Footer";
import ScrollReveal from "@/component/common/animation/ScrollReveal";
import StaggerContainer, { StaggerItem } from "@/component/common/animation/StaggerContainer";

export default function CareersPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous status
    setSubmitStatus("idle");
    setErrorMessage("");

    // Validate email
    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      setSubmitStatus("error");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus("success");
      setEmail(""); // Clear the form
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const values = [
    {
      icon: <Rocket size={32} />,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaborative Spirit",
      description: "Teamwork drives our success. We believe in the power of diverse perspectives.",
    },
    {
      icon: <Zap size={32} />,
      title: "Move Fast",
      description: "Agility and speed matter. We iterate quickly and deliver results that exceed expectations.",
    },
    {
      icon: <Heart size={32} />,
      title: "Passion & Purpose",
      description: "We're driven by meaningful work that makes a real impact on businesses and users.",
    },
    {
      icon: <Target size={32} />,
      title: "Excellence Always",
      description: "Quality is non-negotiable. We craft solutions with precision and attention to detail.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Growth Mindset",
      description: "Continuous learning and development are at the core of everything we do.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-black px-6 pt-32 pb-24 md:px-12 md:pt-40 md:pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-purple-600/10 blur-[120px] delay-1000" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal delay={0.2}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-blue-400">
              <Briefcase size={16} />
              Careers at Devplux
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Build the Future with
              <br />
              <span className="bg-linear-to-r bg-blue-600 bg-clip-text text-transparent">
                Dev
              </span>
              <span className="bg-linear-to-r bg-white bg-clip-text text-transparent">
                plux
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Join a team of passionate innovators crafting cutting-edge digital experiences that transform businesses and delight users.
          </p>
          </ScrollReveal>
        </div>
      </section>

      {/* No Positions Available Section */}
      <section className="relative w-full bg-black px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Empty State Visual */}
          <ScrollReveal delay={0.1}>
            <div className="relative mx-auto mb-12 flex h-64 w-64 items-center justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-600/20 to-purple-600/20 blur-3xl" />
              
              {/* Icon Container */}
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <Briefcase className="text-blue-400" size={64} strokeWidth={1.5} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              No Open Positions
              <br />
              <span className="text-zinc-500">Right Now</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              We're not actively hiring at the moment, but we're always on the lookout for exceptional talent. 
              Great opportunities are on the horizon-stay connected and be the first to know when we're ready to grow our team.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div 
              onClick={() => {
                document.getElementById('subscribe-form')?.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center' 
                });
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 cursor-pointer transition-all hover:gap-3 hover:text-blue-300"
            >
              <span>Subscribe below to get notified</span>
              <ArrowRight size={16} className="animate-pulse" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="relative w-full bg-black px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal delay={0.1}>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Values
              </h2>
              <h3 className="text-4xl font-bold text-white md:text-5xl">
                What We Stand For
              </h3>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/5"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-600/0 to-purple-600/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-600/10 group-hover:to-purple-600/10 group-hover:opacity-100" />
                  
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 text-blue-400 transition-transform duration-500 group-hover:scale-110 group-hover:border-blue-500/30">
                    {value.icon}
                  </div>
                  
                  <h4 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                    {value.title}
                  </h4>
                  
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="relative w-full bg-black px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-600/5 to-purple-600/5 p-12 backdrop-blur-sm md:p-16">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 h-64 w-64 bg-blue-600/10 blur-[100px]" />
              
              <div className="relative text-center">
                <div className="mb-6 inline-flex items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 p-4">
                  <Mail className="text-blue-400" size={32} />
                </div>
                
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Stay in the Loop
                </h2>
                
                <p className="mb-8 text-lg text-zinc-400">
                Be the first to hear about new opportunities. Drop your email and we'll notify you when positions open up.
              </p>

              <form id="subscribe-form" onSubmit={handleSubmit} className="relative mx-auto max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                    className={`w-full rounded-2xl border py-4 pl-6 pr-32 text-sm text-white outline-hidden placeholder:text-zinc-600 transition-all ${
                      submitStatus === "error"
                        ? "border-red-500/50 bg-red-500/5 focus:border-red-500/50"
                        : submitStatus === "success"
                        ? "border-green-500/50 bg-green-500/5"
                        : "border-white/10 bg-white/5 focus:border-blue-500/30 focus:bg-white/10"
                    } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-2 top-2 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                    <CheckCircle2 size={18} />
                    <span>Successfully subscribed! We'll keep you updated.</span>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && errorMessage && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
