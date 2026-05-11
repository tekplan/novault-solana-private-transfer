import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const steps = [
  [
    "01",
    "Describe payment intent",
    "Tell the agent who receives value, what policy applies, and when settlement should happen.",
    "Agent intent",
  ],
  [
    "02",
    "Prepare confidential transfer",
    "Build a Token-2022 transaction with encrypted amount and client-side proof material.",
    "ElGamal encryption",
  ],
  [
    "03",
    "Approve with wallet",
    "The agent requests wallet-native signing; private keys never leave user custody.",
    "Non-custodial signing",
  ],
  [
    "04",
    "Settle on Solana",
    "Finalize a fast, low-cost, verifiable transfer while shielding sensitive amounts.",
    "Solana finality",
  ],
];

export function FlowSection() {
  return (
    <section id="flow" className="relative py-32 md:py-40 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          number="04"
          eyebrow="Confidential Flow"
          align="split"
          title={
            <>
              Intent compressed
              <br />
              into private settlement.
            </>
          }
          body="A continuous pipeline from natural-language payment instruction to wallet-approved confidential settlement — each step policy-aware, verifiable, and amount-shielded."
        />

        <div className="relative">
          {/* horizontal rail (desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-0 right-0 h-[1px] bg-[var(--border)] beam" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {steps.map(([n, title, body, tag], i) => (
              <Reveal key={n} delay={i * 0.1}>
                <div className="relative">
                  <div className="hidden lg:flex absolute -top-1 left-6 w-3 h-3 rounded-full bg-[var(--background)] border border-[var(--mint)] items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] pulse-soft" />
                  </div>
                  <div className="glass tilt-card rounded-2xl p-6 mt-8 h-full">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--mint)] mb-6">
                      STEP {n}
                    </div>
                    <div className="text-lg mb-2 text-foreground">{title}</div>
                    <p className="text-secondary text-[13px] leading-relaxed mb-5">{body}</p>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted border-t border-[var(--border)] pt-3">
                      ⌁ {tag}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Agent intent parsing",
                "Policy checks",
                "ElGamal encryption",
                "Zero-knowledge validity proofs",
                "Token-2022 extension",
                "Non-custodial signing",
                "Solana finality",
              ].map((t) => (
                <span
                  key={t}
                  className="glass-pill rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
