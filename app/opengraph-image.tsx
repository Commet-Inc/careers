import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Founder Developer en Commet - Oportunidad única para desarrolladores";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "#18181B",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
      }}
    >
      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          marginBottom: 24,
          background: "linear-gradient(to right, #ffffff, #a1a1aa)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Founder Developer
      </div>
      <div
        style={{
          fontSize: 36,
          marginBottom: 48,
          color: "#d4d4d8",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Únete a Commet y construye el futuro del cálculo de comisiones
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 32px",
          background: "white",
          color: "#18181B",
          borderRadius: 8,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Stock Options
      </div>
    </div>,
    {
      ...size,
    },
  );
}
