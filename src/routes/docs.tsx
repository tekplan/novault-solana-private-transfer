import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/novault/Navbar";
import { Footer } from "@/components/novault/Footer";
import { Reveal } from "@/components/novault/Reveal";
import { ArrowUpRight, BookOpen, Terminal, Shield, Zap, GitBranch, Lock } from "lucide-react";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — Novault Agent" },
      {
        name: "description",
        content:
          "Technical documentation for Novault — an autonomous private transfer agent for Solana using Token-2022 confidential transfers and wallet approval.",
      },
      { property: "og:title", content: "Novault Docs — Private Transfer Agent" },
      {
        property: "og:description",
        content:
          "Integrate agentic confidential settlement into wallets, treasuries, and payment rails on Solana.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: DocsPage,
});

const sections = [
  {
    id: "introduction",
    kicker: "01 / Introduction",
    title: "What is Novault.",
    body: "Novault is an autonomous private transfer agent built for Solana. It turns payment intent into prepared Token-2022 Confidential Transfers, uses zero-knowledge validity proofs to shield transfer amounts, and preserves non-custodial control through wallet-native approval. The protocol is designed for wallets, treasuries, payroll surfaces, and on-chain operators who need agentic automation without exposing sensitive financial details.",
  },
  {
    id: "architecture",
    kicker: "02 / Architecture",
    title: "How it is built.",
    body: "Novault is composed of four layers: an agent layer that parses payment intent and applies policy, an encryption layer that handles ElGamal encryption of balances and amounts, a proof layer that generates and verifies zero-knowledge validity proofs, and a settlement layer that interfaces with the Solana Token-2022 program. Sensitive data is encrypted client-side before reaching the network; private keys remain in the wallet.",
  },
  {
    id: "confidential-transfers",
    kicker: "03 / Confidential Transfers",
    title: "The transfer primitive.",
    body: "A confidential transfer hides the amount being moved while keeping sender and receiver public. The agent can prepare, schedule, simulate, and monitor the transfer, but final movement requires wallet approval. The receiver decrypts the amount using their viewing key. Validity is enforced on-chain through ZK proofs — there is no trusted relayer, no off-chain oracle, and no custodial bridge.",
  },
];

const apiSnippets = [
  {
    label: "Initialize",
    code: `import { Novault } from "@novault/sdk";

const novault = new Novault({
  network: "solana-mainnet",
  wallet: connectedWallet,
  agent: { mode: "non-custodial" },
});`,
  },
  {
    label: "Confidential Transfer",
    code: `await novault.agent.preparePrivateTransfer({
  intent: "pay contractor invoice #4421",
  token: "USDC-2022",
  to: recipient,
  amount: 1_000_000n,
});`,
  },
  {
    label: "Read Private Balance",
    code: `const balance = await novault.balance.read({
  token: "USDC-2022",
  viewingKey: wallet.viewingKey,
});`,
  },
];

const resources = [
  {
    icon: BookOpen,
    title: "Protocol whitepaper",
    desc: "Cryptographic primitives, threat model, and proof system.",
  },
  {
    icon: Terminal,
    title: "SDK reference",
    desc: "TypeScript bindings for client-side encryption and proof generation.",
  },
  { icon: Shield, title: "Security model", desc: "What Novault hides, what it does not, and why." },
  {
    icon: Zap,
    title: "Performance notes",
    desc: "Proof generation timings, settlement latency, and gas profile.",
  },
  {
    icon: GitBranch,
    title: "Integration guides",
    desc: "Drop confidential transfers into existing wallets and treasury tools.",
  },
  {
    icon: Lock,
    title: "Key management",
    desc: "Viewing keys, spending keys, and rotation patterns.",
  },
];

export function DocsPage() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 md:pt-52 pb-24 border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] pulse-soft" />
                Documentation · v0.4 · Mainnet
              </div>
              <h1 className="font-display text-[44px] md:text-[72px] leading-[0.95] tracking-tight">
                Build with <span className="text-[var(--mint)]">agentic</span>
                <br />
                confidential settlement.
              </h1>
              <p className="mt-8 text-secondary text-base md:text-lg max-w-xl leading-relaxed">
                A reference for integrating Novault Agent into wallets, treasury tools, and payment
                surfaces on Solana. Read top-to-bottom, or jump into the SDK.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="glass rounded-xl p-5 border border-[var(--border)]">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-3">
                  On this page
                </div>
                <ul className="space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-secondary hover:text-[var(--mint)] flex items-center justify-between group"
                      >
                        <span>{s.title.replace(".", "")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#sdk" className="text-secondary hover:text-[var(--mint)]">
                      SDK reference
                    </a>
                  </li>
                  <li>
                    <a href="#resources" className="text-secondary hover:text-[var(--mint)]">
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-24">
          {sections.map((s) => (
            <Reveal key={s.id}>
              <article id={s.id} className="grid grid-cols-12 gap-8 scroll-mt-32">
                <div className="col-span-12 md:col-span-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--mint)] mb-4">
                    {s.kicker}
                  </div>
                  <h2 className="font-display text-[28px] md:text-[36px] leading-tight tracking-tight">
                    {s.title}
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-secondary text-[15px] md:text-base leading-[1.8]">{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SDK */}
      <section id="sdk" className="py-24 md:py-32 border-t border-[var(--border)] scroll-mt-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--mint)] mb-4">
              04 / SDK
            </div>
            <h2 className="font-display text-[32px] md:text-[48px] leading-tight tracking-tight max-w-2xl">
              Three calls to agentic confidential settlement.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--border)] glass rounded-2xl overflow-hidden">
            {apiSnippets.map((snip, i) => (
              <Reveal key={snip.label} delay={i * 0.05}>
                <div className="bg-[var(--background)]/80 p-6 h-full">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-4 flex items-center justify-between">
                    <span>{snip.label}</span>
                    <span className="text-[var(--mint)]">0{i + 1}</span>
                  </div>
                  <pre className="font-mono text-[12px] leading-[1.7] text-secondary overflow-x-auto whitespace-pre-wrap">
                    {snip.code}
                  </pre>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section
        id="resources"
        className="py-24 md:py-32 border-t border-[var(--border)] scroll-mt-32"
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--mint)] mb-4">
                05 / Resources
              </div>
              <h2 className="font-display text-[32px] md:text-[48px] leading-tight tracking-tight">
                Go deeper.
              </h2>
            </div>
            <a
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary hover:text-[var(--mint)] flex items-center gap-2"
            >
              Back to home <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] glass rounded-2xl overflow-hidden">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.04}>
                <a
                  href="#"
                  className="bg-[var(--background)]/80 spotlight p-7 h-full min-h-[180px] flex flex-col justify-between group block"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                  }}
                >
                  <r.icon className="w-5 h-5 text-[var(--mint)]" strokeWidth={1.5} />
                  <div>
                    <div className="text-lg mb-2 group-hover:text-[var(--mint)] transition flex items-center justify-between">
                      {r.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    </div>
                    <p className="text-secondary text-[13px] leading-relaxed">{r.desc}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
