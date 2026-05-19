import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * BrandLogo — wordmark "Ariel" como imagen + "ESTILISTA" debajo.
 *
 * Reglas para mantener coherencia con el mockup oficial:
 *  1. "Ariel" SIEMPRE domina visualmente sobre "ESTILISTA" (~4–10× más alto).
 *  2. El gap vertical entre ambos escala proporcional al tamaño del wordmark
 *     (~14–16% de la altura de "Ariel"), así la relación se ve igual en nav,
 *     hero y footer.
 *
 * Assets esperados en /public/images/ :
 *   - ariel-estilistas-logo-blanco-sin-tijeras.png  (variant="light")
 *   - ariel-estilistas-logo-negro-sin-tijeras.png   (variant="dark")
 */

const WORDMARK = {
  light: "/images/ariel-estilistas-logo-blanco-sin-tijeras.png",
  dark: "/images/ariel-estilistas-logo-negro-sin-tijeras.png",
} as const;

const USE_IMAGE_ASSETS = true;

type Variant = "light" | "dark";
type Size = "nav" | "hero" | "footer";

const COLORS: Record<Variant, { word: string; label: string }> = {
  light: { word: "text-ivory-100", label: "text-champagne-soft" },
  dark: { word: "text-carbon-800", label: "text-champagne-600" },
};

const LAYOUT: Record<
  Size,
  {
    wordmark: { width: number; height: number; className: string };
    label: string;
    gap: string;
  }
> = {
  // Navbar — "Ariel" claramente dominante; "ESTILISTA" muy chico y tracking
  // moderado para no expandirse más que "Ariel".
  nav: {
    wordmark: {
      width: 110,
      height: 36,
      className: "h-[30px] w-auto sm:h-[34px]",
    },
    label:
      "text-[0.42rem] tracking-[0.32em] sm:text-[0.46rem] sm:tracking-[0.36em]",
    gap: "mt-1 sm:mt-[5px]",
  },
  // Hero — proporciones del mockup oficial (~10:1 en lg, gap ~15%)
  hero: {
    wordmark: {
      width: 540,
      height: 180,
      className: "h-[110px] w-auto sm:h-[150px] md:h-[190px] lg:h-[220px]",
    },
    label:
      "text-sm tracking-[0.5em] sm:text-base sm:tracking-[0.55em] md:text-lg md:tracking-[0.6em] lg:text-xl lg:tracking-[0.65em]",
    gap: "mt-4 sm:mt-[22px] md:mt-7 lg:mt-8",
  },
  // Footer — intermedio
  footer: {
    wordmark: {
      width: 160,
      height: 56,
      className: "h-[44px] w-auto sm:h-[50px]",
    },
    label:
      "text-[0.5rem] tracking-[0.42em] sm:text-[0.55rem] sm:tracking-[0.45em]",
    gap: "mt-[7px] sm:mt-2",
  },
};

export function BrandLogo({
  variant = "light",
  size = "hero",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const layout = LAYOUT[size];
  const colors = COLORS[variant];

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {USE_IMAGE_ASSETS ? (
        <Image
          src={WORDMARK[variant]}
          alt="Ariel"
          width={layout.wordmark.width}
          height={layout.wordmark.height}
          priority={size === "hero"}
          className={cn("select-none", layout.wordmark.className)}
        />
      ) : (
        <WordmarkFallback variant={variant} size={size} />
      )}

      <span
        className={cn(
          "font-medium uppercase",
          colors.label,
          layout.label,
          layout.gap,
        )}
      >
        Estilista
      </span>
    </div>
  );
}

/** Fallback tipográfico — sólo se usa si USE_IMAGE_ASSETS=false. */
function WordmarkFallback({
  variant,
  size,
}: {
  variant: Variant;
  size: Size;
}) {
  const c = COLORS[variant];
  const fontSize =
    size === "hero"
      ? "text-[3.4rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]"
      : size === "footer"
        ? "text-3xl sm:text-[2.2rem]"
        : "text-lg sm:text-xl";

  return (
    <span
      className={cn(
        "font-display font-light leading-[0.92] tracking-tight",
        fontSize,
        c.word,
      )}
    >
      Ariel
    </span>
  );
}
