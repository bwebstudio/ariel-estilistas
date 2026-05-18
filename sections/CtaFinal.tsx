import { MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { BUSINESS, whatsappUrl } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section
      id="reservar"
      className="relative overflow-hidden bg-carbon-700 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <div className="card-surface mx-auto flex max-w-3xl flex-col items-center gap-7 rounded-3xl p-9 text-center sm:p-12">
            <span className="text-[0.68rem] uppercase tracking-widest2 text-champagne-soft">
              Reservá tu turno
            </span>
            <h2 className="font-display text-[1.85rem] font-light leading-[1.12] tracking-tight text-ivory sm:text-4xl md:text-[2.6rem]">
              Reservá tu turno en{" "}
              <span className="text-champagne-soft">Ariel Estilistas</span>
            </h2>
            <p className="max-w-xl font-sans text-[1rem] leading-relaxed text-ivory-100/75 sm:text-[1.05rem]">
              Escribinos o llamanos para coordinar tu próximo corte, color o
              tratamiento. Te respondemos en el horario del salón.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ButtonLink
                href={whatsappUrl()}
                variant="primary"
                className="w-full sm:w-auto"
                icon={<MessageCircle size={16} />}
              >
                Reservar turno
              </ButtonLink>
              <ButtonLink
                href={BUSINESS.phoneTel}
                variant="outline"
                className="w-full sm:w-auto"
                icon={<Phone size={15} />}
              >
                Llamar al {BUSINESS.phone}
              </ButtonLink>
            </div>
            <p className="text-[0.72rem] uppercase tracking-widest2 text-ivory-100/40">
              {BUSINESS.hoursShort}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
