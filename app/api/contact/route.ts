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

    const { allowed } = rateLimit(ip, 5, 60_000)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { name, company, email, phone, service, message } = body

    // 1. Validate required fields
    if (!name || !company || !email || !phone || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 2. Store in Supabase leads table
    const supabase = getSupabaseAdmin()
    
    const { error: dbError } = await supabase.from('leads').insert({
      name,
      company,
      email,
      phone,
      service,
      message,
      source: 'contact-form',
      created_at: new Date().toISOString(),
    })

    if (dbError) {
      console.error('Supabase error:', dbError)
      // We continue even if DB fails to try and send email (or at least not block user)
    }

    // 3. Send email notification — non-blocking, failure does not affect
    // the 200 response sent back to the user
    try {
      const resend = getResend()
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Enquiry — ${name} (${company ?? email})`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#4F46E5;padding:24px;border-radius:8px 8px 0 0;">
              <h1 style="color:white;margin:0;font-size:20px;">New Contact Form Submission</h1>
              <p style="color:#C7D2FE;margin:4px 0 0;">karmickonnexion.com</p>
            </div>
            <div style="background:#F8FAFC;padding:24px;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 8px 8px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#64748B;width:130px;">Name</td><td style="padding:8px 0;font-weight:600;color:#0F172A;">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Email</td><td style="padding:8px 0;color:#0F172A;"><a href="mailto:${email}" style="color:#4F46E5;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Phone</td><td style="padding:8px 0;color:#0F172A;">${phone ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Company</td><td style="padding:8px 0;color:#0F172A;">${company ?? '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#64748B;">Service</td><td style="padding:8px 0;color:#0F172A;">${service ?? '—'}</td></tr>
              </table>
              <div style="margin-top:16px;padding:16px;background:white;border-radius:6px;border:1px solid #E2E8F0;">
                <p style="color:#64748B;margin:0 0 8px;font-size:13px;">MESSAGE</p>
                <p style="color:#0F172A;margin:0;white-space:pre-wrap;">${message}</p>
              </div>
              <p style="color:#94A3B8;font-size:12px;margin-top:16px;">
                Submitted ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                · Reply directly to this email to respond to ${name}
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
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
