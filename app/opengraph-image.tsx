import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Ariel Estilista — Salón en San Miguel, Buenos Aires";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const logoSrc = `data:image/png;base64,${readFileSync(
    join(
      process.cwd(),
      "public/images/ariel-estilistas-logo-blanco-sin-tijeras.png",
    ),
  ).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(180deg, #1d1814 0%, #141210 55%, #0f0e0d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Wordmark real "Ariel" */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Ariel"
          width="520"
          style={{ objectFit: "contain" }}
        />

        {/* ESTILISTAS debajo */}
        <div
          style={{
            fontSize: 28,
            color: "#d8bc8a",
            letterSpacing: 24,
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 500,
            marginTop: 8,
          }}
        >
          Estilista
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(245,239,230,0.7)",
            marginTop: 64,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
          }}
        >
          Color, corte y estilo personalizado en San Miguel
        </div>
      </div>
    ),
    { ...size },
  );
}
