# Thrive Chiropractic — Claude Code Project Specification

> A production-ready, SEO-optimised chiropractic clinic website built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Designed around the **Gonstead method** with two practitioner profiles, a Keystatic-powered blog CMS (visual editor, no external service), and full conversion funnel (WhatsApp + booking).

---

## 1. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| CMS/Blog | Payload CMS v3 (`payload` + `@payloadcms/next` + `@payloadcms/richtext-lexical`) — SQLite-backed with admin panel at `/admin` |
| Auth (Blog) | Payload CMS built-in auth (email/password with JWT) |
| Fonts | Cormorant Garamond (headings) + DM Sans (body) via `next/font/google` |
| Icons | Lucide React |
| Animations | Framer Motion |
| SEO | Next.js Metadata API + `next-sitemap` |
| Forms | React Hook Form + Zod |
| Images | `next/image` with placeholder blur |

> **Note on Next.js version:** Use `npx create-next-app@latest` which will scaffold Next.js 15 (not 16 — version 16 does not exist yet). React 19 ships with it.

---

## 2. Design System

### 2.1 Colour Palette (CSS variables in `globals.css`)

```css
:root {
  --color-sage:        #8B9E78;   /* primary — warm olive green */
  --color-sage-light:  #B0C1A0;
  --color-sage-dark:   #6B7D5E;
  --color-cream:       #FAF5EC;   /* background — warm cream */
  --color-warm-white:  #F2EBE0;
  --color-gold:        #C4956A;   /* accent — warm terracotta */
  --color-gold-light:  #DEB996;
  --color-charcoal:    #2E2822;   /* dark sections — espresso */
  --color-slate:       #554A40;
  --color-muted:       #9A8E82;
  --color-border:      #E5DDD3;
}
```

### 2.2 Typography

- **Display / H1–H2:** Cormorant Garamond, 700, tracking `-0.02em`
- **H3–H4:** Cormorant Garamond, 600
- **Body / UI:** DM Sans, 400/500
- **Small / Caption:** DM Sans, 400, `text-muted`

### 2.3 Component Patterns

- Cards: `rounded-2xl`, `shadow-sm`, `border border-border`, hover lifts with `transition-transform duration-300`
- Buttons (primary): sage green fill, white text, `rounded-full px-8 py-3`
- Buttons (outline): cream bg, sage border
- Section rhythm: `py-24` on desktop, `py-16` on mobile
- Dark sections (hero, CTA): `bg-charcoal` with cream text, subtle radial circle decorations at 5–10% opacity
- Dividers: thin gold `<hr>` or a `w-16 h-px bg-gold mx-auto` ornamental line under headings

---

## 3. Project Structure

```
thrive-chiropractic/
├── app/
│   ├── layout.tsx                  # Root layout: fonts, nav, footer, WhatsApp FAB
│   ├── page.tsx                    # Home
│   ├── chiropractic/
│   │   └── page.tsx                # Chiropractic (3 subsections)
│   ├── services/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx                # Blog listing (reads from /content/blog/)
│   │   └── [slug]/
│   │       └── page.tsx            # Individual post
│   └── keystatic/
│       └── [[...params]]/
│           └── page.tsx            # Keystatic admin UI at /keystatic
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFAB.tsx
│   ├── home/
│   │   ├── HeroSlider.tsx
│   │   ├── ChiropractorsIntro.tsx
│   │   ├── TreatmentRoadmap.tsx
│   │   └── ConditionsGrid.tsx
│   ├── chiropractic/
│   │   ├── WhatIsChiropractic.tsx
│   │   ├── GonsteadSection.tsx
│   │   └── XRayAnalysis.tsx
│   ├── shared/
│   │   ├── BookButton.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── GoldDivider.tsx
│   │   └── AnimatedCard.tsx
│   └── blog/
│       ├── PostCard.tsx
│       └── PostCard.tsx
├── content/
│   └── blog/                       # MDX posts created via Keystatic editor
│       └── example-post/
│           └── index.mdx
├── keystatic.config.ts             # Keystatic collection + field definitions
├── lib/
│   ├── keystatic.ts                # Reader API helpers (list posts, get single post)
│   └── constants.ts                # WHATSAPP_NUMBER, BOOKING_URL
├── public/
│   └── images/
└── ...config files
```

