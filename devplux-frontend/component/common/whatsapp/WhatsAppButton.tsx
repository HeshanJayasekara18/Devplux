"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+94706096401"; // Replace with your WhatsApp number (with country code, no + or spaces)
  const message = "Hello! I'm interested in your services."; // Default message
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="group fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <div className="pointer-events-none translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <div className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg">
          Chat with us
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="Contact us on WhatsApp"
      >
        
        
        {/* Icon */}
        <MessageCircle 
          className="relative z-10 text-white transition-transform duration-300 group-hover:rotate-12" 
          size={28} 
        />
        
        
      </button>
    </div>
  );
}
