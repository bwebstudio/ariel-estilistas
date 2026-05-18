import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/constants";

type Shot = { src: string; alt: string; category: string };

// Selección coherente: interior, corte, color, ambiente, detalle, manos trabajando.
const SHOTS: Shot[] = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    alt: "Sesión de styling en el salón",
    category: "Styling",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
    alt: "Corte profesional",
    category: "Corte",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
    alt: "Coloración natural",
    category: "Color",
  },
  {
    src: "https://images.unsplash.com/photo-1635273051937-c08b6b3a3afa?auto=format&fit=crop&w=900&q=80",
    alt: "Interior del salón",
    category: "Ambiente",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    alt: "Detalle de cabello cuidado",
    category: "Detalle",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    alt: "Manos trabajando en el cabello",
    category: "Trabajo",
  },
];

export function Gallery() {
  return (
    <section
      id="trabajos"
      className="relative overflow-hidden bg-warm-section py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Trabajos"
            title={
              <>
                Trabajos y momentos
                <br />
                del <span className="text-champagne-soft">salón</span>
              </>
            }
            description="Una selección de cortes, color y detalles del día a día en Ariel Estilistas."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SHOTS.map((shot, idx) => (
            <Reveal
              key={shot.src}
              delay={idx * 0.04}
              as="article"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-carbon-700"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ filter: "saturate(0.92) sepia(0.06) contrast(1.02)" }}
              />

              {/* Gradiente inferior — refuerza la caption sin oscurecer la imagen */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-carbon-900/85 via-carbon-900/30 to-transparent"
                aria-hidden
              />

              {/* Caption editorial siempre visible — número + categoría */}
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <span className="font-display text-[0.95rem] font-light leading-none text-champagne-soft">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.66rem] font-medium uppercase tracking-widest2 text-ivory-100/90">
                    {shot.category}
                  </span>
                </div>
                <ArrowUpRight
                  size={15}
                  className="translate-y-1 text-ivory-100/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-ivory-100/90"
                  strokeWidth={1.6}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink
              href={whatsappUrl()}
              variant="primary"
              icon={<MessageCircle size={16} />}
            >
              Reservar turno
            </ButtonLink>
            <p className="text-[0.68rem] uppercase tracking-widest2 text-ivory-100/45">
              Más trabajos en Instagram & Facebook
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
