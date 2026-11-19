"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NE } from "./Icons";

/* ---------- Staffing: auto-cycling role tabs ---------- */
export type Role = { t: string; p: string; s: string[]; n: string; ic: React.ReactNode };
export function RoleTabs({ roles }: { roles: Role[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI(v => (v + 1) % roles.length), 5000);
    return () => clearTimeout(t);
  }, [i, paused, roles.length]);
  const r = roles[i];
  return (
    <div className="rtabs" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="rlist" role="tablist">
        {roles.map((x, k) => (
          <button key={x.t} role="tab" aria-selected={k === i} className={k === i ? "on" : ""} onClick={() => setI(k)}>
            {x.t}<small>{x.n}</small><span className="tm" key={k === i && !paused ? `run${i}` : "x"} style={paused ? { animation: "none", width: k === i ? "100%" : 0 } : undefined} />
          </button>
        ))}
      </div>
      <div className="rpanel" role="tabpanel">
        <span className="glow" />
        <div className="anim" key={i}>
          <span className="ic">{r.ic}</span>
          <h3>{r.t}</h3>
          <div><p>{r.p}</p><div className="sk">{r.s.map(s => <span key={s}>{s}</span>)}</div></div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Marketing: rotating word ---------- */
export function RotWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % words.length), 2200); return () => clearInterval(t); }, [words.length]);
  return (
    <span className="rot" aria-live="polite">
      {words.map((w, k) => <span key={w} className={k === i ? "on" : k === (i - 1 + words.length) % words.length ? "out" : ""} aria-hidden={k !== i}>{w}</span>)}
    </span>
  );
}

/* ---------- Marketing: list with cursor-following image ---------- */
export type CItem = { img: string; t: string; p: string; tg: string[] };
export function CursorList({ items }: { items: CItem[] }) {
  const prev = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const loop = () => {
      const p = pos.current; p.x += (p.tx - p.x) * 0.15; p.y += (p.ty - p.y) * 0.15;
      if (prev.current) prev.current.style.translate = `${p.x}px ${p.y}px`;
      raf = requestAnimationFrame(loop);
    };
    loop(); return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="clist" onPointerMove={e => { pos.current.tx = e.clientX; pos.current.ty = e.clientY; }} onPointerLeave={() => prev.current?.classList.remove("on")}>
      <div className="cprev" ref={prev} aria-hidden="true" />
      {items.map((s, k) => (
        <Link href="/contact" className="crow" key={s.t} data-cursor="Plan"
          onPointerEnter={() => { if (prev.current) { prev.current.style.backgroundImage = `url(/img/${s.img}.webp)`; prev.current.classList.add("on"); } }}>
          <span className="n">0{k + 1}</span><h3>{s.t}</h3>
          <div><p>{s.p}</p><div className="tg">{s.tg.map(t => <span key={t}>{t}</span>)}</div></div>
          <span className="ib"><NE /></span>
        </Link>
      ))}
    </div>
  );
}

/* ---------- Drag-to-scroll reel ---------- */
export function DragReel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let down = false, sx = 0, sl = 0, v = 0, last = 0, raf = 0;
    const d = (e: PointerEvent) => { if (e.pointerType !== "mouse") return; down = true; sx = e.clientX; sl = el.scrollLeft; last = e.clientX; el.classList.add("drag"); cancelAnimationFrame(raf); };
    const m = (e: PointerEvent) => { if (!down) return; el.scrollLeft = sl - (e.clientX - sx); v = e.clientX - last; last = e.clientX; };
    const u = () => {
      if (!down) return; down = false; el.classList.remove("drag");
      const glide = () => { el.scrollLeft -= v; v *= 0.94; if (Math.abs(v) > 0.4) raf = requestAnimationFrame(glide); };
      glide();
    };
    el.addEventListener("pointerdown", d); window.addEventListener("pointermove", m); window.addEventListener("pointerup", u);
    return () => { el.removeEventListener("pointerdown", d); window.removeEventListener("pointermove", m); window.removeEventListener("pointerup", u); cancelAnimationFrame(raf); };
  }, []);
  return <div className="reel" ref={ref} data-cursor="Drag">{children}</div>;
}

