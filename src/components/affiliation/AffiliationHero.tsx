import Image from "next/image";

export function AffiliationHero() {
  return (
    <section className="px-5 pb-8 pt-24 sm:pt-28 lg:px-10">
      <div className="relative mx-auto flex min-h-[360px] max-w-7xl items-center justify-center overflow-hidden rounded-xl bg-[#002c5b] px-6 py-16 text-center text-white sm:min-h-[420px] sm:px-12 lg:min-h-[470px]">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90"
          alt="Healthcare and education partners meeting together"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#002c5b]/65" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="font-display text-3xl font-semibold uppercase leading-tight sm:text-4xl lg:text-5xl">
            Our affiliated sites bring education, clinical training, and community healthcare together.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-white/90 sm:text-base">
            Discover the hospitals and healthcare organizations in the TIGME training network, supporting resident education and care in the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
