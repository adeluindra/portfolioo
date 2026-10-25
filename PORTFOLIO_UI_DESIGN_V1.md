# Developer Portfolio — UI Design Specification v1.0

**Owner:** Moh Syafiq Ade Luwindra  
**Primary audience:** HR/recruiters and engineering interviewers  
**Target roles:** Junior Full-Stack Developer, Frontend Developer, Web Developer  
**Document status:** Design direction approved in principle; content and visual assets require final verification before publishing.  
**Language:** English (primary)

## 1. Product goals and non-goals

### Primary goals
1. In 5–10 seconds, visitors can identify the developer's name, focus, and a clear path to view projects or download a CV.
2. Within 30 seconds, visitors can locate real professional experience and three featured projects.
3. Engineering reviewers can explore concise project case studies with challenges, approach, personal contribution, results, stack, and evidence.
4. The site is fast, accessible, mobile-friendly, and straightforward to maintain.

### Non-goals for v1
- CMS, admin login, database, contact form requiring a backend, AI assistant, heavy motion graphics, 3D hero, and dark-mode toggle.
- Metrics, customer outcomes, or live demos that cannot be verified.

## 2. Visual direction

**Style:** Minimalist, clean, restrained editorial typography, technical but approachable.  
**Theme:** Light-first. Dark mode is deferred to v2 pending testing and availability of time.  
**Mood:** Calm, credible, precise; avoid generic stock photos, progress bars for skills, excessive logos/gradients.

### Design tokens

| Token | Value | Usage |
|---|---|---|
| `--background` | `#F8FAFC` | Overall page background |
| `--surface` | `#FFFFFF` | Cards and navigation surface |
| `--foreground` | `#0F172A` | Heading and body emphasis |
| `--muted` | `#475569` | Supporting body text |
| `--subtle` | `#64748B` | Metadata where contrast is adequate |
| `--primary` | `#2563EB` | Buttons, links, focus and accents |
| `--primary-hover` | `#1D4ED8` | Interactive hover state |
| `--border` | `#E2E8F0` | Dividers and card borders |
| `--focus` | `#1D4ED8` | Keyboard focus outline |

**Typography:** Geist Sans via `next/font` as the sole family to reduce requests and keep visual coherence. Use weight 400, 500, 600, 700. Keep text selectable; never render body copy as image.  
- H1: desktop `clamp(2.75rem, 4.5vw, 4rem)` / mobile `2.25rem`, line-height `1.1–1.15`.  
- H2: desktop `2rem–2.5rem` / mobile `1.75rem`, line-height `1.2`.  
- H3: `1.25rem–1.5rem`.  
- Body: `1rem–1.125rem`, line-height `1.55–1.7`.  
- Labels / metadata: `0.875rem` minimum in normal content.  

**Spacing:** 4px primitive; main scale 8, 12, 16, 24, 32, 48, 64, 96.  
**Layout container:** `max-width: 1120px`, centered; desktop gutter 32px, tablet 24px, mobile 16–20px.  
**Border radius:** inputs/buttons 10–12px; cards 16–20px; pills 999px.  
**Shadows:** subtle or none; use borders and whitespace to establish hierarchy.  

## 3. Information architecture

### Home `/`
1. Sticky header: `MSAL.` brand, links `Projects`, `Experience`, `About`, `Skills`, `Contact`, plus a visible `Download CV` action on desktop.
2. Hero: name, role, concise positioning statement, `View Projects` and `Download CV`, links to GitHub / LinkedIn / Email, authentic portrait if supplied.
3. Featured Projects: BISINDO Detector, ParentCare, DevJourney. Show case-study navigation; avoid demo CTA until a real publicly accessible URL is validated.
4. Professional Experience: `Web Developer Intern — PT Grage Media Technology (Oct–Dec 2025)` with succinct SIBADA and KBK MANAGEMENT highlights.
5. About: short professional narrative + verifiable educational status (do not claim graduation until confirmed).
6. Skills: technologies grouped into `Frontend`, `Backend`, `Database`, and `Tools` without skill percentages.
7. Certifications: BNSP Junior Web Developer, Coding Camp 2025, HackerRank Problem Solving (Basic); display compact badges/cards with optional verified certificate links.
8. Contact + Footer: email action, GitHub, LinkedIn (once link confirmed), and copyright.

### Project case study `/projects/[slug]`
- Project name + one-sentence summary
- Overview (problem and target users)
- Role / collaborators (precise personal contribution)
- Constraints / technical challenges
- Architecture / approach / key decisions
- Core features / screenshots
- Results & limitations (verified, transparently framed)
- Stack, GitHub, Live Demo only when verified
- Back to Projects / Next Project

### Routes
- `/` — homepage
- `/projects/bisindo-detector`
- `/projects/parentcare`
- `/projects/devjourney`
- `/resume.pdf` — downloadable verified latest CV
- Optional `/projects` listing in v2; avoid unnecessary pages for v1.

## 4. Homepage components and interaction specification

### Header
- Desktop: one row, brand at left and nav right; max-height 72–76px; sticky with understated 1px bottom border.
- Mobile: brand + labeled menu trigger. On open, show full nav list and close button; keyboard focus remains manageable.
- Active navigation should track section or route; visible keyboard focus.

### Hero
- Desktop: 60:40 or 55:45 text / image split; image is optional if the original portrait is not available.
- Mobile: text before portrait; CTA buttons in accessible vertical stack or comfortable wrap; no horizontal scrolling.
- Proposed heading: `Hi, I'm Moh Syafiq.` + `Junior Full-Stack Developer.`
- Proposed short description: `I build responsive interfaces, backend APIs, and database-driven web applications, with a focus on practical problem solving.`
- CTA hierarchy: primary `View Projects`, secondary `Download CV`.
- Avoid unverified marketing claims such as “helping millions of users”.

