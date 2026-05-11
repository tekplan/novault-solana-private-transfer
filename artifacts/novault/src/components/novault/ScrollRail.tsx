import { useEffect, useState } from "react";

const sections = [
  ["01", "Hero", "hero"],
  ["02", "Leak", "leak"],
  ["03", "Definition", "definition"],
  ["04", "Flow", "flow"],
  ["05", "OS", "os"],
  ["06", "Use Cases", "use-cases"],
  ["07", "Foundation", "foundation"],
  ["08", "Enter", "cta"],
] as const;

export function ScrollRail() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const sc = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(sc);
      let cur = "hero";
      for (const [, , id] of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-3">
      <div className="relative h-72 w-[2px] bg-[var(--border)] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--mint)] to-transparent"
          style={{ height: `${Math.max(progress * 100, 4)}%` }}
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {sections.map(([n, label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] transition ${
              active === id ? "text-[var(--mint)]" : "text-muted hover:text-secondary"
            }`}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: active === id ? "var(--mint)" : "var(--border)" }}
            />
            <span>{n}</span>
            <span className="opacity-0 group-hover:opacity-100">{label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
