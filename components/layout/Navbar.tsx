import Link from "next/link";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { profile } from "@/content/profile";

const links = [
  { href: profile.links.github, label: "GitHub", icon: Code2 },
  { href: profile.links.linkedin, label: "LinkedIn", icon: BriefcaseBusiness },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Sahil Dubey
        </Link>
        <nav aria-label="Primary navigation" className="flex items-center gap-1">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-400 transition hover:bg-white/10 hover:text-white"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noreferrer" : undefined
                }
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
