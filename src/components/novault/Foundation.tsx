import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const stack = [
  "Solana",
  "Token-2022",
  "Confidential Transfer Extension",
  "Encrypted Balances",
  "ZK Validity Proofs",
  "Wallet Adapter",
  "Non-custodial UX",
];

export function Foundation() {
  return (
    <section id="foundation" className="relative py-32 md:py-40 border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          number="07" eyebrow="Protocol Foundation"
          align="split"
          title={<>Built on Solana's confidential transfer primitive.</>}
          body="Novault is designed around Solana Token-2022 Confidential Transfers — combining encrypted balances, cryptographic proof verification, low-cost execution, and wallet-controlled settlement."
        />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <div className="glass rounded-2xl p-2">
                <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--warn)] opacity-60" />
                    <span className="w-2 h-2 rounded-full bg-[#6F6A3A] opacity-60" />
                    <span className="w-2 h-2 rounded-full bg-[var(--mint)] opacity-80" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">novault.protocol.ts</span>
                </div>
                <pre className="font-mono text-[12.5px] leading-relaxed p-5 text-secondary overflow-x-auto">
{`transfer.confidential({
  network: `}<span className="text-[var(--mint-soft)]">"solana"</span>{`,
  token:   `}<span className="text-[var(--mint-soft)]">"USDC-2022"</span>{`,
  amount:  `}<span className="text-[var(--mint)]">encrypted</span>{`,
  proof:   `}<span className="text-[var(--mint)]">verified</span>{`,
  custody: `}<span className="text-[var(--mint-soft)]">"wallet-controlled"</span>{`,
})`}
                </pre>
                <div className="border-t border-[var(--border)] grid grid-cols-2 gap-px bg-[var(--border)] rounded-b-xl overflow-hidden">
                  {[
                    ["Amount privacy", "shielded"],
                    ["Settlement", "fast"],
                    ["Tx cost", "low"],
                    ["Signing", "wallet-native"],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-[var(--background)]/80 px-4 py-3">
                      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">{k}</div>
                      <div className="font-mono text-[12px] text-[var(--mint)] mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-4">/// stack</div>
              <div className="space-y-2">
                {stack.map((s, i) => (
                  <div key={s} className="glass rounded-xl px-5 py-4 flex items-center justify-between tilt-card">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">L{i}</span>
                      <span className="text-foreground">{s}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mint)]">● online</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-[12px] text-muted leading-relaxed max-w-md">
                Note: Novault's privacy primitive shields transfer amounts and balances. Sender and receiver addresses remain on-chain — no false claims of total anonymity.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
