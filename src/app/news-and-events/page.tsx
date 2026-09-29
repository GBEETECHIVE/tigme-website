import type { Metadata } from "next";
import { ContentPageShell } from "@/components/ContentPageShell";
import { FeaturedNewsSection } from "@/components/news-events/FeaturedNewsSection";
import { LatestNewsSection } from "@/components/news-events/LatestNewsSection";
import { NewsHero } from "@/components/news-events/NewsHero";
import { NewslettersSection } from "@/components/news-events/NewslettersSection";
import { PressReleaseSection } from "@/components/news-events/PressReleaseSection";
import { ProgramEventsSection } from "@/components/news-events/ProgramEventsSection";

export const metadata: Metadata = {
  title: "News & Events | TIGME",
  description: "News, announcements, program developments, and events from the Texas Institute for Graduate Medical Education.",
};

export default function NewsAndEventsPage() {
  return (
    <ContentPageShell>
      <NewsHero />
      <FeaturedNewsSection />
      <LatestNewsSection />
      <PressReleaseSection />
      <NewslettersSection />
      <ProgramEventsSection />
    </ContentPageShell>
  );
}