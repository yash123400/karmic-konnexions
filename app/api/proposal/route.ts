import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
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
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Supabase credentials missing')
      return NextResponse.json({ error: 'Database configuration missing' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
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

    // Send notification email via Resend
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendApiKey)
        await resend.emails.send({
          from: 'Karmic Website <onboarding@resend.dev>',
          to: 'karmickonnexions2309@gmail.com',
          subject: `NEW PROPOSAL REQUEST: ${company_name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #4F46E5;">New Detailed Proposal Request</h2>
              <p style="font-size: 16px; line-height: 1.6;">A potential client has requested a tailored proposal.</p>
              
              <h3 style="color: #333; border-bottom: 2px solid #4F46E5; display: inline-block; padding-bottom: 5px;">Company Profile</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666; width: 150px;">Company:</td><td style="padding: 8px 0;">${company_name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Industry:</td><td style="padding: 8px 0;">${industry}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Size:</td><td style="padding: 8px 0;">${company_size}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Location:</td><td style="padding: 8px 0;">${location}</td></tr>
              </table>

              <h3 style="color: #333; border-bottom: 2px solid #4F46E5; display: inline-block; padding-bottom: 5px; margin-top: 30px;">Requirement Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666; width: 150px;">Services:</td><td style="padding: 8px 0;">${services.join(', ')}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Engagement:</td><td style="padding: 8px 0; text-transform: capitalize;">${engagement_model}</td></tr>
              </table>

              <h3 style="color: #333; border-bottom: 2px solid #4F46E5; display: inline-block; padding-bottom: 5px; margin-top: 30px;">Contact Person</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666; width: 150px;">Name:</td><td style="padding: 8px 0;">${name} (${designation})</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4F46E5;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Phone:</td><td style="padding: 8px 0;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Call Preference:</td><td style="padding: 8px 0;">${preferred_call_time}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #666;">Referral:</td><td style="padding: 8px 0;">${referral_source}</td></tr>
              </table>

              <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
                <p style="margin: 0; font-weight: bold; color: #666; margin-bottom: 10px;">Notes:</p>
                <p style="margin: 0; font-style: italic; color: #333;">${body.notes || 'No additional notes provided'}</p>
              </div>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error('Failed to send proposal email via Resend:', emailErr)
      }
    }

    console.log('New proposal request captured:', { company_name, services })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Proposal form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
