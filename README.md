# Karmic Konnexions — Next-Gen BPO & Consulting Platform

Karmic Konnexions is an AI-native ERP and professional services platform for high-growth enterprises. This Next.js 14 application serves as the digital gateway for Karmic Konnexions Global Consulting LLP, providing execution-focused outsourcing solutions across HR, Finance, CRM, and Marketing.

## 🚀 Vision
To redefine business operations through a "Fixed-Cost, High-ROI" model, eliminating the overhead of internal team management while ensuring 100% compliance and domain-specific expertise.

## 🛠️ Technology Stack
- **Framework**: Next.js 14 (App Router, Server Components)
- **Styling**: Tailwind CSS + Framer Motion (Animations)
- **UI Components**: Lucide-React, Custom Glassmorphism System
- **Backend**: Supabase (PostgreSQL, RLS)
- **CMS**: Sanity.io (Headless Content Management)
- **Email**: Resend API
- **Deployment**: Vercel

## 🏗️ Architecture
- `/app`: Main application routes and API endpoints.
- `/components`: Reusable UI components categorized by section (home, shared, services, etc.).
- `/lib`: Utility functions, database clients, and constant definitions.
- `/sanity`: Schema definitions and configuration for the Sanity Studio.

## 📊 Business Logic
- **ROI Calculator**: Proprietary logic to estimate Year-1 savings by transitioning from in-house hiring to Karmic's outsourcing model.
- **Lead Capture Engine**: Multi-step proposal form with automated Supabase ingestion and Resend notifications.
- **Swabhimaan Ecosystem**: Integration of social impact initiatives into the commercial platform.

## 🔒 Security
- Row Level Security (RLS) on Supabase tables.
- Server-side validation for all form submissions.
- Environment-variable protected API keys (Resend, Supabase, Sanity).

## 🚀 Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`
3. Configure environment variables in `.env.local`.
4. Run development server: `npm run dev`

---
*Karmic Konnexions Global Consulting LLP &copy; 2026*
