-- Stores investor deck requests submitted from /investors.
-- Apply with the Supabase CLI (`supabase db push`) or paste into the SQL editor.
-- The site writes with the service role key from a Server Action; no client ever
-- touches this table, so RLS denies everything by default and no policy is added
-- for anon or authenticated roles yet.

create table if not exists public.access_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  fund text not null,
  check_size text,
  link text,
  status text not null default 'new' check (status in ('new', 'reviewing', 'granted', 'declined')),
  notes text
);

create index if not exists access_requests_created_at_idx
  on public.access_requests (created_at desc);

create unique index if not exists access_requests_email_idx
  on public.access_requests (lower(email));

alter table public.access_requests enable row level security;

-- No policies: only the service role (which bypasses RLS) can read or write.
-- If signed-in access is ever added, a policy would go here. There is none today.

comment on table public.access_requests is
  'Investor deck requests submitted from /investors.';
