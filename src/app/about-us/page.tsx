import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AccreditationSection } from "@/components/about/AccreditationSection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { GovernanceSection } from "@/components/about/GovernanceSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { PoliciesSection } from "@/components/about/PoliciesSection";
import { PresidentSection } from "@/components/about/PresidentSection";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { ContentPageShell } from "@/components/ContentPageShell";

export const metadata: Metadata = {
  title: "About TIGME | Texas Institute for Graduate Medical Education",
  description: "Learn about TIGME's mission, leadership, values, governance, accreditation, and policies.",
};

export default function AboutUsPage() {
  return (
    <ContentPageShell>
      <AboutHero />
      <WhoWeAreSection />
      <PresidentSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <GovernanceSection />
      <AccreditationSection />
      <PoliciesSection />
    </ContentPageShell>
  );
}