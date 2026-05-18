import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BUSINESS } from "@/lib/constants";

const STATS = [
  { value: "+20", label: "años de experiencia" },
  {
    value: BUSINESS.socialProof.facebookRecommended,
    label: "recomendado en Facebook",
  },
  {
    value: `${BUSINESS.socialProof.directoryRating}/10`,
    label: `sobre ${BUSINESS.socialProof.directoryReviews} reseñas`,
  },
  {
    value: BUSINESS.socialProof.facebookLikes,
    label: "personas siguen Ariel Estilistas",
  },
];

export function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-warm-section py-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
              <Image
                src="/images/ariel/about-ariel.png"
                alt={`Ariel trabajando en ${BUSINESS.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover saturate-[0.85] contrast-[0.98]"
                style={{ filter: "sepia(0.08)" }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black via-black/40 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/60"
                aria-hidden
              />
            </div>

            <div className="absolute -bottom-6 -right-3 hidden w-60 rounded-xl border border-white/[0.07] bg-carbon-700/90 p-5 backdrop-blur-md sm:block lg:-right-8">
              <p className="font-display text-2xl font-light text-champagne-soft sm:text-3xl">
                +20 años
              </p>
              <p className="mt-1 font-sans text-sm text-ivory-100/75">
                acompañando a clientes en San Miguel.
              </p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionLabel align="left">Sobre nosotros</SectionLabel>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-[1.85rem] font-light leading-[1.12] tracking-tight text-ivory sm:text-4xl md:text-[2.6rem]">
                Un clásico de San Miguel,{" "}
                <span className="text-champagne-soft">renovado</span>.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-ivory-100/75 sm:text-[1.05rem]">
                <p>
                  En Ariel Estilistas acompañamos a nuestros clientes con
                  cortes, coloración y tratamientos pensados para cada
                  persona. Nuestro diferencial está en escuchar, asesorar y
                  cuidar cada detalle para que te sientas cómoda/o con tu
                  imagen.
                </p>
                <p>
                  Somos una peluquería de confianza en San Miguel: cercana,
                  profesional y con años de trabajo detrás de cada
                  recomendación de boca en boca.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-white/5 py-6 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-2xl font-light text-champagne-soft sm:text-[1.7rem]">
                      {stat.value}
                    </dt>
                    <dd className="mt-1.5 text-[0.7rem] uppercase tracking-widest2 text-ivory-100/55">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8">
                <ButtonLink
                  href="#trabajos"
                  variant="outline"
                  icon={<ArrowRight size={15} />}
                >
                  Ver trabajos
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
