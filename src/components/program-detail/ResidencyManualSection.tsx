import Link from "next/link";

export function ResidencyManualSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold uppercase text-[#002c5b] sm:text-4xl">Residency Manual</h2>
          <p className="mt-3 text-xs text-slate-700 sm:text-sm">Medical graduates who are undergoing postgraduate clinical training through a residency program.</p>
        </header>
        <div className="relative overflow-hidden rounded-xl bg-[#75131b] px-5 py-12 text-center text-white sm:px-10 sm:py-16">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_120%,transparent_25%,rgba(70,0,8,0.65)_26%,transparent_58%),radial-gradient(ellipse_at_80%_-15%,transparent_30%,rgba(70,0,8,0.6)_31%,transparent_65%)] opacity-70" />
          <div className="relative mx-auto max-w-xl">
            <span aria-hidden="true" className="text-3xl">▤</span>
            <h3 className="mt-3 font-display text-2xl font-semibold uppercase sm:text-3xl">Download Residency Manual</h3>
            <p className="mx-auto mt-4 max-w-md text-xs leading-5 text-white/80">Medical graduates who are undergoing postgraduate clinical training through a residency program.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="#manual" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-white px-6 text-xs font-semibold text-[#002c5b] hover:bg-[#f2e7e8]">View Manual <span aria-hidden="true">⊙</span></Link>
              <Link href="#download" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-white px-6 text-xs font-semibold text-[#002c5b] hover:bg-[#f2e7e8]">Download <span aria-hidden="true" className="text-[#c5222c]">↓</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}