"use client";

import React from "react";
import { SectionLabel } from "../ds/SectionLabel";

// Founder profile.
export function Founder() {
  return (
    <section
      id="founder"
      style={{ background: "var(--color-bg)", padding: "var(--section-y) var(--gutter)" }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: 56,
          alignItems: "start",
        }}
      >
        <div>
          <img
            src="/images/founder.jpg"
            alt="Michael Rifkin"
            style={{
              width: "100%",
              height: 420,
              objectFit: "cover",
              borderRadius: "var(--radius-lg)",
              display: "block",
            }}
          />
        </div>
        <div>
          <SectionLabel>Founder &amp; Principal</SectionLabel>
          <h2
            style={{
              font: "var(--text-h2)",
              letterSpacing: "var(--tracking-tight)",
              margin: "14px 0 18px",
              color: "var(--color-text)",
            }}
          >
            Michael Rifkin
          </h2>
          <p style={{ font: "var(--text-body)", color: "var(--color-text)", margin: "0 0 16px", maxWidth: 620 }}>
            Michael is a seasoned media executive with nearly two decades of experience at the
            intersection of finance, strategy, and global distribution. Before founding Flat Six
            Media, he served as Co-Head of Sony Pictures International Productions, overseeing finance
            and operations for a slate of 30+ films annually.
          </p>
          <p style={{ font: "var(--text-body)", color: "var(--color-text)", margin: "0 0 16px", maxWidth: 620 }}>
            His tenure included senior leadership within Columbia Pictures&apos; Business Development
            group, where he was instrumental in the financial modeling and greenlighting of major
            franchises, including <em>Spider-Man: Into the Spider-Verse</em>, <em>Jumanji</em>, and{" "}
            <em>Hotel Transylvania</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
