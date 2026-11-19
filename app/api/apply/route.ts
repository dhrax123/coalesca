import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { serverSupabase, clean, isEmail } from "@/lib/supabase";

export const runtime = "nodejs";
const MAX = 5 * 1024 * 1024;
const TYPES: Record<string, string> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

export async function POST(req: Request) {
  let fd: FormData;
  try { fd = await req.formData(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const file = fd.get("resume");
  const row = {
    name: clean(fd.get("name"), 120),
    email: clean(fd.get("email"), 200).toLowerCase(),
    phone: clean(fd.get("phone"), 40),
    city: clean(fd.get("city"), 80),
    role: clean(fd.get("role"), 120) || "General application",
    experience: clean(fd.get("experience"), 60),
    linkedin: clean(fd.get("linkedin"), 300),
    veteran: fd.get("veteran") === "yes",
  };
  if (!row.name || !isEmail(row.email) || !row.phone) return NextResponse.json({ error: "Fill in your name, email and phone." }, { status: 400 });
  if (!(file instanceof File) || !file.size) return NextResponse.json({ error: "Attach your resume." }, { status: 400 });
  if (file.size > MAX) return NextResponse.json({ error: "Your resume is over 5 MB." }, { status: 400 });
  const ext = TYPES[file.type] || (file.name.toLowerCase().match(/\.(pdf|docx?)$/)?.[1] ?? "");
  if (!ext) return NextResponse.json({ error: "Upload a PDF or Word file." }, { status: 400 });

  const sb = serverSupabase();
  if (!sb) return NextResponse.json({ error: "Applications aren't connected yet." }, { status: 503 });

  const path = `${new Date().toISOString().slice(0, 7)}/${randomUUID()}.${ext}`;
  const up = await sb.storage.from("resumes").upload(path, Buffer.from(await file.arrayBuffer()), { contentType: file.type || "application/octet-stream" });
  if (up.error) { console.error("resume upload", up.error); return NextResponse.json({ error: "Couldn't upload your resume." }, { status: 500 }); }

  const { error } = await sb.from("applications").insert({ ...row, resume_path: path });
  if (error) { console.error("application insert", error); return NextResponse.json({ error: "Couldn't save your application." }, { status: 500 }); }
  return NextResponse.json({ ok: true });
}
