import Image from "next/image";

export function PodiatryHero() {
  return (
    <section className="relative isolate min-h-[390px] overflow-hidden bg-[#f4f8f9] pt-24 sm:min-h-[500px] lg:min-h-[590px]">
      <Image
        src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1800&q=90"
        alt="Podiatrist examining a patient's foot"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/15" />
      <div className="mx-auto flex min-h-[330px] max-w-[1280px] items-center px-5 py-10 sm:min-h-[420px] lg:min-h-[500px] lg:px-10">
        <div className="max-w-md">
          <h1 className="font-display text-4xl font-semibold leading-none text-[#002c5b] sm:text-5xl">
            About <span className="text-[#a61922]">Podiatry</span>
          </h1>
          <p className="mt-4 max-w-sm text-xs leading-[1.45] text-slate-800 sm:text-sm">
            Podiatry focuses on the diagnosis, treatment, and prevention of foot, ankle, and lower-extremity conditions, helping patients move better, live comfortably, and improve their quality of life.
          </p>
        </div>
      </div>
    </section>
  );
}