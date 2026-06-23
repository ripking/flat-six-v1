import React from "react";
import { Card } from "../ds/Card";
import { IconTile } from "../ds/IconTile";
import { SectionLabel } from "../ds/SectionLabel";

// Expertise — the three core pillars.
export function Expertise() {
  const pillars = [
    {
      icon: "strategy",
      title: "Content Strategy",
      body: "20+ years evaluating thousands of films and TV shows for studio and independent financing. Available for individual titles, libraries, and slates.",
    },
    {
      icon: "leaderboard",
      title: "Finance & Operations",
      body: "15 years of executive-level experience managing multinational organizations, with a proven record of growing top-line revenue and expanding into new territories.",
    },
    {
      icon: "handshake",
      title: "Scalable Support",
      body: "Long-term partnerships or one-off strategic projects to suit your needs. We'll work with you, at whatever scale the engagement calls for.",
    },
  ];
  return (
    <section
      id="expertise"
      style={{
        background: "var(--color-bg)",
        padding: "var(--section-y) var(--gutter)",
      }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionLabel>Core Pillars</SectionLabel>
        <h2
          style={{
            font: "var(--text-h2)",
            letterSpacing: "var(--tracking-tight)",
            margin: "14px 0 48px",
            color: "var(--color-text)",
          }}
        >
          Our Expertise
        </h2>
        <div
          className="fsm-grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {pillars.map((p) => (
            <Card key={p.title} tone="paper" interactive padding="var(--space-10)">
              <IconTile icon={p.icon} tone="green" size={60} />
              <h3 style={{ font: "var(--text-h3)", margin: "22px 0 12px", color: "var(--color-text)" }}>
                {p.title}
              </h3>
              <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: 0 }}>
                {p.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
