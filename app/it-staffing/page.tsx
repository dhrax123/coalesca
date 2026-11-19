import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Tick, I } from "@/components/Icons";
import { v } from "@/components/v";
import { RoleTabs } from "@/components/Interactive";

export const metadata: Metadata = {
  title: "IT staffing and defence veteran placement",
  description: "Screened IT professionals on contract or permanent roles, plus permanent placement of defence veterans. Every candidate clears 2–3 rounds before you see a profile.",
};

const PROFILES = [
  { i: "AK", c: "#22B5A2", r: "Senior DevOps engineer", m: "7 yrs, Bengaluru", s: ["AWS", "K8s"] },
  { i: "SM", c: "#4B69FF", r: "Java full-stack developer", m: "6 yrs, Pune", s: ["Java", "React"] },
  { i: "RV", c: "#0B1222", r: "Network engineer", m: "8 yrs, Hyderabad", s: ["CCNP", "SD-WAN"] },
  { i: "PN", c: "#5EB6C6", r: "SOC analyst", m: "4 yrs, Chennai", s: ["SIEM", "IR"] },
  { i: "DG", c: "#FFB23F", r: "Data engineer", m: "5 yrs, Bengaluru", s: ["Spark", "SQL"] },
  { i: "MK", c: "#22B5A2", r: "QA automation engineer", m: "6 yrs, Noida", s: ["Selenium", "API"] },
  { i: "AR", c: "#4B69FF", r: "Cloud architect", m: "11 yrs, Mumbai", s: ["Azure", "IaC"] },
  { i: "KS", c: "#0B1222", r: "IT support lead", m: "9 yrs, Pune", s: ["ITIL", "L3"] },
  { i: "VT", c: "#5EB6C6", r: "Scrum master", m: "8 yrs, Gurugram", s: ["Agile", "Jira"] },
  { i: "NB", c: "#FFB23F", r: "Python developer", m: "3 yrs, Kochi", s: ["Django", "APIs"] },
  { i: "HJ", c: "#22B5A2", r: "Security supervisor", m: "Veteran, 18 yrs", s: ["Ops", "Security"] },
  { i: "TL", c: "#4B69FF", r: "Business analyst", m: "6 yrs, Bengaluru", s: ["BRD", "SQL"] },
];

const ROLES = [
  { ic: <I.code />, t: "Software developers", n: "Most requested", p: "Product and enterprise engineers across the stack.", s: ["Java", ".NET", "Python", "React"] },
  { ic: <I.cloud />, t: "Cloud and DevOps", n: "Infra and platform", p: "Engineers who build, automate and run infrastructure.", s: ["AWS", "Azure", "Kubernetes"] },
  { ic: <I.db />, t: "Data and AI", n: "Analytics and ML", p: "Pipelines, dashboards and machine learning models.", s: ["SQL", "Spark", "Power BI"] },
  { ic: <I.shield />, t: "Cybersecurity", n: "Security", p: "SOC, identity and compliance specialists.", s: ["SOC", "IAM", "VAPT"] },
  { ic: <I.monitor />, t: "IT support", n: "Operations", p: "Desktop, network and system administrators.", s: ["L1–L3", "Windows", "ITIL"] },
  { ic: <I.qa />, t: "Quality assurance", n: "Testing", p: "Manual and automation testers for every platform.", s: ["Selenium", "Appium"] },
  { ic: <I.bars />, t: "Project managers", n: "Delivery", p: "Scrum masters and delivery leads who keep releases on time.", s: ["Agile", "PMP"] },
  { ic: <I.search />, t: "Business analysts", n: "Requirements", p: "Turning business needs into clear requirements.", s: ["BRD", "Jira"] },
];

const FAQ = [
  ["How quickly can you share profiles?", "We share screened profiles as soon as candidates clear our rounds. Timelines depend on the skill and seniority, and we agree them with you upfront."],
  ["Who employs contract staff?", "Contract professionals are on Coalesca's payroll. We handle salaries, statutory compliance and attendance, and invoice you monthly."],
  ["What if a hire doesn't work out?", "Tell us and we start sourcing a replacement straight away. Replacement terms are agreed in your contract before work begins."],
  ["Do you hire for non-IT roles?", "Our staffing practice focuses on IT roles. Defence veterans are also placed in operations, security, facilities and administration roles."],
  ["Can we interview candidates ourselves?", "Yes. You always interview the final shortlist and make the hiring decision."],
];

