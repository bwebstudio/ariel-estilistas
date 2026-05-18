"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsappFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      className={cn(
        // Posición segura en mobile para no tapar contenido
        "fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2 rounded-full bg-champagne-400 px-4 py-3 text-[0.72rem] font-medium uppercase tracking-widest2 text-carbon-800 shadow-card transition-all duration-400 hover:bg-champagne-300 sm:bottom-7 sm:right-7 sm:px-5 sm:py-3.5",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      <MessageCircle size={16} />
      <span className="hidden sm:inline">Reservar turno</span>
    </a>
  );
}
