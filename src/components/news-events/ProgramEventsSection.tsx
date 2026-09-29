import Image from "next/image";
import { NewsSectionIntro } from "./NewsSectionIntro";

const eventImages = [
  ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85", "Medical team at a community event"],
  ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85", "Graduate medical education presentation"],
  ["https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=85", "Clinical training event"],
  ["https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=85", "Surgeons working in an operating room"],
  ["https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=85", "Physician participating in clinical training"],
  ["https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=85", "Community healthcare outreach"],
  ["https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=85", "Podiatry resident training"],
  ["https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=85", "Healthcare professionals at a training session"],
  ["https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=85", "Medical education program event"],
];

export function ProgramEventsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:px-10 lg:pt-16">
      <NewsSectionIntro title="Program Events">
        TIGME's training network brings together academic partners, clinical sites, continuity clinics, specialty partners, and research sites to create a connected graduate medical education environment.
      </NewsSectionIntro>
      <div className="relative mx-auto max-w-6xl overflow-hidden">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {eventImages.map(([src, alt]) => (
            <div key={src} className="group relative aspect-[0.88] overflow-hidden bg-slate-100 sm:aspect-[0.86]">
              <Image src={src} alt={alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 28vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus-within:scale-110" />
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>
    </section>
  );
}