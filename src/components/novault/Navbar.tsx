import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1280px,calc(100%-2rem))]">
        <nav className="glass-strong rounded-full pl-5 pr-2 py-2 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-[var(--elevated)] border border-[var(--border)] overflow-hidden">
              <img src="/logofav.png" alt="Novault" className="w-full h-full object-cover" />
            </span>
            <span className="font-display text-[15px] tracking-tight">
              <span className="text-[var(--mint)]">NO</span>
              <span className="text-muted">/</span>
              <span>VAULT</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1.5">
            <a
              href="#agent"
              className="glass-pill rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider text-secondary"
            >
              Agent
            </a>
            <a
              href="#flow"
              className="glass-pill rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider text-secondary"
            >
              Privacy
            </a>
            <a
              href="#cta"
              className="glass-pill rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider text-[var(--mint)] border-[rgba(0,245,138,0.3)]"
            >
              Launch Agent
            </a>
            <button
              onClick={() => setOpen(true)}
              className="glass-pill rounded-full w-9 h-9 grid place-items-center"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden glass-pill rounded-full w-9 h-9 grid place-items-center"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] glass-strong"
          >
            <div className="absolute inset-0 grid-overlay opacity-40" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between px-8 py-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  /// menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="glass-pill rounded-full w-10 h-10 grid place-items-center"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-8 md:px-24 gap-2">
                {[
                  ["01", "Agent", "#agent"],
                  ["02", "Private Flow", "#flow"],
                  ["03", "Use Cases", "#use-cases"],
                  ["04", "Foundation", "#foundation"],
                  ["05", "Launch Agent", "#cta"],
                ].map(([n, label, href], i) => (
                  <motion.a
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.05 * i } }}
                    className="group flex items-baseline gap-6 py-4 border-b border-[var(--border)] hover:text-[var(--mint)] transition"
                  >
                    <span className="font-mono text-xs text-muted">{n}</span>
                    <span className="display text-4xl md:text-6xl">{label}</span>
                  </motion.a>
                ))}
              </div>
              <div className="px-8 py-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Agentic Confidential Settlement · Solana
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
