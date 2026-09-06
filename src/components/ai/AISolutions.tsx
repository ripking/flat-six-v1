"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/v2/Header";
import { Footer } from "@/components/v2/Footer";
import { ContactDialog } from "@/components/v2/ContactDialog";
import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { IconTile } from "@/components/ds/IconTile";
import { SectionLabel } from "@/components/ds/SectionLabel";

// Fragmented-adoption symptoms that motivate the engagement.
const adoptionGaps = [
  "Teams use disconnected tools without a broader plan",
  "Valuable knowledge stays buried in documents, email, and spreadsheets",
  "Repetitive research and reporting consume senior staff time",
  "Initiatives stall over security, reliability, or ownership",
  "Generic consultants lack the context to understand media workflows",
];

// The three-rung service ladder — a progression, each rung also standalone.
const serviceLadder = [
  {
    id: "ai-opportunity-assessment",
    number: "01",
    icon: "route",
    label: "Start Here",
    title: "AI Opportunity Assessment",
    lede: "Identify where AI can produce measurable value before committing to a larger implementation.",
    points: [
      "Stakeholder and workflow interviews",
      "Process and tool inventory",
      "Identification of repetitive or knowledge-intensive work",
      "Opportunity mapping by impact, effort, risk, and readiness",
      "Security and human-review requirements",
      "Prioritized implementation roadmap",
      "Executive findings presentation",
    ],
    deliverableLabel: "Deliverable",
    deliverable:
      "A practical roadmap identifying roughly five to seven viable use cases, ranked by business value and implementation difficulty.",
    cta: "Start with an Assessment",
    contactValue: "AI Opportunity Assessment",
  },
  {
    id: "ai-workflow-implementation",
    number: "02",
    icon: "build",
    label: "Build",
    title: "AI Workflow Design & Implementation",
    lede: "Turn the strongest opportunities into working systems.",
    points: [
      "Internal research and knowledge assistants",
      "Automated market and competitive-intelligence workflows",
      "Document intake, classification, and extraction",
      "Executive reporting and briefing systems",
      "Film, television, and slate-analysis support",
      "Development and coverage workflow support",
      "Finance and operating-report automation",
      "Custom integrations across existing business tools",
      "Human approval and escalation controls",
    ],
    quote:
      "The goal is not to automate everything. It is to remove low-value repetition while preserving judgment, confidentiality, and accountability.",
    cta: "Discuss an Implementation",
    contactValue: "AI Workflow Design & Implementation",
  },
  {
    id: "managed-ai-operations",
    number: "03",
    icon: "monitoring",
    label: "Sustain",
    title: "Managed AI Operations",
    lede: "Ongoing support for systems that need to remain useful, reliable, and current.",
    points: [
      "Managed assistants and automated workflows",
      "Continuous refinement as business needs change",
      "Usage and performance monitoring",
      "Failure alerts and operational safeguards",
      "New workflow development",
      "Documentation and staff training",
      "Model and vendor evaluation",
      "Security and access reviews",
      "Regular executive reporting",
    ],
    cta: "Discuss Ongoing Support",
    contactValue: "Managed AI Operations",
  },
];

