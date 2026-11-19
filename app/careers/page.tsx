import type { Metadata } from "next";
import { NE, I } from "@/components/Icons";
import { ApplyForm } from "@/components/Forms";
import { JOBS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open IT, infrastructure and marketing roles at leading enterprises across India. Apply with your resume. Defence veterans welcome.",
};

export default function Careers() {
  return (
    <>
      <section className="shero">
        <div className="tx">
          <span className="chip lbl">Careers</span>
          <h1><span className="ln"><span>Your next</span></span><span className="ln"><span>role, <span className="g">at</span></span></span><span className="ln"><span><span className="g">leading</span> enterprises</span></span></h1>
          <p className="sub">We place <b>engineers, support specialists and marketers</b> in contract and permanent roles across India. <b>Defence veterans are welcome.</b></p>
        </div>
        <div className="ph"><div className="phi" style={{ backgroundImage: "url(/img/whiteglass.jpg)" }} />
          <div className="fc" style={{ "--r": "-3deg", "--d": ".7s", width: 250 } as React.CSSProperties}><div className="t"><span>Open roles</span><i style={{ background: "var(--talent)" }} /></div><b>{JOBS.length} roles this week</b><div className="row" style={{ marginTop: 6 }}><span>Bengaluru, Hyderabad, Pune, Chennai</span></div></div>
        </div>
      </section>

      <section className="sec white">
        <div className="in">
          <span className="chip lbl">Open roles</span>
          <div className="hd rv" style={{ marginBottom: 40 }}><h2>Roles we&apos;re hiring for</h2><p>Don&apos;t see your role? <b>Send a general application</b> and we&apos;ll match you when one opens.</p></div>
          <div className="jobs rv" style={{ background: "#F5F5F6" }}>
            {JOBS.map(j => (
              <a href="#apply" className="job" key={j.t}><div><b>{j.t}</b><small>{j.m}</small></div><div className="tags"><span className="chip w">{j.v}</span><span className="ib"><NE /></span></div></a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec panel">
        <div className="in">
          <span className="chip w lbl">Working with Coalesca</span>
          <div className="hd rv"><h2>What you get when we place you</h2><p>Whether you join on contract or permanently, <b>we look after the details.</b></p></div>
          <div className="perks">
            <div className="perk rv d1"><span className="ic"><I.list /></span><b>Salary on time</b><p>Contract staff are paid on our payroll, every month.</p></div>
            <div className="perk rv d2"><span className="ic"><I.shield /></span><b>Statutory benefits</b><p>PF, ESI and other benefits as applicable.</p></div>
            <div className="perk rv d3"><span className="ic"><I.building /></span><b>Leading enterprises</b><p>Roles at multinationals, GCCs and growing companies.</p></div>
            <div className="perk rv d4"><span className="ic"><I.person /></span><b>A recruiter in your corner</b><p>Interview prep and feedback at every stage.</p></div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="in applyg">
          <div className="rv">
            <span className="chip lbl">Apply</span>
            <h2 style={{ fontSize: 52, fontWeight: 400, lineHeight: 1.04 }}>Send us your resume</h2>
            <p style={{ fontSize: 14.5, color: "var(--mute)", marginTop: 18, maxWidth: 380 }}>Our recruiters review every application and will contact you if your profile matches an opening.</p>
            <div className="cards2" style={{ gridTemplateColumns: "1fr" }}>
              <div><span><small>Screening</small><b>2–3 rounds, then the client interview</b></span></div>
              <div><span><small>Veterans</small><b>Tick the box to be considered for veteran roles</b></span></div>
            </div>
          </div>
          <div className="rv d2"><ApplyForm roles={JOBS.map(j => j.t)} /></div>
        </div>
      </section>
    </>
  );
}
