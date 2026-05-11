import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AgentMascotTransfer } from "./AgentMascotTransfer";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-12 overflow-hidden noise">
      {/* backdrop layers */}
      <div className="absolute inset-0 grid-overlay opacity-50 mask-fade-b" />
      <div className="absolute inset-0 scanlines opacity-60" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[var(--mint)] opacity-[0.05] blur-[120px] pointer-events-none" />

      {/* abstract rails */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="rail" x1="0" x2="1">
            <stop offset="0" stopColor="transparent" />
            <stop offset="0.5" stopColor="#00F58A" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="0" y1="22%" x2="100%" y2="22%" stroke="url(#rail)" strokeWidth="1" />
        <line x1="0" y1="78%" x2="100%" y2="78%" stroke="url(#rail)" strokeWidth="1" />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        {/* top row */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="kicker mb-6"
            >
              /// Autonomous Private Settlement Agent for Solana
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="display text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] text-balance"
            >
              Private transfers,
              <br />
              executed by an
              <br />
              <span className="text-secondary">agent.</span>
            </motion.h1>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-32">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-secondary text-[15px] leading-relaxed max-w-md md:ml-auto text-pretty"
            >
              Novault is an autonomous settlement agent for Solana-native money — preparing
              confidential Token-2022 transfers, shielding sensitive amounts, and requiring wallet
              approval before value moves.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 mt-6 md:justify-end"
            >
              <a
                href="#cta"
                className="glass-pill rounded-full pl-5 pr-2 py-2 inline-flex items-center gap-3 group"
                style={{ background: "rgba(0,245,138,0.10)", borderColor: "rgba(0,245,138,0.3)" }}
              >
                <span className="text-sm text-[var(--mint)]">Launch Agent</span>
                <span className="w-7 h-7 rounded-full bg-[var(--mint)] grid place-items-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-[var(--background)]"
                    strokeWidth={2.2}
                  />
                </span>
              </a>
              <a
                href="#foundation"
                className="glass-pill rounded-full px-5 py-2.5 text-sm text-secondary"
              >
                Explore Protocol
              </a>
            </motion.div>
          </div>
        </div>

        {/* center: floating dashboard */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="kicker"
            >
              /// 01 — Settlement Console
            </motion.div>
            <p className="mt-3 text-sm text-muted max-w-xs">
              A confidential command center where an agent turns payment intent into wallet-approved
              private settlement.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2 float-y">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <AgentMascotTransfer />
            </motion.div>
          </div>
        </div>

        {/* large masked wordmark */}
        <div className="relative mt-16 md:mt-24 select-none pointer-events-none">
          <div className="absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-[var(--background)] to-transparent z-10" />
          <h2
            className="display text-center font-display text-[26vw] md:text-[19vw] leading-none tracking-[-0.06em]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(243,255,248,0.18) 0%, rgba(0,245,138,0.06) 60%, transparent 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              filter: "blur(0.4px)",
            }}
          >
            NOVAULT
          </h2>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
        </div>

        {/* metrics strip */}
        <div className="relative -mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] glass rounded-xl overflow-hidden">
          {[
            ["Agentic", "execution"],
            ["Confidential", "amounts"],
            ["Token-2022", "native"],
            ["Wallet-approved", "custody"],
          ].map(([a, b]) => (
            <div key={a} className="bg-[var(--background)]/70 px-5 py-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-1">
                {b}
              </div>
              <div className="text-[15px] text-foreground">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
