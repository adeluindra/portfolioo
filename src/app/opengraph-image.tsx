
import { ImageResponse } from "next/og";

export const alt =
  "Moh Syafiq Ade Luwindra — Junior Full-Stack Developer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "64px 76px",
          backgroundColor: "#0f172a",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            MSAL.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 19,
              letterSpacing: 3,
              color: "#94a3b8",
            }}
          >
            DEVELOPER PORTFOLIO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              color: "#93c5fd",
              letterSpacing: 2,
            }}
          >
            MOH SYAFIQ ADE LUWINDRA
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 72,
              lineHeight: 1.06,
              fontWeight: 800,
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            Junior Full-Stack
            Developer
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 25,
              color: "#cbd5e1",
            }}
          >
            Building practical web applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #334155",
            paddingTop: 25,
            gap: 26,
            color: "#93c5fd",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Go</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
