import { HeartHandshake, MessagesSquare, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  {
    title: "Trato cercano y honesto",
    description:
      "Te recibimos como a alguien de la casa. Conocemos el cabello y la rutina de cada cliente.",
    icon: HeartHandshake,
  },
  {
    title: "Asesoramiento según tu pelo y tu estilo",
    description:
      "Te recomendamos lo que mejor te queda, sin venderte servicios que no necesitás.",
    icon: MessagesSquare,
  },
  {
    title: "Resultados naturales y fáciles de mantener",
    description:
      "Buscamos que tu cabello se vea saludable, cuidado y fiel a tu estilo.",
    icon: Leaf,
  },
];

export function Trust() {
  return (
    <section
      id="confianza"
      className="relative overflow-hidden bg-carbon-700 py-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
          <Reveal>
            <SectionLabel align="left">Por qué nos elegís</SectionLabel>
            <h2 className="mt-4 font-display text-[1.85rem] font-light leading-[1.12] tracking-tight text-ivory sm:text-4xl md:text-[2.6rem]">
              De esos lugares que{" "}
              <span className="text-champagne-soft">se recomiendan</span>.
            </h2>
            <p className="mt-5 max-w-md font-sans text-[1.02rem] leading-relaxed text-ivory-100/75">
              Ariel Estilistas forma parte de la rutina de muchas personas en
              San Miguel. Un salón cercano, con experiencia y atención
              personalizada, donde cada visita empieza por escuchar lo que
              necesitás.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:gap-5">
            {PILLARS.map((pillar, idx) => (
              <Reveal
                key={pillar.title}
                delay={idx * 0.06}
                className="card-surface flex items-start gap-5 rounded-2xl p-6 sm:p-7"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.07] text-champagne-soft">
                  <pillar.icon size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ivory">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-[0.95rem] leading-relaxed text-ivory-100/65">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
