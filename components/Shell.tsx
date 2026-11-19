"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Arrow } from "./Icons";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/it-staffing", label: "IT staffing" },
  { href: "/it-infrastructure", label: "Infrastructure" },
  { href: "/digital-marketing", label: "Marketing" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

function themeFor(path: string) {
  if (path.startsWith("/it-staffing")) return "theme-staffing";
  if (path.startsWith("/it-infrastructure")) return "theme-infra";
  if (path.startsWith("/digital-marketing")) return "theme-marketing";
  return "theme-home";
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // Scroll reveal for any element with .rv
  useEffect(() => {
    setOpen(false);
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv:not(.seen)"));
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("seen")); return; }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("seen"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach(e => io.observe(e));
    // Count-up numbers
    const nums = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const io2 = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement; io2.unobserve(el);
      const end = parseFloat(el.dataset.count || "0"); const dec = (el.dataset.count || "").split(".")[1]?.length || 0;
      const pre = el.dataset.pre || ""; const suf = el.dataset.suf || ""; const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / 1400); const v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = pre + v.toLocaleString("en-IN", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }), { threshold: 0.4 });
    nums.forEach(n => io2.observe(n));
    return () => { io.disconnect(); io2.disconnect(); };
  }, [path]);

  const isOn = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <div className={`page ${themeFor(path)}`}>
      <header className="in nav">
        <Link href="/" className="logo" aria-label="Coalesca Technologies home">
          <img src="/brand/logo.svg" alt="Coalesca Technologies" width={216} height={40} />
        </Link>
        <nav className="pillnav" aria-label="Main">
          {LINKS.map(l => <Link key={l.href} href={l.href} className={isOn(l.href) ? "on" : ""}>{l.label}</Link>)}
        </nav>
        <div className="navr">
          <Link href="/contact" className="navbtn">Talk to us</Link>
          <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d={open ? "M4 4l10 10M14 4L4 14" : "M2 5h14M2 9h14M2 13h14"} stroke="#0B1222" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div className={`mnav ${open ? "open" : ""}`}>
          {LINKS.map(l => <Link key={l.href} href={l.href} className={isOn(l.href) ? "on" : ""}>{l.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="foot">
        <div className="top">
          <div>
            <Link href="/" className="logo"><img src="/brand/logo-white.svg" alt="Coalesca Technologies" width={238} height={44} /></Link>
            <p style={{ marginTop: 22, fontSize: 14.5, color: "#8D96A1", maxWidth: 330 }}>IT staffing, IT infrastructure projects and digital marketing for enterprises across India.</p>
            <Link href="/contact" className="pbtn l" style={{ marginTop: 30 }}>Talk to us<span className="ib"><Arrow /></span></Link>
          </div>
          <div><h5>Services</h5><ul>
            <li><Link href="/it-staffing">IT staffing</Link></li>
            <li><Link href="/it-staffing#veterans">Veteran placement</Link></li>
            <li><Link href="/it-infrastructure">IT infrastructure</Link></li>
            <li><Link href="/digital-marketing">Digital marketing</Link></li>
          </ul></div>
          <div><h5>Company</h5><ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul></div>
          <div><h5>Contact</h5><ul>
            <li><a href="mailto:hello@coalesca.in">hello@coalesca.in</a></li>
            <li>Bengaluru, India</li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul></div>
        </div>
        <div className="word" aria-hidden="true">coalesca</div>
        <div className="base"><span>© {new Date().getFullYear()} Coalesca Technologies Private Limited</span><span>Privacy policy &nbsp;&nbsp;&nbsp; Terms of use</span></div>
      </footer>
    </div>
  );
}
