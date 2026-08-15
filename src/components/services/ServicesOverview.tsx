"use client";

import React from "react";
import { Header } from "@/components/v2/Header";
import { Footer } from "@/components/v2/Footer";
import { ContactDialog } from "@/components/v2/ContactDialog";
import { Button } from "@/components/ds/Button";
import { Card } from "@/components/ds/Card";
import { IconTile } from "@/components/ds/IconTile";
import { SectionLabel } from "@/components/ds/SectionLabel";
import { StatBlock } from "@/components/ds/StatBlock";

const serviceFamilies = [
  {
    number: "01",
    title: "Content Strategy, Valuation & Capital",
    description:
      "Make better creative and capital allocation decisions with disciplined market, financial, and portfolio analysis.",
    links: [
      ["Greenlight Analysis", "#greenlight-analysis"],
      ["Slate Financing & Underwriting", "#slate-financing"],
      ["Market Intelligence", "#market-intelligence"],
      ["Library Valuation", "#library-valuation"],
      ["Franchise Development", "#franchise-development"],
    ],
  },
  {
    number: "02",
    title: "Finance & Operations Support",
    description:
      "Build a stronger financial and operational foundation, and add experienced leadership where it matters most.",
    links: [
      ["Fractional CFO / COO", "#fractional-cfo-coo"],
      ["Bonded Financial Close Support", "#bonded-financial-close"],
      ["Budgeting", "#budgeting"],
      ["Business Planning", "#business-planning"],
    ],
  },
  {
    number: "03",
    title: "Litigation & Specialized Advisory",
    description:
      "Bring senior entertainment-industry experience and clear financial analysis to complex disputes and special situations.",
    links: [
      ["Entertainment Industry Expert Witness", "#expert-witness"],
      ["Participations Analysis", "#participations-analysis"],
      ["Living Trust Participation Valuation", "#living-trust-participation-valuation"],
      ["Legal & Agency Client Support", "#legal-agency-support"],
    ],
  },
];

const featuredServices = [
  {
    id: "fractional-cfo-coo",
    label: "Embedded Executive Support",
    icon: "finance",
    title: "Fractional CFO / COO Services",
    description:
      "Executive-level financial and operational leadership for content production companies, available on retainer or for periods of growth, transition, or complexity.",
    details: [
      "Forecasting and financial department management",
      "Strategy and operations planning and controls",
      "Resource planning",
      "Flexible retained leadership",
    ],
  },
  {
    id: "greenlight-analysis",
    label: "Investment Decision Support",
    icon: "rocket_launch",
    title: "Film & TV Greenlight Analysis",
    description:
      "Ad-hoc and on-retainer greenlight support for feature films, television, and streaming content. We work with you before capital is committed or to reassess a project in production.",
    details: [
      "Title and comparable analysis",
      "Co-financing and backend scenario analysis",
      "Decision-ready recommendations",
    ],
  },
  {
    id: "slate-financing",
    label: "Capital & Underwriting",
    icon: "account_balance",
    title: "Slate Financing & Underwriting",
    description:
      "Independent analytical support for institutional investors, financiers, and family offices evaluating multi-title film and television opportunities.",
    details: [
      "Slate and company-level underwriting",
      "Institutional-grade slate modeling",
      "Scenario and sensitivity analysis",
      "Investor-facing decision support",
    ],
  },
];

