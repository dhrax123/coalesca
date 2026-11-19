import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, NE, Tick, Spark } from "@/components/Icons";
import { RotWord, CursorList, DragReel } from "@/components/Interactive";

export const metadata: Metadata = {
  title: "Digital performance marketing",
  description: "Performance campaigns, ad creative, social, SEO and landing pages that turn spend into qualified leads, reported monthly in plain numbers.",
};

const SERVICES = [
  { img: "tokyo", t: "Performance marketing", p: "Paid search, social and display built around one goal: qualified leads at a cost you can plan around.", tg: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Remarketing"] },
  { img: "desk", t: "Creative and ad production", p: "Static ads, carousels, reels and video that stop the scroll and are made to be tested.", tg: ["Ad creatives", "Short-form video", "Motion"] },
  { img: "city", t: "Social and influencer", p: "Content calendars, community and creator campaigns, with usage rights sorted upfront.", tg: ["Instagram", "LinkedIn", "Creators", "UGC"] },
  { img: "glass", t: "SEO and content", p: "Technical fixes, search-led content and local SEO that grow the traffic you don't pay for.", tg: ["Technical SEO", "Local SEO", "Articles"] },
  { img: "whiteglass", t: "Websites and landing pages", p: "Fast, conversion-focused pages that give your campaigns somewhere worth sending people.", tg: ["Landing pages", "Websites", "A/B tests"] },
];
const WORDS = ["Performance ads", "Creative", "Social", "Influencers", "SEO", "Landing pages", "Analytics"];

export default function Marketing() {
  return (
    <>
      <section className="khero">
        <div className="top"><span className="chip">Digital performance marketing</span><span style={{ fontSize: 14, color: "var(--mute)" }}>Google, Meta, LinkedIn, YouTube</span></div>
        <h1><span className="ln"><span>Growth you</span></span><span className="ln"><span><span className="g">can</span> <RotWord words={["measure", "scale", "track", "prove"]} /></span></span></h1>
        <div className="row2">
          <div style={{ paddingBottom: 40 }}>
            <p className="sub">Performance campaigns, ad creative and content that turn spend into <b>qualified leads</b>, reported every month in <b>plain numbers.</b></p>
            <div className="cta"><Link href="/contact" className="pbtn">Plan a campaign<span className="ib"><Arrow /></span></Link><Link href="/contact" className="gbtn">Get a free audit</Link></div>
          </div>
          <div className="kdash" aria-label="Illustrative campaign report">
            <div className="k"><small>Qualified leads</small><b data-count="1284">1,284</b><em>+38% vs last month</em></div>
            <div className="k"><small>Cost per lead</small><b data-count="412" data-pre="₹">₹412</b><em>−21% vs last month</em></div>
            <div className="k"><small>Leads per week, sample</small>
              <svg width="100%" height="90" viewBox="0 0 300 90" preserveAspectRatio="none" style={{ marginTop: 8 }}><path d="M0 80 C50 76 90 66 130 54 S210 30 250 20 S285 10 300 6 L300 90 L0 90Z" fill="#FFB23F" opacity=".14" /><path d="M0 84 C80 80 160 74 220 68 S280 62 300 60" stroke="#3A4656" strokeWidth="2" fill="none" /><path className="ln" d="M0 80 C50 76 90 66 130 54 S210 30 250 20 S285 10 300 6" stroke="#FFB23F" strokeWidth="3" fill="none" /></svg></div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        {[0, 1].map(k => <div className="track" key={k}>{WORDS.map(w => <span key={w} style={{ display: "contents" }}><span>{w}</span><Spark /></span>)}</div>)}
      </div>

      <section className="sec">
        <div className="in">
          <span className="chip lbl">What we do</span>
          <div className="hd rv"><h2>Everything a campaign needs, under one roof</h2><p>Strategy, creative, media buying and reporting sit with <b>one team</b>, so the ads you run and the results you see <b>stay connected.</b></p></div>
          <div className="rv"><CursorList items={SERVICES} /></div>
        </div>
      </section>

      <section className="sec white">
        <div className="in">
          <span className="chip lbl">Formats we produce</span>
          <div className="hd rv"><h2>Creative for every placement</h2><p>One campaign idea, adapted to <b>each platform&apos;s format</b>. Drag to browse.</p></div>
          <DragReel>
            <div className="ad" style={{ backgroundImage: "url(/img/tokyo.jpg)" }}><span className="ochip tl">Reel, 9:16</span><div className="adc"><b>Ship features, not tickets.</b><span style={{ fontSize: 12.5, opacity: .8, display: "block", marginTop: 6 }}>Product launch, Instagram</span><span className="b2">Start free trial</span></div></div>
            <div className="ad sq" style={{ backgroundImage: "url(/img/desk.jpg)" }}><span className="ochip tl">Static, 1:1</span><div className="adc"><b>Leads up. Costs down.</b><span className="b2">Book a demo</span></div></div>
            <div className="ad nosh" style={{ background: "#FFB23F", color: "var(--ink)", width: 350 }}><span className="chip w tl">Carousel, 4:5</span><div className="adc"><b style={{ fontSize: 34 }}>5 signs it&apos;s time to outsource IT support</b><div style={{ display: "flex", gap: 4, marginTop: 14 }}><i style={{ width: 20, height: 5, borderRadius: 3, background: "var(--ink)" }} /><i style={{ width: 7, height: 5, borderRadius: 3, background: "rgba(11,18,34,.3)" }} /><i style={{ width: 7, height: 5, borderRadius: 3, background: "rgba(11,18,34,.3)" }} /></div></div></div>
            <div className="ad wd" style={{ backgroundImage: "url(/img/glass.jpg)" }}><span className="ochip tl">YouTube, 16:9</span><div className="adc"><b>We&apos;re hiring engineers in Bengaluru</b><span style={{ fontSize: 12.5, opacity: .8, display: "block", marginTop: 6 }}>Employer brand video</span></div></div>
            <div className="serp"><span className="chip">Search ad</span><div className="u"><b style={{ color: "var(--ink)", fontWeight: 500 }}>Sponsored</b> &nbsp;example.in/cloud-migration</div><div className="t">Cloud migration for enterprises | Free assessment</div><div className="d">Move workloads to AWS or Azure with planned downtime windows, fixed-price plans and support after go-live.</div></div>
            <div className="ad" style={{ backgroundImage: "url(/img/city.jpg)" }}><span className="ochip tl">Story, 9:16</span><div className="adc"><b>New store. Grand opening Saturday.</b><span className="b2">Get directions</span></div></div>
          </DragReel>
          <p style={{ fontSize: 12.5, color: "var(--mute2)", marginTop: 20 }}>Sample formats for illustration. Brands and offers shown are not client work.</p>
        </div>
      </section>

      <section className="sec panel">
        <div className="in">
          <span className="chip w lbl">How a campaign runs</span>
          <div className="hd rv"><h2>From audit to report in five clear steps</h2><p>You know <b>what&apos;s happening each week</b> and what you&apos;re getting for your spend.</p></div>
          <div className="pline" data-scroll="view" data-steps="5">
            <div className="rail"><i /></div>
            <div className="st5">
              {[["Week 1", "Audit", "Accounts, website, tracking and competitors, reviewed."], ["Week 1", "Plan", "Audiences, channels, budget split and targets."], ["Week 2", "Create", "Ads, copy and landing pages, ready for approval."], ["Ongoing", "Launch and optimise", "Live campaigns, tested and rebalanced weekly."], ["Every month", "Report", "Leads, cost and return, with next month's plan."]].map(([w, t, d], i) => (
                <div className="s" key={t}><span className="dot">0{i + 1}</span><h4>{t}</h4><p>{d}</p><span className="w">{w}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "12px 0" }}>
        <div className="board rv">
          <div className="top"><div><span className="chip d">Reporting</span><h2 style={{ marginTop: 24 }}>The numbers you get every month</h2></div><p>One dashboard across every channel. This is an illustrative sample; yours shows your own numbers.</p></div>
          <div className="k4">
            <div><small>Qualified leads</small><b data-count="1284">1,284</b><em>+38% vs last month</em></div>
            <div><small>Cost per lead</small><b data-count="412" data-pre="₹">₹412</b><em>−21% vs last month</em></div>
            <div><small>Return on ad spend</small><b data-count="4.6" data-suf="×">4.6×</b><em>+0.9× vs last month</em></div>
            <div><small>Click-through rate</small><b data-count="3.8" data-suf="%">3.8%</b><em>+1.1 pts vs last month</em></div>
          </div>
          <div className="dch">
            <div><small style={{ color: "#7D8793", fontSize: 12.5 }}>Leads per week</small>
              <svg className="draw rv" width="100%" height="200" viewBox="0 0 700 200" preserveAspectRatio="none" style={{ marginTop: 12 }}><g stroke="#222E3C"><line x1="0" y1="50" x2="700" y2="50" /><line x1="0" y1="110" x2="700" y2="110" /><line x1="0" y1="170" x2="700" y2="170" /></g><path d="M0 160 C100 150 200 140 280 125 S440 110 520 100 S640 92 700 88" stroke="#3A4656" strokeWidth="3" fill="none" /><path d="M0 150 C100 140 180 120 280 100 S420 70 520 50 S640 25 700 18 L700 200 L0 200Z" fill="#FFB23F" opacity=".12" /><path className="ln" d="M0 150 C100 140 180 120 280 100 S420 70 520 50 S640 25 700 18" stroke="#FFB23F" strokeWidth="4" fill="none" /></svg></div>
            <div className="rv"><small style={{ color: "#7D8793", fontSize: 12.5 }}>Leads by channel</small>
              {[["Google search", 82, 41, 1], ["Meta", 58, 29, .8], ["LinkedIn", 36, 18, .6], ["YouTube", 24, 12, .45]].map(([n, w, p, o]) => (
                <div className="ch" key={n as string}><span>{n}</span><div className="b"><i style={{ width: `${w}%`, opacity: o as number }} /></div><span>{p}%</span></div>
              ))}</div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="in">
          <span className="chip lbl">Better with Coalesca</span>
          <div className="hd rv"><h2>Marketing that works with the rest of the business</h2><p>Because we also <b>hire talent</b> and <b>deliver IT projects</b>, our campaigns support goals beyond sales.</p></div>
          <div className="tog">
            <div className="tc imr" style={{ backgroundImage: "url(/img/desk.jpg)" }}><div style={{ display: "flex", gap: 6 }}><span className="ochip">IT staffing</span><span className="ochip">Marketing</span></div><div><h3>Employer branding and hiring campaigns</h3><p>Recruitment ads and employer content that bring better applicants to the roles we&apos;re filling for you.</p></div></div>
            <div className="tc imr" style={{ backgroundImage: "url(/img/city.jpg)" }}><div style={{ display: "flex", gap: 6 }}><span className="ochip">Infrastructure</span><span className="ochip">Marketing</span></div><div><h3>Launch campaigns for new sites</h3><p>When we roll out the technology for a new store or office, we can run the local campaign that announces it.</p></div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="final rv">
          <svg className="deco" width="420" height="420" viewBox="0 0 26 26"><path d="M13 0l3 10 10 3-10 3-3 10-3-10-10-3 10-3z" fill="#0B1222" /></svg>
          <h2>Ready to plan<br />your next <span>campaign?</span></h2>
          <div className="r"><p style={{ fontSize: 16, color: "#6B4A10", maxWidth: 440 }}>Share your goals and current spend. We&apos;ll come back with an audit and a plan you can act on.</p><Link href="/contact" className="pbtn" style={{ height: 66 }}>Plan a campaign<span className="ib"><Arrow /></span></Link></div>
        </div>
      </section>
    </>
  );
}
