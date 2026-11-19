import Link from "next/link";
import DarkHero from "@/components/DarkHero";
import { Arrow, NE, Tick, I } from "@/components/Icons";
import { EnquiryForm } from "@/components/Forms";
import { v } from "@/components/v";
import { JOBS } from "@/lib/data";
import { ServicePanels } from "@/components/Interactive";

const PANELS = [
  { href: "/it-staffing", img: "desk", c: "var(--talent)", n: "01", chips: ["Contract", "Permanent", "Veterans"], t: "IT staffing", s: "Screened IT professionals on contract or in permanent roles, deployed at your site." },
  { href: "/it-infrastructure", img: "earth", c: "var(--systems)", n: "02", chips: ["Networks", "Data centre", "Rollouts"], t: "IT infrastructure", s: "On-site engineering for system integrators and enterprises, from survey to handover." },
  { href: "/digital-marketing", img: "tokyo", c: "var(--growth)", n: "03", chips: ["Performance ads", "Creative", "SEO"], t: "Digital marketing", s: "Performance campaigns and the creative that powers them, measured in leads." },
  { href: "/contact", img: "code", c: "var(--brand)", n: "04", chips: ["Apps", "SaaS", "AI automation"], t: "Software and AI", s: "Apps, websites, SaaS tools and AI automation when your project needs them." },
];

export default function Home() {
  return (
    <>
      <DarkHero
        img="towers" pos="60% 40%"
        chip="IT staffing, infrastructure and marketing"
        title={<><span className="ln"><span>IT talent, systems</span></span><span className="ln"><span>and growth <span className="g">for</span></span></span><span className="ln"><span><span className="g">every</span> enterprise</span></span></>}
        sub={<>From your next <b>screened IT hire</b> to <b>infrastructure rollouts</b> and <b>performance campaigns</b>, delivered by one partner.</>}
        cta={<><Link href="/contact" className="pbtn l">Talk to us<span className="ib"><Arrow /></span></Link><a href="#services" className="gbtn ghost-d">Explore services</a></>}
        ticks={[{ b: "2–3", s: "Screening rounds per hire" }, { b: "3", s: "Services, one partner" }, { b: "1", s: "Account manager" }]}
        visual={<>
          <div className="fcard" style={v({ left: "6%", top: "18%", "--r": "-4deg", "--d": ".8s" })}>
            <small>IT staffing</small><b>Shortlist ready</b>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}><div className="av"><span style={{ background: "#22B5A2" }}>AK</span><span style={{ background: "#4B69FF" }}>SM</span><span style={{ background: "#0B1222" }}>RV</span></div><small>3 cleared all rounds</small></div>
          </div>
          <div className="fcard" style={v({ left: "34%", top: "52%", "--r": "3deg", "--d": ".95s" })}>
            <small>Infrastructure</small><b>Store rollout, phase 2</b>
            <div className="bar"><i style={{ width: "75%", background: "var(--systems)" }} /></div><div className="row"><span>18 of 24 sites live</span><span>75%</span></div>
          </div>
          <div className="fcard dk hs" style={v({ right: "6%", top: "10%", width: "200px", "--r": "-2deg", "--d": "1.1s" })}>
            <small>Marketing, cost per lead</small><span className="big-n">−21%</span><em>this month</em>
          </div>
        </>}
      />

      <section className="cv" data-scroll="sticky" data-steps="3" aria-label="How Coalesca brings services together">
        <div className="pin">
          <div className="cvtext">
            <span className="chip d">One partner</span>
            <div className="cvs">
              <h2 className="s0">Three specialist teams.</h2>
              <h2 className="s1">One shared plan.</h2>
              <h2 className="s2">One partner for all of it.</h2>
            </div>
            <p>Talent, infrastructure and marketing teams plan together, so you get one contract, one account manager and one invoice.</p>
            <div className="cvbar"><i /></div>
          </div>
          <div className="cvstage">
            <svg className="cvlines" viewBox="0 0 600 600" preserveAspectRatio="none" aria-hidden="true">
              <path d="M60 110 C260 110 250 300 300 300" /><path d="M560 160 C380 170 360 300 300 300" /><path d="M120 520 C260 500 260 300 300 300" />
            </svg>
            <div className="cvc c1"><span className="dot" style={{ background: "var(--talent)" }} /><b>IT staffing</b><small>Screened talent at your site</small></div>
            <div className="cvc c2"><span className="dot" style={{ background: "var(--systems)" }} /><b>IT infrastructure</b><small>Rollouts, delivered on site</small></div>
            <div className="cvc c3"><span className="dot" style={{ background: "var(--growth)" }} /><b>Digital marketing</b><small>Campaigns measured in leads</small></div>
            <div className="cvcore"><img src="/brand/mark-white.svg" alt="" width={90} height={90} /><span className="ring" /><span className="ring r2" /></div>
          </div>
        </div>
      </section>


      <section className="sec white" id="services">
        <div className="in">
          <span className="chip lbl">What we do</span>
          <div className="hd rv"><h2>Built for every part of your business</h2><p>Whether you&apos;re <b>scaling a tech team</b>, <b>rolling out infrastructure</b> or <b>chasing pipeline</b>, each service has its own specialists.</p></div>
          <ServicePanels items={PANELS} />
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
            <div className="big imr" style={{ backgroundImage: "url(/img/glass.webp)" }}><h3>One partner across talent, systems and growth</h3><div className="stat"><b>1 contract</b><small>One invoice, every service</small><span className="tick"><Tick /></span></div></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "12px 0" }}>
        <div className="vet rv">
          <div className="vl"><span className="chip d">Veteran placement</span><h2 style={{ marginTop: 26 }}>Defence veterans, placed in permanent roles</h2>
            <p className="lead">Years of discipline, process and responsibility under pressure. We match veterans to permanent roles in IT operations, security, facilities and administration.</p>
            <div className="vlist"><div><b>Screened and matched</b>Sourcing, screening and interviews handled by us</div><div><b>Joins your payroll</b>Permanent roles, hired directly by you</div></div>
            <Link href="/it-staffing#veterans" className="pbtn l" style={{ marginTop: 36 }}>Hire a veteran<span className="ib"><Arrow /></span></Link></div>
          <div className="vr" style={{ backgroundImage: "url(/img/dark.webp)" }}>
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
              <div className={`model rv d${i + 1}`} key={m.t} data-tilt><span className="ic" style={{ background: m.bg, color: m.c }}>{m.ic}</span><h4>{m.t}</h4><p>{m.p}</p><div className="bf"><b>Best for</b> {m.b}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec white">
        <div className="in">
          <span className="chip lbl">Careers</span>
          <div className="hd rv" style={{ marginBottom: 56 }}><h2>Build your career with leading enterprises</h2><p>We place <b>engineers, support specialists and marketers</b> in roles across India. Send your resume and we&apos;ll match you.</p></div>
          <div className="careers">
            <div className="cphoto imr" style={{ backgroundImage: "url(/img/whiteglass.webp)" }}><h3>Open roles, updated every week</h3><Link href="/careers" className="pbtn l" style={{ marginTop: 26 }}>See all roles<span className="ib"><Arrow /></span></Link></div>
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
