import Image from "next/image";
import { NewsSectionIntro } from "./NewsSectionIntro";

export function PressReleaseSection() {
  return (
    <section id="press-release" className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-10 lg:py-16">
      <NewsSectionIntro title="Press Release">
        TIGME's training network brings together academic partners, clinical sites, continuity clinics, specialty partners, and research sites to create a connected graduate medical education environment.
      </NewsSectionIntro>
      <article className="grid overflow-hidden rounded-xl border border-slate-100 bg-[#fafafa] p-3 sm:gap-5 sm:p-4 md:grid-cols-[minmax(220px,0.34fr)_1fr]">
        <div className="relative min-h-52 overflow-hidden rounded-lg sm:min-h-64"><Image src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=85" alt="TIGME physicians and residency team" fill sizes="(max-width: 768px) 100vw, 34vw" className="object-cover" /></div>
        <div className="relative flex flex-col justify-center px-2 py-5 sm:px-3 sm:py-8">
          <time className="absolute right-3 top-3 text-[10px] text-slate-400">August 17, 2023</time>
          <p className="font-display text-xl font-bold uppercase text-[#002c5b]">Program News</p>
          <h3 className="mt-3 font-display text-lg font-semibold uppercase leading-tight text-[#a61922] sm:text-xl">The Heights Hospital launches podiatry residency program to continue to foster medical education</h3>
          <p className="mt-4 max-w-3xl text-xs leading-5 text-[#303030]">The Heights Hospital launches Podiatry Residency Program. Village Health and its affiliates launched a CPME-accredited podiatry residency program under TIGME, providing comprehensive training in podiatric medicine, surgery, patient care, research, and professional development.</p>
          <a href="/programs/podiatric-medicine-surgery" aria-label="Read the podiatry residency press release" className="mt-5 grid h-10 w-10 place-items-center self-end rounded-full bg-[#002c5b] text-lg text-white transition-colors hover:bg-[#a61922]">↗</a>
        </div>
      </article>
    </section>
  );
}