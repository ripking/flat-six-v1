"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ds/Button";

type HeaderProps = {
  onContact?: () => void;
};

const navLinks: [string, string][] = [
  ["Expertise", "/#expertise"],
  ["Services", "/services/"],
  ["AI Services", "/ai/"],
  ["About", "/#about"],
  ["Founder", "/#founder"],
];

// Site header — wordmark, nav, contact CTA, mobile hamburger menu.
export function Header({ onContact }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobile = () => setMobileOpen((v) => !v);
  const closeMobile = () => setMobileOpen(false);

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: 500,
    color: "var(--cream-200)",
    textDecoration: "none",
    letterSpacing: "0.01em",
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(14,42,32,0.94)",
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
          <Link
            href="/"
            aria-label="Flat Six Media, home"
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
                filter: "brightness(0) invert(1)",
              }}
            />
            <span
              className="fsm-wordmark"
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
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <div className="fsm-navlinks" style={{ display: "flex", alignItems: "center", gap: 30 }}>
              {navLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brass-300)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-200)")}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Button variant="accent" size="sm" onClick={onContact}>
              Contact Us
            </Button>
            {/* Hamburger — visible only on mobile */}
            <button
              type="button"
              className="fsm-hamburger"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={toggleMobile}
              style={{
                display: "none",
                appearance: "none",
                background: "none",
                border: 0,
                padding: 4,
                cursor: "pointer",
                color: "var(--cream-50)",
              }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: 28 }}>
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay — sibling of <header> so it never covers the hamburger */}
      <div
        className={`fsm-mobile-menu${mobileOpen ? " fsm-mobile-menu--open" : ""}`}
        aria-hidden={!mobileOpen}
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100dvh",
          zIndex: 40,
          background: "rgba(14,42,32,0.98)",
          backdropFilter: "blur(14px)",
          flexDirection: "column",
          paddingTop: 94,
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
          paddingBottom: 40,
          gap: 6,
          overflowY: "auto",
        }}
      >
        {navLinks.map(([label, href]) => (
          <Link
            key={label}
            href={href}
            onClick={closeMobile}
            style={{
              ...linkStyle,
              fontSize: 18,
              padding: "14px 0",
              borderBottom: "1px solid rgba(155,191,172,0.12)",
            }}
          >
            {label}
          </Link>
        ))}
        <div style={{ paddingTop: 20 }}>
          <Button
            variant="accent"
            size="lg"
            fullWidth
            onClick={() => {
              closeMobile();
              onContact?.();
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}