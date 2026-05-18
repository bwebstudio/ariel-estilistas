"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { BUSINESS, whatsappUrl } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      {/* Imagen del salón — cálida pero con la luz controlada */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/hero-salon.jpg"
          alt={`Interior del salón ${BUSINESS.name} en San Miguel`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.62) saturate(1.08) sepia(0.06)" }}
        />
      </div>

      {/* Overlay principal — gradiente vertical con baja exposición arriba y casi opaco abajo */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,18,16,0.55) 0%, rgba(15,14,13,0.72) 50%, rgba(11,10,9,0.94) 100%)",
        }}
        aria-hidden
      />

      {/* Viñeta radial para empujar la atención al centro */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 48%, rgba(11,10,9,0) 0%, rgba(11,10,9,0.55) 100%)",
        }}
        aria-hidden
      />

      <Container className="relative z-10 flex flex-1 items-center py-24 sm:py-28 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[0.7rem] font-medium uppercase tracking-widest2 text-champagne-soft"
          >
            Salón de confianza en San Miguel
          </motion.p>

          {/* Lockup tipográfico con halo oscuro para máxima legibilidad */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.06,
            }}
            className="mt-7 drop-shadow-[0_3px_28px_rgba(0,0,0,0.55)]"
          >
            <h1 className="sr-only">{BUSINESS.name}</h1>
            <BrandLogo variant="light" size="hero" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.16,
            }}
            className="mt-8 max-w-xl font-sans text-[1rem] leading-relaxed text-ivory-100/85 drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)] sm:text-[1.05rem] md:text-lg"
          >
            Una peluquería de toda la vida, renovada. Corte, color y
            asesoramiento personalizado con el trato cercano que nuestros
            clientes vuelven a elegir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.24,
            }}
            className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-3.5"
          >
            <ButtonLink
              href={whatsappUrl()}
              variant="primary"
              className="w-full sm:w-auto"
              icon={<MessageCircle size={16} />}
              ariaLabel="Reservar turno por WhatsApp"
            >
              Reservar turno
            </ButtonLink>
            <ButtonLink
              href="#servicios"
              variant="outline"
              className="w-full sm:w-auto"
              icon={<ArrowRight size={15} />}
            >
              Ver servicios
            </ButtonLink>
          </motion.div>
        </div>
      </Container>

      {/* Franja inferior editorial — patrón típico de salones (no pills) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="relative z-10 border-t border-white/5 bg-carbon-900/55 backdrop-blur-md"
      >
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 py-4 text-[0.65rem] uppercase tracking-widest2 text-ivory-100/70 sm:flex-row sm:gap-0 sm:py-3.5 sm:text-[0.68rem]">
            <InfoItem icon={Clock}>
              Martes a sábados · 10:00 – 21:00
            </InfoItem>
            <Separator />
            <InfoItem icon={MapPin}>{BUSINESS.city}, {BUSINESS.province}</InfoItem>
            <Separator />
            <InfoItem icon={Phone}>Tel. {BUSINESS.phone}</InfoItem>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}

function InfoItem({
  icon: Icon,
  children,
}: {
  icon: typeof Clock;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 px-4">
      <Icon size={12} className="text-champagne-soft" strokeWidth={1.6} />
      <span>{children}</span>
    </span>
  );
}

function Separator() {
  return (
    <span
      className="hidden h-3 w-px bg-warm-100/15 sm:block"
      aria-hidden
    />
  );
}
