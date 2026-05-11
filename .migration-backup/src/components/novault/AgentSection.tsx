import {
  Bot,
  CalendarClock,
  Check,
  GitBranch,
  Lock,
  MessageSquare,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const capabilities = [
  [
    MessageSquare,
    "Natural language intents",
    "Tell Novault what to move, who should receive it, and when it should settle.",
  ],
  [
    CalendarClock,
    "Scheduled private payments",
    "Prepare recurring payroll, treasury, grant, or contractor flows without exposing amounts.",
  ],
  [
    GitBranch,
    "Delegated workflows",
    "Split research, risk checks, proof prep, and routing into isolated agent workstreams.",
  ],
  [
    Lock,
    "Persistent context",
    "Remember wallets, policies, recipients, memos, and approval rules across sessions.",
  ],
];

const pipeline = [
  "Parse private payment intent",
  "Check policy and recipient context",
  "Prepare Token-2022 confidential transfer",
  "Generate encrypted amount + validity proof",
  "Request wallet approval",
  "Submit and monitor Solana settlement",
];

export function AgentSection() {
  return (
    <section
      id="agent"
      className="relative py-32 md:py-40 border-t border-[var(--border)] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[760px] h-[760px] rounded-full bg-[var(--mint)] opacity-[0.045] blur-[130px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
        <SectionHeader
          number="05"
          eyebrow="Novault Agent"
          align="split"
          title={<>Private transfers, executed by an agent.</>}
          body="Novault adds an autonomous settlement agent to confidential transfers: it understands payment intent, remembers financial context, prepares encrypted Token-2022 transactions, and asks the wallet to approve before anything moves."
        />

        <div className="grid grid-cols-12 gap-6 items-stretch">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <div className="glass-strong rounded-3xl p-6 h-full noise relative overflow-hidden">
                <div className="absolute inset-0 grid-overlay-fine opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[rgba(0,245,138,0.10)] border border-[rgba(0,245,138,0.25)] grid place-items-center">
                        <Bot className="w-5 h-5 text-[var(--mint)]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                          Agent Console
                        </div>
                        <div className="text-xl">Novault</div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mint)]">
                      ● armed
                    </span>
                  </div>

                  <div className="space-y-3">
                    <Bubble
                      who="You"
                      text="Send 500 USDC privately to the audit contractor every Friday after approval."
                    />
                    <Bubble
                      who="Novault Agent"
                      mint
                      text="I’ll prepare a recurring confidential transfer. Amount shielded, memo encrypted, wallet approval required before each settlement."
                    />
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <StatusCard icon={Wallet} label="Custody" value="Wallet-held" />
                    <StatusCard icon={ShieldCheck} label="Amount" value="Encrypted" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map(([Icon, title, body], i) => (
              <Reveal key={title as string} delay={i * 0.08}>
                <div className="glass tilt-card spotlight rounded-2xl p-6 h-full">
                  <Icon className="w-5 h-5 text-[var(--mint)] mb-7" strokeWidth={1.5} />
                  <div className="text-xl mb-2">{title as string}</div>
                  <p className="text-secondary text-[13px] leading-relaxed">{body as string}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-8 glass rounded-2xl p-5 md:p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted mb-5">
              /// agentic settlement pipeline
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {pipeline.map((step, i) => (
                <div key={step} className="relative glass rounded-xl px-4 py-4 min-h-[112px]">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--mint)]">
                      0{i + 1}
                    </span>
                    <Check className="w-3.5 h-3.5 text-[var(--mint)]" strokeWidth={2} />
                  </div>
                  <div className="text-[13px] leading-snug text-secondary">{step}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px] text-muted leading-relaxed max-w-3xl">
              Security boundary: the agent can reason, prepare, schedule, simulate, and monitor. It
              does not hold private keys. Final movement requires wallet-native approval.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Bubble({ who, text, mint }: { who: string; text: string; mint?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-4 border ${mint ? "bg-[rgba(0,245,138,0.08)] border-[rgba(0,245,138,0.22)]" : "glass border-[var(--border)]"}`}
    >
      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-2">{who}</div>
      <p className="text-sm leading-relaxed text-secondary">{text}</p>
    </div>
  );
}

function StatusCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
}) {
  return (
    <div className="glass rounded-xl p-4">
      <Icon className="w-4 h-4 text-[var(--mint)] mb-4" strokeWidth={1.5} />
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">{label}</div>
      <div className="font-mono text-[12px] text-[var(--mint)] mt-1">{value}</div>
    </div>
  );
}
