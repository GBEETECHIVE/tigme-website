import { AboutSectionTitle } from "./AboutSectionTitle";

export function PoliciesSection() {
  return (
    <section className="px-5 py-10 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <AboutSectionTitle title="TIGME Policies" copy="Medical graduates who are undergoing postgraduate clinical training through a residency program." centered />
        <div className="relative isolate overflow-hidden rounded-lg bg-[#79151c] px-5 py-12 text-center text-white sm:px-10 sm:py-16">
          <div aria-hidden="true" className="absolute -right-12 top-0 -z-10 rotate-12 font-display text-[120px] font-bold uppercase leading-none text-white/[0.04] sm:text-[200px]">TIGME</div>
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-md border border-white/60 text-2xl" aria-hidden="true">▤</div>
            <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/70">TIGME Policy Library</p>
            <h3 className="mt-2 font-display text-2xl font-semibold uppercase sm:text-3xl">TIGME Policies</h3>
            <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/80">Medical graduates who are undergoing postgraduate clinical training through a residency program.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="#policies" className="inline-flex min-w-36 items-center justify-center gap-2 rounded-sm bg-white px-5 py-3 text-xs font-semibold text-[#002c5b] transition hover:bg-slate-100">View Manual <span aria-hidden="true">↗</span></a>
              <a href="#policies" className="inline-flex min-w-36 items-center justify-center gap-2 rounded-sm border border-white/70 px-5 py-3 text-xs font-semibold text-white transition hover:bg-white hover:text-[#79151c]">Download <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}