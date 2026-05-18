import { Star, ThumbsUp, MessageSquare, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/lib/constants";

type ProofCard = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

const { socialProof } = BUSINESS;

const PROOFS: ProofCard[] = [
  {
    value: socialProof.facebookRecommended,
    label: "Recomendado",
    description: `Sobre ${socialProof.facebookReviews} opiniones publicadas en Facebook.`,
    icon: ThumbsUp,
  },
  {
    value: `${socialProof.directoryRating}/10`,
    label: "Valoración",
    description: `Promedio en directorios locales sobre ${socialProof.directoryReviews} reseñas verificadas.`,
    icon: Star,
  },
  {
    value: `${socialProof.facebookReviews}`,
    label: "Opiniones en Facebook",
    description:
      "Comentarios y experiencias compartidas por nuestros clientes.",
    icon: MessageSquare,
  },
  {
    value: socialProof.facebookLikes,
    label: "Personas nos siguen",
    description: "Una comunidad que crece de boca en boca en San Miguel.",
    icon: Users,
  },
];

export function Reviews() {
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
                Clientes que vuelven{" "}
                <span className="text-champagne-soft">y recomiendan</span>
              </>
            }
            description="La confianza se construye con cada visita. Estos son los números reales que reflejan años de trabajo en el salón."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {PROOFS.map((proof, idx) => (
            <Reveal
              key={proof.label}
              delay={idx * 0.05}
              as="article"
              className="card-surface flex flex-col gap-4 rounded-2xl p-6 sm:p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.07] text-champagne-soft">
                <proof.icon size={16} strokeWidth={1.6} />
              </span>
              <div>
                <p className="font-display text-[2rem] font-light leading-none text-champagne-soft sm:text-[2.4rem]">
                  {proof.value}
                </p>
                <p className="mt-3 text-[0.68rem] uppercase tracking-widest2 text-ivory-100/55">
                  {proof.label}
                </p>
              </div>
              <p className="font-sans text-[0.92rem] leading-relaxed text-ivory-100/65">
                {proof.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-10 max-w-xl text-center text-[0.78rem] uppercase tracking-widest2 text-ivory-100/40">
            Fuentes: Facebook Ariel Estilistas y fichas locales públicas.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
