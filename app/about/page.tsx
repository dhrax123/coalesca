import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Tick } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description: "Coalesca Technologies brings together people, technology and digital growth: IT staffing, IT infrastructure projects and digital marketing for enterprises.",
};

const PILLARS = [
  { c: "var(--talent)", t: "People", p: "Recruitment, talent acquisition, contract staffing and HR support for technology teams." },
  { c: "var(--systems)", t: "Technology", p: "Infrastructure delivery, consulting, software, platforms, AI and automation." },
  { c: "var(--growth)", t: "Digital growth", p: "Performance marketing, branding, creative production and audience engagement." },
  { c: "var(--brand)", t: "Business operations", p: "Process improvement and integrated solutions that combine all three." },
];

export default function About() {
  return (
    <>
      <section className="shero">
        <div className="tx">
          <span className="chip lbl">About Coalesca</span>
          <h1><span className="ln"><span>People,</span></span><span className="ln"><span>technology <span className="g">and</span></span></span><span className="ln"><span><span className="g">growth,</span> together</span></span></h1>
          <p className="sub">Coalesca Technologies is a multi-vertical company built to give enterprises <b>skilled talent</b>, <b>dependable infrastructure</b> and <b>measurable growth</b> through one partner.</p>
        </div>
        <div className="ph"><div className="phi" style={{ backgroundImage: "url(/img/stepped.jpg)" }} />
          <div className="fc" style={{ "--r": "-3deg", "--d": ".7s", width: 260 } as React.CSSProperties}><div className="t"><span>Coalesca Technologies</span><i style={{ background: "var(--brand)" }} /></div><b>Three services, one contract</b><div className="row" style={{ marginTop: 6 }}><span>Staffing, infrastructure, marketing</span></div></div>
        </div>
      </section>

      <section className="sec white">
        <div className="in">
          <p className="statement rv"><span className="g">Coalesce:</span> to come together and form one whole. <span className="g">That&apos;s how we work. Specialist teams for talent, infrastructure and marketing, planning together whenever your project needs more than one.</span></p>
        </div>
      </section>

      <section className="sec panel">
        <div className="in">
          <span className="chip w lbl">What we bring</span>
          <div className="hd rv"><h2>Four capabilities, one partner</h2><p>Use one service on its own, or combine them into a <b>single coordinated engagement.</b></p></div>
          <div className="pillars">
            {PILLARS.map((p, i) => <div className={`pillar rv d${i + 1}`} key={p.t}><span className="dot" style={{ background: p.c }} /><h4>{p.t}</h4><p>{p.p}</p></div>)}
          </div>
        </div>
      </section>

      <section style={{ padding: "12px 0" }}>
        <div className="board rv">
          <div className="top"><div><span className="chip d">How we work</span><h2 style={{ marginTop: 24 }}>Principles every engagement runs on</h2></div><p>Whichever service you use, these stay the same.</p></div>
          <div className="values">
            <div className="value"><b>One point of contact</b><p>An account manager owns your engagement across every service you use.</p></div>
            <div className="value"><b>Screened before shared</b><p>Candidates, plans and creative are checked by us before they reach you.</p></div>
            <div className="value"><b>Plain reporting</b><p>Updates on hires, site progress and campaign results, written for decision-makers.</p></div>
            <div className="value"><b>Clear contracts</b><p>Scope, rates and service levels agreed in writing before work begins.</p></div>
            <div className="value"><b>Flexible delivery</b><p>Onsite, offsite, remote and hybrid arrangements, matched to the work.</p></div>
            <div className="value"><b>Room to grow</b><p>Apps, websites, SaaS tools and AI automation when your next project needs them.</p></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="in">
          <span className="chip lbl">Who we work with</span>
          <div className="hd rv"><h2>Built for organisations at every stage</h2><p>From growing businesses to <b>global capability centres</b> and the <b>system integrators</b> that serve them.</p></div>
          <div className="who rv">
            {["Multinational corporations", "Global capability centres", "System integrators", "Small and mid-sized enterprises", "Startups", "Public and private sector"].map(w => <span key={w}><i />{w}</span>)}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 0 }}>
        <div className="band rv" style={{ background: "var(--ink)" }}>
          <svg className="deco" width="480" height="400" viewBox="0 0 34 28" fill="none"><path d="M2 4 C12 4 14 14 24 14" stroke="#5EB6C6" strokeWidth="1" /><path d="M2 14 H24" stroke="#5EB6C6" strokeWidth="1" /><path d="M2 24 C12 24 14 14 24 14" stroke="#5EB6C6" strokeWidth="1" /></svg>
          <span className="chip d">Work with us</span>
          <h2 style={{ marginTop: 24 }}>Tell us what you&apos;re building. We&apos;ll bring the right team.</h2>
          <div style={{ display: "flex", gap: 10, marginTop: 36, flexWrap: "wrap" }}><Link href="/contact" className="pbtn l">Talk to us<span className="ib"><Arrow /></span></Link><Link href="/careers" className="gbtn" style={{ background: "transparent", color: "#fff", borderColor: "#2A3646" }}>Join our network</Link></div>
          <div className="stat a hm" style={{ position: "absolute", right: 56, bottom: 56, width: 220 }} ><b>1 contract</b><small>Every service</small><span className="tick"><Tick /></span></div>
        </div>
      </section>
    </>
  );
}
