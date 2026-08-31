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

const solutionFamilies = [
  {
    number: "01",
    title: "Automation & Workflow",
    description:
      "Take repetitive, deadline-driven process off your team and make the handoffs between departments reliable.",
    links: [
      ["Workflow Automation", "#workflow-automation"],
      ["Document & Contract Processing", "#document-processing"],
      ["Reporting Automation", "#reporting-automation"],
    ],
  },
  {
    number: "02",
    title: "Data & Analysis",
    description:
      "Turn scattered production, sales, and audience data into a source of truth your team can query and defend.",
    links: [
      ["Data Infrastructure", "#data-infrastructure"],
      ["Applied Analysis & Modeling", "#applied-analysis"],
      ["Catalog & Performance Intelligence", "#catalog-intelligence"],
    ],
  },
  {
    number: "03",
    title: "Strategy & Enablement",
    description:
      "Decide where AI belongs in your operation, and give your staff the tooling and guardrails to use it well.",
    links: [
      ["AI Readiness Assessment", "#ai-readiness"],
      ["Team Enablement & Training", "#team-enablement"],
      ["Governance & Risk Policy", "#governance-policy"],
    ],
  },
];

const featuredSolutions = [
  {
    id: "workflow-automation",
    label: "Operational Throughput",
    icon: "automation",
    title: "Workflow Automation",
    description:
      "We map the workflows your team actually runs — submissions, approvals, deliverables, financial reporting, rights tracking — and automate the steps that consume time without adding judgment.",
    details: [
      "Process mapping and bottleneck analysis",
      "Automated routing, triage, and approvals",
      "Systems integration across existing tools",
      "Human review retained at decision points",
    ],
  },
  {
    id: "data-infrastructure",
    label: "Single Source of Truth",
    icon: "database",
    title: "Data Infrastructure",
    description:
      "Production, distribution, and performance data usually lives across spreadsheets, portals, and inboxes. We consolidate it into a structured, queryable foundation that analysis and automation can build on.",
    details: [
      "Source consolidation and data modeling",
      "Pipeline design and scheduled refresh",
      "Validation, reconciliation, and audit trails",
      "Dashboards and self-serve reporting",
    ],
  },
  {
    id: "applied-analysis",
    label: "Decision Support",
    icon: "query_stats",
    title: "Applied Analysis & Modeling",
    description:
      "Analytical models built around the questions that drive capital and creative decisions, developed with the same industry judgment behind our greenlight, slate, and valuation work.",
    details: [
      "Comparable and performance analysis",
      "Scenario and sensitivity modeling",
      "Catalog and portfolio behavior analysis",
      "Documented, reviewable methodology",
    ],
  },
];

const supportingSolutions = [
  {
    id: "document-processing",
    icon: "description",
    title: "Document & Contract Processing",
    description: [
      "Structured extraction from contracts, deal memos, participation statements, and delivery documents.",
      "Designed to accelerate review by qualified people, not to replace legal or financial judgment.",
    ],
  },
  {
    id: "reporting-automation",
    icon: "lab_profile",
    title: "Reporting Automation",
    description:
      "Recurring investor, financier, studio, and internal reporting assembled automatically from source data, on a reliable schedule.",
  },
  {
    id: "catalog-intelligence",
    icon: "video_library",
    title: "Catalog & Performance Intelligence",
    description:
      "Ongoing monitoring and analysis of how titles and libraries perform across windows, territories, and platforms.",
  },
  {
    id: "ai-readiness",
    icon: "checklist",
    title: "AI Readiness Assessment",
    description:
      "A grounded review of where AI and automation would create real value in your operation — and where they would not. Delivered with a prioritized, costed roadmap.",
  },
  {
    id: "team-enablement",
    icon: "school",
    title: "Team Enablement & Training",
    description:
      "Practical, role-specific training so development, finance, production, and distribution staff use these tools confidently and appropriately.",
  },
  {
    id: "governance-policy",
    icon: "policy",
    title: "Governance & Risk Policy",
    description:
      "Internal policy covering confidentiality, rights and licensing considerations, vendor selection, disclosure, and human review requirements.",
  },
];

const principles = [
  {
    number: "01",
    title: "Start From the Bottleneck",
    description:
      "Every engagement begins with the constraint or decision costing you time and money — never with a technology looking for a use.",
  },
  {
    number: "02",
    title: "Industry Context First",
    description:
      "Windows, participations, delivery requirements, and rights structures shape the work. Generic tooling misses all of it.",
  },
  {
    number: "03",
    title: "Humans Keep the Judgment",
    description:
      "Automation handles process and preparation. Consequential creative, financial, and legal calls stay with your people.",
  },
  {
    number: "04",
    title: "You Own What We Build",
    description:
      "Documented, maintainable systems that your team or ours can operate. No dependency engineered into the deliverable.",
  },
];

const useCases = [
  "Studios",
  "Production Companies",
  "Independent Producers",
  "Distributors & Sales Agents",
  "Streamers",
  "Institutional Investors",
  "Creators & Influencer Businesses",
  "Legal Counsel",
];

