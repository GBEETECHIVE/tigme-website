import Image from "next/image";

const residents = [
  {
    name: "Brad Hagan",
    credential: "DPM",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Rebecca Schwartz",
    credential: "DPM",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
  },
];

export function ResidentTeamSection() {
  return (
    <section className="bg-[#fbf5f6] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold uppercase text-[#002c5b] sm:text-4xl">Our Residence Team</h2>
          <p className="mt-3 text-xs text-slate-700 sm:text-sm">Medical graduates who are undergoing postgraduate clinical training through a residency program.</p>
        </header>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:gap-6">
          {residents.map((resident) => (
            <article key={resident.name} className="group relative aspect-[1.55] w-[86vw] max-w-[420px] shrink-0 snap-center overflow-hidden rounded-lg bg-[#002c5b] text-white sm:w-full sm:max-w-none">
              <Image src={resident.image} alt={`${resident.name}, podiatry resident`} fill sizes="(max-width: 640px) 86vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002c5b]/90 via-[#002c5b]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                <div><h3 className="font-display text-xl font-medium sm:text-2xl">{resident.name}</h3><p className="text-xs">{resident.credential}</p></div>
                <nav className="flex gap-3 text-sm" aria-label={`${resident.name} social links`}><a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-sky-200">in</a><a href="https://x.com" aria-label="X" className="hover:text-sky-200">𝕏</a></nav>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}