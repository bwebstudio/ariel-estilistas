import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          background: "#141210",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Ariel"
          width="132"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size },
  );
}