const supportingServices = [
  {
    id: "market-intelligence",
    icon: "insights",
    title: "Market Intelligence",
    description: "Competitive landscape analysis and trend forecasting before or after a project reaches the screen.",
  },
  {
    id: "library-valuation",
    icon: "video_library",
    title: "Film & TV Library Valuation",
    description: "Financial and strategic valuation support for film and television libraries in financing, acquisition, portfolio management, or sale contexts.",
  },
  {
    id: "expert-witness",
    icon: "balance",
    title: "Entertainment Industry Expert Witness",
    description: "Entertainment-industry analysis for litigation support, arbitration, and mediation, including federal matters.",
  },
  {
    id: "franchise-development",
    icon: "hub",
    title: "Franchise Development",
    description: "Strategic support for developing, extending, and growing durable intellectual property and franchises.",
  },
  {
    id: "budgeting",
    icon: "calculate",
    title: "Budgeting",
    description: "Production budgeting support through experienced line producers for independent and studio scripts.",
  },
  {
    id: "business-planning",
    icon: "business_center",
    title: "Business Planning",
    description: "Business plans, financial forecasts, and investor materials for entertainment and content businesses.",
  },
  {
    id: "bonded-financial-close",
    icon: "fact_check",
    title: "Bonded Financial Close Support",
    description: "Financial close support for bonded productions, including reconciliation, organization, and required reporting.",
  },
  {
    id: "participations-analysis",
    icon: "percent",
    title: "Participations Analysis",
    description: "Analysis of participation statements, backend definitions, and payment scenarios for rights holders and stakeholders.",
  },
  {
    id: "legal-agency-support",
    icon: "support_agent",
    title: "Legal & Agency Client Support",
    description: "Financial and strategic support for client business ventures, backend scenarios, and related entertainment matters.",
  },
  {
    id: "living-trust-participation-valuation",
    icon: "assured_workload",
    title: "Living Trust Participation Valuation",
    description: "Valuation support for entertainment participation interests held by living trusts, including cash-flow and scenario analysis.",
  },
];

const engagementModels = [
  {
    number: "01",
    title: "Project-Based",
    description: "A clearly scoped analysis, valuation, plan, model, or strategic assignment with defined deliverables.",
  },
  {
    number: "02",
    title: "On Retainer",
    description: "Ongoing finance, strategy, or operations support that adapts as priorities and opportunities change.",
  },
  {
    number: "03",
    title: "Fractional Leadership",
    description: "Embedded CFO- or COO-level experience without the cost or commitment of a full-time executive hire.",
  },
  {
    number: "04",
    title: "Specialized Advisory",
    description: "Independent expertise for investors, financiers, counsel, and decision-makers facing complex situations.",
  },
];

const audiences = [
  "Studios",
  "Production Companies",
  "Independent Producers",
  "Institutional Investors",
  "Financiers & Family Offices",
  "Streamers",
  "Influencers & Creators",
  "Legal Counsel",
];

