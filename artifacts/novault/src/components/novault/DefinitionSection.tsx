import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const cards = [
  [
    "Agentic by design",
    "Natural-language payment intent becomes a prepared, policy-aware confidential transfer.",
  ],
  [
    "Private by protocol",
    "Confidential balances and encrypted transfer amounts reduce financial exposure.",
  ],
  [
    "Wallet-controlled",
    "The agent can prepare and monitor, but final settlement requires wallet-native approval.",
  ],
];

export function DefinitionSection() {
  return (
    <section id="definition" className="relative py-32 md:py-40 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          number="03"
          eyebrow="Definition"
          align="split"
          title={<>Novault is a private transfer agent for Solana.</>}
          body="Novault gives Solana users an autonomous agent for confidential token movement. It remembers payment context, prepares encrypted Token-2022 transfers, keeps settlement fast, and keeps final execution under wallet control."
        />
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-12">
            {["Not a mixer", "Not a custodian", "Not a generic chatbot", "Not privacy theater"].map(
              (t) => (
                <span
                  key={t}
                  className="glass rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-secondary"
                >
                  — {t}
                </span>
              ),
            )}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div
                className="glass tilt-card spotlight rounded-2xl p-7 h-full noise relative overflow-hidden"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--mint)] mb-8">
                  0{i + 1}
                </div>
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
