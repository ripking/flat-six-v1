"use client";

import React from "react";

type CardTone = "paper" | "raised" | "green";

type CardProps = {
  children?: React.ReactNode;
  tone?: CardTone;
  interactive?: boolean;
  padding?: string;
  style?: React.CSSProperties;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "style">;

/**
 * Surface card. Cream paper with a hairline border and soft warm lift.
 * `interactive` adds a hover raise; `tone="green"` for the inverse dark card.
 */
export function Card({
  children,
  tone = "paper",
  interactive = false,
  padding = "var(--space-8)",
  style = {},
  ...rest
}: CardProps) {
  const tones: Record<CardTone, React.CSSProperties> = {
    paper: {
      background: "var(--color-surface)",
      color: "var(--color-text)",
      border: "var(--border-thin) solid var(--color-border)",
    },
    raised: {
      background: "var(--color-surface-raised)",
      color: "var(--color-text)",
      border: "var(--border-thin) solid var(--color-border)",
      boxShadow: "var(--shadow-md)",
    },
    green: {
      background: "var(--color-surface-inverse)",
      color: "var(--color-text-on-green)",
      border: "var(--border-thin) solid var(--green-700)",
    },
  };

  const base: React.CSSProperties = {
    borderRadius: "var(--radius-lg)",
    padding,
    transition:
      "transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)",
    ...tones[tone],
  };

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = (tones[tone].boxShadow as string) || "none";
  };

  return (
    <div style={{ ...base, ...style }} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
      {children}
    </div>
  );
}
