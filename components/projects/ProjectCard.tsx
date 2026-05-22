"use client";

import Image from "next/image";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-2xl shadow-slate-950/20"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6, borderColor: "rgba(125, 211, 252, 0.35)" }}
      transition={{ duration: 0.28, delay: index * 0.06, ease: "easeOut" }}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-slate-900">
        <Image
          src={project.previewImage}
          alt={`${project.title} preview`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover opacity-80 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 translate-y-2 rounded-md border border-white/15 bg-slate-950/75 px-2.5 py-1 text-xs font-medium text-sky-100 opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Dashboard preview
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="border-emerald-300/20 bg-emerald-300/10 text-emerald-100">
            {project.status}
          </Badge>
          {project.types.map((type) => (
            <span
              key={type}
              className="rounded-md border border-white/10 px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {type}
            </span>
          ))}
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
          {project.businessProblem}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          <Button
            href={project.githubUrl}
            variant="secondary"
            className="h-10 px-3 text-xs"
          >
            <Code2 aria-hidden="true" className="mr-1.5 h-3.5 w-3.5" />
            GitHub
          </Button>
          <Button
            href={project.demoUrl}
            variant="secondary"
            className="h-10 px-3 text-xs"
          >
            <ExternalLink aria-hidden="true" className="mr-1.5 h-3.5 w-3.5" />
            Dashboard
          </Button>
          <Button
            href={project.caseStudyUrl}
            className="h-10 px-3 text-xs"
          >
            Case Study
            <ArrowRight aria-hidden="true" className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