---

## 4. Global Layout (`app/layout.tsx`)

- Import Cormorant Garamond (`weights: [400,600,700], subsets: ['latin']`) and DM Sans (`weights: [400,500], subsets: ['latin']`) via `next/font/google`
- Apply font CSS variables to `<html>` element
- Render `<Navbar />`, `{children}`, `<Footer />`, `<WhatsAppFAB />`
- Root metadata: `title: 'Thrive Chiropractic'`, `description`, `openGraph` with clinic image

### WhatsApp FAB (`components/layout/WhatsAppFAB.tsx`)

```tsx
// Fixed bottom-right, z-50
// WhatsApp green circle button (56×56px) with WhatsApp SVG icon
// href="https://wa.me/61451972210"  (no + prefix in wa.me links)
// target="_blank" rel="noopener noreferrer"
// Pulse animation ring on load to draw attention
// Tooltip on hover: "Chat with us on WhatsApp"
```

### Navbar (`components/layout/Navbar.tsx`)

- Transparent on hero, transitions to `bg-cream/95 backdrop-blur shadow-sm` on scroll
- Logo: "Thrive" in Cormorant Garamond + "Chiropractic" in DM Sans, sage green dot accent
- Nav links: Home · Chiropractic · Services · Pricing · About · Blog · FAQ
- CTA button: `<BookButton />` — sage green, "Book Appointment", links to `https://app.medicalmet.com/online-bookings?company_id=db-ae5f-3ebf463692c8&branch_id=519#service`
- Mobile: hamburger → full-screen slide-down menu

---

## 5. Pages — Detailed Spec

---

### 5.1 Home Page (`app/page.tsx`)

#### Section A — Hero Slider

- Full-viewport height (`min-h-screen`), dark overlay on background
- Auto-advancing slider (5s interval) with Framer Motion `AnimatePresence` crossfade
- 6 slides, each with:
  - Background: dark charcoal gradient + decorative radial circle
  - Condition name (large Cormorant Garamond display text)
  - 1-line description
  - `<BookButton />`
- Slides (conditions):
  1. **Back Pain** — "Reclaim your life from chronic back pain"
  2. **Neck & Shoulder Pain** — "Resolve tension from modern lifestyle strain"
  3. **Headaches & Migraines** — "Find lasting relief through spinal correction"
  4. **Sciatica** — "Address the root cause, not just the symptoms"
  5. **Disc Bulge / Herniation** — "Precise Gonstead adjustments for disc issues"
  6. **Sports Injuries** — "Get back to peak performance faster"
- Dot navigation bottom-centre; arrow nav left/right

#### Section B — Introduction Strip

- Cream background, centred
- Eyebrow: "Welcome to Thrive Chiropractic" (gold, small caps, DM Sans)
- Heading: "Your Health. Our Purpose." (Cormorant Garamond 56px)
- Gold divider
- 2-column paragraph: clinic philosophy (Gonstead-focused, evidence-informed, patient-centred)
- `<BookButton />` + secondary "Learn More" outline button → `/chiropractic`

#### Section C — Conditions We Treat

- Section heading: "Conditions We Help With"
- 3×3 card grid (or 2-col mobile):
  - Back Pain, Neck Pain, Headaches, Sciatica / Hip Pain, Disc Issues, Sports Injuries, Posture & Scoliosis, Pregnancy Care, Paediatric Care
  - Each card: icon (Lucide or custom SVG), condition name, 1-line descriptor, hover → sage green bg + cream text

#### Section D — Meet the Chiropractors

- Section heading: "The Hands Behind Your Healing"
- 2-column layout (stacks on mobile):
  - **Dr. [Name A]** — placeholder name/bio to be updated
    - Circular portrait placeholder (sage green bg with initials)
    - Credentials, years experience, special interest
    - Quote in italics (Cormorant Garamond)
  - **Dr. [Name B]** — same structure
- Below: "Both practitioners are trained in the Gonstead technique — one of the most precise and specific chiropractic methods in the world."

#### Section E — Treatment Roadmap

- Section heading: "Your Journey to Better Health"
- Dark charcoal background (`bg-charcoal`)
- Horizontal stepper (vertical on mobile) with 4 steps:

