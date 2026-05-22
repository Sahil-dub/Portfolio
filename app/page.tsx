import { existsSync } from "node:fs";
import { join } from "node:path";
import { BarChart3, Database, Download, LineChart, Mail } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MotionFade } from "@/components/ui/MotionFade";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";

const skillGroups = [
  {
    title: "Analytics",
    items: skills.analytics,
    icon: BarChart3,
  },
  {
    title: "Engineering",
    items: skills.engineering,
    icon: Database,
  },
  {
    title: "Machine Learning",
    items: skills.machineLearning,
    icon: LineChart,
  },
];

const highlights = [
  {
    label: "APIs Built",
    value: "2",
    detail: "FastAPI-backed project workflows",
  },
  {
    label: "ML Pipelines",
    value: "1",
    detail: "Sensor quality prediction workflow",
  },
  {
    label: "Dashboards",
    value: "2",
    detail: "Analytics-first project outputs",
  },
  {
    label: "ETL Workflows",
    value: "2",
    detail: "Structured data preparation projects",
  },
];

export default function Home() {
  const resumeExists = existsSync(
    join(process.cwd(), "public", "resume", profile.resume.filename),
  );

  return (
    <main className="flex-1 overflow-hidden">
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <SkillsSnapshot />
      <AboutMe />
      <ContactCTA resumeExists={resumeExists} />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.09),transparent_28%)]" />
      <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-28">
        <MotionFade className="max-w-4xl">
          <Badge>Open to Working Student / Intern roles</Badge>
          <h1 className="mt-7 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-sky-200 sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.summary}
          </p>
          <div className="mt-8 rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
            <span className="font-medium text-white">Target roles:</span>{" "}
            {profile.targetRoles}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`}>Contact Sahil</Button>
            <Button href={profile.links.github} variant="secondary">
              {profile.links.githubLabel}
            </Button>
            <Button href={profile.links.linkedin} variant="secondary">
              {profile.links.linkedinLabel}
            </Button>
          </div>
        </MotionFade>

        <MotionFade
          className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-slate-950/30"
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
        >
          <p className="text-sm font-medium text-slate-400">Current focus</p>
          <div className="mt-5 space-y-4">
            {[
              "Recruiter-readable project proof",
              "Python, SQL, FastAPI, PostgreSQL",
              "Analytics, backend workflows, and practical ML",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200"
              >
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                {item}
              </div>
            ))}
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}

function Highlights() {
  return (
    <section className="border-b border-white/10 py-8">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <MotionFade
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            >
              <p className="text-3xl font-semibold tracking-tight text-white">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-sky-200">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                {item.detail}
              </p>
            </MotionFade>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="border-b border-white/10 py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Featured projects"
          title="Projects with clear technical judgment"
          description="Each project is written around the problem, architecture, data work, constraints, and realistic outcomes."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function SkillsSnapshot() {
  return (
    <section className="border-b border-white/10 py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Skills snapshot"
          title="Focused skills, not a keyword dump"
          description="Grouped around the work shown in the projects: analysis, backend data systems, and practical ML evaluation."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <MotionFade
                key={group.title}
                className="rounded-lg border border-white/10 bg-slate-900/50 p-5"
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sky-300/10 text-sky-200">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </MotionFade>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="border-b border-white/10 py-16 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeader
          eyebrow="About me"
          title="Building real-world data systems while studying in Germany"
          description="Sahil focuses on practical data products: clean inputs, reliable transformations, clear APIs, and dashboards or models that can be explained."
        />
        <MotionFade className="space-y-5 text-base leading-8 text-slate-300">
          <p>
            Sahil is a Master&apos;s Data Science student in Germany building
            portfolio projects that connect analysis, backend data workflows,
            and model evaluation to realistic product or operations questions.
          </p>
          <p>
            The goal is to show how he thinks through data problems: define the
            use case, structure the data, build a maintainable workflow, and
            communicate limitations clearly.
          </p>
        </MotionFade>
      </Container>
    </section>
  );
}

function ContactCTA({ resumeExists }: { resumeExists: boolean }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <MotionFade className="rounded-lg border border-sky-300/20 bg-sky-300/[0.06] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <Badge>Recruiter contact</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s talk about working student or intern roles.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                If Sahil&apos;s projects look relevant for a Data Analytics,
                Data Engineering, or ML opening, email or LinkedIn is the best
                next step. Resume download will appear here once the PDF is
                added to the portfolio.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-slate-950/40 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <Button
                  href={`mailto:${profile.email}`}
                  aria-label={`Email ${profile.name}`}
                >
                  <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button
                  href={profile.links.linkedin}
                  variant="secondary"
                  aria-label={profile.links.linkedinLabel}
                >
                  {profile.links.linkedinLabel}
                </Button>
                <Button
                  href={profile.links.github}
                  variant="secondary"
                  aria-label={profile.links.githubLabel}
                >
                  {profile.links.githubLabel}
                </Button>
                {resumeExists ? (
                  <Button
                    href={profile.resume.href}
                    download
                    aria-label="Download Sahil Dubey resume"
                  >
                    <Download aria-hidden="true" className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                ) : (
                  <span className="inline-flex min-h-11 items-center justify-center rounded-md border border-dashed border-white/15 px-4 text-center text-sm font-medium text-slate-400">
                    Resume PDF missing
                  </span>
                )}
              </div>
              {!resumeExists && (
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Expected file: {profile.resume.href}
                </p>
              )}
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <MotionFade className="max-w-2xl">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
    </MotionFade>
  );
}