### Featured projects
- Desktop: 3-column grid; tablet: 2 columns; mobile: 1 column.
- Each card: real screenshot at ~16:10 aspect ratio; category tag; project title; max 2–3 lines summary; stack tags; `Read Case Study` link.
- Cards use consistent image treatment; image alt text describes screenshot content.
- Ranking: BISINDO first; ParentCare second; DevJourney third.
- Separate professional experience from personal/capstone projects to avoid misleading attribution.

### Experience
- One credible timeline or experience block: `Web Developer Intern, PT Grage Media Technology`, `Oct–Dec 2025`.
- Short contributions for `SIBADA` and `KBK MANAGEMENT`, no invented performance numbers.
- Optional screenshots if usage rights allow publication.

### Skills
- 4 clear clusters; avoid large equal-weight wall of icons and do not claim every technology is equally advanced.
- Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS.
- Backend: Node.js, Express.js, Laravel, PHP, Go (Go is supported by DevJourney).
- Database: MySQL, PostgreSQL, Supabase, Firebase.
- Tools and other: Git, GitHub, Postman, Python, MediaPipe.

### Certifications
- BNSP — Junior Web Developer (2025)
- Coding Camp 2025 — Front-End & Back-End (Dicoding × DBS Foundation)
- HackerRank — Problem Solving (Basic) (2026)
- Do not expose full certification serial numbers/barcodes by default. Optional click to credential source if share-safe.
- Other short-course/attendance certificates are not front-page priorities.

### Contact
- Clear action: `Email Me` via `mailto:` link and GitHub/LinkedIn links, no backend required.
- Provide visibly identifiable links; not icon-only without accessible label.

## 5. Responsive layout specification

| Viewport | Behavior |
|---|---|
| `< 640px` | 1-column, navigation drawer, full-width cards, 16px gutters, hero text first |
| `640–1023px` | 2-column project grid, simplified navbar as needed, 24px gutters |
| `>= 1024px` | 3-column project grid, split hero, full desktop navigation, 32px gutters |

- Test at 320, 375, 390, 768, 1024, and 1440px widths.
- Minimum tappable controls aim at 44×44 CSS px where practical.
- No clipping, overflow-x or unreadably small project descriptions.
- Respect `prefers-reduced-motion`.

## 6. Accessibility, SEO, and performance

- Semantic regions: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`; single clear H1 per page, hierarchical H2/H3.
- Keyboard-reachable nav and CTAs, visible focus state, appropriate alt text; decorative graphics hidden from assistive tech.
- Check text and controls for WCAG AA contrast. Avoid text over complex project imagery.
- Metadata: unique page title/description, Open Graph preview, favicon, canonical URLs, sitemap and robots instructions.
- Ship actual project screenshots as optimized WebP/AVIF where beneficial; use `next/image`, width/height, lazy-load below fold to reduce layout shift.
- Avoid unnecessary third-party analytics, animations, component libraries, and icon bundles.
- Review with Lighthouse and manual testing; use Core Web Vitals as meaningful goals, not guaranteed scores.

## 7. Suggested implementation architecture

```
src/
  app/
    layout.tsx
    page.tsx
    projects/[slug]/page.tsx
    globals.css
  components/
    layout/Header.tsx
    layout/Footer.tsx
    home/Hero.tsx
    home/FeaturedProjects.tsx
    home/Experience.tsx
    home/About.tsx
    home/Skills.tsx
    home/Certifications.tsx
    home/Contact.tsx
    ui/Button.tsx
    ui/ProjectCard.tsx
    ui/SectionHeading.tsx
  data/
    projects.ts
    profile.ts
    skills.ts
    certifications.ts
  lib/
    projects.ts
public/
  images/projects/
  images/profile/
  certificates/
  resume.pdf
```

Use Next.js App Router, TypeScript, Tailwind CSS, and `next/font`. Start with typed local content rather than a CMS. Keep components small, reusable, and dependency-light.

## 8. Content verification checklist (must complete before launch)

- [ ] Confirm official graduation status and preferred professional title from updated CV.
- [ ] Verify BISINDO testing methodology and context for reported ~91% accuracy; do not conflate test metrics with live field-test performance.
- [ ] Obtain original BISINDO Detector, ParentCare, and DevJourney screenshots.
- [ ] Confirm specific individual contributions to the ParentCare team capstone.
- [ ] Confirm public sharing permission for internship project screenshots and descriptions.
- [ ] Verify currently accessible LinkedIn URL, GitHub URLs, and any live demos.
- [ ] Replace placeholder portrait with an actual licensed personal photo.
- [ ] Verify final CV PDF and avoid publishing confidential contact details beyond intended email/social links.
- [ ] Test mobile, keyboard navigation, copy, metadata, and image loading prior to deployment.

## 9. Execution sequence

**Phase A — Wireframe and content**: lock hierarchy, final copy, project proofs, desktop/mobile layout.  
**Phase B — UI components**: implement header, hero, cards, experience, skills, certificates, contact.  
**Phase C — Case studies**: build project detail template and verify content.  
**Phase D — QA/launch**: accessibility, responsiveness, build checks, SEO, deployment, final CV and contact test.

### Definition of done for UI v1.0
- Homepage layout passes desktop and mobile review.
- Every visible action leads somewhere real and appropriate.
- Content is grounded, concise, and consistent with CV.
- Project screenshots, typography, and colors are consistent.
- A technical recruiter can find a project's architecture, contributions, and evidence in at most two clicks.
