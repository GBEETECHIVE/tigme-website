import type { Metadata } from "next";
import { ContentPageShell } from "@/components/ContentPageShell";
import { PodiatryHero } from "@/components/program-detail/PodiatryHero";
import { ProgramOverview } from "@/components/program-detail/ProgramOverview";
import { ResidentTeamSection } from "@/components/program-detail/ResidentTeamSection";
import { ResidencyManualSection } from "@/components/program-detail/ResidencyManualSection";
import { ProgramCommitteeSection } from "@/components/program-detail/ProgramCommitteeSection";
import { PodiatryResourcesSection } from "@/components/program-detail/PodiatryResourcesSection";
import { OtherResourcesSection } from "@/components/program-detail/OtherResourcesSection";

export const metadata: Metadata = {
  title: "Podiatric Medicine & Surgery | TIGME",
  description: "Explore TIGME's Podiatric Medicine and Surgery residency program.",
};

export default function PodiatricMedicineSurgeryPage() {
  return (
    <ContentPageShell>
      <PodiatryHero />
      <ProgramOverview />
      <ResidentTeamSection />
      <ResidencyManualSection />
      <ProgramCommitteeSection />
      <PodiatryResourcesSection />
      <OtherResourcesSection />
    </ContentPageShell>
  );
}