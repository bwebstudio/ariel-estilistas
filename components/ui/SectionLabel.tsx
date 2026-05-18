import { cn } from "@/lib/utils";

/**
 * Eyebrow editorial: tipografía limpia en mayúsculas con tracking ancho.
 * Sin decoraciones de líneas horizontales — patrón usado por revistas y salones premium.
 */
export function SectionLabel({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <p
      className={cn(
        "text-[0.68rem] font-medium uppercase tracking-widest2 text-champagne-soft",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={cn("max-w-2xl", alignClass)}>
      {eyebrow ? <SectionLabel align={align}>{eyebrow}</SectionLabel> : null}
      <h2 className="mt-4 font-display text-[1.85rem] font-light leading-[1.12] tracking-tight text-ivory sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 font-sans text-[0.98rem] font-normal leading-relaxed text-ivory-100/70 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
