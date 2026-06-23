import React from "react";
import { StatBlock } from "../ds/StatBlock";
import { SectionLabel } from "../ds/SectionLabel";

// Brand statement + stat strip + feature image (dark section).
export function BrandStatement() {
  const stats: [string, string][] = [
    ["$500M+", "Slate Funding Secured"],
    ["20+", "Years Experience"],
    ["8", "Franchises Created"],
    ["24/7", "Advisory Support"],
  ];
  return (
    <section
      id="about"
      style={{ background: "var(--color-surface-inverse)", padding: "var(--section-y) var(--gutter)" }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>
          <SectionLabel color="var(--brass-300)">The Flat Six Philosophy</SectionLabel>
          <h2
            style={{
              font: "var(--text-h2)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--cream-50)",
              margin: "16px 0 24px",
            }}
          >
            Enduring Value.
            <br />
            Modern Execution.
          </h2>
          <p style={{ font: "var(--text-body)", color: "var(--cream-200)", margin: "0 0 18px", maxWidth: 520 }}>
            We believe the most successful content is built like the world-renowned flat-six engine:
            well-balanced, incredibly powerful, and engineered for the kind of enduring performance
            that turns creative vision into measurable, bottom-line success that delivers returns for
            decades.
          </p>
          <p style={{ font: "var(--text-body)", color: "var(--cream-200)", margin: 0, maxWidth: 520 }}>
            We are a boutique consultancy providing executive-caliber support across strategy,
            finance, and operations. We serve independent producers, production companies of all
            sizes, major studios, institutional investors and financiers, family offices, and more.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              marginTop: 44,
              paddingTop: 36,
              borderTop: "1px solid var(--green-700)",
            }}
          >
            {stats.map(([v, l]) => (
              <StatBlock key={l} value={v} label={l} tone="inverse" align="center" />
            ))}
          </div>
        </div>
        <img
          src="/images/feature.jpg"
          alt="Flat-six engine detail"
          style={{
            width: "100%",
            height: 440,
            objectFit: "cover",
            borderRadius: "var(--radius-lg)",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
