import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Fallback logic in case environment variables aren't set during build
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source, name, phone, message } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Insert into Supabase (if configured)
    // We wrap this in a try/catch so the frontend doesn't break if Supabase isn't fully configured
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
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
    } else {
      console.log('Lead captured (No Supabase URL configured):', { email, source, name, phone, message });
    }

    return NextResponse.json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Error processing lead capture:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
