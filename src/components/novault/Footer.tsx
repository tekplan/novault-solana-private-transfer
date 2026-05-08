import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer id="privacy" className="relative border-t border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-7 h-7 rounded-md bg-[var(--elevated)] border border-[var(--border)]">
                <Shield className="w-3.5 h-3.5 text-[var(--mint)]" strokeWidth={1.5} />
              </span>
              <span className="font-display text-[15px] tracking-tight">
                <span className="text-[var(--mint)]">NO</span><span className="text-muted">/</span><span>VAULT</span>
              </span>
            </div>
            <p className="mt-4 text-secondary text-sm max-w-xs">
              Confidential settlement for Solana-native money.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-4">Protocol</div>
            <ul className="space-y-2 text-sm">
              <li><a className="text-secondary hover:text-[var(--mint)]" href="#foundation">Architecture</a></li>
              <li><a className="text-secondary hover:text-[var(--mint)]" href="#flow">Confidential Flow</a></li>
              <li><a className="text-secondary hover:text-[var(--mint)]" href="#os">Transfer OS</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-4">Resources</div>
            <ul className="space-y-2 text-sm">
              <li><a className="text-secondary hover:text-[var(--mint)]" href="#">Docs</a></li>
              <li><a className="text-secondary hover:text-[var(--mint)]" href="#">GitHub</a></li>
              <li><a className="text-secondary hover:text-[var(--mint)]" href="#">X / Twitter</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-4">Status</div>
            <div className="text-sm text-secondary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] pulse-soft" /> Mainnet ready
            </div>
          </div>
        </div>
        <div className="divider my-10" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          <span>© 2026 Novault — All rights reserved</span>
          <span>Solana · Token-2022 · Confidential Transfers</span>
        </div>
      </div>
    </footer>
  );
}
