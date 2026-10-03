import {
  ImageResponse,
} from "next/og";

import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const alt =
  "Musab Alradi — IT & Telecom Professional";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType =
  "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#60a5fa",
            marginBottom: 24,
          }}
        >
          IT • SOFTWARE • TELECOM
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          {siteConfig.fullName}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#cbd5e1",
          }}
        >
          IT & Telecom Professional
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#94a3b8",
            marginTop: 20,
          }}
        >
          Software Development • Networking •
          Telecommunications • Technical Support
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}