| Step | Icon | Title | Description |
|---|---|---|---|
| 01 | clipboard | Initial Consultation | Comprehensive health history, posture screening, neurological assessment |
| 02 | scan-line | Diagnosis & X-Ray | Full spinal X-ray analysis to identify misalignments with precision |
| 03 | activity | Gonstead Adjustment | Specific, targeted chiropractic adjustment based on your X-ray findings |
| 04 | repeat | Maintenance & Wellness | Scheduled follow-ups to maintain alignment and prevent re-injury |

- Connecting line between steps (gold, animated on scroll with Framer Motion)
- `<BookButton />` centred below

#### Section F — Gonstead Highlight Strip

- Split layout: image left (placeholder), text right
- Heading: "Why Gonstead?"
- 3 bullet points with gold check icons
- Link → `/chiropractic#gonstead`

#### Section G — Pricing Preview

- Cream bg, centred
- 2 pricing cards (see Section 5.4)
- "View Full Pricing" link

#### Section H — Blog Preview

- Latest 3 blog posts (fetched from `/content/blog/*.mdx`)
- Horizontal card row
- "View All Posts" → `/blog`

#### Section I — CTA Banner

- Full-width, dark, sage green gradient or charcoal
- Heading: "Ready to Start Your Journey?"
- Subtext: "Book your initial consultation today and take the first step toward a pain-free life."
- `<BookButton />` (gold variant here)

---

### 5.2 Chiropractic Page (`app/chiropractic/page.tsx`)

Three clearly separated subsections (anchor links from nav):

#### Subsection 1 — `#what-is-chiropractic` — "What Is Chiropractic?"

- Hero banner: soft sage gradient, heading in Cormorant Garamond 64px
- Body content (3–4 paragraphs):
  - Definition of chiropractic care
  - The relationship between the spine, nervous system, and whole-body health
  - Philosophy: addressing the root cause vs. masking symptoms
  - What to expect from chiropractic treatment
- Pull quote (large italic Cormorant Garamond, gold left border): *"The body has an innate ability to heal itself — chiropractic removes the interference."*
- Icon grid: 4 principles (Specific, Gentle, Evidence-Informed, Holistic)

#### Subsection 2 — `#gonstead` — "Gonstead Chiropractic"

- Dark charcoal bg section for visual contrast
- Heading: "The Gonstead System"
- Intro paragraph: Dr. Clarence Gonstead's development of the technique in the 1930s–40s
- **3-column feature grid:**
  - 🎯 **Precision** — Every adjustment targets a specific vertebral segment, not a general region
  - 📐 **Full-Spine Analysis** — Instrumentation, static palpation, motion palpation, and X-ray used together
  - 🔬 **X-Ray Specificity** — Detailed radiographic analysis ensures adjustments are accurate to millimetres
- **"How It Differs" comparison table:**

| Feature | Gonstead | General Chiropractic |
|---|---|---|
| Analysis method | Multi-criteria (5-point system) | Often palpation only |
| X-ray use | Standard pre-treatment | Optional |
| Adjustment specificity | Single specific segment | Often multiple segments |
| Contact point | Very specific | Broader |

- Benefits list: Pain relief, improved mobility, nervous system function, posture correction, long-term spinal health
- `<BookButton />`

#### Subsection 3 — `#xray` — "X-Ray Analysis"

- Heading: "Seeing the Full Picture"
- Why we X-ray before treatment (3 reasons):
  1. Identify the exact location and degree of spinal misalignment
  2. Rule out contraindications (fractures, pathology, bone disease)
  3. Provide a measurable baseline to track progress over time
- 2-column layout: text + placeholder X-ray image (use a stylised spine illustration or dark placeholder with "X-Ray Analysis" label — do NOT use real patient images)
- FAQ strip (3 inline Q&As): Is it safe? How long does it take? Is it required?
- Safety note: "We use the lowest effective radiation dose and strictly follow ALARA principles."

---

### 5.3 Services Page (`app/services/page.tsx`)

Heading: "What We Offer"
Subheading: "Comprehensive care for your spine, joints, and nervous system"

Service cards (6 cards, 3-col grid):

