# GSMODELING - Professional Modeling Platform

**Built by Guidesoft Development Team**  
**Powered by Lovable Cloud**

> A production-ready, full-stack modeling and talent discovery platform connecting models, agencies, brands, and casting directors.

---

## 🎯 What is GSMODELING?

GSMODELING is a comprehensive platform for the modeling industry featuring:

- **50+ Professional Models** - Diverse talent across multiple categories
- **10+ Verified Agencies** - Trusted industry partners
- **Advanced Search** - Powerful filtering by category, location, height, rating
- **4-Section Page Architecture** - Hero, Content A, Content B, CTA
- **Role-Based Access** - Admin, Model, Agency, Brand roles
- **Secure Payments** - Server-side validation with edge functions
- **AI Integration** - Profile generation and model matching
- **SEO Optimized** - Meta tags, Open Graph, semantic HTML

---

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd gsmodeling

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be running at `http://localhost:5173`

---

## 📁 Project Structure

```
gsmodeling/
├── src/
│   ├── components/
│   │   ├── sections/          # Reusable Hero, Content, CTA sections
│   │   ├── ui/                # shadcn UI components
│   │   ├── ModelCard.tsx      # Model display component
│   │   ├── AgencyCard.tsx     # Agency display component
│   │   ├── AdvancedFilters.tsx # Search filtering
│   │   ├── Header.tsx         # Navigation with dropdowns
│   │   ├── Footer.tsx         # Site footer
│   │   └── SEOHead.tsx        # Meta tags management
│   ├── pages/
│   │   ├── Index.tsx          # Homepage
│   │   ├── Models.tsx         # All models
│   │   ├── ModelDetail.tsx    # Individual model (dynamic route)
│   │   ├── AgencyDetail.tsx   # Individual agency (dynamic route)
│   │   ├── NewFaces.tsx       # New talent showcase
│   │   ├── TopModels.tsx      # Premium models
│   │   ├── Search.tsx         # Advanced search with filters
│   │   ├── Campaigns.tsx      # Brand campaigns
│   │   ├── CastingCalls.tsx   # Casting opportunities
│   │   └── ... (20+ pages)
│   ├── contexts/
│   │   └── AuthContext.tsx    # Authentication state
│   └── integrations/
│       └── supabase/          # Auto-generated Supabase client
├── supabase/
│   ├── functions/             # Edge functions (AI, payments)
│   └── migrations/            # Database schema migrations
└── public/                    # Static assets
```

---

## 🎨 Design System

### Premium Luxury Aesthetic

- **Colors**: Black, White, Champagne Gold
- **Typography**: Momo Trust Display (headers), Inter (body)
- **Animations**: Float, shimmer, hover effects, glass morphism
- **All colors use HSL semantic tokens** (no hardcoded values)

### Key Design Files

- `src/index.css` - Design system tokens and animations
- `tailwind.config.ts` - Tailwind configuration

---

## 🗄️ Database Schema

### Core Tables

1. **profiles** - User information (email, name, bio, location)
2. **user_roles** - Role assignments (admin, model, agency, brand)
3. **models** - Model-specific data (category, height, portfolio)
4. **agencies** - Agency information (name, website, verified)
5. **campaigns** - Brand campaigns
6. **casting_calls** - Casting opportunities
7. **bookings** - Model bookings
8. **payments** - Payment records
9. **portfolio_images** - Model portfolios
10. **public_model_profiles** - Sanitized public view (no PII)

### Security Features

- **Row-Level Security (RLS)** on all tables
- **Separate user_roles table** prevents privilege escalation
- **Public views** exclude sensitive PII (email, phone)
- **Server-side validation** for payments

---

## 🔐 Authentication & Roles

### User Roles

- **Admin** - Full access, content moderation
- **Model** - Profile management, casting applications
- **Agency** - Model management, casting creation
- **Brand** - Campaign creation, model booking

