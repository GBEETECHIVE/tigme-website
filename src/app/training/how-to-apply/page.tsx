import type { Metadata } from "next";
import { ContentPageShell } from "@/components/ContentPageShell";
import { ApplyHero } from "@/components/training/ApplyHero";
import { ApplicationDocumentsSection } from "@/components/training/ApplicationDocumentsSection";
import { CurrentlyAcceptingSection } from "@/components/training/CurrentlyAcceptingSection";
import { KeyDatesSection } from "@/components/training/KeyDatesSection";

export const metadata: Metadata = {
  title: "How to Apply | TIGME",
  description: "Application steps, key dates, and required documents for TIGME residency training.",
};

export default function HowToApplyPage() {
  return (
    <ContentPageShell>
      <div className="pt-20 sm:pt-24">
        <ApplyHero />
        <CurrentlyAcceptingSection />
        <KeyDatesSection />
        <ApplicationDocumentsSection />
      </div>
    </ContentPageShell>
  );
}