import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { MotionFade } from "@/components/ui/MotionFade";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects | Sahil Dubey",
  description:
    "Project case study previews for Sahil Dubey's data analytics, data engineering, and machine learning portfolio.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-white/10">
        <Container className="py-16 sm:py-24">
          <MotionFade className="max-w-3xl">
            <Badge>Projects</Badge>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Case study previews
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Recruiter-readable project pages focused on the business problem,
              data inputs, technical approach, results, and lessons learned.
            </p>
          </MotionFade>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </main>
  );
}
