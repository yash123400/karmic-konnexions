import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Admin client — uses SERVICE_ROLE_KEY, full DB access.
// NEVER expose this client to the browser.
let adminClient: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (!adminClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !key) {
      throw new Error(
        'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars'
      )
    }
    adminClient = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  }
  return adminClient
}

// Public client — uses ANON_KEY, respects Row Level Security.
// Safe to use in server components and API routes for public data.
let publicClient: SupabaseClient | null = null

export function getSupabasePublic(): SupabaseClient {
  if (!publicClient) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || !key) {
      throw new Error(
        'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY env vars'
      )
    }
    publicClient = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  }
  return publicClient
}
