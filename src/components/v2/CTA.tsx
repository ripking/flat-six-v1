import React from "react";
import { Button } from "../ds/Button";
import { SectionLabel } from "../ds/SectionLabel";

type CTAProps = {
  onBook?: () => void;
};

// Closing CTA band.
export function CTA({ onBook }: CTAProps) {
  return (
    <section
      id="contact"
      style={{
        background: "var(--color-bg-subtle)",
        padding: "var(--section-y) var(--gutter)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
          <SectionLabel align="center">Start the Conversation</SectionLabel>
        </div>
        <h2
          className="fsm-display-heading"
          style={{
            font: "var(--text-h1)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--color-text)",
            margin: "0 0 18px",
          }}
        >
          What decision is in front of you?
        </h2>
        <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: "0 auto 34px", maxWidth: 540 }}>
          Tell us what is at stake, where the uncertainty lies, and what decision needs to be made.
          We will determine whether Flat Six Media is the right fit and what level of support the
          situation requires.
        </p>
        <Button variant="primary" size="lg" iconRight="arrow_forward" onClick={onBook}>
          Start a Confidential Conversation
        </Button>
        <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: "20px 0 0" }}>
          Prefer email? Write to{" "}
          <a href="mailto:schedule@flatsix.media" style={{ color: "var(--color-text-brand)" }}>
            schedule@flatsix.media
          </a>
          .
        </p>
      </div>
    </section>
  );
}
