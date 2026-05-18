import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/constants";

type Shot = { src: string; alt: string; category: string };

const SHOTS: Shot[] = [
  {
    src: "/images/trabajos/01-styling.jpg",
    alt: "Sesión de styling en el salón",
    category: "Styling",
  },
  {
    src: "/images/trabajos/02-corte.jpg",
    alt: "Corte profesional",
    category: "Corte",
  },
  {
    src: "/images/trabajos/03-color.jpg",
    alt: "Coloración natural",
    category: "Color",
  },
  {
    src: "/images/trabajos/04-ambiente.jpg",
    alt: "Interior del salón",
    category: "Ambiente",
  },
  {
    src: "/images/trabajos/05-detalle.jpg",
    alt: "Detalle de cabello cuidado",
    category: "Detalle",
  },
  {
    src: "/images/trabajos/06-trabajo.jpg",
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
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-black"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ filter: "saturate(0.92) sepia(0.06) contrast(1.02)" }}
              />

              {/* Vignette superior — masca luces brillantes del techo del salón en el borde alto */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black via-black/40 to-transparent"
                aria-hidden
              />
              {/* Vignette inferior — masca píxeles claros del borde bajo */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent"
                aria-hidden
              />
              {/* Inset ring — cierra los bordes redondeados anti-aliased */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/60"
                aria-hidden
              />

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
