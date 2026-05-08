import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Activity, ArrowDownToLine, Coins, Send, Settings, Wallet, ChevronRight, Check } from "lucide-react";

export function OSSection() {
  return (
    <section id="os" className="relative py-32 md:py-40 border-t border-[var(--border)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--mint)] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
        <SectionHeader
          number="05" eyebrow="Private Transfer OS"
          align="split"
          title={<>A command center for confidential movement.</>}
          body="A working interface — not a mockup. Generate proofs, move encrypted balances, and audit settlement, all while the wallet retains full custody."
        />

        <Reveal>
          <div className="glass-strong rounded-3xl p-3 md:p-4 noise relative overflow-hidden">
            <div className="absolute inset-0 grid-overlay-fine opacity-30 pointer-events-none" />
            <div className="grid grid-cols-12 gap-3 relative">
              {/* Sidebar */}
              <aside className="col-span-12 md:col-span-2 glass rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[var(--mint)]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Workspace</span>
                </div>
                <nav className="space-y-1">
                  {[
                    [Send, "Transfer", true],
                    [Wallet, "Private Balance"],
                    [Activity, "Activity"],
                    [Coins, "Tokens"],
                    [Settings, "Settings"],
                  ].map(([Icon, label, active]: any, i) => (
                    <div key={i} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] ${active ? "bg-[rgba(0,245,138,0.08)] text-[var(--mint)]" : "text-secondary"}`}>
                      <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>{label}</span>
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Main grid */}
              <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-3">
                {/* Confidential Send */}
                <div className="col-span-12 lg:col-span-7 glass rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Action</div>
                      <div className="text-lg mt-0.5">Confidential Send</div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mint)]">● Live</span>
                  </div>
                  <div className="space-y-3">
                    <Input label="Recipient address" value="Hs91dKpW...4QmA44vN8" />
                    <div className="grid grid-cols-2 gap-3">
                      <Input label="Token" value="USDC-2022" caret />
                      <Input label="Amount" value="• • • • • • •" mint />
                    </div>
                    <Input label="Memo" value="optional encrypted note" muted />
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 rounded-xl py-3 text-sm font-medium" style={{ background: "var(--mint)", color: "var(--background)" }}>
                        Generate Transfer Proof
                      </button>
                      <button className="rounded-xl px-4 py-3 text-sm glass-pill text-secondary">Preview</button>
                    </div>
                  </div>
                </div>

                {/* Private Balance */}
                <div className="col-span-12 lg:col-span-5 glass rounded-2xl p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Asset</div>
                  <div className="mt-1 text-lg">Private Balance</div>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-3xl font-display tracking-tight">USDC-2022</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between glass rounded-lg px-3 py-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Confidential</span>
                      <span className="font-mono text-sm text-[var(--mint)]">Encrypted</span>
                    </div>
                    <div className="flex items-center justify-between glass rounded-lg px-3 py-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Public</span>
                      <span className="font-mono text-sm">128.42</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["Deposit", "Withdraw", "Transfer"].map((a) => (
                      <button key={a} className="glass-pill rounded-lg py-2 text-[11px] font-mono uppercase tracking-[0.14em] text-secondary">{a}</button>
                    ))}
                  </div>
                </div>

                {/* Proof status timeline */}
                <div className="col-span-12 lg:col-span-5 glass rounded-2xl p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-1">Proof Status</div>
                  <div className="text-lg mb-4">Pipeline</div>
                  <ol className="space-y-3">
                    {[
                      ["Balance decrypted locally", true],
                      ["Transfer proof generated", true],
                      ["Wallet signature requested", true],
                      ["Transaction submitted", true],
                      ["Solana confirmed", false],
                    ].map(([label, done], i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className={`w-5 h-5 rounded-full grid place-items-center border ${done ? "bg-[var(--mint)] border-[var(--mint)]" : "border-[var(--border)]"}`}>
                          {done ? <Check className="w-3 h-3 text-[var(--background)]" strokeWidth={3} /> : <ArrowDownToLine className="w-2.5 h-2.5 text-[var(--mint)] pulse-soft" />}
                        </span>
                        <span className={`text-[13px] ${done ? "text-secondary" : "text-foreground"}`}>{label}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Recent activity */}
                <div className="col-span-12 lg:col-span-7 glass rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Ledger</div>
                      <div className="text-lg mt-0.5">Recent Activity</div>
                    </div>
                    <button className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary flex items-center gap-1">View all <ChevronRight className="w-3 h-3" /></button>
                  </div>
                  <div className="space-y-2">
                    {[
                      ["Transfer", "Hs91...Qm44", "Amount hidden", "Confirmed"],
                      ["Deposit", "→ private balance", "Amount hidden", "Confirmed"],
                      ["Withdraw", "→ public balance", "42.18 USDC", "Confirmed"],
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-12 items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--elevated)]/50">
                        <span className="col-span-3 font-mono text-[11px] uppercase tracking-[0.14em] text-secondary">{row[0]}</span>
                        <span className="col-span-4 font-mono text-[12px] text-foreground">{row[1]}</span>
                        <span className="col-span-3 font-mono text-[12px] text-muted">{row[2]}</span>
                        <span className="col-span-2 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--mint)]">● {row[3]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Input({ label, value, mint, muted, caret }: { label: string; value: string; mint?: boolean; muted?: boolean; caret?: boolean }) {
  return (
    <div className="glass rounded-lg px-3.5 py-2.5">
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted mb-1">{label}</div>
      <div className="flex items-center justify-between">
        <span className={`text-sm font-mono ${mint ? "text-[var(--mint)] tracking-[0.2em]" : muted ? "text-muted" : "text-foreground"}`}>{value}</span>
        {caret && <ChevronRight className="w-3 h-3 text-muted rotate-90" />}
      </div>
    </div>
  );
}
