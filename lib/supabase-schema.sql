-- Table for Contact Form Leads
create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  service text not null,
  message text,
  source text default 'contact-form',
  created_at timestamptz default now()
);

-- Table for Tailored Proposal Requests
create table if not exists proposals (
  id uuid default gen_random_uuid() primary key,
  company_name text not null,
  industry text not null,
  company_size text not null,
  location text not null,
  services text[] not null, -- Array of selected services
  engagement_model text not null,
  name text not null,
  designation text not null,
  email text not null,
  phone text not null,
  preferred_call_time text not null,
  referral_source text not null,
  notes text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table leads enable row level security;
alter table proposals enable row level security;

-- Policy: Only service role (admin) can read/write everything.
-- For a public website, we usually want public to be able to INSERT only.
create policy "Enable insert for all users" on leads for insert with check (true);
create policy "Enable insert for all users" on proposals for insert with check (true);

-- Policy: Service role only for reading
create policy "Service role only" on leads for select using (auth.role() = 'service_role');
create policy "Service role only" on proposals for select using (auth.role() = 'service_role');
