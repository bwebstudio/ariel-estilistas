import {
  Scissors,
  Palette,
  Sparkles,
  Wand2,
  Droplets,
  Crown,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    title: "Corte",
    description:
      "Cortes pensados para tu rostro, tu estilo y la forma natural de tu cabello.",
    icon: Scissors,
  },
  {
    title: "Coloración",
    description:
      "Color a medida, con técnicas profesionales y una mirada cuidada sobre el resultado final.",
    icon: Palette,
  },
  {
    title: "Balayage / iluminación",
    description:
      "Luces suaves y naturales para iluminar el pelo sin perder movimiento ni frescura.",
    icon: Sparkles,
  },
  {
    title: "Alisados",
    description:
      "Alisados profesionales para un cabello más prolijo, brillante y fácil de manejar.",
    icon: Wand2,
  },
  {
    title: "Tratamientos",
    description:
      "Hidratación, nutrición y reparación para devolverle fuerza y suavidad al cabello.",
    icon: Droplets,
  },
  {
    title: "Peinados",
    description:
      "Peinados para eventos, ocasiones especiales o simplemente para verte impecable.",
    icon: Crown,
  },
  {
    title: "Hombre",
    description:
      "Cortes masculinos clásicos y modernos, con atención al detalle.",
    icon: UserRound,
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-warm-section py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title={
              <>
                Servicios para cuidar
                <br />
                tu estilo{" "}
                <span className="text-champagne-soft">todos los días</span>
              </>
            }
            description="Desde un corte práctico hasta un cambio de color, trabajamos cada servicio con asesoramiento real y atención al detalle."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <Reveal
              key={service.title}
              delay={idx * 0.04}
              className="card-surface group relative flex flex-col gap-5 rounded-2xl p-7 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.07] text-champagne-soft transition-colors duration-300 group-hover:border-white/20 group-hover:text-champagne-300">
                  <service.icon size={18} strokeWidth={1.5} />
                </span>
                <span className="text-[0.62rem] uppercase tracking-widest2 text-ivory-100/35">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-ivory sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2.5 max-w-sm font-sans text-[0.95rem] leading-relaxed text-ivory-100/65">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
