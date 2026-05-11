import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, AlertTriangle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  [
    "Balances become targets.",
    "Public balances expose users, funds, teams, and treasuries to unnecessary risk.",
  ],
  [
    "Payments become patterns.",
    "Every movement can reveal timing, counterparties, strategy, and operational behavior.",
  ],
  [
    "Payroll becomes public.",
    "Contributor payments and internal compensation should not become open financial metadata.",
  ],
  [
    "Treasury strategy leaks.",
    "Funds, DAOs, and teams lose negotiation power when every movement is visible.",
  ],
  [
    "Privacy arrives too late.",
    "Most wallets expose information by default, then ask users to manage the consequences.",
  ],
  ["Serious money needs discretion.", "Public settlement is useful. Total exposure is not."],
];

export function LeakSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="leak" className="relative py-32 md:py-40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionHeader
          number="02"
          eyebrow="The Leak"
          align="split"
          title={
            <>
              Public ledgers
              <br />
              reveal too much.
            </>
          }
          body="On-chain transparency is powerful — until every transfer amount, treasury movement, payroll event, and counterparty relationship becomes permanent public intelligence."
        />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 hidden md:block">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              /// risk-feed
            </div>
            <div className="mt-3 flex items-center gap-2 text-[var(--warn)]">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em]">exposed</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 space-y-2">
            {items.map(([title, body], i) => {
              const isOpen = open === i;
              return (
                <button
                  key={i}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left tilt-card spotlight rounded-xl px-5 md:px-7 py-5 md:py-6 transition ${
                    isOpen ? "glass-strong glow-mint" : "glass"
                  }`}
                  onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.2em] mt-1 ${isOpen ? "text-[var(--mint)]" : "text-muted"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div
                        className={`text-lg md:text-2xl ${isOpen ? "text-foreground" : "text-secondary"}`}
                      >
                        {title}
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-secondary max-w-2xl text-[15px] leading-relaxed">
                              {body}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className={`mt-1 ${isOpen ? "text-[var(--mint)]" : "text-muted"}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
