"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

export default function Section2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you soon.'
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-black px-6 pb-24 md:px-12">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-md md:p-12"
        >
           <h2 className="mb-8 text-3xl font-bold text-white">Send us a Message</h2>
           
           {/* Status Messages */}
           {status.type && (
             <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className={`mb-6 flex items-center gap-3 rounded-xl p-4 ${
                 status.type === 'success' 
                   ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                   : 'bg-red-500/10 border border-red-500/20 text-red-400'
               }`}
             >
               {status.type === 'success' ? (
                 <CheckCircle size={20} />
               ) : (
                 <XCircle size={20} />
               )}
               <p className="text-sm font-medium">{status.message}</p>
             </motion.div>
           )}

           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Name</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      disabled={isLoading}
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      disabled={isLoading}
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                 </div>
              </div>
              
              <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Subject</label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    disabled={isLoading}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
              </div>

              <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    disabled={isLoading}
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
           </form>
        </motion.div>
      </div>
    </section>
  );
}