export function AISolutions() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const [initialService, setInitialService] = React.useState("");
  const openContact = () => {
    setInitialService("");
    setContactOpen(true);
  };
  const openSolutionContact = (solution: string) => {
    setInitialService(solution);
    setContactOpen(true);
  };
  const closeContact = () => setContactOpen(false);

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
      <Header onContact={openContact} />
      <main>
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
            <SectionLabel color="var(--brass-300)">AI &amp; Automation</SectionLabel>
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
              AI Solutions for Entertainment &amp; Content Businesses
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
                Automation, workflow, data, and analysis solutions built for the way media companies
                actually operate—by a team that has run finance and operations inside them.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                Most AI advisory arrives without industry context. We start from your bottleneck,
                your data, and the decisions in front of you.
              </p>
              <p style={{ margin: 0 }}>
                Available as a scoped project, an ongoing retainer, or embedded alongside our
                finance and operations work.
              </p>
            </div>
            <Button variant="accent" size="lg" iconRight="arrow_forward" onClick={openContact}>
              Discuss an AI Engagement
            </Button>
          </div>
        </section>

        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>Where to Begin</SectionLabel>
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
                Start with the work that is slowing you down.
              </h2>
              <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: 0, maxWidth: 620 }}>
                Our AI work spans automation, data and analysis, and strategy and enablement. These
                three families are a practical entry point—most engagements draw on more than one.
              </p>
            </div>
            <div
              className="fsm-grid-3 fsm-service-family-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
            >
              {solutionFamilies.map((family) => (
                <Card
                  key={family.number}
                  className="fsm-service-family-card"
                  tone="paper"
                  padding="var(--space-10)"
                  style={{ height: "100%" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--brass-700)",
                      fontSize: 12,
                      letterSpacing: "0.16em",
                    }}
                  >
                    {family.number}
                  </span>
                  <h3 style={{ font: "var(--text-h3)", margin: "18px 0 12px" }}>{family.title}</h3>
                  <p
                    className="fsm-service-family-description"
                    style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: "0 0 26px" }}
                  >
                    {family.description}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {family.links.map(([label, href]) => (
                      <a
                        key={href}
                        href={href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 12,
                          color: "var(--color-text-brand)",
                          font: "var(--text-body-sm)",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        {label}
                        <span className="material-symbols-rounded" aria-hidden="true" style={{ fontSize: 18 }}>
                          arrow_downward
                        </span>
                      </a>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg-subtle)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>Core Solutions</SectionLabel>
            <h2
              style={{
                font: "var(--text-h2)",
                letterSpacing: "var(--tracking-tight)",
                margin: "14px 0 48px",
                maxWidth: 720,
              }}
            >
              Systems that earn their place in your operation.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {featuredSolutions.map((solution, index) => (
                <article
                  key={solution.id}
                  id={solution.id}
                  className="fsm-featured-service"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "0.9fr 1.4fr 0.9fr",
                    gap: 36,
                    alignItems: "center",
                    background: index === 1 ? "var(--green-900)" : "var(--color-surface)",
                    color: index === 1 ? "var(--cream-50)" : "var(--color-text)",
                    border: index === 1 ? "1px solid var(--green-700)" : "1px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "var(--space-10)",
                    scrollMarginTop: 96,
                  }}
                >
                  <div>
                    <IconTile icon={solution.icon} tone={index === 1 ? "brass" : "green"} size={60} />
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: index === 1 ? "var(--brass-300)" : "var(--brass-700)",
                        marginTop: 18,
                      }}
                    >
                      {solution.label}
                    </div>
                  </div>
                  <div>
                    <h3 style={{ font: "var(--text-h3)", fontSize: "clamp(26px, 3vw, 36px)", margin: "0 0 14px" }}>
                      {solution.title}
                    </h3>
                    <p
                      style={{
                        font: "var(--text-body)",
                        color: index === 1 ? "var(--cream-200)" : "var(--color-text-muted)",
                        margin: 0,
                      }}
                    >
                      {solution.description}
                    </p>
                  </div>
                  <div
                    style={{
                      borderLeft: `1px solid ${index === 1 ? "var(--green-700)" : "var(--color-divider)"}`,
                      paddingLeft: 28,
                    }}
                  >
                    {solution.details.map((detail) => (
                      <div key={detail} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                        <span
                          className="material-symbols-rounded"
                          aria-hidden="true"
                          style={{ fontSize: 18, color: "var(--brass-300)", marginTop: 2 }}
                        >
                          check
                        </span>
                        <span style={{ font: "var(--text-body-sm)" }}>{detail}</span>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => openSolutionContact(solution.title)}
                      style={{
                        background: "none",
                        border: 0,
                        padding: "8px 0 0",
                        color: index === 1 ? "var(--brass-300)" : "var(--color-text-brand)",
                        font: "var(--text-body-sm)",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Discuss this solution →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>Additional Capabilities</SectionLabel>
            <h2 style={{ font: "var(--text-h2)", letterSpacing: "var(--tracking-tight)", margin: "14px 0 48px" }}>
              Specialized support, shaped to the assignment.
            </h2>
            <div className="fsm-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {supportingSolutions.map((solution) => (
                <Card
                  key={solution.id}
                  id={solution.id}
                  tone="paper"
                  interactive
                  padding="var(--space-8)"
                  style={{ height: "100%", scrollMarginTop: 96 }}
                >
                  <IconTile icon={solution.icon} tone="brass" size={48} />
                  <h3 style={{ font: "var(--text-h3)", fontSize: 20, margin: "20px 0 10px" }}>{solution.title}</h3>
                  {Array.isArray(solution.description) ? (
                    solution.description.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraph}
                        style={{
                          font: "var(--text-body-sm)",
                          color: "var(--color-text-muted)",
                          margin: paragraphIndex === 0 ? "0 0 14px" : 0,
                        }}
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: 0 }}>
                      {solution.description}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--green-900)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <div
              className="fsm-grid-split"
              style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 72, alignItems: "start" }}
            >
              <div>
                <SectionLabel color="var(--brass-300)">How We Work</SectionLabel>
                <h2
                  style={{
                    font: "var(--text-h2)",
                    letterSpacing: "var(--tracking-tight)",
                    color: "var(--cream-50)",
                    margin: "14px 0 20px",
                  }}
                >
                  Practical before impressive.
                </h2>
                <p style={{ font: "var(--text-body)", color: "var(--cream-200)", margin: 0, maxWidth: 480 }}>
                  AI is only useful here when it respects how content businesses are financed,
                  produced, and distributed. These principles govern every engagement.
                </p>
              </div>
              <div
                className="fsm-grid-services-2"
                style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
              >
                {principles.map((principle) => (
                  <div
                    key={principle.number}
                    style={{
                      padding: 28,
                      border: "1px solid var(--green-700)",
                      borderRadius: "var(--radius-lg)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--brass-300)", fontSize: 11 }}>
                      {principle.number}
                    </span>
                    <h3 style={{ font: "var(--text-h3)", fontSize: 20, color: "var(--cream-50)", margin: "16px 0 10px" }}>
                      {principle.title}
                    </h3>
                    <p style={{ font: "var(--text-body-sm)", color: "var(--green-300)", margin: 0 }}>
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg-subtle)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>Who We Serve</SectionLabel>
            <h2 style={{ font: "var(--text-h2)", letterSpacing: "var(--tracking-tight)", margin: "14px 0 36px", maxWidth: 760 }}>
              Wherever content, capital, and operations meet.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 64 }}>
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  style={{
                    padding: "10px 16px",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-pill)",
                    background: "var(--color-surface)",
                    font: "var(--text-body-sm)",
                    color: "var(--color-text)",
                  }}
                >
                  {useCase}
                </span>
              ))}
            </div>
            <div
              className="fsm-grid-split"
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: 56,
                paddingTop: 48,
                borderTop: "1px solid var(--color-divider)",
                alignItems: "center",
              }}
            >
              <div>
                <SectionLabel>Paired With Advisory</SectionLabel>
                <h2 style={{ font: "var(--text-h2)", letterSpacing: "var(--tracking-tight)", margin: "14px 0 18px" }}>
                  Stronger alongside the rest of the practice.
                </h2>
                <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: "0 0 18px", maxWidth: 640 }}>
                  Our AI work is most effective when it sits next to the financial and operational
                  engagements it supports—greenlight analysis, slate underwriting, library
                  valuation, and fractional CFO/COO leadership.
                </p>
                <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: 0, maxWidth: 640 }}>
                  The same judgment that informs those engagements shapes what we automate, what we
                  model, and what we deliberately leave to people.
                </p>
              </div>
              <div>
                <Link
                  href="/services/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    border: "var(--border-medium) solid var(--color-border-brand)",
                    borderRadius: "var(--radius-pill)",
                    color: "var(--color-text-brand)",
                    font: "var(--text-base)",
                    fontWeight: 600,
                    lineHeight: 1,
                    textDecoration: "none",
                  }}
                >
                  Explore Advisory Services
                  <span className="material-symbols-rounded" aria-hidden="true" style={{ fontSize: 20 }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg)", textAlign: "center" }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
              <SectionLabel align="center">Start the Conversation</SectionLabel>
            </div>
            <h2 style={{ font: "var(--text-h1)", letterSpacing: "var(--tracking-tight)", margin: "0 0 18px" }}>
              Not sure where AI fits yet?
            </h2>
            <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: "0 auto 34px", maxWidth: 580 }}>
              Tell us where your team is losing time or working blind. We&apos;ll tell you honestly
              whether automation, better data, or neither is the right answer.
            </p>
            <Button variant="primary" size="lg" iconRight="arrow_forward" onClick={openContact}>
              Discuss an AI Engagement
            </Button>
          </div>
        </section>
      </main>
      <Footer onContact={openContact} />
      <ContactDialog open={contactOpen} onClose={closeContact} initialService={initialService} />
    </div>
  );
}
