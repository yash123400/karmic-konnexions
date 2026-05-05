// Blog
export const ALL_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id, title, slug, excerpt, category, author, publishedAt,
    coverImage { asset->{ url } }
  }
`

export const POST_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id, title, slug, excerpt, category, author, publishedAt,
    coverImage { asset->{ url } },
    body, seoTitle, seoDescription
  }
`

// Case Studies
export const ALL_CASE_STUDIES_QUERY = `
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id, headline, slug, clientDescription, industry, service, featured,
    results[0..2], quote, quoteAttribution, publishedAt
  }
`

export const CASE_STUDY_QUERY = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id, headline, slug, clientDescription, industry, service,
    challenge, solution, results, quote, quoteAttribution, publishedAt
  }
`

export const FEATURED_CASE_STUDIES_QUERY = `
  *[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0..2] {
    _id, headline, slug, clientDescription, industry, service, results[0], quote, quoteAttribution
  }
`

// Testimonials
export const FEATURED_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id, quote, attribution, service, order
  }
`

// Swabhimaan
export const SWABHIMAAN_STORIES_QUERY = `
  *[_type == "swabhimaanStory"] | order(order asc) {
    _id, name, location, businessDescription, quote,
    photo { asset->{ url } }
  }
`
