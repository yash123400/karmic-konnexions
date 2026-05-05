import { sanityFetch } from '@/lib/sanity'
import { ALL_POSTS_QUERY } from '@/lib/queries'
import PageHero from '@/components/shared/PageHero'
import CategoryFilter from '@/components/blog/CategoryFilter'
import MagneticButton from '@/components/shared/MagneticButton'

export const revalidate = 60 // ISR — revalidate every 60 seconds

export const metadata = {
  title: 'Insights & Resources | Karmic Konnexions',
  description: 'Articles and guides on HR, Finance, and Marketing to help you scale your business more efficiently.',
}

export default async function BlogPage() {
  const posts = await sanityFetch<any[]>({ query: ALL_POSTS_QUERY })

  // If no posts yet, show a friendly empty state
  if (!posts || posts.length === 0) {
    return (
      <main className="pt-16">
        <PageHero
          eyebrow="Insights & Resources"
          title={"Expert Thinking on\nBusiness Operations."}
          subtitle="Articles and guides on HR, Finance, and Marketing to help you scale your business more efficiently."
        />
        <section className="py-32 text-center bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              Our specialists are currently preparing deep-dive guides on HR trends, payroll compliance, and scaling strategies.
            </p>
            <div className="flex justify-center">
              <MagneticButton href="/contact" className="bg-primary text-white px-10 py-5 !rounded-2xl flex items-center gap-3">
                Get Expert Advice Directly
                <span>→</span>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="pt-16">
      <PageHero
        eyebrow="Insights & Resources"
        title={"Expert Thinking on\nBusiness Operations."}
        subtitle="Articles and guides on HR, Finance, and Marketing to help you scale your business more efficiently."
      />
      <CategoryFilter posts={posts} />
    </main>
  )
}
