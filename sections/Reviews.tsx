import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { BUSINESS } from "@/lib/constants";
import { ArrowUpRight, Facebook, Star } from "lucide-react";

export function Reviews() {
  const { socialProof } = BUSINESS;

  return (
    <section
      id="opiniones"
      className="relative overflow-hidden bg-carbon-700 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Opiniones"
            title={
              <>
                Cuando un cliente vuelve,
                <br />
                la <span className="text-champagne-soft">opinión está clara</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center text-center sm:mt-14">
            {/* Cinco estrellas grandes — visual, no técnico */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-champagne-300 text-champagne-300 sm:h-7 sm:w-7"
                  strokeWidth={1}
                  aria-hidden
                />
              ))}
            </div>

            {/* Valoración como protagonista */}
            <p className="mt-7 font-display text-[3rem] font-light leading-none text-ivory sm:text-[3.6rem]">
              {socialProof.directoryRating}
              <span className="text-champagne-soft">
                /{socialProof.directoryBestRating}
              </span>
            </p>
            <p className="mt-3 text-[0.7rem] uppercase tracking-widest2 text-ivory-100/55">
              Sobre {socialProof.directoryReviews} reseñas en directorios locales
            </p>

            {/* Copy cálido — sin dashboard de porcentajes */}
            <p className="mt-9 max-w-lg font-sans text-base leading-relaxed text-ivory-100/80 sm:text-[1.05rem]">
              Más de {socialProof.directoryReviews} reseñas y{" "}
              {socialProof.facebookRecommended} de recomendación en Facebook.
              Una comunidad que crece de boca en boca, porque cuando alguien
              encuentra su peluquería de confianza, vuelve.
            </p>

            {/* CTA hacia Facebook para ver las opiniones reales */}
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-widest2 text-champagne-soft transition-colors hover:text-champagne-300"
            >
              <Facebook size={14} strokeWidth={1.6} />
              Ver opiniones en Facebook
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
