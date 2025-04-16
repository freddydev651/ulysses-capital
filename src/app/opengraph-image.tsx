// ----------------------------------------------
// app/opengraph-image.tsx
// Dynamic Open Graph image route (Next.js built-in)
// Must export default ImageResponse directly.
// ----------------------------------------------

import { ImageResponse } from "next/og";

// Optional: export metadata used by Next.js to customize headers
export const runtime = "edge";
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            marginBottom: 24,
            fontFamily: "serif",
          }}
        >
          Ulysses Capital
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          A diversified investment management firm specializing in equities,
          fixed income, venture capital, real estate, and commodities.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
