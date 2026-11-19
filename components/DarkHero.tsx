import type { ReactNode } from "react";

type Tick = { b: ReactNode; s: string; count?: string };

/**
 * Full-bleed dark hero used on every page: one panel, the photo or graphic lives inside it.
 * Text on the left, visual on the right (stacks on phones, compact).
 */
export default function DarkHero({
  chip, title, sub, cta, ticks, img, visual, bottom, size = "lg", pos = "center", cls = "",
}: {
  chip: string; title: ReactNode; sub: ReactNode; cta: ReactNode;
  ticks?: Tick[]; img?: string; visual?: ReactNode; bottom?: ReactNode; size?: "lg" | "md"; pos?: string; cls?: string;
}) {
  return (
    <section style={{ paddingTop: 12 }}>
      <div className={`nhero dhero ${size} ${cls}`}>
        {img && <div className="dbg" aria-hidden="true"><span style={{ backgroundImage: `url(/img/${img}.webp)`, backgroundPosition: pos }} /></div>}
        <div className="tx">
          <span className="chip d hchip">{chip}</span>
          <h1>{title}</h1>
          <p className="sub">{sub}</p>
          <div className="cta">{cta}</div>
          {ticks && (
            <div className="ticks">
              {ticks.map((t, i) => (
                <div className="tk" key={i}><b {...(t.count ? { "data-count": t.count } : {})}>{t.b}</b><small>{t.s}</small></div>
              ))}
            </div>
          )}
        </div>
        <div className="dvis">{visual}</div>
        {bottom && <div className="dbottom">{bottom}</div>}
      </div>
    </section>
  );
}
