import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] items-center justify-center bg-warm-section px-6 text-center">
      <div className="max-w-md">
        <p className="text-[0.68rem] uppercase tracking-widest2 text-champagne-soft">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-light text-ivory sm:text-5xl">
          Página no <span className="text-champagne-soft">encontrada</span>
        </h1>
        <p className="mt-4 font-sans text-base text-ivory-100/70">
          Volvé al inicio para reservar tu próximo turno.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" variant="primary">
            Volver al inicio
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