| Service | Description |
|---|---|
| **Chiropractic Adjustment** | Gonstead-specific spinal manipulation to correct vertebral subluxations and restore nervous system function |
| **Dry Needling** | Trigger point therapy using fine filiform needles to release myofascial tension and relieve muscular pain |
| **Postural Correction** | Structured programmes to address forward head posture, rounded shoulders, and spinal curvature imbalances |
| **Sports Injury Rehabilitation** | Assessment and treatment of acute and chronic sports-related musculoskeletal injuries |
| **Pregnancy Chiropractic** | Gentle, modified adjustments to support spinal alignment and pelvic balance throughout pregnancy |
| **Paediatric Chiropractic** | Safe, low-force techniques for infants, toddlers, and children to support healthy spinal development |

Each card: icon, service name, description, "Learn More" link (links to `/chiropractic` for now)
`<BookButton />` below grid

---

### 5.4 Pricing Page (`app/pricing/page.tsx`)

Heading: "Simple, Transparent Pricing"
Subheading: "No hidden fees. No surprises."

Two pricing cards, centred, max-width 800px:

```
┌─────────────────────────────┐   ┌─────────────────────────────┐
│   INITIAL CONSULTATION      │   │   FOLLOW-UP SESSION         │
│                             │   │                             │
│        RM 200               │   │        RM 160               │
│                             │   │                             │
│  • Comprehensive history    │   │  • Progress assessment      │
│  • Postural assessment      │   │  • Gonstead adjustment      │
│  • Neurological screening   │   │  • Home care advice         │
│  • Full spinal X-ray        │   │  • ~30–45 minutes           │
│  • Personalised care plan   │   │                             │
│  • ~60–75 minutes           │   │                             │
│                             │   │                             │
│  [Book Now]                 │   │  [Book Now]                 │
└─────────────────────────────┘   └─────────────────────────────┘
```

- Initial consultation card: sage green accent border, slightly elevated shadow, "Most Recommended" badge
- Both `[Book Now]` buttons → `https://www.google.com`
- Below cards: payment note — "We accept cash, credit/debit cards. Health fund rebates may apply depending on your policy."
- FAQ note: "Have questions about pricing? Check our [FAQ](/faq) page."

---

### 5.5 About Page (`app/about/page.tsx`)

**Hero:** Sage gradient, heading "About Thrive Chiropractic"

**Our Story (paragraph):**
Thrive Chiropractic was founded on the belief that every person deserves access to precise, evidence-informed spinal care. Specialising in the Gonstead technique, our practitioners are committed to understanding the root cause of your condition — not just treating the symptom. Whether you're dealing with chronic pain, recovering from injury, or looking to optimise your health, we're here to help you thrive.

**Our Mission:**
3-column icon grid: Precision Care · Patient Education · Long-Term Wellness

**The Team:** (same 2-chiropractor layout as homepage Section D, more detailed here)

**Our Values:**
- Integrity in care — we will only recommend what we genuinely believe will help you
- Evidence-informed — our approach is grounded in anatomy, biomechanics, and clinical reasoning
- Patient-centred — your health goals guide every treatment decision

**Location / Contact placeholder:**
- Address: [Clinic Address] — to be updated
- Phone: [Phone Number] — to be updated
- Hours: Mon–Fri 9am–6pm, Sat 9am–1pm

---

### 5.6 FAQ Page (`app/faq/page.tsx`)

Heading: "Frequently Asked Questions"
Use `shadcn/ui` Accordion component, grouped by category:

**Category: General**
- What is chiropractic care?
- Is chiropractic safe?
- How many sessions will I need?
- Does chiropractic hurt?
- Can children see a chiropractor?

**Category: Gonstead**
- What makes Gonstead different?
- Do you always adjust the same area?
- What does a Gonstead adjustment feel like?

**Category: X-Ray**
- Why do you take X-rays before treatment?
- Is the radiation from X-rays harmful?
- What if I've already had X-rays elsewhere?

**Category: Pricing & Booking**
- How much does an initial consultation cost? (→ RM200)
- How much is a follow-up session? (→ RM160)
- How do I book an appointment?
- Do you accept health insurance / health fund?
- What should I wear to my appointment?
- What do I need to bring to my first visit?

**Category: Conditions**
- Can chiropractic help with my back pain?
- Can chiropractic help with headaches?
- Can you treat disc bulges?
- Is chiropractic safe during pregnancy?

Each answer should be 2–4 sentences, informative but not clinical in tone.

