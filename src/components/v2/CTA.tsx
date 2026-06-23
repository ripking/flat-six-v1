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
          <SectionLabel align="center">Let&apos;s Talk</SectionLabel>
        </div>
        <h2
          style={{
            font: "var(--text-h1)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--color-text)",
            margin: "0 0 18px",
          }}
        >
          Ready to transform your
          <br />
          media strategy?
        </h2>
        <p style={{ font: "var(--text-body)", color: "var(--color-text-muted)", margin: "0 auto 34px", maxWidth: 540 }}>
          Join the ranks of the world&apos;s most innovative media brands and studios. Let&apos;s
          build your future narrative today.
        </p>
        <Button variant="primary" size="lg" iconRight="arrow_forward" onClick={onBook}>
          Book a Consultation
        </Button>
      </div>
    </section>
  );
}
