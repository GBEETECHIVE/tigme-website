import type { Metadata } from "next";
import { ContentPageShell } from "@/components/ContentPageShell";
import { AffiliationHero } from "@/components/affiliation/AffiliationHero";
import { AffiliatedHospitalsSection } from "@/components/affiliation/AffiliatedHospitalsSection";
import { PartnerCallout } from "@/components/affiliation/PartnerCallout";

export const metadata: Metadata = {
  title: "Affiliated Hospitals | TIGME",
  description: "Explore the hospitals and healthcare organizations in the TIGME training network.",
};

export default function AffiliationPage() {
  return (
    <ContentPageShell>
      <AffiliationHero />
      <AffiliatedHospitalsSection />
      <PartnerCallout />
    </ContentPageShell>
  );
}
