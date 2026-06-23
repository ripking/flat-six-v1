"use client";

import React from "react";

const sizes = {
  sm: { padding: "8px 16px", font: "var(--text-sm)", icon: 18, gap: "6px" },
  md: { padding: "12px 24px", font: "var(--text-base)", icon: 20, gap: "8px" },
  lg: { padding: "16px 32px", font: "var(--text-md)", icon: 22, gap: "10px" },
};

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  iconRight?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style">;

/**
 * Primary call-to-action button for Flat Six Media.
 * Racing-green fill, cream outline, ghost, and brass accent variants.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}: ButtonProps) {
  const s = sizes[size] || sizes.md;

  const base: React.CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    font: s.font,
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-semibold)" as unknown as number,
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "var(--border-medium) solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-primary-contrast)",
      boxShadow: "var(--shadow-sm)",
    },
    secondary: {
      background: "transparent",
      color: "var(--color-text-brand)",
      borderColor: "var(--color-border-brand)",
    },
    ghost: {
      background: "transparent",
      color: "var(--color-text)",
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--white)",
      boxShadow: "var(--shadow-sm)",
    },
  };

  const hoverByVariant = {
    primary: "var(--color-primary-hover)",
    accent: "var(--color-accent-hover)",
  };

  const onEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(-1px)";
    if (variant === "primary") e.currentTarget.style.background = hoverByVariant.primary;
    else if (variant === "accent") e.currentTarget.style.background = hoverByVariant.accent;
    else if (variant === "secondary") {
      e.currentTarget.style.background = "var(--color-primary)";
      e.currentTarget.style.color = "var(--color-primary-contrast)";
    } else if (variant === "ghost") e.currentTarget.style.background = "var(--color-bg-subtle)";
  };
  const onLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    e.currentTarget.style.transform = "translateY(0)";
    Object.assign(e.currentTarget.style, {
      background: variants[variant].background,
      color: variants[variant].color,
    });
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {icon && (
        <span className="material-symbols-rounded" style={{ fontSize: s.icon }}>
          {icon}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="material-symbols-rounded" style={{ fontSize: s.icon }}>
          {iconRight}
        </span>
      )}
    </button>
  );
}
