
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          borderRadius: 14,
        }}
      >
        <span
          style={{
            display: "flex",
            fontSize: 39,
            fontWeight: 800,
            letterSpacing: -3,
            color: "#ffffff",
          }}
        >
          M
          <span style={{ color: "#60a5fa" }}>.</span>
        </span>
      </div>
    ),
    size
  );
}
