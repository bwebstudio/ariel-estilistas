import { MapPin, Clock, MessageCircle, Phone, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  BUSINESS,
  whatsappUrl,
  mapsDirectionsUrl,
  mapsEmbedUrl,
} from "@/lib/constants";

export function Location() {
  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-warm-section py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Ubicación"
            title={
              <>
                Estamos en{" "}
                <span className="text-champagne-soft">San Miguel</span>
              </>
            }
            description={`${BUSINESS.name} atiende en ${BUSINESS.addressLine1}, ${BUSINESS.addressLine2}.`}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[460px] lg:h-[480px]">
            <iframe
              title={`Ubicación de ${BUSINESS.name}`}
              src={mapsEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              style={{ border: 0, filter: "saturate(0.85)" }}
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon-800/30 via-transparent to-transparent" />
          </Reveal>

          <Reveal delay={0.08} className="lg:h-[480px]">
            <div className="flex h-full flex-col justify-between gap-7 rounded-2xl bg-carbon-700/60 p-7 backdrop-blur-sm sm:p-9">
              <div className="space-y-6">
                <InfoRow icon={MapPin} label="Dirección">
                  <p className="font-sans text-base text-ivory sm:text-lg">
                    {BUSINESS.addressLine1}
                  </p>
                  <p className="mt-1 font-sans text-[0.95rem] text-ivory-100/70">
                    {BUSINESS.addressLine2} ({BUSINESS.postalCode})
                  </p>
                </InfoRow>

                <InfoRow icon={Clock} label="Horarios">
                  <ul className="space-y-1.5">
                    {BUSINESS.hours.map((row) => (
                      <li
                        key={row.day}
                        className="flex items-baseline justify-between gap-4 font-sans text-[0.95rem] text-ivory-100/80 sm:text-base"
                      >
                        <span>{row.day}</span>
                        <span className="font-medium text-ivory">
                          {row.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </InfoRow>

                <InfoRow icon={Phone} label="Contacto">
                  <p className="font-sans text-base text-ivory">
                    Tel. {BUSINESS.phone}
                  </p>
                  <p className="mt-1 font-sans text-[0.95rem] text-ivory-100/75">
                    WhatsApp {BUSINESS.whatsappDisplay}
                  </p>
                </InfoRow>
              </div>

              <div className="flex flex-col gap-2.5">
                <ButtonLink
                  href={whatsappUrl()}
                  variant="primary"
                  className="w-full"
                  icon={<MessageCircle size={16} />}
                >
                  Reservar por WhatsApp
                </ButtonLink>
                <div className="grid grid-cols-2 gap-2.5">
                  <ButtonLink
                    href={BUSINESS.phoneTel}
                    variant="outline"
                    className="w-full"
                    icon={<Phone size={14} />}
                  >
                    Llamar
                  </ButtonLink>
                  <ButtonLink
                    href={mapsDirectionsUrl()}
                    variant="outline"
                    className="w-full"
                    icon={<Navigation size={14} />}
                  >
                    Cómo llegar
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.07] text-champagne-soft">
        <Icon size={16} strokeWidth={1.6} />
      </span>
      <div className="w-full">
        <p className="text-[0.68rem] uppercase tracking-widest2 text-champagne-soft">
          {label}
        </p>
        <div className="mt-1.5">{children}</div>
      </div>
    </div>
  );
}
