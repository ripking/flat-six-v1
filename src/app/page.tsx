"use client";

import React from "react";
import { Header } from "@/components/v2/Header";
import { Hero } from "@/components/v2/Hero";
import { Expertise } from "@/components/v2/Expertise";
import { Services } from "@/components/v2/Services";
import { BrandStatement } from "@/components/v2/BrandStatement";
import { Founder } from "@/components/v2/Founder";
import { CTA } from "@/components/v2/CTA";
import { Footer } from "@/components/v2/Footer";
import { ContactDialog } from "@/components/v2/ContactDialog";

export default function Home() {
  const [contactOpen, setContactOpen] = React.useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
      <Header onContact={openContact} />
      <Hero />
      <Expertise />
      <Services />
      <BrandStatement />
      <Founder />
      <CTA onBook={openContact} />
      <Footer />
      <ContactDialog open={contactOpen} onClose={closeContact} />
    </div>
  );
}
