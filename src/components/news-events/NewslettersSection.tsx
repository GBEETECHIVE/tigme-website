import Image from "next/image";
import { NewsSectionIntro } from "./NewsSectionIntro";

const newsletters = [
  { title: "TIGME Monthly Newsletter November 2023 - Vol 9", volume: "VOL. 9", image: "https://images.unsplash.com/photo-1504439904031-93astedf773b?auto=format&fit=crop&w=900&q=85" },
  { title: "TIGME Monthly Newsletter November 2023 - Vol 10", volume: "VOL. 10", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85" },
  { title: "TIGME Monthly Newsletter September 2023 - Vol 6", volume: "VOL. 6", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85" },
];

export function NewslettersSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-10 lg:py-16">
      <NewsSectionIntro title="Newsletters">
        TIGME's training network brings together academic partners, clinical sites, continuity clinics, specialty partners, and research sites to create a connected graduate medical education environment.
      </NewsSectionIntro>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsletters.map((newsletter) => (
          <article key={newsletter.volume} className="min-w-0">
            <h3 className="min-h-12 font-display text-base font-medium uppercase leading-tight text-[#a61922]">{newsletter.title}</h3>
            <div className="relative mt-3 aspect-[0.78] overflow-hidden border-t border-slate-300 bg-white p-3 shadow-sm sm:p-4">
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <span className="bg-[#0064a2] px-2 py-1 text-[8px] font-bold leading-tight text-white">VILLAGE<br />HEALTH</span>
                <span className="font-display text-lg font-bold uppercase text-black sm:text-xl">Newsletter</span>
                <span className="text-[7px] font-bold text-[#a61922]">{newsletter.volume}</span>
              </div>
              <div className="mt-2 grid h-[calc(100%-48px)] grid-cols-[1.1fr_0.9fr] grid-rows-[1fr_0.8fr] gap-2">
                <div className="relative row-span-2 overflow-hidden bg-slate-100"><Image src={newsletter.image} alt="" fill sizes="(max-width: 1024px) 45vw, 25vw" className="object-cover" /></div>
                <div className="relative overflow-hidden bg-slate-100"><Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80" alt="" fill sizes="(max-width: 1024px) 30vw, 15vw" className="object-cover" /></div>
                <div className="space-y-1 overflow-hidden pt-1"><p className="font-display text-[8px] font-bold uppercase text-[#a61922]">Inside this issue</p><div className="h-1 w-full bg-slate-300" /><div className="h-1 w-4/5 bg-slate-200" /><div className="h-1 w-full bg-slate-200" /><div className="h-1 w-3/4 bg-slate-200" /><div className="mt-2 h-1 w-full bg-slate-200" /><div className="h-1 w-5/6 bg-slate-200" /><div className="h-1 w-full bg-slate-200" /></div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}