/* ---------- Horizontal pinned track: measures track width ---------- */
export function HTrack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const set = () => { const t = ref.current; if (t?.parentElement?.parentElement) t.parentElement.parentElement.style.setProperty("--tw", `${t.scrollWidth}px`); };
    set(); window.addEventListener("resize", set); return () => window.removeEventListener("resize", set);
  }, []);
  return <div className="track" ref={ref}>{children}</div>;
}

/* ---------- About: words light up as you scroll ---------- */
export function LitText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      raf = 0;
      const sec = ref.current?.closest<HTMLElement>(".lit");
      if (sec && ref.current) {
        const r = sec.getBoundingClientRect(); const vh = window.innerHeight;
        const p = window.innerWidth <= 1180 ? 1 : Math.max(0, Math.min(1, -r.top / Math.max(1, r.height - vh) * 1.15));
        const n = Math.round(p * words.length);
        ref.current.querySelectorAll(".lw").forEach((w, k) => w.classList.toggle("on", k < n));
      }
    };
    const q = () => { if (!raf) raf = requestAnimationFrame(loop); };
    loop(); window.addEventListener("scroll", q, { passive: true }); window.addEventListener("resize", q);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", q); window.removeEventListener("resize", q); };
  }, [words.length]);
  return <p className="statement" ref={ref}>{words.map((w, k) => <span key={k}><span className="lw">{w}</span>{" "}</span>)}</p>;
}

/* ---------- Careers: filterable job list ---------- */
export type Job = { t: string; m: string; v: string };
export function JobFilter({ jobs }: { jobs: Job[] }) {
  const cats = ["All", ...Array.from(new Set(jobs.map(j => j.v)))];
  const [c, setC] = useState("All");
  const list = c === "All" ? jobs : jobs.filter(j => j.v === c);
  return (
    <>
      <div className="filters" role="tablist">
        {cats.map(x => <button key={x} role="tab" aria-selected={c === x} className={c === x ? "on" : ""} onClick={() => setC(x)}>{x}<span>{x === "All" ? jobs.length : jobs.filter(j => j.v === x).length}</span></button>)}
      </div>
      <div className="jobs" style={{ background: "#F5F5F6" }}>
        {list.map((j, k) => (
          <a href="#apply" className="job anim" key={c + j.t} style={{ animationDelay: `${k * 0.06}s` }}><div><b>{j.t}</b><small>{j.m}</small></div><div className="tags"><span className="chip w">{j.v}</span><span className="ib"><NE /></span></div></a>
        ))}
      </div>
    </>
  );
}

/* ---------- Home: service panels (hover-expand on desktop, folding accordion on touch) ---------- */
export type Panel = { href: string; img: string; c: string; n: string; chips: string[]; t: string; s: string };
export function ServicePanels({ items }: { items: Panel[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="xpanels rv">
      {items.map((c, i) => (
        <Link href={c.href} className={`xp ${i === open ? "on" : ""}`} key={c.t} data-cursor="Explore" aria-expanded={i === open}
          onClick={e => { if (window.innerWidth <= 1180 && i !== open) { e.preventDefault(); setOpen(i); } }}
          onMouseEnter={() => { if (window.innerWidth > 1180) setOpen(i); }}>
          <span className="bg" style={{ backgroundImage: `url(/img/${c.img}.webp)` }} />
          <span className="top"><span className="num" style={{ background: c.c }}>{c.n}</span><span className="mt">{c.t}</span><span className="ib"><NE /></span></span>
          <span className="vt">{c.t}</span>
          <span className="body"><b>{c.t}</b><span className="s">{c.s}</span><span className="chips">{c.chips.map(x => <span className="ochip" key={x}>{x}</span>)}</span></span>
        </Link>
      ))}
    </div>
  );
}