// Use cases organized by business outcome, not by technology.
const useCaseGroups = [
  {
    id: "use-strategy-intelligence",
    icon: "insights",
    title: "Strategy & Intelligence",
    items: [
      "Monitor market, audience, competitor, and release trends",
      "Produce recurring executive or project briefings",
      "Search and synthesize internal research",
      "Compare historical performance across titles, genres, or territories",
    ],
  },
  {
    id: "use-development-production",
    icon: "movie",
    title: "Development & Production",
    items: [
      "Organize submissions, coverage, and development materials",
      "Support script and project analysis",
      "Extract structured information from budgets and production documents",
      "Maintain searchable project knowledge across teams",
    ],
  },
  {
    id: "use-finance-operations",
    icon: "calculate",
    title: "Finance & Operations",
    items: [
      "Automate recurring reporting and reconciliation preparation",
      "Extract information from contracts, statements, and financial documents",
      "Monitor deadlines, obligations, and operational exceptions",
      "Generate management dashboards and variance summaries",
    ],
  },
  {
    id: "use-sales-development",
    icon: "handshake",
    title: "Sales & Business Development",
    items: [
      "Research prospects and strategic partners",
      "Prepare customized outreach briefs",
      "Maintain pipeline intelligence",
      "Turn meetings into structured follow-ups and next actions",
    ],
  },
  {
    id: "use-institutional-knowledge",
    icon: "hub",
    title: "Institutional Knowledge",
    items: [
      "Build a secure, searchable business knowledge system",
      "Preserve context across projects and employee transitions",
      "Connect policies, documents, decisions, and source material",
      "Give teams answers with traceable supporting evidence",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn how the business operates, where time is being lost, and which problems are worth solving.",
  },
  {
    number: "02",
    title: "Prioritize",
    description:
      "Opportunities are scored by potential value, effort, data readiness, risk, and required human oversight.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop and test a focused first implementation using real workflows and representative business material.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "The system is introduced with documented controls, clear ownership, and staff training.",
  },
  {
    number: "05",
    title: "Manage",
    description:
      "We monitor performance, address failures, and improve the system as tools and business needs evolve.",
  },
];

const proofPoints = [
  {
    icon: "movie_filter",
    title: "Domain Fluency",
    description:
      "Built for film, television, streaming, production, financing, distribution, and adjacent content businesses.",
  },
  {
    icon: "leaderboard",
    title: "Executive Perspective",
    description:
      "Recommendations are evaluated against strategy, operations, economics, and organizational reality.",
  },
  {
    icon: "target",
    title: "Outcome-Led Design",
    description:
      "We begin with the business result, not a predetermined platform or model.",
  },
  {
    icon: "how_to_reg",
    title: "Human Accountability",
    description:
      "Sensitive decisions remain subject to appropriate review and approval.",
  },
  {
    icon: "device_hub",
    title: "Vendor Independence",
    description:
      "Systems are designed around client needs rather than a single AI vendor.",
  },
  {
    icon: "tune",
    title: "Flexible Engagement",
    description:
      "Available as an assessment, a focused implementation, or an ongoing managed service.",
  },
  {
    icon: "handyman",
    title: "Operational Ownership",
    description:
      "We can remain involved after launch rather than handing over a brittle prototype and disappearing.",
  },
];

const controls = [
  "Access controls based on role and need",
  "Clear rules governing what systems may read, retain, or modify",
  "Human approval for consequential actions",
  "Traceable source material where applicable",
  "Vendor and model selection based on confidentiality requirements",
  "Monitoring, failure detection, and escalation procedures",
  "Client ownership of business data and deliverables",
];

export function AISolutions() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const [initialService, setInitialService] = React.useState("");
  const openContact = () => {
    setInitialService("AI Opportunity Review");
    setContactOpen(true);
  };
  const openLadderContact = (value: string) => {
    setInitialService(value);
    setContactOpen(true);
  };
  const closeContact = () => setContactOpen(false);

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
      <Header onContact={openContact} />
      <main>
        {/* 1 — Hero. Business outcomes only; no agents/models/tokens language. */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: "var(--green-950)",
            padding: "112px var(--gutter) 104px",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(70% 120% at 90% 0%, rgba(199,166,104,0.24), transparent 60%), linear-gradient(115deg, rgba(11,35,26,0.25), transparent 55%)",
            }}
          />
          <div
            className="fsm-services-hero"
            style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto" }}
          >
            <SectionLabel color="var(--brass-300)">AI Services</SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(46px, 5.5vw, 72px)",
                lineHeight: 1.04,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--cream-50)",
                maxWidth: 900,
                margin: "20px 0 28px",
              }}
            >
              Practical AI for Media Businesses
            </h1>
            <div
              style={{
                font: "var(--text-body)",
                fontSize: 19,
                color: "var(--cream-200)",
                maxWidth: 820,
                margin: "0 0 38px",
              }}
            >
              <p style={{ margin: "0 0 16px" }}>
                Flat Six Media helps studios, production companies, financiers, distributors, and
                creative businesses use AI to reduce repetitive work, improve decision-making, and
                build more scalable operations.
              </p>
              <p style={{ margin: 0 }}>
                We start with the business problem—not the technology—and design systems that fit
                your existing team, tools, and controls.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <Button className="fsm-mobile-wrap-cta" variant="accent" size="lg" iconRight="arrow_forward" onClick={openContact}>
                Request an AI Opportunity Review
              </Button>
              <a
                href="#approach"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "16px 32px",
                  border: "var(--border-medium) solid rgba(233,225,208,0.35)",
                  borderRadius: "var(--radius-pill)",
                  color: "var(--cream-50)",
                  font: "var(--text-md)",
                  fontWeight: 600,
                  lineHeight: 1,
                  textDecoration: "none",
                }}
              >
                Explore Our Approach
                <span className="material-symbols-rounded" aria-hidden="true" style={{ fontSize: 22 }}>
                  arrow_downward
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 2 — Problem framing. */}
        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>The Gap Today</SectionLabel>
            <div
              className="fsm-grid-split"
              style={{
                display: "grid",
                gridTemplateColumns: "0.9fr 1.1fr",
                gap: 64,
                alignItems: "start",
                margin: "14px 0 0",
              }}
            >
              <div>
                <h2 style={{ font: "var(--text-h2)", letterSpacing: "var(--tracking-tight)", margin: "0 0 20px" }}>
                  From AI Experiments to Operating Advantage
                </h2>
                <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: "0 0 18px", maxWidth: 520 }}>
                  Many media companies are already testing AI, but adoption is often fragmented.
                </p>
                <p style={{ font: "var(--text-body)", color: "var(--color-text)", fontWeight: 600, margin: 0, maxWidth: 520 }}>
                  Flat Six bridges the gap between experimentation and dependable business use.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {adoptionGaps.map((gap, index) => (
                  <div
                    key={gap}
                    style={{
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                      padding: "18px 0",
                      borderTop: index === 0 ? "none" : "1px solid var(--color-divider)",
                    }}
                  >
                    <span
                      className="material-symbols-rounded"
                      aria-hidden="true"
                      style={{ fontSize: 20, color: "var(--brass-500)", marginTop: 1, flex: "none" }}
                    >
                      remove
                    </span>
                    <span style={{ font: "var(--text-body)", color: "var(--color-text-muted)" }}>{gap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3 — Service ladder. Centerpiece of the page. */}
        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg-subtle)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>How We Engage</SectionLabel>
            <div
              className="fsm-grid-split"
              style={{
                display: "grid",
                gridTemplateColumns: "0.8fr 1.2fr",
                gap: 64,
                alignItems: "end",
                margin: "14px 0 48px",
              }}
            >
              <h2 style={{ font: "var(--text-h2)", letterSpacing: "var(--tracking-tight)", margin: 0 }}>
                Assess. Build. Manage.
              </h2>
              <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: 0, maxWidth: 620 }}>
                Three engagements designed to work as a progression—each available on its own. Most
                clients begin with an assessment and continue only where the value is clear.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {serviceLadder.map((rung, index) => {
                const dark = index === 1;
                return (
                  <article
                    key={rung.id}
                    id={rung.id}
                    className="fsm-featured-service"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "0.9fr 1.4fr 0.9fr",
                      gap: 36,
                      alignItems: "center",
                      background: dark ? "var(--green-900)" : "var(--color-surface)",
                      color: dark ? "var(--cream-50)" : "var(--color-text)",
                      border: dark ? "1px solid var(--green-700)" : "1px solid var(--color-border)",
                      borderRadius: "var(--radius-lg)",
                      padding: "var(--space-10)",
                      scrollMarginTop: 96,
                    }}
                  >
                    <div>
                      <IconTile icon={rung.icon} tone={dark ? "brass" : "green"} size={60} />
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: dark ? "var(--brass-300)" : "var(--brass-700)",
                          marginTop: 18,
                        }}
                      >
                        {rung.number} — {rung.label}
                      </div>
                    </div>

                    <div>
                      <h3 style={{ font: "var(--text-h3)", fontSize: "clamp(26px, 3vw, 36px)", margin: "0 0 14px" }}>
                        {rung.title}
                      </h3>
                      <p
                        style={{
                          font: "var(--text-body)",
                          color: dark ? "var(--cream-200)" : "var(--color-text-muted)",
                          margin: 0,
                        }}
                      >
                        {rung.lede}
                      </p>
                      {rung.quote && (
                        <blockquote
                          style={{
                            margin: "20px 0 0",
                            paddingLeft: 18,
                            borderLeft: `var(--border-thick) solid ${dark ? "var(--brass-300)" : "var(--brass-500)"}`,
                            font: "var(--text-body)",
                            fontStyle: "italic",
                            color: dark ? "var(--cream-50)" : "var(--color-text)",
                          }}
                        >
                          {rung.quote}
                        </blockquote>
                      )}
                      {rung.deliverable && (
                        <div style={{ marginTop: 20 }}>
                          <div
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: 11,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: dark ? "var(--brass-300)" : "var(--brass-700)",
                              marginBottom: 6,
                            }}
                          >
                            {rung.deliverableLabel}
                          </div>
                          <p
                            style={{
                              font: "var(--text-body-sm)",
                              color: dark ? "var(--cream-200)" : "var(--color-text-muted)",
                              margin: 0,
                            }}
                          >
                            {rung.deliverable}
                          </p>
                        </div>
                      )}
                    </div>

                    <div
                      style={{
                        borderLeft: `1px solid ${dark ? "var(--green-700)" : "var(--color-divider)"}`,
                        paddingLeft: 28,
                      }}
                    >
                      {rung.points.map((point) => (
                        <div key={point} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                          <span
                            className="material-symbols-rounded"
                            aria-hidden="true"
                            style={{ fontSize: 18, color: "var(--brass-300)", marginTop: 2, flex: "none" }}
                          >
                            check
                          </span>
                          <span style={{ font: "var(--text-body-sm)" }}>{point}</span>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => openLadderContact(rung.contactValue)}
                        style={{
                          background: "none",
                          border: 0,
                          padding: "10px 0 0",
                          color: dark ? "var(--brass-300)" : "var(--color-text-brand)",
                          font: "var(--text-body-sm)",
                          fontWeight: 700,
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        {rung.cta} →
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4 — Use cases by business outcome. */}
        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>Applications</SectionLabel>
            <h2
              style={{
                font: "var(--text-h2)",
                letterSpacing: "var(--tracking-tight)",
                margin: "14px 0 16px",
                maxWidth: 760,
              }}
            >
              Where AI Can Create Leverage
            </h2>
            <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: "0 0 48px", maxWidth: 640 }}>
              Organized by business outcome rather than technology. These are representative
              starting points, not a fixed menu.
            </p>
            <div className="fsm-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {useCaseGroups.map((group) => (
                <Card
                  key={group.id}
                  id={group.id}
                  tone="paper"
                  interactive
                  padding="var(--space-8)"
                  style={{ height: "100%", scrollMarginTop: 96 }}
                >
                  <IconTile icon={group.icon} tone="brass" size={48} />
                  <h3 style={{ font: "var(--text-h3)", fontSize: 20, margin: "20px 0 14px" }}>{group.title}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {group.items.map((item) => (
                      <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span
                          className="material-symbols-rounded"
                          aria-hidden="true"
                          style={{ fontSize: 16, color: "var(--brass-500)", marginTop: 3, flex: "none" }}
                        >
                          chevron_right
                        </span>
                        <span style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5 — Engagement process. */}
        <section
          id="approach"
          style={{
            padding: "var(--section-y) var(--gutter)",
            background: "var(--green-900)",
            scrollMarginTop: 80,
          }}
        >
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel color="var(--brass-300)">Our Approach</SectionLabel>
            <h2
              style={{
                font: "var(--text-h2)",
                letterSpacing: "var(--tracking-tight)",
                color: "var(--cream-50)",
                margin: "14px 0 16px",
                maxWidth: 820,
              }}
            >
              A Controlled Path from Opportunity to Implementation
            </h2>
            <p style={{ font: "var(--text-body)", color: "var(--cream-200)", margin: "0 0 48px", maxWidth: 620 }}>
              Each stage has a defined output and a decision point. You are never committed to the
              next step before the current one has proven its value.
            </p>
            <ol
              className="fsm-grid-process"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 20,
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  style={{
                    paddingTop: 20,
                    borderTop: "var(--border-thick) solid var(--brass-500)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--brass-300)", fontSize: 11, letterSpacing: "0.12em" }}>
                    {step.number}
                  </span>
                  <h3 style={{ font: "var(--text-h3)", fontSize: 20, color: "var(--cream-50)", margin: "12px 0 10px" }}>
                    {step.title}
                  </h3>
                  <p style={{ font: "var(--text-body-sm)", color: "var(--green-300)", margin: 0 }}>
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6 — Why Flat Six. */}
        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>Why Flat Six</SectionLabel>
            <h2
              style={{
                font: "var(--text-h2)",
                letterSpacing: "var(--tracking-tight)",
                margin: "14px 0 48px",
                maxWidth: 820,
              }}
            >
              Media Expertise First. AI Capability Where It Helps.
            </h2>
            <div className="fsm-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
              {proofPoints.map((point) => (
                <div key={point.title} style={{ display: "flex", gap: 16 }}>
                  <IconTile icon={point.icon} tone="green" size={48} />
                  <div>
                    <h3 style={{ font: "var(--text-h3)", fontSize: "var(--text-md)", margin: "2px 0 8px" }}>
                      {point.title}
                    </h3>
                    <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: 0 }}>
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7 — Trust and controls. Deliberately prominent, not an FAQ footnote. */}
        <section
          id="trust"
          style={{
            padding: "var(--section-y) var(--gutter)",
            background: "var(--color-bg-subtle)",
            scrollMarginTop: 80,
          }}
        >
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <div
              className="fsm-grid-split"
              style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "start" }}
            >
              <div>
                <SectionLabel>Trust &amp; Controls</SectionLabel>
                <h2 style={{ font: "var(--text-h2)", letterSpacing: "var(--tracking-tight)", margin: "14px 0 20px" }}>
                  Designed for Sensitive Business Environments
                </h2>
                <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: 0, maxWidth: 500 }}>
                  Media businesses handle unreleased material, contractual obligations, and
                  confidential financial information. Controls are defined as part of the
                  engagement—not assumed afterward.
                </p>
              </div>
              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-10)",
                }}
              >
                {controls.map((control, index) => (
                  <div
                    key={control}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: index === 0 ? "0 0 14px" : "14px 0",
                      borderTop: index === 0 ? "none" : "1px solid var(--color-divider)",
                    }}
                  >
                    <span
                      className="material-symbols-rounded"
                      aria-hidden="true"
                      style={{ fontSize: 18, color: "var(--green-600)", marginTop: 2, flex: "none" }}
                    >
                      shield
                    </span>
                    <span style={{ font: "var(--text-body-sm)", color: "var(--color-text)" }}>{control}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8 — Final CTA with the two-step conversion path. */}
        <section
          id="contact"
          style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg)", textAlign: "center" }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
              <SectionLabel align="center">Start the Conversation</SectionLabel>
            </div>
            <h2 className="fsm-display-heading" style={{ font: "var(--text-h1)", letterSpacing: "var(--tracking-tight)", margin: "0 0 18px" }}>
              Find the AI Opportunities Worth Pursuing
            </h2>
            <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: "0 auto 30px", maxWidth: 600 }}>
              Not every workflow needs AI. We help identify the ones where it can create a real
              operating advantage—and then build the systems required to make that advantage
              dependable.
            </p>
            <p
              style={{
                font: "var(--text-body)",
                fontStyle: "italic",
                color: "var(--color-text)",
                margin: "0 auto 34px",
                maxWidth: 600,
                paddingTop: 22,
                borderTop: "1px solid var(--color-divider)",
              }}
            >
              Tell us what your team does repeatedly, where information gets stuck, or which
              decisions take longer than they should.
            </p>
            <Button className="fsm-mobile-wrap-cta" variant="primary" size="lg" iconRight="arrow_forward" onClick={openContact}>
              Request an AI Opportunity Review
            </Button>
            <div style={{ marginTop: 28 }}>
              <Link
                href="/services/"
                style={{
                  font: "var(--text-body-sm)",
                  fontWeight: 600,
                  color: "var(--color-text-brand)",
                  textDecoration: "none",
                }}
              >
                Explore our advisory services →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer onContact={openContact} />
      <ContactDialog open={contactOpen} onClose={closeContact} initialService={initialService} />
    </div>
  );
}
