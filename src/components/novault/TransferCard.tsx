import { motion } from "framer-motion";
import { ArrowRight, Lock, ShieldCheck, Zap } from "lucide-react";

export function TransferCard() {
  return (
    <div className="relative">
      {/* floating tags */}
      <motion.div
        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
        className="absolute -left-6 top-12 glass rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--mint-soft)] hidden md:block"
      >
        ⌁ Amount encrypted
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
        className="absolute -right-4 top-32 glass rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--mint-soft)] hidden md:block"
      >
        ✓ Proof verified
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
        className="absolute -left-8 bottom-20 glass rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-secondary hidden md:block"
      >
        Token-2022
      </motion.div>

      <div className="glass-strong rounded-2xl p-5 md:p-6 noise relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--mint)] opacity-[0.06] blur-3xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--mint)] pulse-soft" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">Confidential Transfer</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">SOLANA · MAINNET</span>
          </div>

          <div className="space-y-3">
            <Row label="From" value="7xK9...pL2a" mono />
            <div className="relative py-1">
              <div className="h-[1px] bg-[var(--border)] beam" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 glass rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--mint)]">
                <ArrowRight className="inline w-2.5 h-2.5 mr-1" /> encrypted
              </div>
            </div>
            <Row label="To" value="Hs91...Qm44" mono />

            <div className="grid grid-cols-2 gap-3 pt-3">
              <Field label="Token" value="USDC-2022" />
              <Field label="Amount" value="• • • • • • •" mint />
              <Field label="Privacy" value="Active" pill />
              <Field label="Proof" value="Verified" pill />
            </div>

            <div className="border-t border-[var(--border)] pt-3 grid grid-cols-3 gap-3">
              <Stat icon={<Lock className="w-3 h-3" />} label="Status" value="Confirmed" />
              <Stat icon={<Zap className="w-3 h-3" />} label="Fee" value="< 0.001 SOL" />
              <Stat icon={<ShieldCheck className="w-3 h-3" />} label="Custody" value="Wallet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-center justify-between glass rounded-lg px-3.5 py-2.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{label}</span>
      <span className={`text-sm ${mono ? "font-mono" : ""} text-foreground`}>{value}</span>
    </div>
  );
}

function Field({ label, value, mint, pill }: { label: string; value: string; mint?: boolean; pill?: boolean }) {
  return (
    <div className="glass rounded-lg px-3 py-2.5">
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted mb-1">{label}</div>
      {pill ? (
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--mint)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] pulse-soft" />
          {value}
        </div>
      ) : (
        <div className={`text-sm font-mono ${mint ? "text-[var(--mint)] tracking-[0.2em]" : "text-foreground"}`}>{value}</div>
      )}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted mb-1">
        {icon}{label}
      </div>
      <div className="text-[11px] font-mono text-secondary">{value}</div>
    </div>
  );
}
