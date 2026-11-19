import type { Metadata } from "next";
import { NE } from "@/components/Icons";
import { EnquiryForm } from "@/components/Forms";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Coalesca Technologies about IT staffing, IT infrastructure projects or digital marketing.",
};

type SP = Promise<Record<string, string | string[] | undefined>>;

export default async function Contact({ searchParams }: { searchParams: SP }) {
  const q = await searchParams;
  const s = (k: string) => (typeof q[k] === "string" ? (q[k] as string).trim() : "");
  let service = "staffing";
  const lines: string[] = [];
  if (s("role") || s("positions") || s("location")) {
    lines.push(`Hiring: ${s("positions") || "?"} x ${s("role") || "role"}${s("location") ? `, ${s("location")}` : ""}`);
  }
  if (s("sites") || s("scope") || s("start")) {
    service = "infrastructure";
    lines.push(`Rollout: ${s("scope") || "scope"}${s("sites") ? `, ${s("sites")} sites` : ""}${s("start") ? `, starting ${s("start")}` : ""}${s("company") ? ` (${s("company")})` : ""}`);
  }

  return (
    <>
      <section className="shero">
        <div className="tx">
          <span className="chip lbl">Contact</span>
          <h1><span className="ln"><span>Tell us</span></span><span className="ln"><span>what <span className="g">you</span></span></span><span className="ln"><span><span className="g">need</span></span></span></h1>
          <p className="sub">Share a few details and a specialist from the <b>right team</b> will get back to you.</p>
        </div>
        <div className="ph"><div className="phi" style={{ backgroundImage: "url(/img/city.webp)" }} />
          <div className="fc" style={{ "--r": "-3deg", "--d": ".7s", width: 250 } as React.CSSProperties}><div className="t"><span>Office</span><i style={{ background: "var(--brand)" }} /></div><b>Bengaluru, Karnataka</b><div className="row" style={{ marginTop: 6 }}><span>Serving clients across India</span></div></div>
        </div>
      </section>

      <section className="sec panel">
        <div className="in contact">
          <div className="ci rv"><span className="chip d" style={{ alignSelf: "flex-start" }}>Reach us directly</span><h2 style={{ marginTop: 26 }}>Prefer email?</h2><p className="lead">Write to us with the service you need and we&apos;ll route it to the right team.</p>
            <div className="rows">
              <a href="mailto:hello@coalesca.in"><div><small>General and business</small><div>hello@coalesca.in</div></div><span className="ib"><NE /></span></a>
              <a href="mailto:careers@coalesca.in"><div><small>Jobs and resumes</small><div>careers@coalesca.in</div></div><span className="ib"><NE /></span></a>
            </div></div>
          <div className="rv d2"><EnquiryForm defaultService={service} prefill={lines.join("\n")} /></div>
        </div>
      </section>
    </>
  );
}
