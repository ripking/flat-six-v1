import React from "react";

type BadgeTone = "neutral" | "green" | "brass" | "danger";
type BadgeVariant = "soft" | "solid";

type BadgeProps = {
  children?: React.ReactNode;
  tone?: BadgeTone;
  variant?: BadgeVariant;
  icon?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "style">;

/**
 * Compact status/category pill. `tag` style for categories, `dot` for status.
 */
export function Badge({ children, tone = "neutral", variant = "soft", icon, style = {}, ...rest }: BadgeProps) {
  const palette: Record<BadgeTone, Record<BadgeVariant, [string, string]>> = {
    neutral: { soft: ["var(--cream-300)", "var(--ink-700)"], solid: ["var(--ink-700)", "var(--cream-50)"] },
    green: { soft: ["var(--green-100)", "var(--green-800)"], solid: ["var(--green-800)", "var(--cream-50)"] },
    brass: { soft: ["var(--brass-100)", "var(--brass-700)"], solid: ["var(--brass-500)", "var(--white)"] },
    danger: { soft: ["var(--brick-100)", "var(--brick-600)"], solid: ["var(--brick-600)", "var(--white)"] },
  };
  const [bg, fg] = (palette[tone] || palette.neutral)[variant] || palette.neutral.soft;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        background: bg,
        color: fg,
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        fontWeight: "var(--weight-medium)" as unknown as number,
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {icon && (
        <span className="material-symbols-rounded" style={{ fontSize: 14 }}>
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}
