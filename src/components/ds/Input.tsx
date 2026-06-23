"use client";

import React from "react";

type InputProps = {
  label?: string;
  hint?: string;
  icon?: string;
  type?: string;
  id?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "style" | "type" | "id">;

/**
 * Text input with label. Cream field, hairline border, green focus ring.
 */
export function Input({
  label,
  hint,
  icon,
  type = "text",
  id,
  style = {},
  containerStyle = {},
  ...rest
}: InputProps) {
  const inputId = id || (label ? `fld-${String(label).toLowerCase().replace(/\s+/g, "-")}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...containerStyle }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            fontWeight: "var(--weight-medium)" as unknown as number,
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 14px",
          background: "var(--color-surface)",
          border: `var(--border-medium) solid ${focused ? "var(--green-700)" : "var(--color-border)"}`,
          borderRadius: "var(--radius-md)",
          boxShadow: focused ? "var(--ring)" : "none",
          transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
        }}
      >
        {icon && (
          <span className="material-symbols-rounded" style={{ fontSize: 20, color: "var(--color-text-subtle)" }}>
            {icon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-base)",
            color: "var(--color-text)",
            ...style,
          }}
          {...rest}
        />
      </div>
      {hint && <span style={{ font: "var(--text-body-sm)", color: "var(--color-text-subtle)" }}>{hint}</span>}
    </div>
  );
}
