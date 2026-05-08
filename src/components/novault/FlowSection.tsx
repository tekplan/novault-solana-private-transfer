import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const steps = [
  ["01", "Enable confidential balance", "Prepare a Token-2022 account for encrypted balance operations.", "ElGamal encryption"],
  ["02", "Deposit into private balance", "Move public token balance into a confidential state controlled by the wallet.", "Confidential balances"],
  ["03", "Send encrypted transfer", "Move value while shielding the transfer amount from public visibility.", "ZK validity proofs"],
  ["04", "Settle on Solana", "Finalize the transaction with fast, low-cost, verifiable execution.", "Solana finality"],
];

export function FlowSection() {
  return (
    <section id="flow" className="relative py-32 md:py-40 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          number="04" eyebrow="Confidential Flow"
          align="split"
          title={<>Privacy compressed<br />into four actions.</>}
          body="A continuous pipeline from public balance to confidential settlement — each step cryptographically verifiable, each amount shielded from public view."
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
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--mint)] mb-6">STEP {n}</div>
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
              {["ElGamal encryption", "Zero-knowledge validity proofs", "Token-2022 extension", "Confidential balances", "Non-custodial signing", "Solana finality"].map((t) => (
                <span key={t} className="glass-pill rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
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
