import { motion } from "framer-motion";
import { ArrowRight, Lock, ShieldCheck, Wallet, Zap } from "lucide-react";

const orbitItems = [
  { label: "Intent", value: "parsed", className: "left-0 top-8" },
  { label: "Amount", value: "encrypted", className: "right-0 top-14" },
  { label: "Proof", value: "verified", className: "left-4 bottom-20" },
  { label: "Wallet", value: "approval", className: "right-4 bottom-16" },
];

export function AgentMascotTransfer() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[rgba(0,245,138,0.20)] bg-[radial-gradient(circle_at_50%_35%,rgba(0,245,138,0.12),rgba(4,28,28,0.72)_42%,rgba(4,28,28,0.36)_100%)] p-6 shadow-[0_0_120px_rgba(0,245,138,0.10)] backdrop-blur-xl">
      <div className="absolute inset-0 grid-overlay-fine opacity-30" />
      <div className="absolute inset-0 scanlines opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(0,245,138,0.16)]" />
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(0,245,138,0.24)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[0, 90, 180, 270].map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[var(--mint)] shadow-[0_0_22px_rgba(0,245,138,0.95)]"
            style={{ transform: `rotate(${deg}deg) translateY(-190px)` }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        <span>Agent Transfer</span>
        <span className="text-[var(--mint)]">● Live</span>
      </div>

      {orbitItems.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 + i * 0.12 }}
          className={`absolute z-20 ${item.className}`}
        >
          <div className="glass rounded-2xl px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              {item.label}
            </div>
            <div className="mt-1 font-mono text-[12px] text-[var(--mint)]">{item.value}</div>
          </div>
        </motion.div>
      ))}

      <div className="absolute inset-x-8 top-[104px] z-10 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
        <span className="glass-pill rounded-full px-3 py-1.5">payer</span>
        <ArrowRight className="h-3.5 w-3.5 text-[var(--mint)]" />
        <span className="glass-pill rounded-full px-3 py-1.5">private route</span>
        <ArrowRight className="h-3.5 w-3.5 text-[var(--mint)]" />
        <span className="glass-pill rounded-full px-3 py-1.5">receiver</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-24 z-10 flex items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-10 rounded-full bg-[var(--mint)] opacity-25 blur-3xl" />
          <img
            src="/img11.png"
            alt="Novault private transfer agent"
            className="relative z-10 h-[340px] w-[340px] object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.58)] md:h-[380px] md:w-[380px]"
            loading="eager"
          />
        </motion.div>
      </div>

      <div className="absolute inset-x-6 bottom-6 z-30 grid grid-cols-3 gap-2">
        <Status icon={<Lock className="h-3 w-3" />} label="Amount" value="Hidden" />
        <Status icon={<ShieldCheck className="h-3 w-3" />} label="Proof" value="ZK OK" />
        <Status icon={<Wallet className="h-3 w-3" />} label="Custody" value="Wallet" />
      </div>

      <motion.div
        className="absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-[rgba(0,245,138,0.20)] bg-[rgba(0,245,138,0.08)] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mint)] md:flex"
        animate={{ x: [0, 14, 0], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap className="h-3 w-3" /> encrypted transfer
      </motion.div>
    </div>
  );
}

function Status({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-xl px-3 py-3">
      <div className="mb-2 flex items-center gap-1.5 text-[var(--mint)]">{icon}</div>
      <div className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">{label}</div>
      <div className="mt-1 font-mono text-[11px] text-secondary">{value}</div>
    </div>
  );
}
