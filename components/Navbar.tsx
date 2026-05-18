"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { BUSINESS, NAV_LINKS, whatsappUrl } from "@/lib/constants";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-carbon-800/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:h-16 sm:px-8 lg:px-12">
        <Link
          href="#top"
          className="relative z-50"
          aria-label={`${BUSINESS.name} — Inicio`}
        >
          <BrandLogo size="nav" variant="light" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.75rem] uppercase tracking-widest2 text-ivory-100/65 transition-colors hover:text-champagne-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-champagne-400 px-4 py-2 text-[0.7rem] uppercase tracking-widest2 text-carbon-800 transition-colors hover:bg-champagne-300 lg:inline-flex"
          >
            <MessageCircle size={14} />
            Reservar turno
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] text-ivory transition hover:border-white/20 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 transform-gpu bg-carbon-800/97 backdrop-blur-xl transition-opacity duration-400 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-7 px-6">
          <ul className="flex flex-col items-center gap-5 text-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-light tracking-wide text-ivory transition-colors hover:text-champagne-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-champagne-400 px-7 py-3.5 text-[0.72rem] uppercase tracking-widest2 text-carbon-800 shadow-card"
          >
            <MessageCircle size={14} />
            Reservar turno
          </a>
          <p className="text-[0.7rem] uppercase tracking-widest2 text-ivory-100/45">
            {BUSINESS.hoursShort}
          </p>
        </div>
      </div>
    </header>
  );
}
