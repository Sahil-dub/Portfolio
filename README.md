# Sahil Dubey | Data Science Portfolio

Recruiter-focused portfolio website for Sahil Dubey, a Master's Data Science
student in Germany targeting Working Student and Intern roles in Data Analytics,
Data Engineering, and Machine Learning.

The site is designed to make project judgment easy to evaluate: what problem
was solved, what data work was done, what tools were used, and what limitations
still exist.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Vercel deployment target

## Features

- Dark, responsive portfolio homepage
- Recruiter-focused hero and contact CTA
- Project highlights and skills snapshot
- Interactive animated project cards
- Case study pages generated from `content/projects.ts`
- Resume download CTA with missing-file fallback
- GitHub, LinkedIn, email, and footer links
- SEO metadata, Open Graph metadata, Twitter card metadata, and robots metadata

## Folder Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  projects/
    page.tsx
    [slug]/
      page.tsx

components/
  layout/
    Container.tsx
    Footer.tsx
    Navbar.tsx
  projects/
    CaseStudyLayout.tsx
    ProjectCard.tsx
  ui/
    Badge.tsx
    Button.tsx
    MotionFade.tsx

content/
  experience.ts
  profile.ts
  projects.ts
  skills.ts

lib/
  constants.ts
  utils.ts

public/
  images/
  projects/
  resume/
```

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build

Run a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Start the production server after building:

```bash
npm run start
```

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Use the default build command:

```bash
npm run build
```

5. Use the default output settings for Next.js.
6. Deploy.
7. After deployment, test the homepage, `/projects`, and every project case
   study route.

## Replace Before Final Deployment

Update these placeholders before sharing the final portfolio:

- Real email in `content/profile.ts`
- Real LinkedIn URL in `content/profile.ts`
- Real GitHub URL in `content/profile.ts`
- Resume PDF at `public/resume/Sahil-Dubey-Resume.pdf`
- Real project GitHub links in `content/projects.ts`
- Real dashboard/demo links in `content/projects.ts`, if available
- Production domain in any future canonical URL or Open Graph image setup

## Notes

- No analytics are configured yet.
- No backend or contact form is included.
- Placeholder links are intentionally marked until real URLs are available.