### Auth Flow

```typescript
// Sign up
await signUp(email, password, fullName, role);

// Sign in
await signIn(email, password);

// Get user role
const role = userRole; // from AuthContext
```

---

## 📄 Page Architecture

Every page follows a **4-section structure**:

1. **Hero Section** - Full-width hero with CTA
2. **Section A** - Primary content (features, listings)
3. **Section B** - Secondary content (cards, gallery)
4. **Section C** - Call to action (conversion focused)

Example:
```tsx
<HeroSection title="..." subtitle="..." />
<ContentSection title="...">...</ContentSection>
<ContentSection title="..." className="bg-muted">...</ContentSection>
<CallToActionSection title="..." variant="gradient" />
```

---

## 🔍 Advanced Search & Filtering

The platform includes comprehensive filtering:

- **Text Search** - Search by name
- **Category** - Fashion, Commercial, Editorial, etc.
- **Location** - City/country filter
- **Height Range** - 150-200 cm slider
- **Age Range** - 18-50 years slider
- **Verification** - Verified/Unverified/All
- **Sort** - Rating, Name, Height, Recent

---

## 🌐 Complete Site Map

### Main Navigation

- **Discover**
  - All Models (`/models`)
  - New Faces (`/models/new-faces`)
  - Top Models (`/models/top-models`)
  - Fashion Models (`/models/fashion`)
  - Commercial Models (`/models/commercial`)
  - Editorial Models (`/models/editorial`)

- **Agencies** (`/agencies`)
  - Agency Profiles (dynamic `/agencies/:id`)
  - Become a Partner (`/agencies/management`)

- **Casting** (`/casting-calls`)
  - Submit Application (`/casting/submit`)

- **Campaigns** (`/campaigns`)

- **Services**
  - Portfolio Services (`/services/portfolio`)
  - Agency Management (`/agencies/management`)

- **Company**
  - About Us (`/company/about`)
  - Editorial (`/editorial`)

### Additional Pages

- Search (`/search`) - Advanced filtering
- Model Detail (`/models/:id`) - Dynamic route
- Agency Detail (`/agencies/:id`) - Dynamic route
- Authentication (`/auth`)
- Dashboard (`/dashboard`) - Role-based
- Payment (`/payment`)
- Legal pages (Privacy, Terms)

---

## 🚀 Deployment

### Frontend (Lovable Platform)

1. **Staging**: Automatic deployment to `*.lovable.app`
2. **Production**: Click "Publish" → "Update"
3. **Custom Domain**: Configure in Settings → Domains

### Backend (Automatic)

- Edge functions deploy automatically
- Database migrations require approval
- Changes live in ~30 seconds

---

## 🎯 SEO Implementation

Every page includes:

```tsx
<SEOHead
  title="Page Title"
  description="Page description (160 chars)"
  keywords="relevant, keywords, here"
  image="https://image-url.jpg"
  type="website"
/>
```

Features:
- Title tags (<60 chars)
- Meta descriptions (150-160 chars)
- Open Graph tags
- Twitter Card tags
- Semantic HTML
- Image alt tags

