import { Instagram, MessageCircle, Phone, MapPin, Facebook } from "lucide-react";
import { BUSINESS, NAV_LINKS, whatsappUrl } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-carbon-900 pt-14 pb-9">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <BrandLogo
              size="footer"
              variant="light"
              className="md:items-start md:text-left"
            />
            <p className="mt-5 max-w-xs text-center font-sans text-[0.95rem] text-ivory-100/65 md:text-left">
              Tu peluquería de confianza en el corazón de San Miguel.
            </p>
            <p className="mt-2 max-w-xs text-center font-sans text-[0.85rem] text-ivory-100/45 md:text-left">
              {BUSINESS.hoursShort}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[0.68rem] uppercase tracking-widest2 text-champagne-soft">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-[0.95rem] text-ivory-100/70 transition-colors hover:text-champagne-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reservar"
                  className="font-sans text-[0.95rem] text-ivory-100/70 transition-colors hover:text-champagne-soft"
                >
                  Reservar turno
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[0.68rem] uppercase tracking-widest2 text-champagne-soft">
              Contacto
            </h4>
            <ul className="mt-4 space-y-2.5 text-center md:text-left">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[0.95rem] text-ivory-100/80 transition-colors hover:text-champagne-soft"
                >
                  <MessageCircle size={15} className="text-champagne-soft" />
                  WhatsApp {BUSINESS.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.phoneTel}
                  className="inline-flex items-center gap-2 font-sans text-[0.95rem] text-ivory-100/80 transition-colors hover:text-champagne-soft"
                >
                  <Phone size={15} className="text-champagne-soft" />
                  Tel. {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[0.95rem] text-ivory-100/80 transition-colors hover:text-champagne-soft"
                >
                  <Facebook size={15} className="text-champagne-soft" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[0.95rem] text-ivory-100/80 transition-colors hover:text-champagne-soft"
                >
                  <Instagram size={15} className="text-champagne-soft" />
                  {BUSINESS.instagramHandle}
                </a>
              </li>
              <li className="inline-flex items-start gap-2 font-sans text-[0.95rem] text-ivory-100/70">
                <MapPin size={15} className="mt-1 shrink-0 text-champagne-soft" />
                <span>
                  {BUSINESS.addressLine1}
                  <br />
                  <span className="text-ivory-100/60">
                    {BUSINESS.addressLine2}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-5 text-center md:flex-row md:text-left">
          <p className="text-[0.68rem] uppercase tracking-widest2 text-ivory-100/40">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-[0.68rem] uppercase tracking-widest2 text-ivory-100/40">
            {BUSINESS.city}, {BUSINESS.province}
          </p>
        </div>
      </Container>
    </footer>
  );
}
