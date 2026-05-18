import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const markSrc = `data:image/png;base64,${readFileSync(
    join(
      process.cwd(),
      "public/images/ariel-favicon-blanco-condensado.png",
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
          borderRadius: "14px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={markSrc}
          alt=""
          width="44"
          height="44"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size },
  );
}
