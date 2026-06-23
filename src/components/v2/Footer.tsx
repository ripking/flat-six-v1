"use client";

import React from "react";

// Footer.
export function Footer() {
  const cols: [string, string[]][] = [
    ["Expertise", ["Content Strategy", "Finance & Operations", "Scalable Support"]],
    ["Services", ["Slate Financing", "Greenlight Support", "Library Valuations", "Expert Witness"]],
    ["Company", ["About", "Founder", "Contact"]],
  ];
  return (
    <footer style={{ background: "var(--green-950)", padding: "64px var(--gutter) 40px" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ width: 22, height: 2, background: "var(--brass-300)" }} />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 16,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cream-50)",
              }}
            >
              Flat Six Media
            </span>
          </div>
          <p style={{ font: "var(--text-body-sm)", color: "var(--green-300)", margin: 0, maxWidth: 280 }}>
            Boutique consultancy. Executive-caliber support across strategy, finance, and operations
            — film, TV, streaming, games, sports, and live events.
          </p>
        </div>
        {cols.map(([title, items]) => (
          <div key={title}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--brass-300)",
                marginBottom: 16,
              }}
            >
              {title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {items.map((i) => (
                <a
                  key={i}
                  href="#"
                  style={{ font: "var(--text-body-sm)", color: "var(--cream-200)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream-50)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-200)")}
                >
                  {i}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid var(--green-800)",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.06em",
          color: "var(--green-300)",
        }}
      >
        <span>© 2026 Flat Six Media. All rights reserved.</span>
        <span>Executive Caliber. On Demand.</span>
      </div>
    </footer>
  );
}
