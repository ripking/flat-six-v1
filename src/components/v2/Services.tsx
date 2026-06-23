import React from "react";
import { SectionLabel } from "../ds/SectionLabel";
import { IconTile } from "../ds/IconTile";

// Specialized Services — nine-up icon grid.
export function Services() {
  const services: [string, string, string][] = [
    ["insights", "Market Intelligence", "In-depth analytics on competitive landscapes and trend forecasting, whether before your project hits the screen or after it releases."],
    ["finance", "Fractional CFO / COO", "Fractional CFO and COO services for your content production company. Deeply experienced at studio and independent level."],
    ["balance", "Expert Witness", "Expert witness services for litigation support, arbitration, and mediation. Experienced at the federal level."],
    ["hub", "Franchise Development", "Experienced in franchise development and growth. Let's develop your next IP today."],
    ["account_balance", "Slate Financing", "Expert underwriting support to institutional investors for slate financing transactions."],
    ["rocket_launch", "Greenlight Support", "Robust greenlight analysis for your film or TV show. We support financiers weighing an investment and provide backend analysis for projects already underway."],
    ["calculate", "Budgeting", "We work with experienced line producers that can create a budget for your indie or studio script."],
    ["business_center", "Business Planning", "Business plans, forecasts, and investor materials for your entertainment business."],
    ["video_library", "Library Valuations", "Extensive experience valuing film and television libraries. We help you determine what your library is worth and sell it."],
  ];
  return (
    <section
      id="services"
      style={{ background: "var(--color-bg-subtle)", padding: "var(--section-y) var(--gutter)" }}
    >
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionLabel>Full Service Suite</SectionLabel>
        <h2
          style={{
            font: "var(--text-h2)",
            letterSpacing: "var(--tracking-tight)",
            margin: "14px 0 48px",
            color: "var(--color-text)",
          }}
        >
          Specialized Services
        </h2>
        <div className="fsm-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {services.map(([icon, title, body]) => (
            <div key={title} style={{ display: "flex", gap: 16 }}>
              <IconTile icon={icon} tone="brass" size={48} />
              <div>
                <h4
                  style={{
                    font: "var(--text-h3)",
                    fontSize: "var(--text-md)",
                    margin: "2px 0 8px",
                    color: "var(--color-text)",
                  }}
                >
                  {title}
                </h4>
                <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: 0 }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
