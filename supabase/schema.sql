-- Hydrolock waitlist schema
-- Run this once in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query).

create extension if not exists "pgcrypto";

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create index if not exists subscribers_created_at_idx
  on public.subscribers (created_at desc);

-- Lock the table down. The app only reads/writes it from the server using the
-- service_role key, which bypasses RLS. No public policies are created, so the
-- anon and authenticated roles cannot access it through the Data API.
alter table public.subscribers enable row level security;

grant all on public.subscribers to service_role;
