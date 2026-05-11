import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const cases = [
  [
    "Private payroll",
    "Let the agent prepare recurring contributor payments without publishing every compensation detail.",
  ],
  [
    "Treasury operations",
    "Encode approval policy, prepare transfers, and move funds with less operational leakage.",
  ],
  [
    "OTC settlement",
    "Coordinate sensitive transfers through agent-assisted, wallet-approved settlement.",
  ],
  ["DAO contributor payments", "Protect contributor privacy while keeping settlement on-chain."],
  ["Internal fund flows", "Move capital between operational wallets with more discretion."],
  ["Consumer payments", "Give users a transfer experience that does not broadcast every amount."],
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-32 md:py-40 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          number="07"
          eyebrow="Use Cases"
          align="split"
          title={
            <>
              Built for serious
              <br />
              agentic settlement.
            </>
          }
          body="Wherever capital moves and exposure becomes a liability — payroll, treasury, OTC, DAO operations — Novault becomes the agentic settlement surface."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] glass rounded-2xl overflow-hidden">
          {cases.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div
                className="bg-[var(--background)]/80 spotlight p-7 md:p-8 h-full min-h-[200px] flex flex-col justify-between group"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  0{i + 1} / use
                </div>
                <div>
                  <div className="text-xl md:text-2xl mt-12 mb-3 group-hover:text-[var(--mint)] transition">
                    {t}
                  </div>
                  <p className="text-secondary text-[13px] leading-relaxed">{b}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
