import { Container } from "@/components/layout/Container";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col gap-2 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}</p>
      </Container>
    </footer>
  );
}
