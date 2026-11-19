import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, NE, Tick, I } from "@/components/Icons";
import { HTrack } from "@/components/Interactive";
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
      <section style={{ paddingTop: 12 }}>
        <div className="nhero dhero lg">
          <div className="tx">
            <span className="chip d hchip">IT infrastructure projects</span>
            <h1><span className="ln"><span>IT infrastructure,</span></span><span className="ln"><span><span className="g">delivered</span></span></span><span className="ln"><span><span className="g">on</span> site</span></span></h1>
            <p className="sub">On-site engineering for <b>system integrators</b> and <b>enterprises</b>, from the first site survey to <b>handover and support.</b></p>
            <div className="cta"><Link href="/contact" className="pbtn l">Partner with us<span className="ib"><Arrow /></span></Link><a href="#phases" className="gbtn ghost-d">How we deliver</a></div>
            <div className="ticks">
              <div className="tk"><b data-count="24">24</b><small>Sites in a sample rollout</small></div>
              <div className="tk"><b>Daily</b><small>Site reports</small></div>
              <div className="tk"><b>1</b><small>Project lead</small></div>
            </div>
          </div>
          <div className="net">
            <svg viewBox="0 0 640 560" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <g className="grid"><line x1="0" y1="0" x2="0" y2="560" /><line x1="40" y1="0" x2="40" y2="560" /><line x1="80" y1="0" x2="80" y2="560" /><line x1="120" y1="0" x2="120" y2="560" /><line x1="160" y1="0" x2="160" y2="560" /><line x1="200" y1="0" x2="200" y2="560" /><line x1="240" y1="0" x2="240" y2="560" /><line x1="280" y1="0" x2="280" y2="560" /><line x1="320" y1="0" x2="320" y2="560" /><line x1="360" y1="0" x2="360" y2="560" /><line x1="400" y1="0" x2="400" y2="560" /><line x1="440" y1="0" x2="440" y2="560" /><line x1="480" y1="0" x2="480" y2="560" /><line x1="520" y1="0" x2="520" y2="560" /><line x1="560" y1="0" x2="560" y2="560" /><line x1="600" y1="0" x2="600" y2="560" /><line x1="640" y1="0" x2="640" y2="560" /><line x1="0" y1="0" x2="640" y2="0" /><line x1="0" y1="40" x2="640" y2="40" /><line x1="0" y1="80" x2="640" y2="80" /><line x1="0" y1="120" x2="640" y2="120" /><line x1="0" y1="160" x2="640" y2="160" /><line x1="0" y1="200" x2="640" y2="200" /><line x1="0" y1="240" x2="640" y2="240" /><line x1="0" y1="280" x2="640" y2="280" /><line x1="0" y1="320" x2="640" y2="320" /><line x1="0" y1="360" x2="640" y2="360" /><line x1="0" y1="400" x2="640" y2="400" /><line x1="0" y1="440" x2="640" y2="440" /><line x1="0" y1="480" x2="640" y2="480" /><line x1="0" y1="520" x2="640" y2="520" /><line x1="0" y1="560" x2="640" y2="560" /></g>
              <path id="e0" className="edge live" d="M320 280 Q184 233 110 110" /><path id="e1" className="edge live" d="M320 280 Q245 183 250 60" /><path id="e2" className="edge live" d="M320 280 Q359 153 470 80" /><path id="e3" className="edge" d="M320 280 Q432 200 570 210" /><path id="e4" className="edge live" d="M320 280 Q462 297 560 400" /><path id="e5" className="edge" d="M320 280 Q400 376 400 500" /><path id="e6" className="edge live" d="M320 280 Q289 398 190 470" /><path id="e7" className="edge" d="M320 280 Q199 335 70 300" />
              <circle className="pk" r="3.2"><animateMotion dur="2.20s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#e0" /></animateMotion></circle><circle className="pk" r="2.4" opacity=".6"><animateMotion dur="2.86s" begin="0.0s" repeatCount="indefinite"><mpath href="#e0" /></animateMotion></circle><circle className="pk" r="3.2"><animateMotion dur="2.57s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#e1" /></animateMotion></circle><circle className="pk" r="2.4" opacity=".6"><animateMotion dur="3.34s" begin="0.3s" repeatCount="indefinite"><mpath href="#e1" /></animateMotion></circle><circle className="pk" r="3.2"><animateMotion dur="2.94s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#e2" /></animateMotion></circle><circle className="pk" r="2.4" opacity=".6"><animateMotion dur="3.82s" begin="0.6s" repeatCount="indefinite"><mpath href="#e2" /></animateMotion></circle><circle className="pk" r="3.2"><animateMotion dur="3.68s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#e4" /></animateMotion></circle><circle className="pk" r="2.4" opacity=".6"><animateMotion dur="4.78s" begin="1.2s" repeatCount="indefinite"><mpath href="#e4" /></animateMotion></circle><circle className="pk" r="3.2"><animateMotion dur="4.42s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#e6" /></animateMotion></circle><circle className="pk" r="2.4" opacity=".6"><animateMotion dur="5.75s" begin="1.8s" repeatCount="indefinite"><mpath href="#e6" /></animateMotion></circle>
              <g><circle className="node on" cx="110" cy="110" r="9" /><text className="lbl" x="124" y="114">Bengaluru</text></g><g><circle className="node on" cx="250" cy="60" r="9" /><text className="lbl" x="264" y="64">Chennai</text></g><g><circle className="node on" cx="470" cy="80" r="9" /><text className="lbl" x="484" y="84">Hyderabad</text></g><g><circle className="node" cx="570" cy="210" r="9" /><text className="lbl" x="584" y="214">Pune</text></g><g><circle className="node on" cx="560" cy="400" r="9" /><text className="lbl" x="574" y="404">Mumbai</text></g><g><circle className="node" cx="400" cy="500" r="9" /><text className="lbl" x="414" y="504">Kochi</text></g><g><circle className="node on" cx="190" cy="470" r="9" /><text className="lbl" x="204" y="474">Delhi</text></g><g><circle className="node" cx="70" cy="300" r="9" /><text className="lbl" x="84" y="304">Kolkata</text></g>
              <circle cx="320" cy="280" r="40" fill="rgba(75,105,255,.12)"><animate attributeName="r" values="30;56;30" dur="3s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" /></circle>
              <circle className="hub" cx="320" cy="280" r="22" />
              <image href="/brand/mark-white.svg" x="308" y="268" width="24" height="24" />
            </svg>
            <div className="fcard" style={{ left: "6%", bottom: "8%", ["--r" as string]: "-3deg" }}><small>Rollout, phase 2</small><b>18 of 24 sites live</b><div className="pb" style={{ marginTop: 10 }}><i style={{ width: "75%" }} /></div></div>
            <div className="fcard hs" style={{ right: "6%", top: "8%", width: 200, ["--d" as string]: "1s", ["--r" as string]: "3deg" }}><small>Site report</small><b>Sent daily, 7 pm</b></div>
          </div>
        </div>
      </section>

      <section className="sec white" id="capabilities">
        <div className="in">
          <span className="chip lbl">Capabilities</span>
          <div className="hd rv"><h2>Built for every layer of your infrastructure</h2><p>From <b>cabling and Wi-Fi</b> to <b>servers, devices and support</b>, our engineers handle the physical work your project depends on.</p></div>
          <div className="bento">
            <div className="bt ph big1 imr" style={{ backgroundImage: "url(/img/city.webp)" }} data-cursor="Scope it"><span className="chips" style={{ marginBottom: "auto", marginTop: 0 }}><span className="ochip">LAN</span><span className="ochip">WAN</span><span className="ochip">Wi-Fi</span><span className="ochip">Structured cabling</span></span><h4 style={{ fontSize: 40, fontWeight: 400 }}>Network and connectivity</h4><p>Design, install and test networks for stores, offices and campuses, with every port documented.</p></div>
            <div className="bt rv d1" data-tilt><span className="ic"><I.servers /></span><h4>Server and data centre</h4><p>Racks, servers and storage, installed and migrated.</p></div>
            <div className="bt blue rv d2" data-tilt><span className="bars" aria-hidden="true">{[.5, .8, .6, 1, .7, .9].map((h, k) => <i key={k} style={{ height: `${h * 100}%`, animationDelay: `${k * 0.2}s` }} />)}</span><h4>Cloud and hybrid</h4><p>Move workloads safely between on-site and cloud.</p></div>
            <div className="bt ph wide rv d3" style={{ backgroundImage: "url(/img/desk.webp)" }}><h4>Device rollouts</h4><p>Laptops, POS terminals and imaging, deployed to every desk and every store.</p></div>
          </div>
          <div className="bento" style={{ gridTemplateRows: "200px", marginTop: 14 }}>
            <div className="bt rv d1" data-tilt><span className="ic"><I.refresh /></span><h4>Support and AMC</h4></div>
            <div className="bt rv d2" data-tilt><span className="ic"><I.shield /></span><h4>Surveys and audits</h4></div>
            <div className="bt ph wide rv d3" style={{ backgroundImage: "url(/img/keys.webp)" }}><h4>Helpdesk and on-call</h4><p>Help after go-live, when your teams need it.</p></div>
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

      <section className="hsc panel" id="phases" data-scroll="sticky">
        <div className="pin">
          <div className="head"><div><span className="chip w lbl">Delivery</span><h2>Five phases, the same at every site</h2></div><p style={{ fontSize: 14.5, color: "var(--mute)", maxWidth: 360 }}>A repeatable process means site 40 is delivered <b style={{ color: "var(--ink)", fontWeight: 500 }}>exactly like site 1.</b> Keep scrolling.</p></div>
          <HTrack>
            <div className="ph5"><span className="n">01</span><h3>Site survey</h3><p>Layouts, power, cabling routes and risks, documented before anything is ordered.</p><div className="tags"><span className="chip">Floor plans</span><span className="chip">Risk log</span></div></div>
            <div className="ph5 photo" style={{ backgroundImage: "url(/img/whiteglass.webp)" }}><span className="n">02</span><h3>Plan and schedule</h3><p>Materials, engineers and dates agreed per site, shared with your project lead.</p></div>
            <div className="ph5 blue"><span className="n">03</span><h3>Deploy</h3><p>Installation by our engineers, with photos, checklists and a report every evening.</p><div className="tags"><span className="chip glass">Daily reports</span></div></div>
            <div className="ph5"><span className="n">04</span><h3>Test and hand over</h3><p>Every site tested against an agreed checklist and signed off by your team.</p><div className="tags"><span className="chip">Sign-off</span><span className="chip">As-built docs</span></div></div>
            <div className="ph5 photo" style={{ backgroundImage: "url(/img/dark.webp)" }}><span className="n">05</span><h3>Support</h3><p>Annual maintenance and on-call help after go-live.</p></div>
          </HTrack>
          <div className="prog"><i /></div>
        </div>
      </section>

      <section style={{ paddingBottom: 12 }}>
        <div className="board rv" data-cursor="Live">
          <div className="top"><div><span className="chip d">Project visibility</span><h2 style={{ marginTop: 24 }}>Know where every site stands, every day</h2></div><p>You get a live tracker and a daily report. Here&apos;s what a multi-site rollout looks like.</p></div>
          <div className="k4">
            <div><small>Sites in scope</small><b data-count="24">24</b></div>
            <div><small>Live and signed off</small><b data-count="16">16</b></div>
            <div><small>In deployment</small><b data-count="5">5</b></div>
            <div><small>Surveys scheduled</small><b data-count="3">3</b></div>
          </div>
          <div className="tb rv">
            <div className="tr th"><span>Site</span><span>City</span><span>Phase</span><span>Progress</span><span>Status</span></div>
            {SITES.map(([n, c, ph, p, k, s]) => (
              <div className="tr anim" key={n}><span>{n}</span><span className="m">{c}</span><span className="m">{ph}</span><div className="pb"><i style={{ width: `${p}%` }} /></div><span className={`st ${k}`}>{s}</span></div>
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
            ].map(([ic, t, p], i) => <div className={`rv d${(i % 3) + 1}`} key={t as string} data-tilt style={{ position: "relative" }}><span className="ic" style={{ color: "#3A4A9A" }}>{ic}</span><span><b>{t}</b><p>{p}</p></span></div>)}
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
