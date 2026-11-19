import Link from "next/link";
import { Arrow, NE, Tick, I } from "@/components/Icons";
import { CarouselArrows } from "@/components/Carousel";
import { EnquiryForm } from "@/components/Forms";
import { v } from "@/components/v";
import { JOBS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1><span className="ln"><span>IT talent, systems</span></span><span className="ln"><span>and growth <span className="g">for</span></span></span><span className="ln"><span><span className="g">every</span> enterprise</span></span></h1>
        <p className="sub">From your next <b>screened IT hire</b> to <b>infrastructure rollouts</b> and <b>performance campaigns</b>, delivered by one partner.</p>
        <div className="cta"><Link href="/contact" className="pbtn">Talk to us<span className="ib"><Arrow /></span></Link><a href="#services" className="gbtn">Explore services</a></div>
        <div className="stage">
          <div className="capsule" style={{ backgroundImage: "url(/img/towers.jpg)" }} />
          <div className="fc" style={v({ "--rx": "432px", "--y": "300px", "--r": "-4deg", "--d": ".7s", "--mx": "4%", "--my": "40px" })}>
            <div className="t"><span>IT staffing</span><i style={{ background: "var(--talent)" }} /></div>
            <b>Shortlist ready</b>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14 }}><div className="av"><span style={{ background: "#22B5A2" }}>AK</span><span style={{ background: "#4B69FF" }}>SM</span><span style={{ background: "#0B1222" }}>RV</span></div><span style={{ fontSize: 12, color: "var(--mute)" }}>3 cleared all rounds</span></div>
          </div>
          <div className="fc" style={v({ "--rx": "212px", "--y": "420px", "--r": "3deg", "--d": ".85s", "--mx": "40%", "--my": "220px", "--sx": "18%", "--sy": "250px", width: "250px" })}>
            <div className="t"><span>Infrastructure</span><i style={{ background: "var(--systems)" }} /></div>
            <b>Store rollout, phase 2</b>
            <div className="bar"><i style={{ width: "75%", background: "var(--systems)" }} /></div><div className="row"><span>18 of 24 sites live</span><span>75%</span></div>
          </div>
          <div className="fc hs" style={v({ "--rx": "52px", "--y": "150px", "--r": "-2deg", "--d": "1s", "--mx": "62%", "--my": "60px", width: "220px" })}>
            <div className="t"><span>Marketing</span><i style={{ background: "var(--growth)" }} /></div>
            <b>Cost per lead</b>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 8 }}><span style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-.03em" }}>−21%</span><span style={{ fontSize: 12, color: "var(--mute)" }}>this month</span></div>
          </div>
        </div>
        <div className="hrow">
          <div className="trust"><div className="ph"><span style={{ backgroundImage: "url(/img/desk.jpg)" }} /><span style={{ backgroundImage: "url(/img/earth.jpg)" }} /><span style={{ backgroundImage: "url(/img/tokyo.jpg)" }} /></div><div><small>Staffing, infrastructure, marketing</small><b>Three services, one partner</b></div></div>
          <div className="stats">
            <div className="stat"><b>2–3</b><small>Screening rounds per hire</small><span className="tick"><Tick /></span></div>
            <div className="stat a"><b>1</b><small>Account manager for all</small><span className="tick"><Tick /></span></div>
          </div>
        </div>
      </section>

      <section className="sec white" id="services">
        <div className="in svc">
          <div className="rv"><span className="chip">What we do</span><h2 style={{ marginTop: 26 }}>Built for every part of your business</h2>
            <p className="s">Whether you&apos;re <b>scaling a tech team</b>, <b>rolling out infrastructure</b> or <b>chasing pipeline</b>, each service has its own specialists.</p>
            <CarouselArrows target="home-cards" /></div>
          <div className="cards" id="home-cards">
            {[
              { href: "/it-staffing", img: "desk", chips: ["Contract", "Permanent", "Veterans"], t: "IT staffing", s: "Screened talent at your site" },
              { href: "/it-infrastructure", img: "earth", chips: ["Networks", "Data centre", "Rollouts"], t: "IT infrastructure", s: "Projects for system integrators" },
              { href: "/digital-marketing", img: "tokyo", chips: ["Performance ads", "Creative", "SEO"], t: "Digital marketing", s: "Campaigns measured in leads" },
              { href: "/contact", img: "code", chips: ["Apps", "SaaS", "AI automation"], t: "Software and AI", s: "When your project needs it" },
            ].map((c, i) => (
              <Link href={c.href} className={`card rv d${i + 1}`} key={c.t}>
                <div className="im" style={{ backgroundImage: `url(/img/${c.img}.jpg)` }}><div className="chips">{c.chips.map(x => <span className="ochip" key={x}>{x}</span>)}</div></div>
                <div className="ft"><div>{c.t}<small>{c.s}</small></div><span className="ib"><NE /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec panel">
        <div className="in">
          <span className="chip w lbl">Why Coalesca</span>
          <div className="hd rv"><h2>Growing a business shouldn&apos;t mean managing three vendors</h2><p>From <b>hiring the right people</b> to <b>launching new sites</b> and <b>filling the pipeline</b>, we keep it under one contract, <b>every step of the way.</b></p></div>
          <div className="split">
            <div>
              {[
                ["Profiles that waste interview time", "Every candidate clears 2–3 rounds before you see them"],
                ["Too many vendors, too many invoices", "One account manager across every service"],
                ["Rollouts that slip across sites", "Our engineers on site, reporting daily"],
                ["Ad spend without clear numbers", "Monthly reports on leads, cost and return"],
              ].map(([a, b], i) => (
                <div className={`prob rv d${i + 1} ${i === 1 ? "on" : ""}`} key={a}><span className="n">0{i + 1}</span><div className="tx">{a}<small>{b}</small></div></div>
              ))}
            </div>
            <div className="big rv d2" style={{ backgroundImage: "url(/img/glass.jpg)" }}><h3>One partner across talent, systems and growth</h3><div className="stat"><b>1 contract</b><small>One invoice, every service</small><span className="tick"><Tick /></span></div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "12px 0" }}>
        <div className="vet rv">
          <div className="vl"><span className="chip d">Veteran placement</span><h2 style={{ marginTop: 26 }}>Defence veterans, placed in permanent roles</h2>
            <p className="lead">Years of discipline, process and responsibility under pressure. We match veterans to permanent roles in IT operations, security, facilities and administration.</p>
            <div className="vlist"><div><b>Screened and matched</b>Sourcing, screening and interviews handled by us</div><div><b>Joins your payroll</b>Permanent roles, hired directly by you</div></div>
            <Link href="/it-staffing#veterans" className="pbtn l" style={{ marginTop: 36 }}>Hire a veteran<span className="ib"><Arrow /></span></Link></div>
          <div className="vr" style={{ backgroundImage: "url(/img/dark.jpg)" }}>
            <div className="stat a"><b>1–2 months</b><small>of the role&apos;s salary, one-time fee</small><span className="tick"><Tick /></span></div>
            <div className="stat"><b>Permanent</b><small>roles on your payroll</small><span className="tick"><Tick /></span></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="in">
          <span className="chip lbl">Ways to work with us</span>
          <div className="hd rv"><h2>Choose the model that fits the work</h2><p>Every engagement starts with a <b>scoping call</b>. We recommend the model, you approve the terms.</p></div>
          <div className="models">
            {[
              { ic: <I.person />, bg: "#DDF5F1", c: "#1B8577", t: "Contract staffing", p: "Screened professionals at your site, on our payroll. We manage onboarding, payroll and attendance.", b: "ramp-ups and backfills" },
              { ic: <I.check />, bg: "#DDF5F1", c: "#1B8577", t: "Permanent placement", p: "We source, screen and shortlist. You interview the final few and hire directly.", b: "long-term core roles" },
              { ic: <I.servers />, bg: "#E3E8FF", c: "#4B69FF", t: "Project delivery", p: "A defined infrastructure scope, delivered by our engineers on site and reported back to you.", b: "multi-site rollouts" },
              { ic: <I.trend />, bg: "#FFF0D6", c: "#D88A1C", t: "Campaign retainer", p: "A monthly team for strategy, creative, media buying and reporting against agreed targets.", b: "steady lead flow" },
            ].map((m, i) => (
              <div className={`model rv d${i + 1}`} key={m.t}><span className="ic" style={{ background: m.bg, color: m.c }}>{m.ic}</span><h4>{m.t}</h4><p>{m.p}</p><div className="bf"><b>Best for</b> {m.b}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="in">
          <span className="chip lbl">Careers</span>
          <div className="hd rv" style={{ marginBottom: 56 }}><h2>Build your career with leading enterprises</h2><p>We place <b>engineers, support specialists and marketers</b> in roles across India. Send your resume and we&apos;ll match you.</p></div>
          <div className="careers">
            <div className="cphoto rv" style={{ backgroundImage: "url(/img/whiteglass.jpg)" }}><h3>Open roles, updated every week</h3><Link href="/careers" className="pbtn l" style={{ marginTop: 26 }}>See all roles<span className="ib"><Arrow /></span></Link></div>
            <div className="jobs rv d2">
              {JOBS.map(j => (
                <Link href="/careers#apply" className="job" key={j.t}><div><b>{j.t}</b><small>{j.m}</small></div><div className="tags"><span className="chip">{j.v}</span><span className="ib soft"><NE /></span></div></Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec panel">
        <div className="in contact">
          <div className="ci rv"><span className="chip d" style={{ alignSelf: "flex-start" }}>Contact</span><h2 style={{ marginTop: 26 }}>Tell us what you need</h2><p className="lead">Share a few details and a specialist from the right team will get back to you.</p>
            <div className="rows">
              <a href="mailto:hello@coalesca.in"><div><small>Email</small><div>hello@coalesca.in</div></div><span className="ib"><NE /></span></a>
              <Link href="/contact"><div><small>Office</small><div>Bengaluru, Karnataka</div></div><span className="ib"><NE /></span></Link>
            </div></div>
          <div className="rv d2"><EnquiryForm /></div>
        </div>
      </section>
    </>
  );
}
