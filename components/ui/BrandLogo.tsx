import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * BrandLogo — marca visual reutilizable.
 *
 * Cuando estén disponibles los archivos en /public/images/ariel-logo-{variant}.png
 * cambiar USE_IMAGE_ASSETS a true. El componente cargará el PNG.
 * Mientras tanto, se renderiza un lockup tipográfico inspirado en el logo de referencia:
 * "Ariel" en serif elegante + "ESTILISTAS" espaciado entre dos líneas + marca de tijeras.
 */
const USE_IMAGE_ASSETS = false;

type Variant = "light" | "dark";
type Size = "nav" | "hero" | "footer";

const COLORS: Record<
  Variant,
  { word: string; label: string; line: string; mark: string }
> = {
  light: {
    word: "text-ivory-100",
    label: "text-champagne-soft",
    line: "bg-champagne-400/45",
    mark: "text-champagne-300/85",
  },
  dark: {
    word: "text-carbon-800",
    label: "text-champagne-600",
    line: "bg-champagne-600/55",
    mark: "text-champagne-600",
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
  if (USE_IMAGE_ASSETS) {
    return <BrandLogoImage variant={variant} size={size} className={className} />;
  }
  if (size === "nav") {
    return <NavLockup variant={variant} className={className} />;
  }
  return <StackedLockup variant={variant} size={size} className={className} />;
}

function BrandLogoImage({
  variant,
  size,
  className,
}: {
  variant: Variant;
  size: Size;
  className?: string;
}) {
  const dims =
    size === "hero"
      ? { w: 480, h: 320 }
      : size === "footer"
        ? { w: 200, h: 140 }
        : { w: 140, h: 50 };
  return (
    <Image
      src={`/images/ariel-logo-${variant}.png`}
      alt="Ariel Estilistas"
      width={dims.w}
      height={dims.h}
      priority={size === "hero"}
      className={cn("h-auto w-auto select-none", className)}
    />
  );
}

function NavLockup({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  const c = COLORS[variant];
  return (
    <div className={cn("flex items-baseline gap-2.5", className)}>
      <span
        className={cn(
          "font-display text-lg font-light leading-none tracking-tight sm:text-xl",
          c.word,
        )}
      >
        Ariel
      </span>
      <span
        className={cn(
          "text-[0.6rem] font-medium uppercase tracking-[0.34em] sm:text-[0.65rem]",
          c.label,
        )}
      >
        Estilistas
      </span>
    </div>
  );
}

function StackedLockup({
  variant,
  size,
  className,
}: {
  variant: Variant;
  size: Size;
  className?: string;
}) {
  const c = COLORS[variant];
  const isHero = size === "hero";

  const wordSize = isHero
    ? "text-[3.4rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]"
    : "text-3xl sm:text-[2.2rem]";
  const labelSize = isHero
    ? "text-[0.72rem] tracking-[0.48em] sm:text-[0.88rem] sm:tracking-[0.55em]"
    : "text-[0.58rem] tracking-[0.42em] sm:text-[0.65rem]";
  const lineSize = isHero ? "w-9 sm:w-14" : "w-5 sm:w-6";
  const lineGap = isHero ? "gap-3 sm:gap-4" : "gap-2.5";
  const markSize = isHero ? 22 : 14;

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <span
        className={cn(
          "font-display font-light leading-[0.92] tracking-tight",
          wordSize,
          c.word,
        )}
      >
        Ariel
      </span>
      <div
        className={cn(
          "mt-3 flex items-center justify-center sm:mt-4",
          lineGap,
        )}
      >
        <span className={cn("h-px", lineSize, c.line)} aria-hidden />
        <span
          className={cn(
            "font-medium uppercase",
            labelSize,
            c.label,
          )}
        >
          Estilistas
        </span>
        <span className={cn("h-px", lineSize, c.line)} aria-hidden />
      </div>
      <span className={cn("mt-3 inline-block", c.mark)} aria-hidden>
        <CrossedScissors size={markSize} />
      </span>
    </div>
  );
}

function CrossedScissors({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="23" cy="8" r="3" />
      <line x1="11.4" y1="10.4" x2="23" y2="24" />
      <line x1="20.6" y1="10.4" x2="9" y2="24" />
    </svg>
  );
}
