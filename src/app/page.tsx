import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LocationsSection } from "@/components/LocationsSection";
import { LocationsMapSection } from "@/components/LocationsMapSection";
import { Navbar } from "@/components/Navbar";
import { NetworkSection } from "@/components/NetworkSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { UpdatesSection } from "@/components/UpdatesSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <NetworkSection />
      <LocationsSection />
      <ProgramsSection />
      <LocationsMapSection />
      <UpdatesSection />
      <Footer />
    </main>
  );
}
