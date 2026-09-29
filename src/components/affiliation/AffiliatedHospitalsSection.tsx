import Image from "next/image";
import Link from "next/link";

const sites = [
  {
    name: "White Rock Medical Center",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=85",
    alt: "Hospital exterior surrounded by trees",
  },
  {
    name: "The Heights Hospital",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern hospital building",
  },
  {
    name: "Spring Hospital",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=85",
    alt: "Healthcare facility entrance",
  },
  {
    name: "Clear Creek Emergency Center",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=85",
    alt: "Contemporary medical center",
  },
];

const siteCopy = "At White Rock Medical Center, we're more than a healthcare facility. We're a trusted partner in wellness and recovery, delivering exceptional, patient-focused care with integrity, precision, and compassion.";
const overview = "TIGME works with hospitals and healthcare organizations across its training network to provide residents with hands-on clinical experience, mentorship, and exposure to diverse patient populations. These affiliated sites support residency education while strengthening connections between medical training and the communities TIGME serves.";

function AffiliatedSiteRow({ site, index }: { site: (typeof sites)[number]; index: number }) {
  const image = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 sm:aspect-[1.35] lg:aspect-[1.4]">
      <Image src={site.image} alt={site.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover transition-transform duration-500 hover:scale-[1.03]" />
    </div>
  );
  const details = (
    <div className="flex flex-col justify-center py-2 lg:px-7">
      <h3 className="font-display text-xl font-semibold uppercase text-[#002c5b]">{site.name}</h3>
      <p className="mt-3 flex items-center gap-3 text-xs text-[#002c5b]"><span className="text-lg leading-none text-[#a61922]" aria-hidden="true">⌖</span>9440 Poppy Dr., Dallas, TX 75218</p>
      <p className="mt-6 text-sm leading-6 text-slate-700">{siteCopy}</p>
      <Link href="/programs/podiatric-medicine-surgery" className="group mt-6 inline-flex items-center gap-4 self-end text-xs font-semibold text-[#002c5b] hover:text-[#a61922]">
        Learn More <span aria-hidden="true" className="text-xl transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );

  return (
    <article className="grid items-center gap-5 sm:gap-7 lg:grid-cols-2 lg:gap-0">
      {index % 2 === 0 ? <>{image}{details}</> : <><div className="order-2 lg:order-1">{details}</div><div className="order-1 lg:order-2">{image}</div></>}
    </article>
  );
}

export function AffiliatedHospitalsSection() {
  return (
    <section id="affiliated-sites" className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-10 lg:py-20">
      <div className="mb-10 sm:mb-14">
        <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-[#002c5b] sm:text-4xl">Affiliated Hospitals</h2>
        <p className="mt-5 max-w-6xl text-sm leading-6 text-slate-700">{overview}</p>
      </div>
      <div className="space-y-12 sm:space-y-16 lg:space-y-20">
        {sites.map((site, index) => <AffiliatedSiteRow key={site.name} site={site} index={index} />)}
      </div>
      <div className="mt-14 flex items-center gap-5 sm:mt-16">
        <span className="h-px flex-1 bg-slate-200" />
        <Link href="/#locations" className="inline-flex min-h-11 min-w-32 items-center justify-center gap-3 rounded-full border border-[#002c5b] px-6 text-xs font-semibold text-[#002c5b] transition hover:bg-[#002c5b] hover:text-white">
          See All <span aria-hidden="true" className="text-base">↓</span>
        </Link>
        <span className="h-px flex-1 bg-slate-200" />
      </div>
    </section>
  );
}
