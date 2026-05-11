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
