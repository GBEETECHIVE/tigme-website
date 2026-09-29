import Image from "next/image";
import Link from "next/link";

export function PartnerCallout() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 sm:pb-16 lg:px-10 lg:pb-20">
      <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl bg-[#7b1b20] px-6 py-12 text-center text-white sm:min-h-[360px] sm:px-12">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85"
          alt="A group of community partners together"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#7b1b20]/75" />
        <div className="relative z-10 max-w-2xl">
          <span className="text-4xl" aria-hidden="true">✦</span>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight sm:text-4xl">Interested in becoming an affiliated site?</h2>
          <p className="mt-4 text-sm leading-6 text-white/90">Partner with TIGME to support graduate medical education, expand clinical training opportunities, and help prepare the next generation of physicians.</p>
          <Link href="/contact-us" className="mt-7 inline-flex min-h-12 items-center justify-center bg-white px-10 text-sm font-semibold text-[#002c5b] transition hover:bg-[#002c5b] hover:text-white">Become a Partner</Link>
        </div>
      </div>
    </section>
  );
}