export function ServicesOverview() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
      <Header onContact={openContact} />
      <main>
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: "var(--green-900)",
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
            <SectionLabel color="var(--brass-300)">Services Overview</SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(48px, 6vw, 78px)",
                lineHeight: 1.04,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--cream-50)",
                maxWidth: 900,
                margin: "20px 0 28px",
              }}
            >
              Finance, Strategy & Operations Advisory for Modern Media
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
                Flat Six Media brings executive-caliber, applied experience to the entertainment and
                media landscape—where other advisory services often fall short by lacking real-world
                operating experience inside modern media businesses.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                Our services support studios, production companies, independent producers,
                financiers, legal counsel, streamers, influencers, and creators.
              </p>
              <p style={{ margin: 0 }}>Engagements are available on retainer or for individual projects.</p>
            </div>
            <Button variant="accent" size="lg" iconRight="arrow_forward" onClick={openContact}>
              Discuss Your Needs
            </Button>
          </div>
        </section>

        <section style={{ padding: "var(--section-y) var(--gutter)", background: "var(--color-bg)" }}>
          <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
            <SectionLabel>Find the Right Support</SectionLabel>
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
                Start with the decision in front of you.
              </h2>
              <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: 0, maxWidth: 620 }}>
                Our work spans content & capital, operations, and specialized advisory. These three
                service families provide a practical starting point—even when the final engagement
                draws from more than one discipline.
              </p>
            </div>
            <div className="fsm-grid-3 fsm-service-family-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {serviceFamilies.map((family) => (
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
            <SectionLabel>Primary Engagements</SectionLabel>
            <h2
              style={{
                font: "var(--text-h2)",
                letterSpacing: "var(--tracking-tight)",
                margin: "14px 0 48px",
                maxWidth: 720,
              }}
            >
              Focused analysis for high-stakes decisions.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {featuredServices.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
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
                    <IconTile icon={service.icon} tone={index === 1 ? "brass" : "green"} size={60} />
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
                      {service.label}
                    </div>
                  </div>
                  <div>
                    <h3 style={{ font: "var(--text-h3)", fontSize: "clamp(26px, 3vw, 36px)", margin: "0 0 14px" }}>
                      {service.title}
                    </h3>
                    <p
                      style={{
                        font: "var(--text-body)",
                        color: index === 1 ? "var(--cream-200)" : "var(--color-text-muted)",
                        margin: 0,
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div style={{ borderLeft: `1px solid ${index === 1 ? "var(--green-700)" : "var(--color-divider)"}`, paddingLeft: 28 }}>
                    {service.details.map((detail) => (
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
                      onClick={openContact}
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
                      Discuss this service →
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
              {supportingServices.map((service) => (
                <Card
                  key={service.id}
                  id={service.id}
                  tone="paper"
                  interactive
                  padding="var(--space-8)"
                  style={{ height: "100%", scrollMarginTop: 96 }}
                >
                  <IconTile icon={service.icon} tone="brass" size={48} />
                  <h3 style={{ font: "var(--text-h3)", fontSize: 20, margin: "20px 0 10px" }}>{service.title}</h3>
                  <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: 0 }}>
                    {service.description}
                  </p>
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
                <SectionLabel color="var(--brass-300)">Flexible by Design</SectionLabel>
                <h2
                  style={{
                    font: "var(--text-h2)",
                    letterSpacing: "var(--tracking-tight)",
                    color: "var(--cream-50)",
                    margin: "14px 0 20px",
                  }}
                >
                  The right level of support, at the right time.
                </h2>
                <p style={{ font: "var(--text-body)", color: "var(--cream-200)", margin: 0, maxWidth: 480 }}>
                  Start with a defined project or add experienced leadership over time. Every engagement
                  is scoped around the decision, team, and operating context in front of you.
                </p>
              </div>
              <div className="fsm-grid-services-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
                {engagementModels.map((model) => (
                  <div
                    key={model.number}
                    style={{
                      padding: 28,
                      border: "1px solid var(--green-700)",
                      borderRadius: "var(--radius-lg)",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--brass-300)", fontSize: 11 }}>
                      {model.number}
                    </span>
                    <h3 style={{ font: "var(--text-h3)", fontSize: 20, color: "var(--cream-50)", margin: "16px 0 10px" }}>
                      {model.title}
                    </h3>
                    <p style={{ font: "var(--text-body-sm)", color: "var(--green-300)", margin: 0 }}>
                      {model.description}
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
              Built for the people making consequential media decisions.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 64 }}>
              {audiences.map((audience) => (
                <span
                  key={audience}
                  style={{
                    padding: "10px 16px",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-pill)",
                    background: "var(--color-surface)",
                    font: "var(--text-body-sm)",
                    color: "var(--color-text)",
                  }}
                >
                  {audience}
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
                <SectionLabel>Executive Experience</SectionLabel>
                <h2 style={{ font: "var(--text-h2)", letterSpacing: "var(--tracking-tight)", margin: "14px 0 18px" }}>
                  Senior judgment without unnecessary overhead.
                </h2>
                <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: 0, maxWidth: 640 }}>
                  Flat Six Media brings studio and independent experience across finance, strategy,
                  operations, greenlight analysis, global distribution, and content investment. Every
                  engagement is customized to the client and the decision at hand.
                </p>
              </div>
              <div className="fsm-grid-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                <StatBlock value="$500M+" label="Slate Funding Secured" align="center" />
                <StatBlock value="20+" label="Years Experience" align="center" />
                <StatBlock value="8" label="Franchises Created" align="center" />
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
              Not sure which engagement fits?
            </h2>
            <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: "0 auto 34px", maxWidth: 580 }}>
              Tell us what decision you are facing. We&apos;ll help determine the right scope,
              expertise, and engagement model for the work ahead.
            </p>
            <Button variant="primary" size="lg" iconRight="arrow_forward" onClick={openContact}>
              Discuss Your Needs
            </Button>
          </div>
        </section>
      </main>
      <Footer onContact={openContact} />
      <ContactDialog open={contactOpen} onClose={closeContact} />
    </div>
  );
}
