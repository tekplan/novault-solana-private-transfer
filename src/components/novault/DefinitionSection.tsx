import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const cards = [
  ["Private by design", "Confidential balances and encrypted transfer amounts reduce financial exposure."],
  ["Verifiable by protocol", "Transfers remain cryptographically valid without making every sensitive value public."],
  ["Fast by default", "Built around Solana's low-cost, high-throughput execution environment."],
];

export function DefinitionSection() {
  return (
    <section id="definition" className="relative py-32 md:py-40 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          number="03" eyebrow="Definition"
          align="split"
          title={<>Novault is a confidential settlement interface for Solana.</>}
          body="Novault gives Solana users a clean interface for confidential token movement. It keeps the wallet in control, keeps settlement fast, and keeps sensitive transfer amounts shielded through Solana's confidential transfer primitive."
        />
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-12">
            {["Not a mixer", "Not a centralized wallet", "Not a generic DeFi dashboard", "Not privacy theater"].map((t) => (
              <span key={t} className="glass rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
                — {t}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="glass tilt-card spotlight rounded-2xl p-7 h-full noise relative overflow-hidden"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--mint)] mb-8">0{i + 1}</div>
                <div className="text-2xl mb-3">{t}</div>
                <p className="text-secondary text-[14px] leading-relaxed">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
