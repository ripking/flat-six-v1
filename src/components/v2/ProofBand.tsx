import React from "react";

const proofItems = [
  {
    title: "Studio and Independent Perspective",
    body: "Experience across studio leadership, independent production, global distribution, and content investment.",
  },
  {
    title: "Decision-Grade Analysis",
    body: "Financial modeling and qualitative judgment designed for investment, operating, and dispute-related decisions.",
  },
  {
    title: "Flexible Engagement",
    body: "Project-based advisory, retained support, fractional leadership, and specialized assignments.",
  },
];

type ProofBandProps = {
  inverse?: boolean;
  stacked?: boolean;
};

export function ProofBand({ inverse = false, stacked = false }: ProofBandProps) {
  return (
    <div
      className={stacked ? undefined : "fsm-grid-3"}
      style={{
        display: "grid",
        gridTemplateColumns: stacked ? "1fr" : "repeat(3, 1fr)",
        gap: 20,
      }}
    >
      {proofItems.map((item) => (
        <div
          key={item.title}
          style={{
            padding: 24,
            borderRadius: "var(--radius-lg)",
            border: `1px solid ${inverse ? "var(--green-700)" : "var(--color-border)"}`,
            background: inverse ? "rgba(255,255,255,0.03)" : "var(--color-surface)",
          }}
        >
          <h3
            style={{
              font: "var(--text-h3)",
              fontSize: 19,
              color: inverse ? "var(--cream-50)" : "var(--color-text)",
              margin: "0 0 10px",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              font: "var(--text-body-sm)",
              color: inverse ? "var(--green-300)" : "var(--color-text-muted)",
              margin: 0,
            }}
          >
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
