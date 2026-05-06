import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'karmic-konnexions',
  title: 'Karmic Konnexions CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Karmic Konnexions CMS')
          .items([
            S.listItem().title('📝 Blog Posts').child(
              S.documentTypeList('blogPost').title('Blog Posts')
            ),
            S.listItem().title('📁 Case Studies').child(
              S.documentTypeList('caseStudy').title('Case Studies')
            ),
            S.listItem().title('💬 Testimonials').child(
              S.documentTypeList('testimonial').title('Testimonials')
            ),
            S.divider(),
            S.listItem().title('📢 Announcements').child(
              S.documentTypeList('announcement').title('Announcements')
            ),
            S.listItem().title('👥 Team Members').child(
              S.documentTypeList('teamMember').title('Team Members')
            ),
            S.listItem().title('💼 Job Postings').child(
              S.documentTypeList('jobPosting').title('Job Postings')
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
