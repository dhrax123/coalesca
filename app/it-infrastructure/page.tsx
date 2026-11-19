import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, NE, Tick, I } from "@/components/Icons";
import { CarouselArrows } from "@/components/Carousel";
import { v } from "@/components/v";

export const metadata: Metadata = {
  title: "IT infrastructure projects",
  description: "On-site IT infrastructure delivery for system integrators and enterprises: networks, servers, device rollouts and support, from site survey to handover.",
};

const SITES = [
  ["Store 014", "Bengaluru", "Handed over", 100, "l", "Live"],
  ["Store 027", "Mumbai", "Testing", 80, "p", "Testing"],
  ["Store 031", "Hyderabad", "Deploying", 55, "p", "On site"],
  ["Store 038", "Pune", "Survey", 15, "s", "Scheduled"],
] as const;

export default function Infra() {
  return (
    <>
      <section className="hero">
        <h1><span className="ln"><span>IT infrastructure,</span></span><span className="ln"><span><span className="g">delivered</span></span></span><span className="ln"><span><span className="g">on</span> site</span></span></h1>
        <p className="sub">On-site engineering for <b>system integrators</b> and <b>enterprises</b>, from the first site survey to <b>handover and support.</b></p>
        <div className="cta"><Link href="/contact" className="pbtn">Partner with us<span className="ib"><Arrow /></span></Link><a href="#capabilities" className="gbtn">See capabilities</a></div>
        <div className="stage">
          <div className="capsule" style={{ backgroundImage: "url(/img/earth.jpg)" }} />
          <div className="fc trk" style={v({ "--rx": "252px", "--y": "180px", "--r": "-2deg", "--d": ".7s", "--mx": "6%", "--my": "40px" })}>
            <div className="h"><div><small>Rollout tracker</small><b>Retail store network, phase 2</b></div><span className="chip" style={{ background: "#E6EAFF", color: "#3A50D9" }}>24 sites</span></div>
            {[["Store 014", "Bengaluru", 100, "l", "Live"], ["Store 022", "Chennai", 100, "l", "Live"], ["Store 031", "Hyderabad", 62, "p", "Testing"], ["Store 038", "Pune", 20, "s", "Survey"]].map(([n, c, p, k, s]) => (
              <div className="site" key={n as string}><div>{n}<small>{c}</small></div><div className="pb"><i style={{ width: `${p}%` }} /></div><span className={`st ${k}`}>{s}</span></div>
            ))}
          </div>
          <div className="fc hm" style={v({ "--rx": "52px", "--y": "150px", "--r": "3deg", "--d": ".95s", width: "220px" })}><div className="t"><span>Site report</span><i style={{ background: "var(--systems)" }} /></div><b>Sent daily, 7 pm</b><div className="row" style={{ marginTop: 6 }}><span>Photos, checklists, issues</span></div></div>
        </div>
        <div className="hrow">
          <div className="trust"><div className="ph"><span style={{ backgroundImage: "url(/img/city.jpg)" }} /><span style={{ backgroundImage: "url(/img/dark.jpg)" }} /><span style={{ backgroundImage: "url(/img/towers.jpg)" }} /></div><div><small>Retail, offices, campuses</small><b>Single and multi-site projects</b></div></div>
          <div className="stats">
            <div className="stat"><b>End to end</b><small>Survey to handover</small><span className="tick"><Tick /></span></div>
            <div className="stat a"><b>1 contact</b><small>For every site</small><span className="tick"><Tick /></span></div>
          </div>
        </div>
      </section>

      <section className="sec white" id="capabilities">
        <div className="in svc">
          <div className="rv"><span className="chip">Capabilities</span><h2 style={{ marginTop: 26 }}>Built for every layer of your infrastructure</h2>
            <p className="s">From <b>cabling and Wi-Fi</b> to <b>servers, devices and support</b>, our engineers handle the physical work your project depends on.</p>
            <CarouselArrows target="infra-cards" /></div>
          <div className="cards" id="infra-cards">
            {[
              { img: "city", chips: ["LAN", "WAN", "Wi-Fi", "Cabling"], t: "Network and connectivity", s: "Design, install, test" },
              { img: "dark", chips: ["Racks", "Servers", "Storage"], t: "Server and data centre", s: "Install and migrate" },
              { img: "desk", chips: ["Laptops", "POS", "Imaging"], t: "Device rollouts", s: "Every desk, every store" },
              { img: "keys", chips: ["AMC", "Helpdesk", "On-call"], t: "Support and maintenance", s: "After go-live" },
              { img: "towers", chips: ["Hybrid", "Migration"], t: "Cloud and hybrid", s: "Move workloads safely" },
            ].map((c, i) => (
              <Link href="/contact" className={`card rv d${Math.min(i + 1, 4)}`} key={c.t}>
                <div className="im" style={{ backgroundImage: `url(/img/${c.img}.jpg)` }}><div className="chips">{c.chips.map(x => <span className="ochip" key={x}>{x}</span>)}</div></div>
                <div className="ft"><div>{c.t}<small>{c.s}</small></div><span className="ib"><NE /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec panel">
        <div className="in">
          <span className="chip w lbl">How we work with integrators</span>
          <div className="hd rv"><h2>Your delivery partner on the ground</h2><p>Large integrators win the contract. We <b>deliver the site work</b> under their programme, to their standards, <b>reporting to their project lead.</b></p></div>
          <div className="chain">
            <div className="node rv d1"><span className="ic"><I.building /></span><h4>System integrator</h4><p>Wins the programme and sets the scope, standards and timelines.</p></div>
            <div className="link" />
            <div className="node us rv d2"><span className="ic"><img src="/brand/mark.svg" alt="" width={30} height={30} /></span><h4>Coalesca</h4><p>Plans the site work, deploys engineers and reports progress every day.</p></div>
            <div className="link" />
            <div className="node rv d3"><span className="ic"><I.home /></span><h4>End-client sites</h4><p>Stores, offices and campuses go live, tested and documented.</p></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="in">
          <span className="chip lbl">Delivery</span>
          <div className="hd rv"><h2>Five phases, the same at every site</h2><p>A repeatable process means site 40 is delivered <b>exactly like site 1.</b></p></div>
          <div className="split">
            <div>
              {[
                ["Site survey", "Layouts, power, cabling routes and risks, documented"],
                ["Plan and schedule", "Materials, engineers and dates agreed per site"],
                ["Deploy", "Installation by our engineers, with daily reports"],
                ["Test and hand over", "Checklists, photos and sign-off from your team"],
                ["Support", "Maintenance and on-call help after go-live"],
              ].map(([a, b], i) => <div className={`prob rv d${(i % 4) + 1} ${i === 2 ? "on" : ""}`} key={a}><span className="n">0{i + 1}</span><div className="tx">{a}<small>{b}</small></div></div>)}
            </div>
            <div className="big rv d2" style={{ backgroundImage: "url(/img/whiteglass.jpg)", minHeight: 604 }}><h3>Every site documented, tested and signed off</h3><div className="stat"><b>Daily</b><small>Progress reports per site</small><span className="tick"><Tick /></span></div></div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 12 }}>
        <div className="board rv">
          <div className="top"><div><span className="chip d">Project visibility</span><h2 style={{ marginTop: 24 }}>Know where every site stands, every day</h2></div><p>You get a live tracker and a daily report. Here&apos;s what a multi-site rollout looks like.</p></div>
          <div className="k4">
            <div><small>Sites in scope</small><b data-count="24">24</b></div>
            <div><small>Live and signed off</small><b data-count="16">16</b></div>
            <div><small>In deployment</small><b data-count="5">5</b></div>
            <div><small>Surveys scheduled</small><b data-count="3">3</b></div>
          </div>
          <div className="tb">
            <div className="tr th"><span>Site</span><span>City</span><span>Phase</span><span>Progress</span><span>Status</span></div>
            {SITES.map(([n, c, ph, p, k, s]) => (
              <div className="tr" key={n}><span>{n}</span><span className="m">{c}</span><span className="m">{ph}</span><div className="pb"><i style={{ width: `${p}%` }} /></div><span className={`st ${k}`}>{s}</span></div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#5F6A77", marginTop: 16 }}>Illustrative example of the tracker shared with clients.</p>
        </div>
      </section>

      <section className="sec panel">
        <div className="in">
          <span className="chip w lbl">What you get</span>
          <div className="hd rv"><h2>Built to your programme&apos;s standards</h2><p>Whether you&apos;re the integrator or the enterprise, <b>you stay in control</b> of the project.</p></div>
          <div className="mg">
            {[
              [<I.person key="a" />, "One point of contact", "A project lead who owns every site in your scope."],
              [<I.doc key="b" />, "Daily site reports", "Photos, checklists and open issues, every evening."],
              [<I.shield key="c" />, "Your standards", "We follow your programme's processes and safety rules."],
              [<I.check key="d" />, "Tested before handover", "Every site signed off against an agreed checklist."],
              [<I.clock key="e" />, "Scales with the rollout", "Engineers added as site counts and timelines grow."],
              [<I.refresh key="f" />, "Support after go-live", "Annual maintenance and on-call help when needed."],
            ].map(([ic, t, p], i) => <div className={`rv d${(i % 3) + 1}`} key={t as string}><span className="ic" style={{ color: "#3A4A9A" }}>{ic}</span><span><b>{t}</b><p>{p}</p></span></div>)}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 12 }}>
        <div className="band rv" style={{ background: "var(--systems)" }}>
          <div className="rplan">
            <div><span className="chip glass">Partner with us</span><h2 style={{ marginTop: 24 }}>Have a rollout coming up? Let&apos;s scope it.</h2><p style={{ color: "#D6DDFF", fontSize: 15, marginTop: 18, maxWidth: 440 }}>Share the scope and site count. We&apos;ll come back with a delivery plan and timeline.</p></div>
            <form className="rf" action="/contact">
              <label className="f"><span>Company</span><input name="company" placeholder="Your company" /></label>
              <div className="g2"><label className="f"><span>Number of sites</span><input name="sites" placeholder="24" /></label><label className="f"><span>Start date</span><input name="start" placeholder="January 2027" /></label></div>
              <label className="f"><span>Scope</span><input name="scope" placeholder="Network and device rollout" /></label>
              <button className="pbtn full">Request a delivery plan<span className="ib"><Arrow /></span></button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
