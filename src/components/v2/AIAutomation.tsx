import React from "react";
import Link from "next/link";
import { SectionLabel } from "../ds/SectionLabel";
import { IconTile } from "../ds/IconTile";

// AI Strategy & Integration — dark practice band, entry point to /ai/.
// Mirrors the service ladder on the AI page: assess, build, manage.
export function AIAutomation() {
  const ladder: { id: string; icon: string; step: string; title: string; body: string }[] = [
    {
      id: "ai-assessment",
      icon: "route",
      step: "01",
      title: "Assess",
      body: "An AI Opportunity Assessment that maps where AI can create measurable value—ranked by business impact, effort, and readiness.",
    },
    {
      id: "ai-implementation",
      icon: "build",
      step: "02",
      title: "Build",
      body: "Design and implementation of the strongest opportunities: research assistants, document workflows, reporting, and analysis support.",
    },
    {
      id: "ai-managed-operations",
      icon: "monitoring",
      step: "03",
      title: "Manage",
      body: "Ongoing operation of the systems we build—monitoring, refinement, training, and reporting as your needs change.",
    },
  ];

  return (
    <section
      id="ai-services"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--green-950)",
        borderTop: "var(--border-thick) solid var(--brass-500)",
        padding: "var(--section-y) var(--gutter)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(65% 110% at 88% 4%, rgba(199,166,104,0.18), transparent 62%)",
        }}
      />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div
          className="fsm-grid-split"
          style={{
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: 64,
            alignItems: "end",
            marginBottom: 52,
          }}
        >
          <div>
            <SectionLabel color="var(--brass-300)">AI Strategy &amp; Integration</SectionLabel>
            <h2
              style={{
                font: "var(--text-h2)",
                letterSpacing: "var(--tracking-tight)",
                color: "var(--cream-50)",
                margin: "16px 0 0",
              }}
            >
              Practical AI for
              <br />
              Media Businesses.
            </h2>
          </div>
          <div>
            <p style={{ font: "var(--text-body)", color: "var(--cream-200)", margin: "0 0 16px", maxWidth: 560 }}>
              Identify and implement practical AI systems for research, analysis, reporting, and
              operations—designed around the needs of media businesses.
            </p>
            <p style={{ font: "var(--text-body)", color: "var(--green-300)", margin: 0, maxWidth: 560 }}>
              We start with the business problem, not the technology, and combine technical
              execution with real operating experience inside the industry.
            </p>
          </div>
        </div>

        <div
          className="fsm-grid-ai-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {ladder.map((rung) => (
            <div
              key={rung.id}
              id={rung.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 28,
                border: "1px solid var(--green-800)",
                borderRadius: "var(--radius-lg)",
                background: "rgba(255,255,255,0.03)",
                scrollMarginTop: 100,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <IconTile icon={rung.icon} tone="inverse" size={48} />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "var(--brass-300)",
                  }}
                >
                  {rung.step}
                </span>
              </div>
              <h3
                style={{
                  font: "var(--text-h3)",
                  fontSize: 20,
                  color: "var(--cream-50)",
                  margin: "0 0 10px",
                }}
              >
                {rung.title}
              </h3>
              <p style={{ font: "var(--text-body-sm)", color: "var(--green-300)", margin: 0 }}>
                {rung.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
          <Link
            href="/ai/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              border: "var(--border-medium) solid var(--brass-300)",
              borderRadius: "var(--radius-pill)",
              color: "var(--brass-300)",
              font: "var(--text-base)",
              fontWeight: 600,
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            Explore AI Services
            <span className="material-symbols-rounded" aria-hidden="true" style={{ fontSize: 20 }}>
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
