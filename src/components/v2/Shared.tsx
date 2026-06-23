import React from "react";

type MediaPlaceholderProps = {
  label: string;
  height?: number;
  radius?: string;
  style?: React.CSSProperties;
};

/**
 * Cinematic placeholder standing in for real automotive/film photography.
 * Kept as a fallback; the live sections use real <img> assets instead.
 */
export function MediaPlaceholder({
  label,
  height = 360,
  radius = "var(--radius-lg)",
  style = {},
}: MediaPlaceholderProps) {
  return (
    <div
      style={{
        height,
        borderRadius: radius,
        background: "linear-gradient(135deg, #0E2A20 0%, #16382B 45%, #21302a 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 80% at 75% 15%, rgba(199,166,104,0.22), transparent 55%)",
        }}
      />
      <span
        className="material-symbols-rounded"
        style={{
          position: "absolute",
          top: 18,
          left: 18,
          fontSize: 26,
          color: "rgba(232,217,184,0.7)",
        }}
      >
        photo_camera
      </span>
      <div
        style={{
          position: "relative",
          padding: "14px 18px",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(232,217,184,0.8)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
