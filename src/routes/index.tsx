import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/novault/Navbar";
import { ScrollRail } from "@/components/novault/ScrollRail";
import { Hero } from "@/components/novault/Hero";
import { LeakSection } from "@/components/novault/LeakSection";
import { DefinitionSection } from "@/components/novault/DefinitionSection";
import { FlowSection } from "@/components/novault/FlowSection";
import { OSSection } from "@/components/novault/OSSection";
import { UseCases } from "@/components/novault/UseCases";
import { Foundation } from "@/components/novault/Foundation";
import { CTA } from "@/components/novault/CTA";
import { Footer } from "@/components/novault/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novault — Confidential Transfers for Solana" },
      { name: "description", content: "Novault brings confidential token transfers to Solana — shielding sensitive transfer amounts while preserving speed, verifiability, and non-custodial control." },
      { property: "og:title", content: "Novault — Confidential Transfers for Solana" },
      { property: "og:description", content: "A confidential settlement interface for Solana-native money. Private. Fast. Verifiable. Non-custodial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ScrollRail />
      <Hero />
      <LeakSection />
      <DefinitionSection />
      <FlowSection />
      <OSSection />
      <UseCases />
      <Foundation />
      <CTA />
      <Footer />
    </main>
  );
}
