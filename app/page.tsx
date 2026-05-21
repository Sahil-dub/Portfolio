import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { MotionFade } from "@/components/ui/MotionFade";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <main className="flex-1">
      <Container className="py-24 sm:py-32">
        <MotionFade className="max-w-3xl">
          <Badge>Portfolio foundation</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Master&apos;s Data Science student in Germany building a
            recruiter-focused portfolio for Data Analytics, Data Engineering,
            and ML roles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`}>Contact</Button>
            <Button href={profile.links.github} variant="secondary">
              GitHub
            </Button>
            <Button href={profile.links.linkedin} variant="secondary">
              LinkedIn
            </Button>
          </div>
        </MotionFade>
      </Container>
    </main>
  );
}
