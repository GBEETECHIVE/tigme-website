"use client";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { useState } from "react";

const networkCards = [
  {
    name: "Alpine",
    region: "Houston Texas",
    type: "Academic Partner",
    description: "Academic collaboration supporting TIGME's graduate medical education network and physician training.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    name: "Del Rio",
    region: "Southwestern Texas",
    status: "In Development",
    type: "Clinical Site",
    description: "Supporting clinical training and the development of residency opportunities in the community.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=85",
  },
  {
    name: "El Paso",
    region: "West Texas",
    type: "Academic Partner",
    description: "Connecting physician education with the diverse healthcare needs of the border region.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=85",
  },
  {
    name: "East Houston",
    region: "East Houston Texas",
    type: "Clinical Site",
    description: "Expanding access to meaningful training experiences in a growing and connected community.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1800&q=85",
  },
];

export function NetworkSection() {
  return (
    <section className="bg-white px-5 py-16 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 w-full">
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-[#002c5b] sm:text-5xl">The training network</h2>
          <p className="mt-6 w-full text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            TIGME&apos;s training network brings together academic partners, clinical sites, continuity clinics, specialty partners, and research sites to create a connected graduate medical education environment. Spanning communities across the Texas border region and East Houston, the network links residency training with local healthcare systems, universities, community-based care, and research opportunities. This collaborative model gives residents exposure to diverse clinical settings while helping build stronger connections between physician training and the communities they serve.
          </p>
        </div>
        <NetworkCarousel />
      </div>
    </section>
  );
}

function NetworkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  function showNextCard() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % networkCards.length);
  }

  return (
    <div className="relative mx-auto mt-14 h-[500px] w-full max-w-[1120px] sm:h-[560px] lg:mt-20 lg:h-[640px]">
      {networkCards.map((card, index) => {
        const position = (index - activeIndex + networkCards.length) % networkCards.length;
        const isActive = position === 0;
        const positionClasses = [
          "top-[124px] w-full opacity-100 sm:top-[150px] lg:top-[164px]",
          "top-[64px] w-[91%] opacity-95 sm:top-[72px] sm:w-[91%] lg:top-[84px]",
          "top-[24px] w-[84%] opacity-90 sm:top-[28px] sm:w-[84%] lg:top-[30px]",
          "top-0 w-[78%] opacity-85 sm:w-[78%]",
        ][position];
        const layerClasses = ["z-10", "z-[3]", "z-[2]", "z-[1]"][position];

        return (
          <article
            key={card.name}
            className={`absolute inset-x-0 mx-auto h-[350px] overflow-hidden rounded-xl border border-white/40 bg-[#163c6c] text-white shadow-[0_8px_24px_rgba(0,44,91,0.12)] transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)] sm:h-[390px] lg:h-[430px] ${positionClasses} ${layerClasses}`}
          >
            <Image
              src={card.image}
              alt={`${card.name} training network site`}
              fill
              className={`object-cover ${isActive ? "opacity-40" : "opacity-25"}`}
              sizes="(max-width: 768px) 100vw, 1120px"
            />
            <div className={`absolute inset-0 ${isActive ? "bg-[#002c5b]/70" : "bg-[#002c5b]/85"}`} />
            <div className="relative flex h-full flex-col justify-end p-7 sm:p-10 lg:p-12">
              <button
                type="button"
                onClick={showNextCard}
                aria-label={`Show next training network card after ${card.name}`}
                className={`absolute right-6 top-6 grid h-14 w-14 place-items-center rounded-full bg-[#b51219] text-2xl text-white transition hover:bg-[#d2212a] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#163c6c] sm:right-8 sm:top-8 sm:h-16 sm:w-16 ${isActive ? "" : "pointer-events-none opacity-80"}`}
              >
                <span aria-hidden="true">↓</span>
              </button>
              {isActive && <>
                <h3 className="font-display text-4xl font-bold leading-none sm:text-5xl">{card.name}</h3>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-base sm:text-lg">
                  <p className="flex items-center gap-3"><span className="text-xl text-[#f0cf00]">⌖</span>{card.region}</p>
                  {card.status && <p className="flex items-center gap-3"><span className="text-2xl font-light text-[#ff8b8b]">◯</span>{card.status}</p>}
                </div>
                <p className="mt-6 font-semibold text-base sm:text-lg">{card.type}</p>
                <p className="mt-6 max-w-3xl text-sm leading-6 text-white/90 sm:text-base">{card.description}</p>
              </>}
            </div>
          </article>
        );
      })}
    </div>
  );
}