---

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run typecheck    # Run TypeScript checks
npm run lint         # Run ESLint
```

### Environment Variables

Pre-configured in `.env`:
```
VITE_SUPABASE_URL=https://npctknsrciagkpbqjiem.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGci...
VITE_SUPABASE_PROJECT_ID=npctknsrciagkpbqjiem
```

---

## 📊 Features Checklist

### ✅ Frontend
- [x] 20+ pages with complete routing
- [x] 4-section page architecture
- [x] Responsive header with dropdowns
- [x] Comprehensive footer with sitemap
- [x] Mobile navigation (collapsible)
- [x] SEO meta tags on all pages
- [x] Advanced search with 7 filters
- [x] Model and agency cards
- [x] Dynamic routes (/models/:id, /agencies/:id)
- [x] Premium luxury design system
- [x] Custom animations and effects

### ✅ Backend
- [x] Supabase integration
- [x] Authentication with JWT
- [x] Role-based access control
- [x] Database with RLS policies
- [x] Edge functions (payment, AI)
- [x] Secure API endpoints
- [x] Server-side validation

### ✅ Security
- [x] RLS on all tables
- [x] Separate user_roles table
- [x] No PII in public views
- [x] Server-side payment validation
- [x] Input validation
- [x] Role-based permissions

### ✅ Design
- [x] HSL semantic tokens
- [x] Custom animations
- [x] Glass morphism effects
- [x] Responsive layouts
- [x] Dark mode support
- [x] Accessibility (ARIA labels)

---

## 📝 Content Policy

### Original Content Only

All content is **original or open-licensed**:

✅ **Allowed**:
- Original model/agency descriptions
- Unsplash/Pexels images
- Content inspired by industry (not copied)
- Open-licensed assets

❌ **Not Allowed**:
- Copying from models.com
- Scraping proprietary websites
- Using copyrighted images
- Verbatim text from paid sources

**Note**: All sample data is original content created for development purposes, inspired by professional modeling industry standards but not copied from any source.

---

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
npm run typecheck  # Check TypeScript errors
npm run build      # Test production build
```

**Authentication Issues**
- Enable auto-confirm emails in backend settings
- Check role assignment in user_roles table

**Search Not Working**
- Verify public_model_profiles view exists
- Check RLS policies on models table

**Images Not Loading**
- Use Unsplash URLs for demo images
- Check CORS settings for custom images

---

## 📚 Documentation

- **Complete Docs**: See `PROJECT_DOCUMENTATION.md`
- **Lovable Docs**: https://docs.lovable.dev/
- **Supabase Docs**: https://supabase.com/docs
- **React Docs**: https://react.dev/

---

## 🎊 What's Included

### Components
- Hero, Content, CTA sections
- Model and Agency cards
- Advanced filters
- SEO meta tags
- Navigation with dropdowns
- Footer with sitemap

### Pages
- Homepage with featured talent
- Models listing with categories
- Model detail pages (dynamic)
- Agency detail pages (dynamic)
- New Faces showcase
- Top Models premium section
- Advanced search with filters
- Campaigns and casting calls
- Authentication and dashboard
- About, Editorial, Services pages

### Backend
- PostgreSQL database
- Row-Level Security
- Edge functions
- Authentication
- Role-based access
- Payment processing

---

## 🚧 Next Steps

To complete the platform:

1. **Add Test Data**
   - Create test accounts (models, agencies, brands)
   - Upload portfolio images
   - Create sample campaigns

2. **Payment Integration**
   - Implement webhook handler
   - Connect payment gateway (Razorpay/Stripe)
   - Test payment completion

3. **Enhanced Features**
   - File upload for portfolios
   - Real-time notifications
   - Analytics dashboard
   - Email campaigns

4. **Production Launch**
   - Configure custom domain
   - Enable monitoring
   - Set up backups
   - Marketing launch

---

## 🤝 Support

Need help?
- Check `PROJECT_DOCUMENTATION.md` for detailed docs
- Review Lovable documentation
- Use AI chat for troubleshooting
- Contact Guidesoft team

---

## 📜 License

This project is built with Lovable and follows its terms of service.

**Content**: All content is original or open-licensed (Unsplash, Pexels). No proprietary content from third-party modeling sites is included.

---

## 💼 Credits

**Development**: Guidesoft Development Team  
**Platform**: Lovable Cloud  
**Images**: Unsplash (unsplash.com)  
**Icons**: Lucide React  
**UI Components**: shadcn/ui  

---

**Built with ❤️ for the modeling industry**

---

## Project Info

**Lovable Project URL**: https://lovable.dev/projects/479a0d1b-1a90-49bd-8d02-ce6bfb84e696

---
