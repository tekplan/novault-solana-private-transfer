import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative pt-32 md:pt-44 pb-24 overflow-hidden border-t border-[var(--border)]"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-[var(--mint)] opacity-[0.10] blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-30 mask-fade-b" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <div className="kicker mb-6">/// 09 — Enter Novault</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-4xl md:text-7xl text-balance max-w-4xl mx-auto">
            Tell the agent.
            <br />
            Approve with wallet.
            <br />
            Settle privately.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-secondary max-w-xl mx-auto leading-relaxed">
            Novault turns payment intent into private, verifiable, wallet-approved Solana settlement
            flows.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#"
              className="glass-pill rounded-full pl-6 pr-2 py-2.5 inline-flex items-center gap-3 group"
              style={{ background: "rgba(0,245,138,0.10)", borderColor: "rgba(0,245,138,0.35)" }}
            >
              <span className="text-[var(--mint)]">Launch Agent</span>
              <span className="w-8 h-8 rounded-full bg-[var(--mint)] grid place-items-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 text-[var(--background)]" strokeWidth={2.2} />
              </span>
            </a>
            <a href="#foundation" className="glass-pill rounded-full px-6 py-3 text-secondary">
              Read the Architecture
            </a>
          </div>
        </Reveal>

        <div className="relative mt-20 select-none pointer-events-none">
          <h2
            className="display font-display text-[28vw] md:text-[20vw] leading-none tracking-[-0.06em]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(243,255,248,0.22) 0%, rgba(0,245,138,0.10) 50%, transparent 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            NOVAULT
          </h2>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
