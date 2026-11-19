"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Site-wide motion layer.
 * - Lenis smooth scrolling
 * - Scroll progress bar
 * - Word-by-word heading reveals (.hd h2, [data-split])
 * - Parallax ([data-speed])
 * - Scroll-linked progress as a CSS variable --p on [data-scroll="view" | "sticky"]
 * - Magnetic buttons (.pbtn, .navbtn) and 3D tilt ([data-tilt])
 * - Custom cursor with labels ([data-cursor])
 */
let lenis: Lenis | null = null;

export default function Motion() {
  const path = usePathname();

  // One-time setup: smooth scroll, progress bar, cursor
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!reduce && !lenis) {
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
      const raf = (t: number) => { lenis?.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }

    const bar = document.createElement("div"); bar.className = "progress"; document.body.appendChild(bar);

    let cur: HTMLDivElement | null = null;
    let cx = -100, cy = -100, tx = -100, ty = -100, raf2 = 0;
    const onMove = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e: Event) => {
      if (!cur) return;
      const t = (e.target as HTMLElement).closest<HTMLElement>("a,button,[data-cursor],summary,label.file");
      const label = t?.closest<HTMLElement>("[data-cursor]")?.dataset.cursor || "";
      cur.classList.toggle("hover", !!t);
      cur.classList.toggle("label", !!label);
      cur.textContent = label;
    };
    if (fine && !reduce) {
      cur = document.createElement("div"); cur.className = "cursor"; document.body.appendChild(cur);
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerover", onOver);
      const loop = () => {
        cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
        if (cur) cur.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`;
        raf2 = requestAnimationFrame(loop);
      };
      loop();
    }
    return () => {
      bar.remove(); cur?.remove(); cancelAnimationFrame(raf2);
      window.removeEventListener("pointermove", onMove); document.removeEventListener("pointerover", onOver);
    };
  }, []);

  // Per-page setup
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    lenis?.scrollTo(0, { immediate: true });

    // Split headings into words
    const heads = Array.from(document.querySelectorAll<HTMLElement>(".hd h2:not(.sw), [data-split]:not(.sw)"));
    heads.forEach(h => {
      const walk = (node: Node): Node[] => {
        if (node.nodeType === 3) {
          return (node.textContent || "").split(/(\s+)/).filter(Boolean).map(part => {
            if (/^\s+$/.test(part)) return document.createTextNode(" ");
            const w = document.createElement("span"); w.className = "w";
            const i = document.createElement("span"); i.textContent = part; w.appendChild(i); return w;
          });
        }
        if (node.nodeType === 1 && (node as HTMLElement).tagName !== "BR") {
          const el = node as HTMLElement; const kids = Array.from(el.childNodes).flatMap(walk);
          el.innerHTML = ""; kids.forEach(k => el.appendChild(k)); return [el];
        }
        return [node];
      };
      const kids = Array.from(h.childNodes).flatMap(walk);
      h.innerHTML = ""; kids.forEach(k => h.appendChild(k));
      h.querySelectorAll<HTMLElement>(".w > span").forEach((s, i) => s.style.transitionDelay = `${i * 0.045}s`);
      h.classList.add("sw");
    });

    // Reveal observer
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("seen"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    document.querySelectorAll(".rv:not(.seen), .sw:not(.seen), .imr:not(.seen)").forEach(e => io.observe(e));

    // Count-up numbers
    const io2 = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement; io2.unobserve(el);
      const raw = el.dataset.count || "0"; const end = parseFloat(raw); const dec = raw.split(".")[1]?.length || 0;
      const pre = el.dataset.pre || ""; const suf = el.dataset.suf || ""; const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / 1600); const val = end * (1 - Math.pow(1 - p, 4));
        el.textContent = pre + val.toLocaleString("en-IN", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }), { threshold: 0.4 });
    document.querySelectorAll("[data-count]").forEach(n => io2.observe(n));

    // Scroll-driven frame loop
    const speed = Array.from(document.querySelectorAll<HTMLElement>("[data-speed]"));
    const linked = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll]"));
    const bar = document.querySelector<HTMLElement>(".progress");
    let raf = 0;
    const frame = () => {
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight - vh;
      if (bar) bar.style.transform = `scaleX(${docH > 0 ? window.scrollY / docH : 0})`;
      linked.forEach(el => {
        const r = el.getBoundingClientRect();
        let p: number;
        if (el.dataset.scroll === "sticky") p = -r.top / Math.max(1, r.height - vh);
        else p = (vh - r.top) / (vh + r.height);
        p = Math.max(0, Math.min(1, p));
        el.style.setProperty("--p", p.toFixed(4));
        const steps = parseInt(el.dataset.steps || "0");
        if (steps) {
          const idx = Math.min(steps - 1, Math.floor(p * steps * 0.999));
          if (el.dataset.active !== String(idx)) el.dataset.active = String(idx);
        }
      });
      if (!reduce) speed.forEach(el => {
        const r = el.getBoundingClientRect(); const s = parseFloat(el.dataset.speed || "0");
        const off = (r.top + r.height / 2 - vh / 2) * s;
        el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)` + (el.dataset.scale ? ` scale(${el.dataset.scale})` : "");
      });
      raf = 0;
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(frame); };
    frame();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);

    // Magnetic buttons + tilt
    const mags = fine && !reduce ? Array.from(document.querySelectorAll<HTMLElement>(".pbtn,.navbtn,.mag")) : [];
    const magMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement; const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
    };
    const magOut = (e: PointerEvent) => { (e.currentTarget as HTMLElement).style.transform = ""; };
    mags.forEach(m => { m.addEventListener("pointermove", magMove); m.addEventListener("pointerleave", magOut); });
    const tilts = fine && !reduce ? Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]")) : [];
    const tMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement; const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateY(-4px)`;
      el.style.setProperty("--mx", `${(x + 0.5) * 100}%`); el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    };
    const tOut = (e: PointerEvent) => { (e.currentTarget as HTMLElement).style.transform = ""; };
    tilts.forEach(t => { t.addEventListener("pointermove", tMove); t.addEventListener("pointerleave", tOut); });

    return () => {
      io.disconnect(); io2.disconnect(); cancelAnimationFrame(raf);
      window.removeEventListener("scroll", queue); window.removeEventListener("resize", queue);
      mags.forEach(m => { m.removeEventListener("pointermove", magMove); m.removeEventListener("pointerleave", magOut); });
      tilts.forEach(t => { t.removeEventListener("pointermove", tMove); t.removeEventListener("pointerleave", tOut); });
    };
  }, [path]);

  return null;
}