---

### 5.7 Blog (`app/blog/` + Keystatic CMS)

#### Overview

Blog is powered by **Keystatic** — a zero-cost, open-source CMS that stores posts as MDX files in `/content/blog/` and provides a polished visual editor at `/keystatic`. No external service, no subscription, no custom auth to build.

---

#### `keystatic.config.ts` (root of project)

```ts
import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local', // use 'github' for production (see deployment note below)
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        author: fields.text({ label: 'Author' }),
        date: fields.date({ label: 'Published Date' }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.fields.value.value || 'Tag',
        }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
  },
})
```

---

#### Keystatic Admin Route (`app/keystatic/[[...params]]/page.tsx`)

```tsx
import { makeRouteHandler } from '@keystatic/next/route-handler'
import config from '../../../keystatic.config'

export const { GET, POST } = makeRouteHandler({ config })
```

Also add to `app/layout.tsx` root layout, wrap with `KeystaticApp` only on `/keystatic` paths using a conditional import.

Refer to official Keystatic + Next.js App Router setup docs:
https://keystatic.com/docs/installation-next-js

---

#### `lib/keystatic.ts` — Reader API

```ts
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../keystatic.config'

export const reader = createReader(process.cwd(), keystaticConfig)

// Get all posts (for blog listing page)
export async function getAllPosts() {
  const posts = await reader.collections.posts.all()
  return posts.sort((a, b) =>
    new Date(b.entry.date ?? 0).getTime() - new Date(a.entry.date ?? 0).getTime()
  )
}

// Get single post by slug (for [slug] page)
export async function getPost(slug: string) {
  return reader.collections.posts.read(slug)
}
```

---

#### Blog Listing (`app/blog/page.tsx`)

- Header: "Insights & Education", subheading "Health articles written by our practitioners"
- Call `getAllPosts()` from `lib/keystatic.ts` (server component — no `use client`)
- Render grid of `<PostCard />` — each shows: cover image (or sage gradient fallback), title, author, date, excerpt, "Read More" link → `/blog/[slug]`
- Empty state: "No posts yet. Check back soon."

#### Blog Post (`app/blog/[slug]/page.tsx`)

- Call `getPost(slug)` from `lib/keystatic.ts`
- Render MDX content using Keystatic's built-in `<DocumentRenderer />` (from `@keystatic/core/renderer`)
- Frontmatter: title, author, date, tags displayed in post header
- Cover image via `next/image` if present
- Prose styles: `@tailwindcss/typography` with overrides (Cormorant Garamond h2s, DM Sans body)
- Author byline + date at top; "Back to Blog" link at bottom
- `generateStaticParams`: pre-render all slugs at build time

```tsx
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}
```

---

#### Accessing the Editor

- **Local dev:** Visit `http://localhost:3000/keystatic` — full visual editor, no login required in local mode
- **Writing a post:** Click "Blog Posts" → "Create entry" → fill in fields → rich text editor for content → Save
- **Production:** Switch `storage.kind` from `'local'` to `'github'` in `keystatic.config.ts`. This requires a free GitHub OAuth App. Posts are committed directly to the GitHub repo from the browser. See: https://keystatic.com/docs/github-mode

> **Deployment note for Claude Code:** Add a comment in `keystatic.config.ts` explaining that `storage.kind: 'local'` is for development only. For Vercel production deployment, the owner must follow the GitHub mode setup guide to enable the visual editor online.

---

## 6. Shared Components

### `<BookButton />` (`components/shared/BookButton.tsx`)

```tsx
// Props: variant?: 'primary' | 'outline' | 'gold', size?: 'sm' | 'md' | 'lg', className?
// All variants link to: https://www.google.com
// target="_blank" rel="noopener noreferrer"
// Text: "Book an Appointment"
```

### `<SectionHeading />` (`components/shared/SectionHeading.tsx`)

```tsx
// Props: eyebrow?, heading, subheading?, align?: 'left' | 'center'
// eyebrow: uppercase DM Sans, gold color, letter-spacing wide
// heading: Cormorant Garamond, large
// GoldDivider below heading if centered
// subheading: DM Sans, muted color
```

---

## 7. Constants (`lib/constants.ts`)

