import React from "react";

type IconTileTone = "green" | "brass" | "inverse" | "paper";

type IconTileProps = {
  icon: string;
  tone?: IconTileTone;
  size?: number;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style">;

/**
 * Material Symbol in a tinted tile — the expertise/service iconography.
 * Square with brand-tinted background; `tone` shifts the palette.
 */
export function IconTile({ icon, tone = "green", size = 56, style = {}, ...rest }: IconTileProps) {
  const tones: Record<IconTileTone, { bg: string; fg: string }> = {
    green: { bg: "var(--green-100)", fg: "var(--green-800)" },
    brass: { bg: "var(--brass-100)", fg: "var(--brass-700)" },
    inverse: { bg: "var(--green-800)", fg: "var(--cream-50)" },
    paper: { bg: "var(--cream-200)", fg: "var(--ink-700)" },
  };
  const t = tones[tone] || tones.green;
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-md)",
        background: t.bg,
        color: t.fg,
        flex: "none",
        ...style,
      }}
      {...rest}
    >
      <span className="material-symbols-rounded" style={{ fontSize: Math.round(size * 0.5) }}>
        {icon}
      </span>
    </div>
  );
}
