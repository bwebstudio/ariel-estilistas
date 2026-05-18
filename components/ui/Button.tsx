import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

type ButtonBaseProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.78rem] font-medium uppercase tracking-widest2 transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-300/50 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon-800 sm:px-7 sm:py-3.5";

/**
 * Botones sobrios: champagne plano para primario, contorno suave para secundario.
 * Sin gradientes metálicos ni sombras doradas exageradas.
 */
const variants: Record<Variant, string> = {
  // Champagne mate, sin brillo metálico ni sombra dorada
  primary:
    "bg-champagne-400 text-carbon-800 hover:bg-champagne-300",
  // Borde neutro casi imperceptible — se aclara levemente en hover
  outline:
    "border border-white/5 text-ivory-100 hover:border-white/15 hover:bg-white/[0.025]",
  ghost: "text-ivory-100/75 hover:text-ivory",
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  icon,
  target,
  rel,
  ariaLabel,
}: ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const Component: React.ElementType = isExternal ? "a" : Link;
  const externalProps = isExternal
    ? { target: target ?? "_blank", rel: rel ?? "noopener noreferrer" }
    : {};

  return (
    <Component
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], className)}
      {...externalProps}
    >
      <span>{children}</span>
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </Component>
  );
}
