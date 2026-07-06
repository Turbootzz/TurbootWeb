import { ImageResponse } from "next/og"

// Site-wide social preview image (WhatsApp, LinkedIn, X, ...). Next injects the
// og:image and twitter:image meta tags for every page under [locale] from this file.
export const alt = "Turboot"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
        background: "linear-gradient(135deg, #6d28d9 0%, #4f46e5 55%, #2563eb 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "26px",
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "34px solid transparent",
            borderRight: "34px solid transparent",
            borderBottom: "58px solid white",
          }}
        />
        <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: "-0.04em" }}>Turboot</div>
      </div>
      <div style={{ fontSize: 44, marginTop: 30, opacity: 0.92, maxWidth: 900 }}>
        Webontwikkeling, hosting en beheerd Microsoft 365
      </div>
      <div style={{ fontSize: 30, marginTop: 46, opacity: 0.72 }}>turboot.com</div>
    </div>,
    { ...size }
  )
}
