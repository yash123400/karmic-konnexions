import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, email, phone, service, message } = body

    // 1. Validate required fields
    if (!name || !company || !email || !phone || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 2. Store in Supabase leads table
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase credentials missing')
      return NextResponse.json({ error: 'Database configuration missing' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
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

    // 3. Send notification email via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendApiKey)
        await resend.emails.send({
          from: 'Karmic Website <onboarding@resend.dev>', // Use verified domain once set up
          to: 'karmickonnexions2309@gmail.com',
          subject: `New Enquiry: ${name} (${company})`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #4F46E5;">New Lead Captured</h2>
              <p style="font-size: 16px; line-height: 1.6;">A new message has been sent from the website contact form.</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Company:</td>
                  <td style="padding: 8px 0;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4F46E5;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Phone:</td>
                  <td style="padding: 8px 0;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">Service:</td>
                  <td style="padding: 8px 0;">${service}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
                <p style="margin: 0; font-weight: bold; color: #666; margin-bottom: 10px;">Message:</p>
                <p style="margin: 0; font-style: italic; color: #333;">${message || 'No message provided'}</p>
              </div>
              <p style="font-size: 12px; color: #aaa; margin-top: 30px; text-align: center;">
                Sent from Karmic Konnexions Lead Capture Engine
              </p>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error('Failed to send email via Resend:', emailErr)
      }
    }

    console.log('New lead captured:', { name, company, service })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
