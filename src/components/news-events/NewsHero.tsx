import Image from "next/image";

export function NewsHero() {
  return (
    <section className="relative flex min-h-[460px] items-end overflow-hidden bg-white pt-24 sm:min-h-[540px] lg:min-h-[600px]">
      <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2200&q=90" alt="Physicians and medical trainees working together" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent sm:h-36" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:pb-16 lg:px-10 lg:pb-20">
        <div className="max-w-md">
          <h1 className="font-display text-4xl font-bold leading-tight text-[#002c5b] sm:text-5xl">News &amp; <span className="text-[#a61922]">Events</span></h1>
          <p className="mt-4 max-w-sm text-xs leading-5 text-[#242424] sm:text-sm sm:leading-6">Discover the latest news, announcements, program developments, and events from the Texas Institute for Graduate Medical Education.</p>
        </div>
      </div>
    </section>
  );
}