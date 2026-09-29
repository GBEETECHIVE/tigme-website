import Image from "next/image";

export function AboutHero() {
  return (
    <section id="top" className="relative flex min-h-[410px] items-end overflow-hidden bg-[#f3f8fa] pt-28 sm:min-h-[490px] lg:min-h-[560px]">
      <Image
        src="/reference/hero-about.png"
        alt="A team of physicians collaborating in a hospital"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />
      <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-12 sm:pb-16 lg:px-10 lg:pb-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl font-semibold uppercase leading-[0.95] text-[#002c5b] sm:text-7xl">About <span className="text-[#a61922]">Us</span></h1>
          <p className="mt-5 max-w-xl text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">
            The Texas Institute for Graduate Medical Education (TIGME) is a nonprofit organization dedicated to advancing graduate medical education by developing innovative training programs that prepare physicians for the evolving needs of healthcare. By bringing together community hospitals, physician groups, clinics, academic institutions, and healthcare organizations, TIGME creates collaborative learning environments where physicians develop clinical skills and serve their communities.
          </p>
        </div>
      </div>
    </section>
  );
}