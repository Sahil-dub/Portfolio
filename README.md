# Sahil Dubey | Data Science Portfolio

## Overview

Recruiter-focused portfolio for Sahil Dubey, a Master's Data Science student in
Germany targeting Working Student and Intern roles in Data Analytics, Data
Engineering, and Machine Learning.

The site presents practical projects with clear business context, technical
approach, realistic outcomes, and links to supporting repositories where
available.

## Live Portfolio

[ADD YOUR VERCEL URL HERE]

## Purpose

This portfolio is built to help recruiters and hiring teams quickly understand:

- The kinds of data problems Sahil works on
- The tools and workflows used across analytics, engineering, and ML projects
- How each project was approached and what constraints were considered
- Where to find GitHub repositories, case studies, contact links, and resume

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Key Features

- Responsive dark theme designed for recruiter scanning
- Homepage with hero, project highlights, skills, active learning areas, about,
  and contact sections
- Interactive project cards with GitHub, demo, and case-study actions
- Dynamic project case-study pages generated from `content/projects.ts`
- Resume download, email, GitHub, LinkedIn, and footer links
- SEO metadata, Open Graph metadata, Twitter card metadata, and robots metadata

Unavailable demos are intentionally shown as `Demo coming soon` where a live
deployment is not available yet.

## Project Structure

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

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local site:

```txt
http://localhost:3000
```

## Build And Quality Checks

Run linting:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

## Deployment

The project is ready for Vercel deployment.

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Select the Next.js framework preset.
4. Use the default build command:

```bash
npm run build
```

5. Deploy and review the homepage, `/projects`, and each project case-study
   page.

## Content Management

Most portfolio content is managed through typed files:

- Profile, contact, and resume details: `content/profile.ts`
- Project cards and case-study content: `content/projects.ts`
- Skill categories and active learning areas: `content/skills.ts`
- Education or experience entries: `content/experience.ts`

Project preview assets live in `public/projects/`. The resume PDF lives in
`public/resume/`.

## Roadmap

- Add final deployed portfolio URL
- Add live demo links where projects have public deployments
- Replace preview graphics with real project screenshots where useful
- Add Open Graph image assets for richer social previews
- Continue refining project case studies as the projects mature

## Contact

- Email: [sahildubey0206@gmail.com](mailto:sahildubey0206@gmail.com)
- GitHub: [https://github.com/Sahil-dub](https://github.com/Sahil-dub)
- LinkedIn: [https://www.linkedin.com/in/sahildubey45](https://www.linkedin.com/in/sahildubey45)