export default function Staffing() {
  return (
    <>
      <section className="thero">
        <span className="chip">IT staffing and recruitment</span>
        <h1><span className="ln"><span>Screened IT talent,</span></span><span className="ln"><span><span className="g">ready for</span> your site</span></span></h1>
        <p className="sub">Developers, engineers and IT specialists who&apos;ve <b>cleared our technical and fit rounds</b> before you see a profile. Hire on <b>contract</b> or <b>permanently</b>.</p>
        <div className="cta"><Link href="/contact" className="pbtn">Hire talent<span className="ib"><Arrow /></span></Link><a href="#how" className="gbtn">How we screen</a></div>
        <div className="wall" aria-label="Example screened profiles">
          {[0, 1].map(r => (
            <div className="mq" key={r}><div className={`row ${r ? "rev" : ""}`} style={v({ "--dur": r ? "52s" : "44s" })}>
              {[...PROFILES.slice(r * 6, r * 6 + 6), ...PROFILES.slice(r * 6, r * 6 + 6)].map((c, k) => (
                <div className="pc" key={k} aria-hidden={k >= 6}>
                  <span className="a" style={{ background: c.c }}>{c.i}</span>
                  <div><b>{c.r}</b><small>{c.m}</small></div>
                  <div className="ft"><div className="sk">{c.s.map(s => <span key={s}>{s}</span>)}</div><span className="ok"><i><Tick /></i>3 of 3</span></div>
                </div>
              ))}
            </div></div>
          ))}
        </div>
        <div className="in tstats">
          <div className="stat rv d1"><b>2–3</b><small>Screening rounds per candidate</small><span className="tick"><Tick /></span></div>
          <div className="stat rv d2"><b>4</b><small>Ways to hire</small><span className="tick"><Tick /></span></div>
          <div className="stat a rv d3"><b>IT only</b><small>A focused recruiting practice</small><span className="tick"><Tick /></span></div>
          <div className="stat rv d4"><b>1–2 mo.</b><small>Veteran placement fee</small><span className="tick"><Tick /></span></div>
        </div>
      </section>

      <section className="sec white">
        <div className="in">
          <span className="chip lbl">Roles we fill</span>
          <div className="hd rv"><h2>Specialists for every layer of your tech team</h2><p>Our practice focuses <b>only on IT</b>, so the people screening your candidates <b>know the work.</b></p></div>
          <div className="rv"><RoleTabs roles={ROLES} /></div>
        </div>
      </section>

      <section className="sec panel" id="how" style={{ paddingBottom: 0 }}>
        <div className="in">
          <span className="chip w lbl">How we screen</span>
          <div className="hd rv"><h2>Only screened candidates reach your inbox</h2><p>Every profile clears <b>two to three rounds with us</b> before it&apos;s shared. Scroll through the process.</p></div>
        </div>
        <div className="ss" data-scroll="sticky" data-steps="5">
          <div className="pin">
            <div className="steps5">
              {[
                ["Role brief", "Skills, seniority, budget and joining date, agreed with you"],
                ["Sourcing", "We search our database and network for matching profiles"],
                ["Technical round", "A hands-on test of the skills the role actually uses"],
                ["Fit and document checks", "Communication, expectations, notice period, documents"],
                ["Your interview", "You meet the shortlist, pick your hire, we onboard them"],
              ].map(([a, b], i) => <div className="prob" key={a}><span className="n">0{i + 1}</span><div className="tx">{a}<small>{b}</small></div></div>)}
            </div>
            <div className="dkc"><span className="chip d" style={{ alignSelf: "flex-start" }}>From brief to shortlist</span><h3 style={{ marginTop: 22 }}>You only meet the final few</h3>
              <div className="funnel seen">
                <div style={{ background: "#1A2532", width: "100%" }}><span>Profiles sourced</span><span style={{ color: "#8D96A1" }}>Database and network</span></div>
                <div style={{ background: "#1E3A40", width: "84%" }}><span>Technical round</span><span style={{ color: "#9FD9CF" }}>Skills tested</span></div>
                <div style={{ background: "#1C6B63", width: "66%" }}><span>Fit and checks</span><span style={{ color: "#C8F0E9" }}>Verified</span></div>
                <div style={{ background: "var(--talent)", width: "48%", color: "var(--ink)", fontWeight: 500 }}><span>Your shortlist</span><Tick /></div>
              </div>
              <div className="pbar"><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="in">
          <span className="chip lbl">Ways to hire</span>
          <div className="hd rv"><h2>Four ways to hire, one screening standard</h2><p>Pick the model that suits the role. <b>Every candidate</b> goes through the same screening.</p></div>
          <div className="tablewrap rv">
            <table className="cmp">
              <thead><tr><th></th><th className="h">Contract staffing<small>Most requested</small></th><th>Contract to hire<small>Try, then convert</small></th><th>Permanent placement<small>Direct hire</small></th><th>Veteran placement<small>Permanent roles</small></th></tr></thead>
              <tbody>
                <tr><th>Employer of record</th><td className="h">Coalesca</td><td>Coalesca, then you</td><td>You</td><td>You</td></tr>
                <tr><th>Where they work</th><td className="h">Your site or remote</td><td>Your site or remote</td><td>Your site</td><td>Your site</td></tr>
                <tr><th>Payroll and compliance</th><td className="h">Handled by us</td><td>By us until conversion</td><td>Your team</td><td>Your team</td></tr>
                <tr><th>How you pay</th><td className="h">Monthly rate per person</td><td>Monthly rate, then a conversion fee</td><td>One-time fee per hire</td><td>One to two months&apos; salary</td></tr>
                <tr><th>Best for</th><td className="h">Ramp-ups and backfills</td><td>Roles you want to test first</td><td>Long-term core roles</td><td>Operations, security, admin</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 12 }} id="veterans">
        <div className="vet rv">
          <div className="vl" style={{ position: "relative" }}><span className="chev" aria-hidden="true"><i /><i /><i /></span><span className="chip d">Veteran placement</span><h2 style={{ marginTop: 26 }}>Hire from India&apos;s defence veterans</h2>
            <p className="lead">Veterans leave service with discipline, process and responsibility under pressure. We place them in permanent roles where those strengths matter most.</p>
            <div className="vfits">{["IT operations", "Network operations centre", "Security operations", "Facility management", "Administration", "Logistics"].map(x => <span key={x}>{x}</span>)}</div>
            <Link href="/contact" className="pbtn l" style={{ marginTop: 36 }}>Hire a veteran<span className="ib"><Arrow /></span></Link></div>
          <div className="vr" style={{ backgroundImage: "url(/img/towers.webp)" }}>
            <div className="stat a"><b>1–2 months</b><small>of the role&apos;s salary, one-time fee</small><span className="tick"><Tick /></span></div>
            <div className="stat"><b>4 steps</b><small>Brief, shortlist, interview, join</small><span className="tick"><Tick /></span></div>
          </div>
        </div>
      </section>

      <section className="sec panel">
        <div className="in">
          <span className="chip w lbl">Contract staff, managed</span>
          <div className="hd rv"><h2>They work for you. We handle the paperwork.</h2><p>Contract professionals stay on our payroll, so HR and finance deal with <b>one monthly invoice.</b></p></div>
          <div className="mg">
            {[
              [<I.list key="a" />, "Payroll", "Salaries and payslips, on time every month."],
              [<I.shield key="b" />, "Statutory compliance", "PF, ESI and other deductions filed correctly."],
              [<I.clock key="c" />, "Attendance and timesheets", "Tracked monthly, approved by your manager."],
              [<I.doc key="d" />, "Onboarding", "Offer letters and joining documents, ready before day one."],
              [<I.search key="e" />, "Background checks", "Education, employment and identity, verified."],
              [<I.refresh key="f" />, "Replacements", "If someone leaves, we start sourcing straight away."],
            ].map(([ic, t, p], i) => <div className={`rv d${(i % 3) + 1}`} key={t as string} data-tilt style={{ position: "relative" }}><span className="ic" style={{ color: "#1B7469" }}>{ic}</span><span><b>{t}</b><p>{p}</p></span></div>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="in faq">
          <div className="rv"><span className="chip lbl">Questions</span><h2 style={{ fontSize: 52, fontWeight: 400, lineHeight: 1.04 }}>What hiring teams ask us</h2><p style={{ fontSize: 14.5, color: "var(--mute)", marginTop: 18, maxWidth: 340 }}>Something else on your mind? Our recruiters are a call away.</p></div>
          <div className="rv d2">{FAQ.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}<span className="pm">+</span></summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section style={{ paddingBottom: 0 }}>
        <div className="band rv" style={{ background: "var(--talent)" }}>
          <svg className="deco" width="480" height="400" viewBox="0 0 34 28" fill="none"><path d="M2 4 C12 4 14 14 24 14" stroke="#fff" strokeWidth="1" /><path d="M2 14 H24" stroke="#fff" strokeWidth="1" /><path d="M2 24 C12 24 14 14 24 14" stroke="#fff" strokeWidth="1" /></svg>
          <span className="chip glass">Request profiles</span>
          <h2 style={{ marginTop: 24 }}>Tell us the role. We&apos;ll send the shortlist.</h2>
          <form className="rq" action="/contact">
            <label className="f"><span>Role</span><input name="role" placeholder="Senior DevOps engineer" /></label>
            <label className="f"><span>Positions</span><input name="positions" placeholder="3" /></label>
            <label className="f"><span>Location</span><input name="location" placeholder="Bengaluru" /></label>
            <button className="pbtn">Request profiles<span className="ib"><Arrow /></span></button>
          </form>
        </div>
      </section>
    </>
  );
}
