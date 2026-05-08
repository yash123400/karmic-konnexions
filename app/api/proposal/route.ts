import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-server'
import { getResend, FROM_EMAIL, TO_EMAIL } from '@/lib/resend'
import { rateLimit } from '@/lib/rate-limit'
import { headers } from 'next/headers'

export async function POST(req: NextRequest) {
  try {
    const headersList = await headers()
    const ip =
      headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      headersList.get('x-real-ip') ??
      '127.0.0.1'

    const { allowed } = rateLimit(ip, 3, 60_000)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    
    // Validate core fields
    const { 
      company_name, industry, company_size, location, 
      services, engagement_model, name, designation, 
      email, phone, preferred_call_time, referral_source 
    } = body

    if (!company_name || !email || !phone || !services || services.length === 0) {
      return NextResponse.json({ error: 'Missing core fields' }, { status: 400 })
    }

    // Store in Supabase proposals table
    const supabase = getSupabaseAdmin()
    
    const { error: dbError } = await supabase.from('proposals').insert({
      company_name,
      industry,
      company_size,
      location,
      services,
      engagement_model,
      name,
      designation,
      email,
      phone,
      preferred_call_time,
      referral_source,
      notes: body.notes || null,
      created_at: new Date().toISOString(),
    })

    if (dbError) {
      console.error('Supabase DB error:', dbError)
    }

    // Send email notification — non-blocking, failure does not affect
    // the 200 response sent back to the user
    try {
      const resend = getResend()
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Proposal Request — ${company_name} (${services?.[0] ?? 'General'})`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#F97316;padding:24px;border-radius:8px 8px 0 0;">
              <h1 style="color:white;margin:0;font-size:20px;">New Proposal Request</h1>
              <p style="color:#FED7AA;margin:4px 0 0;">karmickonnexion.com</p>
            </div>
            <div style="background:#F8FAFC;padding:24px;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 8px 8px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#64748B;width:160px;">Name</td><td style="padding:8px 0;font-weight:600;color:#0F172A;">${name ?? '—'} ${designation ? `(${designation})` : ''}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#4F46E5;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Phone</td><td style="padding:8px 0;color:#0F172A;">${phone ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Company</td><td style="padding:8px 0;color:#0F172A;">${company_name ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Industry</td><td style="padding:8px 0;color:#0F172A;">${industry ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Company Size</td><td style="padding:8px 0;color:#0F172A;">${company_size ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Location</td><td style="padding:8px 0;color:#0F172A;">${location ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Services</td><td style="padding:8px 0;color:#0F172A;">${services?.join(', ') ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Engagement</td><td style="padding:8px 0;color:#0F172A;">${engagement_model ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Call Preference</td><td style="padding:8px 0;color:#0F172A;">${preferred_call_time ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Referral</td><td style="padding:8px 0;color:#0F172A;">${referral_source ?? '—'}</td></tr>
              </table>
              ${body.notes ? `
              <div style="margin-top:16px;padding:16px;background:white;border-radius:6px;border:1px solid #E2E8F0;">
                <p style="color:#64748B;margin:0 0 8px;font-size:13px;">NOTES</p>
                <p style="color:#0F172A;margin:0;white-space:pre-wrap;">${body.notes}</p>
              </div>` : ''}
              <p style="color:#94A3B8;font-size:12px;margin-top:16px;">
                Submitted ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                · Reply directly to this email to respond
              </p>
            </div>
          </div>
        `,
      })
    } catch (emailErr) {
      // Email failure must NOT break the form submission.
      console.error('Resend email failed:', emailErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Proposal form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
