import React from "react";

type StatBlockProps = {
  value: React.ReactNode;
  label: React.ReactNode;
  tone?: "default" | "inverse";
  align?: React.CSSProperties["textAlign"];
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style">;

/**
 * Big-number statistic block — "$500M+ / Slate Funding Secured".
 * Serif display figure over a mono uppercase label.
 */
export function StatBlock({
  value,
  label,
  tone = "default",
  align = "left",
  style = {},
  ...rest
}: StatBlockProps) {
  const isInverse = tone === "inverse";
  return (
    <div style={{ textAlign: align, ...style }} {...rest}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: "var(--weight-medium)" as unknown as number,
          fontSize: "var(--text-3xl)",
          lineHeight: 1,
          letterSpacing: "var(--tracking-tight)",
          color: isInverse ? "var(--cream-50)" : "var(--color-text-brand)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: "10px",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-xs)",
          fontWeight: "var(--weight-medium)" as unknown as number,
          letterSpacing: "var(--tracking-wide)",
          textTransform: "uppercase",
          color: isInverse ? "var(--green-300)" : "var(--color-text-muted)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
