import { Reveal } from "./Reveal";

export function SectionHeader({
  number,
  eyebrow,
  title,
  body,
  align = "left",
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "split";
}) {
  if (align === "split") {
    return (
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-7">
          <Reveal>
            <div className="kicker mb-5">
              {number} / {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display text-4xl md:text-6xl lg:text-7xl text-balance">{title}</h2>
          </Reveal>
        </div>
        {body && (
          <div className="col-span-12 md:col-span-5 md:pt-16">
            <Reveal delay={0.2}>
              <p className="text-secondary text-[15px] leading-relaxed text-pretty">{body}</p>
            </Reveal>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="mb-12">
      <Reveal>
        <div className="kicker mb-5">
          {number} / {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display text-4xl md:text-6xl text-balance max-w-3xl">{title}</h2>
      </Reveal>
      {body && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-secondary max-w-xl text-[15px] leading-relaxed">{body}</p>
        </Reveal>
      )}
    </div>
  );
}
