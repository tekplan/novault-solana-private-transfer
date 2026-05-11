import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/novault/Navbar";
import { ScrollRail } from "@/components/novault/ScrollRail";
import { Hero } from "@/components/novault/Hero";
import { LeakSection } from "@/components/novault/LeakSection";
import { DefinitionSection } from "@/components/novault/DefinitionSection";
import { FlowSection } from "@/components/novault/FlowSection";
import { AgentSection } from "@/components/novault/AgentSection";
import { OSSection } from "@/components/novault/OSSection";
import { UseCases } from "@/components/novault/UseCases";
import { Foundation } from "@/components/novault/Foundation";
import { CTA } from "@/components/novault/CTA";
import { Footer } from "@/components/novault/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novault — Private Transfer Agent for Solana" },
      {
        name: "description",
        content:
          "Novault is an autonomous private settlement agent for Solana-native money — preparing confidential Token-2022 transfers while the wallet keeps custody.",
      },
      { property: "og:title", content: "Novault — Private Transfer Agent for Solana" },
      {
        property: "og:description",
        content:
          "Private transfers, executed by an agent, settled on Solana. Confidential amounts, wallet approval, non-custodial control.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

export function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ScrollRail />
      <Hero />
      <LeakSection />
      <DefinitionSection />
      <FlowSection />
      <AgentSection />
      <OSSection />
      <UseCases />
      <Foundation />
      <CTA />
      <Footer />
    </main>
  );
}
