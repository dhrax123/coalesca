"use client";
import { useState } from "react";
import { Arrow, I } from "./Icons";

type Status = { kind: "idle" | "sending" | "ok" | "err"; msg?: string };

const SERVICES = [
  { id: "staffing", label: "IT staffing", color: "var(--talent)" },
  { id: "infrastructure", label: "Infrastructure", color: "var(--systems)" },
  { id: "marketing", label: "Marketing", color: "var(--growth)" },
  { id: "unsure", label: "Not sure yet", color: "" },
];

export function EnquiryForm({ defaultService = "staffing", prefill = "" }: { defaultService?: string; prefill?: string }) {
  const [service, setService] = useState(defaultService);
  const [st, setSt] = useState<Status>({ kind: "idle" });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSt({ kind: "sending" });
    try {
      const r = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, service }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Couldn't send your enquiry.");
      form.reset();
      setSt({ kind: "ok", msg: "Enquiry sent. A specialist from the right team will get back to you." });
    } catch (err) {
      setSt({ kind: "err", msg: (err as Error).message + " Email hello@coalesca.in instead." });
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="g2">
        <label className="f"><span>Full name</span><input name="name" required placeholder="Priya Raman" autoComplete="name" /></label>
        <label className="f"><span>Work email</span><input name="email" type="email" required placeholder="priya@company.com" autoComplete="email" /></label>
        <label className="f"><span>Company</span><input name="company" required placeholder="Company name" autoComplete="organization" /></label>
        <label className="f"><span>Phone</span><input name="phone" type="tel" placeholder="+91" autoComplete="tel" /></label>
      </div>
      <div className="flabel">What do you need help with?</div>
      <div className="opts" role="radiogroup">
        {SERVICES.map(s => (
          <button type="button" role="radio" aria-checked={service === s.id} key={s.id} className={`opt ${service === s.id ? "on" : ""}`} onClick={() => setService(s.id)}>
            {s.color && <i style={{ background: s.color }} />}{s.label}
          </button>
        ))}
      </div>
      <label className="f" style={{ minHeight: 120 }}><span>Tell us about the requirement</span><textarea name="message" rows={4} required defaultValue={prefill} placeholder="Roles, sites or goals, and your timeline" /></label>
      <button className="pbtn full" style={{ marginTop: 8 }} disabled={st.kind === "sending"}>
        {st.kind === "sending" ? "Sending…" : "Send enquiry"}<span className="ib"><Arrow /></span>
      </button>
      {st.msg && <div className={`fmsg ${st.kind === "ok" ? "ok" : "err"}`} role="status">{st.msg}</div>}
    </form>
  );
}

export function ApplyForm({ roles }: { roles: string[] }) {
  const [st, setSt] = useState<Status>({ kind: "idle" });
  const [file, setFile] = useState<string>("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const f = fd.get("resume") as File | null;
    if (!f || !f.size) return setSt({ kind: "err", msg: "Attach your resume as a PDF or Word file." });
    if (f.size > 5 * 1024 * 1024) return setSt({ kind: "err", msg: "Your resume is over 5 MB. Upload a smaller file." });
    setSt({ kind: "sending" });
    try {
      const r = await fetch("/api/apply", { method: "POST", body: fd });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || "Couldn't submit your application.");
      form.reset(); setFile("");
      setSt({ kind: "ok", msg: "Application received. Our recruiters will contact you if your profile matches an opening." });
    } catch (err) {
      setSt({ kind: "err", msg: (err as Error).message + " Email your resume to careers@coalesca.in instead." });
    }
  }

  return (
    <form className="form" onSubmit={submit} id="apply">
      <div className="g2">
        <label className="f"><span>Full name</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
        <label className="f"><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="you@email.com" /></label>
        <label className="f"><span>Phone</span><input name="phone" type="tel" required autoComplete="tel" placeholder="+91" /></label>
        <label className="f"><span>Current city</span><input name="city" placeholder="Bengaluru" /></label>
        <label className="f"><span>Role you're applying for</span>
          <select name="role" defaultValue="">
            <option value="" disabled>Choose a role</option>
            {roles.map(r => <option key={r}>{r}</option>)}
            <option>General application</option>
          </select></label>
        <label className="f"><span>Total experience</span><input name="experience" placeholder="For example, 5 years" /></label>
      </div>
      <label className="f"><span>LinkedIn profile (optional)</span><input name="linkedin" type="url" placeholder="https://linkedin.com/in/…" /></label>
      <label className="file">
        <span style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span className="ib soft"><I.upload /></span>
          <span><b style={{ fontWeight: 500, display: "block" }}>{file || "Upload your resume"}</b><small style={{ color: "var(--mute)", fontSize: 12.5 }}>PDF or Word, up to 5 MB</small></span>
        </span>
        <span className="chip">Browse</span>
        <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={e => setFile(e.target.files?.[0]?.name || "")} />
      </label>
      <label style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--mute)", margin: "6px 2px 14px", alignItems: "flex-start" }}>
        <input type="checkbox" name="veteran" value="yes" style={{ marginTop: 3 }} /> I'm a defence veteran
      </label>
      <button className="pbtn full" disabled={st.kind === "sending"}>
        {st.kind === "sending" ? "Submitting…" : "Submit application"}<span className="ib"><Arrow /></span>
      </button>
      {st.msg && <div className={`fmsg ${st.kind === "ok" ? "ok" : "err"}`} role="status">{st.msg}</div>}
    </form>
  );
}
