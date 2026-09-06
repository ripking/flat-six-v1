"use client";

import React from "react";
import { Button } from "../ds/Button";
import { Input } from "../ds/Input";

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
  initialService?: string;
};

const SCHEDULING_EMAIL = "schedule@flatsix.media";

const AREAS = [
  "Content, Valuation or Capital",
  "Finance or Operations",
  "Dispute or Special Situation",
  "AI Operations",
  "Not Sure",
];

function normalizeArea(value: string) {
  const normalized = value.toLowerCase();
  if (!normalized) return "";
  if (normalized.includes("ai")) return "AI Operations";
  if (/cfo|coo|finance|operation|budget|business plan|compliance|bonded/.test(normalized)) {
    return "Finance or Operations";
  }
  if (/witness|forensic|participation|legal|agency|dispute|special situation/.test(normalized)) {
    return "Dispute or Special Situation";
  }
  if (/content|greenlight|slate|capital|market|library|valuation|franchise/.test(normalized)) {
    return "Content, Valuation or Capital";
  }
  return "Not Sure";
}

export function ContactDialog({ open, onClose, initialService = "" }: ContactDialogProps) {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [service, setService] = React.useState("");
  const [decision, setDecision] = React.useState("");
  const [hp, setHp] = React.useState("");
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const successRef = React.useRef<HTMLDivElement>(null);
  const returnFocusRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    setSent(false);
    setSending(false);
    setError("");
    setName("");
    setEmail("");
    setCompany("");
    setService(normalizeArea(initialService));
    setDecision("");
    setHp("");

    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>("input:not([aria-hidden='true'])")?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), input:not([disabled]):not([aria-hidden='true']), select:not([disabled]), textarea:not([disabled]), a[href]",
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [open, initialService, onClose]);

  React.useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const handleRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSending(true);
    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, service, decision, company_website: hp }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data.ok) {
        setSent(true);
      } else {
        setError(data.error || "Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Network error. Please email us directly.");
    } finally {
      setSending(false);
    }
  };

  if (!open) return null;

  return (
    <div
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
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
        overflowY: "auto",
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
        className="fsm-dialog"
        style={{
          width: "100%",
          maxWidth: 480,
          background: "var(--color-surface)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xl)",
          border: "1px solid var(--color-border)",
          padding: "var(--space-10)",
          margin: "auto",
        }}
      >
        {sent ? (
          <div ref={successRef} role="status" tabIndex={-1} style={{ textAlign: "center", padding: "16px 0", outline: "none" }}>
            <span className="material-symbols-rounded" aria-hidden="true" style={{ fontSize: 48, color: "var(--color-success)" }}>
              verified
            </span>
            <h3 id="contact-dialog-title" style={{ font: "var(--text-h2)", fontSize: "var(--text-xl)", margin: "12px 0 8px", color: "var(--color-text)" }}>
              Inquiry received.
            </h3>
            <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", margin: "0 0 24px" }}>
              Thank you. We will respond within one business day.
            </p>
            <Button variant="primary" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 6 }}>
                  Request a Consultation
                </div>
                <h3 id="contact-dialog-title" style={{ font: "var(--text-h2)", fontSize: "var(--text-xl)", margin: 0, color: "var(--color-text)" }}>
                  Tell us what decision you&apos;re facing.
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close inquiry dialog"
                onClick={onClose}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", padding: 4 }}
              >
                <span className="material-symbols-rounded" aria-hidden="true">close</span>
              </button>
            </div>
            <form onSubmit={handleRequest} style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 22 }}>
              <Input
                label="Full Name"
                name="name"
                autoComplete="name"
                required
                placeholder="Jane Producer"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                label="Work Email"
                name="email"
                type="email"
                autoComplete="email"
                required
                icon="mail"
                placeholder="you@studio.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                label="Company or Organization"
                name="company"
                autoComplete="organization"
                placeholder="Studio / Production Co."
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="fld-service" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                  Area of Interest
                </label>
                <select
                  id="fld-service"
                  name="service"
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  style={{ width: "100%", padding: "12px 14px", background: "var(--color-surface)", border: "var(--border-medium) solid var(--color-border)", borderRadius: "var(--radius-md)", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: service ? "var(--color-text)" : "var(--color-text-muted)" }}
                >
                  <option value="">Select an area, if known</option>
                  {AREAS.map((area) => <option key={area} value={area}>{area}</option>)}
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label htmlFor="fld-decision" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", fontWeight: 500, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                  What decision, opportunity, or issue are you facing?
                </label>
                <textarea
                  id="fld-decision"
                  name="decision"
                  rows={4}
                  required
                  value={decision}
                  onChange={(event) => setDecision(event.target.value)}
                  placeholder="Briefly describe what is at stake, the decision to be made, and any relevant timing."
                  style={{ resize: "vertical", padding: "12px 14px", background: "var(--color-surface)", border: "var(--border-medium) solid var(--color-border)", borderRadius: "var(--radius-md)", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--color-text)" }}
                />
              </div>
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={hp}
                onChange={(event) => setHp(event.target.value)}
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />
              {error && <p role="alert" style={{ font: "var(--text-body-sm)", color: "var(--color-danger, #b3261e)", margin: 0 }}>{error}</p>}
              <Button type="submit" variant="primary" fullWidth iconRight={sending ? undefined : "arrow_forward"} disabled={sending}>
                {sending ? "Sending…" : "Send Inquiry"}
              </Button>
              <p style={{ font: "var(--text-body-sm)", color: "var(--color-text-muted)", textAlign: "center", margin: 0 }}>
                Prefer email? Reach us at{" "}
                <a href={`mailto:${SCHEDULING_EMAIL}`} style={{ color: "var(--color-text-brand)" }}>{SCHEDULING_EMAIL}</a>.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
