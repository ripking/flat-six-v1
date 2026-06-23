"use client";

import React from "react";
import { Button } from "../ds/Button";
import { Input } from "../ds/Input";

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
};

// Email that consultation requests are routed to.
const SCHEDULING_EMAIL = "schedule@flatsix.media";

// Booking / contact dialog overlay.
export function ContactDialog({ open, onClose }: ContactDialogProps) {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [notes, setNotes] = React.useState("");
  React.useEffect(() => {
    if (open) {
      setSent(false);
      setName("");
      setEmail("");
      setCompany("");
      setNotes("");
    }
  }, [open]);

  const handleRequest = () => {
    const subject = encodeURIComponent("Consultation Request — Flat Six Media");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nNotes:\n${notes}\n\nI'd like to schedule a consultation.`
    );
    window.location.href = `mailto:${SCHEDULING_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(11,35,26,0.55)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 480,
          background: "var(--color-surface)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xl)",
          border: "1px solid var(--color-border)",
          padding: "var(--space-10)",
        }}
      >
        {sent ? (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <span className="material-symbols-rounded" style={{ fontSize: 48, color: "var(--color-success)" }}>
              verified
            </span>
            <h3 style={{ font: "var(--text-h2)", fontSize: "var(--text-xl)", margin: "12px 0 8px", color: "var(--color-text)" }}>
              Request received.
            </h3>
            <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: "0 0 24px" }}>
              Thank you. The team will be in touch within one business day.
            </p>
            <Button variant="primary" onClick={onClose}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                    marginBottom: 6,
                  }}
                >
                  Book a Consultation
                </div>
                <h3 style={{ font: "var(--text-h2)", fontSize: "var(--text-xl)", margin: 0, color: "var(--color-text)" }}>
                  Let&apos;s build your future narrative.
                </h3>
              </div>
              <button
                onClick={onClose}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", padding: 4 }}
              >
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 22 }}>
              <Input
                label="Full Name"
                placeholder="Jane Producer"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                icon="mail"
                placeholder="you@studio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Company"
                placeholder="Studio / Production Co."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label
                  htmlFor="fld-notes"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-2xs)",
                    fontWeight: 500,
                    letterSpacing: "var(--tracking-wide)",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Notes
                </label>
                <textarea
                  id="fld-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Anything we should know? Timing, scope, budget range…"
                  style={{
                    resize: "vertical",
                    padding: "12px 14px",
                    background: "var(--color-surface)",
                    border: "var(--border-medium) solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--green-700)";
                    e.currentTarget.style.boxShadow = "var(--ring)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <Button variant="primary" fullWidth iconRight="arrow_forward" onClick={handleRequest}>
                Request Consultation
              </Button>
              <p
                style={{
                  font: "var(--text-body-sm)",
                  color: "var(--color-text-muted)",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Prefer email? Reach us at{" "}
                <a href={`mailto:${SCHEDULING_EMAIL}`} style={{ color: "var(--color-text-brand)" }}>
                  {SCHEDULING_EMAIL}
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
