import Image from "next/image";
import { NewsSectionIntro } from "./NewsSectionIntro";

const stories = [
  { title: "Building the TIGME Training Network", description: "TIGME is developing a connected network of academic, clinical, continuity, specialty, and research sites to support comprehensive physician training across multiple communities.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=85" },
  { title: "Developing New Residency Opportunities", description: "TIGME continues to advance residency programs designed to expand access to high-quality graduate medical education and prepare physicians to serve diverse communities.", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=85" },
  { title: "Strengthening Academic & Clinical Partnerships", description: "Collaboration between healthcare organizations and academic institutions is an important part of TIGME's approach to developing sustainable graduate medical education programs.", image: "/reference/Rectangle 75 (8).png" },
];

export function LatestNewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-10 lg:py-16">
      <NewsSectionIntro title="Latest News">
        TIGME's training network brings together academic partners, clinical sites, continuity clinics, specialty partners, and research sites to create a connected graduate medical education environment.
      </NewsSectionIntro>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <article key={story.title} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-[0_2px_12px_rgba(0,44,91,0.04)]">
            <div className="relative aspect-[1.45] overflow-hidden rounded-lg bg-slate-100"><Image src={story.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" /></div>
            <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
              <h3 className="font-display text-base font-bold uppercase leading-tight text-[#002c5b]">{story.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-5 text-[#303030]">{story.description}</p>
              <a href="#press-release" className="mt-4 flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#002c5b] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#a61922]">View Details <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-1" aria-label="News pagination"><span className="h-1.5 w-7 rounded-full bg-[#a61922]" /><span className="h-1.5 w-1.5 rounded-full bg-[#a61922]" /><span className="h-1.5 w-1.5 rounded-full bg-[#a61922]" /></div>
    </section>
  );
}