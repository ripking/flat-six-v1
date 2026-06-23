import React from "react";

type SectionLabelProps = {
  children?: React.ReactNode;
  align?: "left" | "center";
  color?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style" | "color">;

/**
 * Eyebrow / section label — uppercase mono small-caps with a short rule.
 * The recurring "Core Pillars" / "Specialized Services" marker.
 */
export function SectionLabel({ children, align = "left", color, style = {}, ...rest }: SectionLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        gap: "12px",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          width: "28px",
          height: "var(--border-thick)",
          background: color || "var(--color-accent)",
          flex: "none",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          fontWeight: "var(--weight-semibold)" as unknown as number,
          letterSpacing: "var(--tracking-wider)",
          textTransform: "uppercase",
          color: color || "var(--color-accent)",
        }}
      >
        {children}
      </span>
    </div>
  );
}
