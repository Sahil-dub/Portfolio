import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import type { Project } from "@/content/projects";

type CaseStudyLayoutProps = {
  project: Project;
};

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <main className="flex-1">
      <section className="border-b border-white/10">
        <Container className="py-14 sm:py-20">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <ArrowLeft aria-hidden="true" className="mr-2 h-4 w-4" />
            Projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>{project.status}</Badge>
                {project.types.map((type) => (
                  <span
                    key={type}
                    className="rounded-md border border-white/10 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {project.overview}
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-slate-900">
              <Image
                src={project.previewImage}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit rounded-lg border border-white/10 bg-white/[0.04] p-5 lg:sticky lg:top-24">
            <p className="text-sm font-medium text-white">Tech stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-2">
              <Button href={project.githubUrl} variant="secondary">
                <Code2 aria-hidden="true" className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button href={project.demoUrl} variant="secondary">
                <ExternalLink aria-hidden="true" className="mr-2 h-4 w-4" />
                Dashboard / Demo
              </Button>
            </div>
          </aside>

          <div className="space-y-5">
            <CaseStudySection
              title="Project overview"
              body={[project.overview]}
            />
            <CaseStudySection title="Problem" body={[project.businessProblem]} />
            <CaseStudySection title="Data / Inputs" body={project.dataInputs} />
            <CaseStudySection title="Approach" body={project.approach} />
            <CaseStudySection title="Results" body={project.results} />
            <CaseStudySection title="Challenges" body={project.challenges} />
            <CaseStudySection
              title="What I learned"
              body={project.learnings}
            />
            <CaseStudySection
              title="Links"
              body={[
                "GitHub and dashboard/demo links are placeholders until the final repositories and deployments are attached.",
              ]}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}

function CaseStudySection({
  title,
  body,
}: {
  title: string;
  body: string[];
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <h2 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
        {body.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}
