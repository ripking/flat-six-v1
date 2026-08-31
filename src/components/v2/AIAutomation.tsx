import React from "react";
import Link from "next/link";
import { SectionLabel } from "../ds/SectionLabel";
import { IconTile } from "../ds/IconTile";

// AI & Automation — dark practice band linking to the /ai/ page.
export function AIAutomation() {
  const capabilities: { id: string; icon: string; title: string; body: string }[] = [
    {
      id: "ai-workflow-automation",
      icon: "automation",
      title: "Workflow Automation",
      body: "Remove the manual handoffs that slow down development, production, and distribution teams — from submission triage to reporting and approvals.",
    },
    {
      id: "ai-data-infrastructure",
      icon: "database",
      title: "Data Infrastructure",
      body: "Consolidate scattered production, sales, and performance data into a single trustworthy source your team can actually query and act on.",
    },
    {
      id: "ai-applied-analysis",
      icon: "query_stats",
      title: "Applied Analysis",
      body: "Put analytical models to work on the questions that drive decisions: comparables, performance patterns, catalog behavior, and scenario testing.",
    },
    {
      id: "ai-enablement",
      icon: "school",
      title: "Team Enablement",
      body: "Practical tooling, guardrails, and training so your staff adopt AI safely — with clear policies around rights, confidentiality, and review.",
    },
  ];

  return (
    <section
      id="ai-automation"
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
            <SectionLabel color="var(--brass-300)">AI &amp; Automation</SectionLabel>
            <h2
              style={{
                font: "var(--text-h2)",
                letterSpacing: "var(--tracking-tight)",
                color: "var(--cream-50)",
                margin: "16px 0 0",
              }}
            >
              Built for how content
              <br />
              businesses actually run.
            </h2>
          </div>
          <div>
            <p style={{ font: "var(--text-body)", color: "var(--cream-200)", margin: "0 0 16px", maxWidth: 560 }}>
              AI automation, workflow, data, and analysis solutions designed specifically for
              entertainment and content companies — not generic business software bent to fit an
              industry it doesn&apos;t understand.
            </p>
            <p style={{ font: "var(--text-body)", color: "var(--green-300)", margin: 0, maxWidth: 560 }}>
              We scope every engagement around a decision or a bottleneck, then build only what
              earns its place in your operation.
            </p>
          </div>
        </div>

        <div
          className="fsm-grid-ai-4"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
        >
          {capabilities.map((c) => (
            <div
              key={c.id}
              id={c.id}
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
              <IconTile icon={c.icon} tone="inverse" size={48} />
              <h3
                style={{
                  font: "var(--text-h3)",
                  fontSize: 20,
                  color: "var(--cream-50)",
                  margin: "20px 0 10px",
                }}
              >
                {c.title}
              </h3>
              <p style={{ font: "var(--text-body-sm)", color: "var(--green-300)", margin: 0 }}>
                {c.body}
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
            Explore AI &amp; Automation
            <span className="material-symbols-rounded" aria-hidden="true" style={{ fontSize: 20 }}>
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
