import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const ARIEL_PHOTO = "/images/ariel/ariel-retrato.jpg";

export function Ariel() {
  return (
    <section
      id="ariel"
      className="relative overflow-hidden bg-carbon-700 py-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black">
              <Image
                src={ARIEL_PHOTO}
                alt="Ariel — estilista y fundador del salón"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ filter: "saturate(0.92) sepia(0.06) contrast(1.02)" }}
              />
              {/* Vignette superior — masca luces brillantes del borde alto */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black via-black/40 to-transparent"
                aria-hidden
              />
              {/* Vignette inferior — masca cualquier transparencia o píxel claro del PNG */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent"
                aria-hidden
              />
              {/* Ring oscuro inset — cierra los bordes redondeados anti-aliased */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/60"
                aria-hidden
              />
            </div>
          </Reveal>

          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionLabel align="left">Conocé a Ariel</SectionLabel>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-[1.85rem] font-light leading-[1.12] tracking-tight text-ivory sm:text-4xl md:text-[2.6rem]">
                Atiende cada turno{" "}
                <span className="text-champagne-soft">personalmente</span>.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-ivory-100/75 sm:text-[1.05rem]">
                <p>
                  Más de 20 años de oficio en San Miguel. Conoce a cada cliente
                  por su nombre y por su pelo: cómo cae, qué le queda mejor,
                  cuánto puede esperar entre visita y visita.
                </p>
                <p>
                  No vende lo que no necesitás. Si te queda mejor un corte
                  simple, eso te recomienda. Si lo que pediste no te va a
                  favorecer, te lo dice.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <blockquote className="mt-8 border-l-2 border-champagne-400/35 pl-5 font-serif text-lg font-light italic leading-relaxed text-ivory-100/85 sm:text-xl">
                “Una buena peluquería no es la que te impone un estilo, es la
                que te ayuda a encontrar el tuyo.”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
