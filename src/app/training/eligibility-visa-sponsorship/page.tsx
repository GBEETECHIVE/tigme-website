import type { Metadata } from "next";
import { ContentPageShell } from "@/components/ContentPageShell";
import { EligibilityHero } from "@/components/training/EligibilityHero";
import { EligibilityIntro } from "@/components/training/EligibilityIntro";
import { EligibilitySteps } from "@/components/training/EligibilitySteps";
import { SponsorshipFinder } from "@/components/training/SponsorshipFinder";
import { SponsorshipFaq } from "@/components/training/SponsorshipFaq";

export const metadata: Metadata = {
  title: "Eligibility & Visa Sponsorship | TIGME",
  description: "Review eligibility requirements and visa sponsorship guidance for TIGME residency programs.",
};

export default function EligibilityVisaSponsorshipPage() {
  return (
    <ContentPageShell>
      <div className="pt-20 sm:pt-24">
        <EligibilityHero />
        <EligibilityIntro />
        <EligibilitySteps />
        <SponsorshipFinder />
        <SponsorshipFaq />
      </div>
    </ContentPageShell>
  );
}