import { ContentPageShell } from "@/components/ContentPageShell";
import { PageIntro } from "@/components/PageIntro";
import { ProgramsSection } from "@/components/ProgramsSection";

export default function ProgramsPage() {
  return <ContentPageShell><PageIntro eyebrow="Our programs" title="Find your next chapter" copy="Explore accredited residency and fellowship programs built around hands-on learning, mentorship, and community." image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=85" imageAlt="Medical team in a hospital" /><ProgramsSection /></ContentPageShell>;
}