```ts
export const WHATSAPP_NUMBER = '61451972210'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const BOOKING_URL = 'https://www.google.com'
export const CLINIC_NAME = 'Thrive Chiropractic'
```

---

## 8. SEO Configuration

### Metadata per page

Each page must export a `generateMetadata` function or static `metadata` object:

| Page | Title | Description |
|---|---|---|
| Home | `Thrive Chiropractic — Gonstead Specialists` | Clinically precise Gonstead chiropractic care. Book your consultation today. |
| Chiropractic | `Chiropractic Care & Gonstead Technique` | Learn about the Gonstead chiropractic system, X-ray analysis, and our approach. |
| Services | `Our Services — Thrive Chiropractic` | Chiropractic, dry needling, postural correction, pregnancy and paediatric care. |
| Pricing | `Pricing — Initial Consultation RM200` | Transparent chiropractic pricing. Initial consultation RM200, follow-ups RM160. |
| About | `About Us — Thrive Chiropractic` | Meet our Gonstead-trained chiropractors and learn about our clinic's mission. |
| Blog | `Blog — Thrive Chiropractic` | Health insights and spinal care education from our practitioners. |
| FAQ | `FAQ — Thrive Chiropractic` | Answers to common questions about chiropractic care, Gonstead, pricing, and booking. |

### `next-sitemap` config (`next-sitemap.config.js`)

```js
module.exports = {
  siteUrl: 'https://thrivechiropractic.com', // update with real domain
  generateRobotsTxt: true,
  exclude: ['/keystatic', '/keystatic/**'],
}
```

---

## 9. Environment Variables (`.env.local`)

```
# Required for Keystatic GitHub mode (production only — not needed for local dev)
# Follow: https://keystatic.com/docs/github-mode
KEYSTATIC_GITHUB_CLIENT_ID=
KEYSTATIC_GITHUB_CLIENT_SECRET=
KEYSTATIC_SECRET=generate-with-openssl-rand-base64-32

# GitHub repo details (for GitHub mode)
NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO_OWNER=your-github-username
NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO_NAME=thrive-chiropractic
```

> For **local development**, no environment variables are needed — Keystatic runs in local mode with zero config.

---

## 10. Package Installation

Run after scaffolding:

```bash
npx create-next-app@latest thrive-chiropractic \
  --typescript --tailwind --eslint --app --src-dir=no --import-alias="@/*"

cd thrive-chiropractic

# shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button card accordion separator sheet

# Keystatic CMS
npm install @keystatic/core @keystatic/next

# Core deps
npm install framer-motion
npm install react-hook-form @hookform/resolvers zod
npm install lucide-react
npm install @tailwindcss/typography

# SEO
npm install next-sitemap
```

---

## 11. Build & Run

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # production server
npx next-sitemap # generate sitemap (run post-build)
```

---

## 12. Content Placeholders to Update Before Launch

| Item | Location | Notes |
|---|---|---|
| Chiropractor 1 name & bio | `components/home/ChiropractorsIntro.tsx` | Replace `Dr. [Name A]` |
| Chiropractor 2 name & bio | Same file | Replace `Dr. [Name B]` |
| Chiropractor portrait photos | `public/images/` | Replace placeholder divs |
| Clinic address | `app/about/page.tsx` | Replace `[Clinic Address]` |
| Clinic phone | `app/about/page.tsx` | Replace `[Phone Number]` |
| Real domain | `next-sitemap.config.js` | Replace placeholder URL |
| Keystatic GitHub OAuth | `keystatic.config.ts` + `.env.local` | Switch to `github` mode for production; follow https://keystatic.com/docs/github-mode |
| Hero images (optional) | `public/images/` | Enhance with real photos |

---

## 13. Accessibility & Performance Notes

- All images must have descriptive `alt` text
- Use `<button>` not `<div>` for interactive elements
- Slider must have `aria-live="polite"` and pause on hover
- Accordion items use proper `aria-expanded` (handled by shadcn/ui)
- Target Lighthouse score: 90+ across all categories
- Use `next/image` for all images (automatic WebP + lazy load)
- Avoid layout shift: set explicit `width`/`height` on all images
- Framer Motion: wrap in `LazyMotion` with `domAnimation` features for smaller bundle

---

*End of specification. Hand this file to Claude Code as the primary brief.*
