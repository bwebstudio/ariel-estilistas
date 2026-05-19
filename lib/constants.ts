/**
 * Datos reales del negocio.
 */
export const BUSINESS = {
  name: "Ariel Estilista",
  tagline: "Color, corte y estilo personalizado en San Miguel",
  shortDescription:
    "Peluquería de confianza en San Miguel, Buenos Aires. Color, corte y tratamientos con años de experiencia y trato cercano.",
  city: "San Miguel",
  province: "Buenos Aires",
  country: "Argentina",

  // Dirección confirmada (fuente: lacabeautysarmiento.com.ar)
  addressLine1: "Domingo Faustino Sarmiento 1245",
  addressLine2: "San Miguel, Buenos Aires",
  address: "Domingo Faustino Sarmiento 1245, San Miguel, Buenos Aires",
  postalCode: "B1663",

  // Horario publicado en Facebook
  hoursShort: "Martes a sábados de 10:00 a 21:00",
  hours: [
    { day: "Martes a sábado", hours: "10:00 – 21:00" },
    { day: "Domingo y lunes", hours: "Cerrado" },
  ],

  // Contacto vía WhatsApp únicamente
  whatsappDisplay: "+54 11 5640-5444",
  whatsappNumber: "541156405444", // sin + ni símbolos para wa.me
  whatsappMessage: "Hola Ariel Estilista, quisiera reservar un turno.",

  // Redes / contacto
  instagram: "https://instagram.com/arielestilistas",
  instagramHandle: "@arielestilistas",
  facebook: "https://www.facebook.com/p/Ariel-Estilistas-100063888870010/?locale=es_LA",

  // Prueba social real
  socialProof: {
    facebookLikes: "+1.700",
    facebookRecommended: "94%",
    facebookReviews: 35,
    directoryRating: "9.8",
    directoryBestRating: "10",
    directoryReviews: 134,
  },
} as const;

export const whatsappUrl = (
  message: string = BUSINESS.whatsappMessage,
  number: string = BUSINESS.whatsappNumber,
) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/** "Cómo llegar" — abre Google Maps con la dirección destino pre-cargada. */
export const mapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${BUSINESS.addressLine1}, ${BUSINESS.addressLine2}`,
  )}`;

/** URL para embed en iframe — usa la dirección exacta. */
export const mapsEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(
    `${BUSINESS.addressLine1}, ${BUSINESS.addressLine2}`,
  )}&output=embed`;

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
] as const;
