-- Run once in Supabase: SQL editor > New query > paste > Run

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text not null,
  phone text,
  service text not null check (service in ('staffing','infrastructure','marketing','unsure')),
  message text not null
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  city text,
  role text not null,
  experience text,
  linkedin text,
  veteran boolean not null default false,
  resume_path text not null
);

-- Only the server (service role key) writes; nobody reads via the public API.
alter table public.enquiries enable row level security;
alter table public.applications enable row level security;

-- Private bucket for resumes (download from Supabase dashboard > Storage)
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;
