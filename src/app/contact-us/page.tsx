import { ContentPageShell } from "@/components/ContentPageShell";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { FaqSection } from "@/components/contact/FaqSection";

export default function ContactUsPage() {
  return (
    <ContentPageShell>
      <ContactHeroSection />
      <FaqSection />
    </ContentPageShell>
  );
}