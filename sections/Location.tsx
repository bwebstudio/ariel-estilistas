import Image from "next/image";
import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
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

        {/* Fachada del salón — para reconocimiento al llegar */}
        <Reveal className="mt-14 overflow-hidden rounded-2xl bg-black">
          <div className="relative aspect-[16/8] sm:aspect-[16/7]">
            <Image
              src="/images/location/fachada.jpg"
              alt={`Fachada del salón ${BUSINESS.name} en San Miguel`}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              style={{ filter: "saturate(0.95) contrast(1.02)" }}
            />
            {/* Vignette superior — masca luces brillantes del techo en el borde alto */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black via-black/40 to-transparent"
              aria-hidden
            />
            {/* Vignette inferior — masca píxeles claros del borde bajo */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent"
              aria-hidden
            />
            {/* Inset ring — cierra los bordes redondeados anti-aliased */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/60"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[0.65rem] font-medium uppercase tracking-widest2 text-champagne-soft">
                {BUSINESS.city}, {BUSINESS.province}
              </p>
              <p className="mt-1.5 font-display text-xl font-light text-ivory sm:text-2xl">
                {BUSINESS.addressLine1}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-6 sm:mt-6">
          <Reveal className="relative h-[380px] overflow-hidden rounded-2xl bg-black sm:h-[460px] lg:h-[480px]">
            <iframe
              title={`Ubicación de ${BUSINESS.name}`}
              src={mapsEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              style={{ border: 0, filter: "saturate(0.85)" }}
              allowFullScreen
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon-800/30 via-transparent to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/40"
              aria-hidden
            />
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

                <InfoRow icon={MessageCircle} label="WhatsApp">
                  <p className="font-sans text-base text-ivory">
                    {BUSINESS.whatsappDisplay}
                  </p>
                  <p className="mt-1 font-sans text-[0.95rem] text-ivory-100/65">
                    Reservá tu turno por WhatsApp.
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
