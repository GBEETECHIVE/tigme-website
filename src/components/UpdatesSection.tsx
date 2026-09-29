import Image from "next/image";

const updates = [
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=85",
    title: "Podiatric Medicine & Surgery",
    description: "Three-year residency with reconstructive rearfoot and ankle training. Positions, curriculum, and rotation schedule.",
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1100&q=85",
    title: "Medical Education In Practice",
    description: "Discover the people and programs strengthening healthcare across the TIGME network.",
  },
];

export function UpdatesSection() {
  return (
    <section id="updates" className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="mb-12">
        <h2 className="font-display text-4xl font-medium uppercase leading-none text-[#002c5b] sm:text-5xl">Latest Updates</h2>
        <p className="mt-7 text-sm text-[#002c5b]">One program accepting applications, with additional programs in development across the network.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {updates.map((update) => (
          <article key={update.title} className="group relative aspect-[1.28] overflow-hidden rounded-lg bg-[#002c5b] focus-within:ring-2 focus-within:ring-[#c5222c]">
            <Image src={update.image} alt={update.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-[#002c5b]/0 transition duration-300 group-hover:bg-[#002c5b]/75 group-focus-within:bg-[#002c5b]/75" />
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:p-6">
              <h3 className="font-display text-2xl font-semibold uppercase leading-none sm:text-3xl">{update.title}</h3>
              <p className="mt-2 max-w-lg text-xs leading-5 text-white/90 sm:text-sm">{update.description}</p>
              <a href="#news" aria-label={`Read ${update.title}`} className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-[#c5222c] text-xl leading-none text-white transition hover:bg-white hover:text-[#c5222c] sm:bottom-5 sm:right-5">↗</a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-1.5" aria-label="Latest updates slides">
        <span className="h-1.5 w-7 rounded-full bg-[#a51f27]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#a51f27]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#a51f27]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#a51f27]" />
      </div>
    </section>
  );
}
