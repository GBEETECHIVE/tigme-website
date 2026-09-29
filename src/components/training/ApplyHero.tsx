import Image from "next/image";

export function ApplyHero() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-5 lg:px-10">
      <div className="relative grid min-h-[300px] place-items-center overflow-hidden rounded-xl bg-[#002c5b] text-center text-white sm:min-h-[400px]">
        <Image
          src="/reference/Rectangle 114.png"
          alt="Healthcare team joining hands together"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#001d40]/55" />
        <div className="relative max-w-3xl px-5 py-16">
          <h1 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">Where to apply</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-white/95 sm:text-sm sm:leading-6">
            What to submit, where to submit it, and what happens after you do.
          </p>
        </div>
      </div>
    </section>
  );
}