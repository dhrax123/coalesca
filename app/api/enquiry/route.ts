import { NextResponse } from "next/server";
import { serverSupabase, clean, isEmail } from "@/lib/supabase";

const SERVICES = ["staffing", "infrastructure", "marketing", "unsure"];

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const row = {
    name: clean(body.name, 120),
    email: clean(body.email, 200).toLowerCase(),
    company: clean(body.company, 200),
    phone: clean(body.phone, 40),
    service: SERVICES.includes(clean(body.service)) ? clean(body.service) : "unsure",
    message: clean(body.message, 4000),
  };
  if (!row.name || !isEmail(row.email) || !row.company || !row.message) {
    return NextResponse.json({ error: "Fill in your name, work email, company and requirement." }, { status: 400 });
  }

  const sb = serverSupabase();
  if (!sb) return NextResponse.json({ error: "Enquiries aren't connected yet." }, { status: 503 });

  const { error } = await sb.from("enquiries").insert(row);
  if (error) { console.error("enquiry insert", error); return NextResponse.json({ error: "Couldn't save your enquiry." }, { status: 500 }); }
  return NextResponse.json({ ok: true });
}
