"use client";

import React from "react";
import { Button } from "../ds/Button";

type HeaderProps = {
  onContact?: () => void;
};

// Site header — wordmark, nav, contact CTA.
export function Header({ onContact }: HeaderProps) {
  const [scrolled] = React.useState(false);
  const links = ["Expertise", "Services", "About", "Founder"];
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(14,42,32,0.94)" : "rgba(14,42,32,0.82)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(155,191,172,0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-wide)",
          margin: "0 auto",
          padding: "16px var(--gutter)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          aria-label="Flat Six Media — back to top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <img
            src="/images/logo.png"
            alt="Flat Six Media logo"
            style={{
              height: 34,
              width: "auto",
              // Logo art is black; invert to cream so it reads on the dark header.
              filter: "brightness(0) invert(1)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--cream-50)",
            }}
          >
            Flat Six Media
          </span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {links.map((l) => (
            <a
              key={l}
              href={"#" + l.toLowerCase()}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--cream-200)",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brass-300)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-200)")}
            >
              {l}
            </a>
          ))}
          <Button variant="accent" size="sm" onClick={onContact}>
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
