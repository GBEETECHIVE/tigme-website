import Image from "next/image";
import { NewsSectionIntro } from "./NewsSectionIntro";

export function FeaturedNewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-10 lg:py-20">
      <NewsSectionIntro title="Stay Connected With TIGME" centered>
        Discover the latest news, announcements, program developments, and events from the Texas Institute for Graduate Medical Education. Follow TIGME as we expand graduate medical education opportunities, strengthen partnerships, and support the development of physicians and healthcare communities.
      </NewsSectionIntro>
      <article className="group relative mx-auto flex min-h-[300px] max-w-6xl items-end overflow-hidden rounded-xl bg-[#002c5b] text-white sm:min-h-[380px]">
        <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90" alt="Graduate students connecting on a university campus" fill sizes="(max-width: 1280px) 100vw, 1152px" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f43]/90 via-[#002c5b]/35 to-[#002c5b]/10" />
        <div className="relative mx-auto max-w-4xl px-5 pb-7 text-center sm:px-10 sm:pb-9">
          <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">Expanding Graduate Medical Education Across Communities</h3>
          <p className="mt-3 text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">TIGME continues to develop innovative graduate medical education opportunities through collaboration with hospitals, clinical organizations, academic partners, and community healthcare providers. Our growing network supports clinical education, professional development, research, and community-focused training.</p>
        </div>
      </article>
    </section>
  );
}