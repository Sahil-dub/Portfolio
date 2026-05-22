import { BarChart3, Database, LineChart, Mail } from "lucide-react";
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

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      <Hero />
      <FeaturedProjects />
      <SkillsSnapshot />
      <AboutMe />
      <ContactCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.09),transparent_28%)]" />
      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <MotionFade className="max-w-4xl">
          <Badge>Open to Working Student / Intern roles</Badge>
          <h1 className="mt-7 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
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
              GitHub
            </Button>
            <Button href={profile.links.linkedin} variant="secondary">
              LinkedIn
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
              "Analytics, pipelines, and practical ML",
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

function FeaturedProjects() {
  return (
    <section className="border-b border-white/10 py-18 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Featured projects"
          title="Proof-oriented project previews"
          description="A compact preview layer for case studies that will later show the problem, approach, stack, and measurable outcome."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
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
    <section className="border-b border-white/10 py-18 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Skills snapshot"
          title="A practical data stack"
          description="Organized around the roles Sahil is targeting, with enough signal for a recruiter to scan quickly."
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
    <section className="border-b border-white/10 py-18 sm:py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeader
          eyebrow="About me"
          title="Focused on useful, explainable data work"
          description="The portfolio is designed to make project judgment visible: what problem was solved, what data work was done, and how the result can be trusted."
        />
        <MotionFade className="space-y-5 text-base leading-8 text-slate-300">
          <p>
            Sahil is a Master&apos;s Data Science student in Germany targeting
            roles where analysis, engineering, and practical ML meet real
            product or business questions.
          </p>
          <p>
            This site will prioritize clear case studies over buzzwords:
            concise context, honest technical choices, and artifacts recruiters
            can evaluate quickly.
          </p>
        </MotionFade>
      </Container>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-18 sm:py-24">
      <Container>
        <MotionFade className="rounded-lg border border-sky-300/20 bg-sky-300/[0.06] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Badge>Contact</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let&apos;s talk about data roles.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                For Working Student or Intern opportunities in analytics, data
                engineering, or ML, the fastest path is email or LinkedIn.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
                Email
              </Button>
              <Button href={profile.links.linkedin} variant="secondary">
                LinkedIn
              </Button>
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
