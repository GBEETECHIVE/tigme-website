"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const programs = [
  {
    title: "Podiatric Medicine & Surgery",
    category: "CPME - ACCREDITED",
    status: "Accepting",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    description: "Three-year residency with reconstructive rearfoot and ankle training. Positions, curriculum, and rotation schedule.",
  },
  {
    title: "Family Medicine",
    category: "ACGME - IN DEVELOPMENT",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=85",
    description: "Programs under development at Eagle Pass, Del Rio, and Roswell. Not yet accredited and not recruiting.",
  },
  {
    title: "Internal Medicine",
    category: "ACGME - IN DEVELOPMENT",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    description: "Metropolitan program in development in east Houston. Not yet accredited and not recruiting.",
  },
];

export function ProgramsSection() {
  const hasCarousel = programs.length > 3;
  const [visibleCount, setVisibleCount] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const pageCount = hasCarousel ? Math.ceil(programs.length / visibleCount) : 1;
  const visiblePrograms = hasCarousel ? Array.from({ length: visibleCount }, (_, offset) => programs[(slideIndex * visibleCount + offset) % programs.length]) : programs;

  useEffect(() => {
    if (!hasCarousel) return;
    const interval = window.setInterval(() => setSlideIndex((current) => (current + 1) % pageCount), 5000);
    return () => window.clearInterval(interval);
  }, [hasCarousel, pageCount]);

  return (
    <section id="programs" className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header>
          <h2 className="font-display text-4xl font-medium uppercase leading-none text-[#002c5b] sm:text-5xl">Our programs</h2>
          <p className="mt-6 max-w-3xl text-xs font-medium leading-5 text-[#002c5b] sm:text-sm">One program accepting applications, with additional programs in development across the network.</p>
        </header>

        <aside className="group relative mt-10 overflow-hidden rounded-xl border border-[#e9cacc] bg-[#fffafa] px-4 py-5 text-[#002c5b] transition-colors duration-300 hover:bg-[#fff7f7] sm:px-6 sm:py-6">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#a61922]">Important note</p>
          <h3 className="mt-6 font-display text-xl font-medium uppercase">On programs in development</h3>
          <p className="mt-3 max-w-5xl text-xs leading-4 sm:text-sm">Programs listed as in development have not received accreditation and are not accepting applications. Nothing on those pages should be read as an offer of a training position.</p>
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#c5222c] transition-transform duration-700 ease-out group-hover:scale-x-100" />
        </aside>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-8">
          {visiblePrograms.map((program, index) => (
            <article key={program.title} className="min-w-0">
              <div className="relative aspect-[1.48] overflow-hidden rounded-lg">
                <Image src={program.image} alt={program.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <span className={`absolute right-2 top-2 rounded-md px-3 py-1.5 text-[10px] font-medium ${program.status === "Accepting" ? "bg-[#ffe1e3] text-[#a61922]" : "bg-[#ddebfa] text-[#002c5b]"}`}>{program.status}</span>
              </div>
              <p className="mt-3 text-[10px] font-medium uppercase text-[#002c5b]">{program.category}</p>
              <h3 className="mt-3 font-display text-xl font-medium leading-none text-[#002c5b] sm:text-2xl">{program.title}</h3>
              <p className="mt-2 min-h-12 text-xs leading-4 text-[#002c5b]">{program.description}</p>
              <Link href={program.title === "Podiatric Medicine & Surgery" ? "/programs/podiatric-medicine-surgery" : "/programs"} className="mt-5 flex items-center justify-center gap-5 rounded-md border border-[#c5222c] px-4 py-3 text-sm font-medium text-[#a61922] transition hover:bg-[#a61922] hover:text-white">View program details <span className="text-xl leading-none">→</span></Link>
            </article>
          ))}
        </div>

        {hasCarousel && <div className="mt-12 flex justify-center gap-1.5" aria-label="Program slides">
          {Array.from({ length: pageCount }, (_, index) => <button key={index} type="button" aria-label={`Go to program slide ${index + 1}`} aria-current={slideIndex === index} onClick={() => setSlideIndex(index)} className={`h-1.5 rounded-full transition-all ${slideIndex === index ? "w-7 bg-[#a61922]" : "w-1.5 bg-[#a61922]/70"}`} />)}
        </div>}
      </div>
    </section>
  );
}
