# Coalesca Technologies website

Next.js 15 (App Router) site for Coalesca Technologies, designed and built by idli studios.

Pages: Home, IT staffing, IT infrastructure, Digital marketing, About, Careers, Contact.
Backend: two API routes that save enquiries and job applications (with resume upload) to Supabase.

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in Supabase values
npm run dev                  # http://localhost:3000
```

## Deploy (Vercel)
1. vercel.com → Add New → Project → import `dhrax123/coalesca`. Framework is detected as Next.js; no build settings needed.
2. Project → Settings → Environment Variables: add `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL`.
3. Deploy. Every push to `main` redeploys automatically.

## Supabase (forms)
1. Create a project at supabase.com.
2. SQL editor → paste `supabase/schema.sql` → Run. This creates the `enquiries` and `applications` tables and a private `resumes` bucket.
3. Copy Project URL and the `service_role` key (Project settings → API) into Vercel env vars. Never put the service role key in client code.
4. View submissions in Table editor; download resumes from Storage → resumes.

Until Supabase is connected, forms show a clear error asking visitors to email instead.

## Domain (GoDaddy)
Vercel → Project → Settings → Domains → add the domain. Add the A / CNAME records Vercel shows in GoDaddy DNS.

## Content to replace before launch
- Photos in `public/img/` are placeholder architecture shots. Swap in people, office and on-site photos (same file names, or update the pages).
- Logo in `public/brand/` was traced from a screenshot. Replace with the client's original vector files.
- Job listings live in `lib/data.ts`.
- Contact emails (`hello@coalesca.in`, `careers@coalesca.in`) are placeholders.
