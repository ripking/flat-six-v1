"use client";

import React from "react";
import content from "../../../content.json";
import { SectionLabel } from "../ds/SectionLabel";

// Founder profile.
export function Founder() {
  return (
    <section
      id="founder"
      style={{ background: "var(--color-bg)", padding: "var(--section-y) var(--gutter)" }}
    >
      <div
        className="fsm-grid-split"
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
            src={content.founder.image}
            alt={content.founder.imageAlt}
            className="fsm-founder-img"
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
          <SectionLabel>{content.founder.subheading}</SectionLabel>
          <h2
            style={{
              font: "var(--text-h2)",
              letterSpacing: "var(--tracking-tight)",
              margin: "14px 0 18px",
              color: "var(--color-text)",
            }}
          >
            {content.founder.name}
          </h2>
          {content.founder.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              style={{ font: "var(--text-body)", color: "var(--color-text)", margin: "0 0 16px", maxWidth: 620 }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
