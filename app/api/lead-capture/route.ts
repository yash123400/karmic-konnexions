import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-server';
import { rateLimit } from '@/lib/rate-limit';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const ip =
      headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      headersList.get('x-real-ip') ??
      '127.0.0.1';

    const { allowed } = rateLimit(ip, 5, 60_000);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, source, name, phone, message } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Insert into Supabase (if configured)
    // We wrap this in a try/catch so the frontend doesn't break if Supabase isn't fully configured
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = getSupabaseAdmin();
      const { error } = await supabase
        .from('leads')
        .insert([{ 
          email, 
          source: source || 'Unknown', 
          name: name || null,
          phone: phone || null,
          message: message || null,
          created_at: new Date().toISOString() 
        }]);

      if (error) {
        console.error('Supabase insertion error:', error);
        // We still return 200 so the user gets a success message even if the DB insertion fails
        // In a real production app with rigid requirements, this might be a 500
      }
    }

    return NextResponse.json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Error processing lead capture:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
