import Anthropic from '@anthropic-ai/sdk'
import { auth } from '@/auth'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

async function requireAdmin() {
  const session = await auth()
  if (!session) throw new Error('Unauthorized')
}

export async function POST(req: NextRequest) {
  try {
    await requireAdmin()
    const { action, data } = await req.json()

    if (action === 'score_lead') {
      const { name, email, company, service, message } = data
      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: `You are an expert B2B sales qualifier for Karmic Konnexions Global Consulting LLP,
a Gurgaon-based firm offering HRO (Human Resources Operations) outsourcing,
E-Learning, Global Workforce, Corporate Apparel, and AI Automation services.
Their ideal client: companies with 50–500 employees, budget-conscious, in growth phase.
Their key selling points: 15+ years experience, 98% retention, 60% cost saving vs in-house.
Be concise and practical.`,
        messages: [{
          role: 'user',
          content: `Score this lead and draft a reply.

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service interested in: ${service || 'Not specified'}
Message: ${message || 'No message'}

Return a JSON object with exactly these fields:
{
  "score": "hot" | "warm" | "cold",
  "score_reason": "one sentence why",
  "priority_service": "which Karmic service best fits their need",
  "suggested_reply": "a warm, professional WhatsApp/email reply (3-4 sentences max, from Harleen's voice)"
}`,
        }],
      })

      const text = response.content[0].type === 'text' ? response.content[0].text : ''
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      const result = jsonMatch
        ? JSON.parse(jsonMatch[0])
        : { score: 'warm', score_reason: 'Unable to parse', suggested_reply: '' }
      return NextResponse.json(result)
    }

    if (action === 'draft_blog') {
      const { topic, keywords, tone } = data
      const response = await client.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        system: `You are a content writer for Karmic Konnexions Global Consulting LLP.
Write in a confident, expert B2B tone. The firm's tagline is "Health, Wealth, Longevity".
They serve 500+ clients across 20+ industries with 98% retention.
Services: HRO outsourcing, E-Learning, Global Workforce, Corporate Apparel, AI Automation.
Write practical, insight-led content. No fluff. No bullet-point overload.
Always end with a soft CTA toward getting a proposal or consultation.`,
        messages: [{
          role: 'user',
          content: `Write a blog post draft.

Topic: ${topic}
Target keywords (weave in naturally): ${keywords || 'none specified'}
Tone: ${tone || 'professional and authoritative'}

Format:
- SEO title (under 60 characters)
- Meta description (under 155 characters)
- Introduction (2 paragraphs)
- 3-4 subheadings with body paragraphs
- Conclusion with soft CTA
- Estimated reading time

Total length: 450-600 words.`,
        }],
      })

      const text = response.content[0].type === 'text' ? response.content[0].text : ''
      return NextResponse.json({ draft: text })
    }

    if (action === 'generate_seo') {
      const { title, content, type } = data
      const response = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        messages: [{
          role: 'user',
          content: `Generate SEO metadata for this Karmic Konnexions ${type || 'page'}.

Title/Topic: ${title}
Content summary: ${content || 'Not provided'}

Return JSON:
{
  "seo_title": "under 60 characters, includes primary keyword",
  "meta_description": "under 155 characters, compelling, includes CTA",
  "focus_keyword": "single best keyword phrase"
}`,
        }],
      })

      const text = response.content[0].type === 'text' ? response.content[0].text : ''
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      const result = jsonMatch ? JSON.parse(jsonMatch[0]) : {}
      return NextResponse.json(result)
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('AI API error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
