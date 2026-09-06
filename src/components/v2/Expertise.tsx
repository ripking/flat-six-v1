import React from "react";
import { Card } from "../ds/Card";
import { IconTile } from "../ds/IconTile";
import { SectionLabel } from "../ds/SectionLabel";

// Expertise — the three core pillars.
export function Expertise() {
  const pillars = [
    {
      id: "expertise-content-investment-strategy",
      icon: "strategy",
      title: "Content Investment & Strategy",
      body: "Studio and independent experience evaluating films, television projects, libraries, and slates for financing, investment, and portfolio decisions.",
    },
    {
      id: "expertise-finance-operating-leadership",
      icon: "leaderboard",
      title: "Finance & Operating Leadership",
      body: "Senior finance and operations support for media companies navigating growth, financing, transition, or complexity.",
    },
    {
      id: "expertise-flexible-senior-support",
      icon: "handshake",
      title: "Flexible Senior Support",
      body: "Project-based analysis, retained advisory, or fractional leadership shaped around the decision, team, and timeline.",
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
            <Card
              key={p.title}
              id={p.id}
              tone="paper"
              interactive
              padding="var(--space-10)"
              style={{ scrollMarginTop: 100 }}
            >
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
