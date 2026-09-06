"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ds/Button";

type HeroProps = {
  onContact?: () => void;
};

// Hero — full-bleed cinematic image with overlaid headline.
export function Hero({ onContact }: HeroProps) {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        background: "var(--green-900)",
        overflow: "hidden",
      }}
    >
      {/* Full-bleed hero photograph */}
      <img
        src="/images/hero-cover.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 65%",
        }}
      />
      {/* Racing-green gradient overlay keeps the headline legible over the photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(100deg, rgba(11,35,26,0.94) 0%, rgba(20,62,46,0.78) 42%, rgba(11,35,26,0.40) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(90% 70% at 80% 10%, rgba(199,166,104,0.18), transparent 55%)",
        }}
      />
      <div
        className="fsm-hero-inner"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--container-wide)",
          margin: "0 auto",
          padding: "130px var(--gutter) 120px",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}>
            <span style={{ width: 28, height: 2, background: "var(--brass-300)" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--brass-300)",
              }}
            >
              Executive Caliber. On Demand.
            </span>
          </div>
          <h1
            className="fsm-hero-h1"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(48px, 6vw, 84px)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "var(--cream-50)",
              margin: "0 0 26px",
            }}
          >
            Senior Judgment for
            <br />
            Consequential Media Decisions.
          </h1>
          <p
            style={{
              font: "var(--text-body)",
              fontSize: 19,
              color: "var(--cream-200)",
              maxWidth: 560,
              margin: "0 0 36px",
            }}
          >
            From greenlights and slate investments to valuations, operating challenges, and disputes,
            Flat Six Media brings finance, strategy, and operating experience to the decisions where
            getting it right matters.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            <Button variant="accent" size="lg" iconRight="arrow_forward" onClick={onContact}>
              Discuss Your Decision
            </Button>
            <Link
              href="/services/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                border: "var(--border-medium) solid rgba(233,225,208,0.45)",
                borderRadius: "var(--radius-pill)",
                color: "var(--cream-50)",
                font: "var(--text-md)",
                fontWeight: 600,
                lineHeight: 1,
                textDecoration: "none",
              }}
            >
              Explore Advisory Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
