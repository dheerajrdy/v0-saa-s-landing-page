import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(135deg, #4F6EF7, #7C3AED, #A855F7)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "32px",
        }}
      >
        <svg
          width="120"
          height="130"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield outline */}
          <path
            d="M11 1L2 5V11C2 16.5 5.8 21.7 11 23C16.2 21.7 20 16.5 20 11V5L11 1Z"
            fill="rgba(255,255,255,0.15)"
            stroke="white"
            strokeWidth="1.2"
          />
          {/* Checkmark */}
          <path
            d="M7 12L10 15L15 9"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
