import { existsSync } from "node:fs";
import { join } from "node:path";
import { Container } from "@/components/layout/Container";
import { profile } from "@/content/profile";

export function Footer() {
  const resumeExists = existsSync(
    join(process.cwd(), "public", "resume", profile.resume.filename),
  );

  const links = [
    { href: `mailto:${profile.email}`, label: "Email" },
    { href: profile.links.linkedin, label: profile.links.linkedinLabel },
    { href: profile.links.github, label: profile.links.githubLabel },
  ];

  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col gap-5 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <p className="mt-1">{profile.location}</p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
          {resumeExists ? (
            <a
              href={profile.resume.href}
              download
              className="rounded-sm transition hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Resume
            </a>
          ) : (
            <span className="text-slate-600">Resume pending</span>
          )}
        </nav>
      </Container>
    </footer>
  );
}
