"use client";

import { useState } from "react";

const GOOGLE_MAP_EMBED_URL = process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL || "https://www.google.com/maps?q=Houston%2C%20Texas&output=embed";

const locations = [
  { name: "Houston", position: "left-[57%] top-[54%]" },
  { name: "Alpine", position: "left-[17%] top-[57%]" },
  { name: "El Paso", position: "left-[6%] top-[63%]" },
  { name: "Del Rio", position: "left-[30%] top-[68%]" },
  { name: "Amarillo", position: "left-[41%] top-[23%]" },
  { name: "East Houston", position: "left-[71%] top-[57%]" },
];

export function LocationsMapSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white px-5 py-5 sm:py-20 lg:px-10 lg:py-15">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-medium uppercase leading-[0.95] text-[#002c5b] sm:text-5xl lg:text-6xl">
          Six locations across two states
        </h2>
        <p className="mt-7 max-w-5xl text-sm leading-6 text-[#002c5b] sm:text-base sm:leading-7">
          The network spans rural border hospitals, a federally qualified health center, a university health sciences campus, metropolitan participating sites, and a dedicated research institute.
        </p>

        <div className={`relative mt-12 overflow-hidden rounded-xl transition-all duration-700 ease-out ${isExpanded ? "h-[440px] sm:h-[560px] lg:h-[650px]" : "h-[200px] sm:h-[250px] lg:h-[300px]"}`}>
          <iframe
            title="TIGME locations across Texas"
            src={GOOGLE_MAP_EMBED_URL}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#eaf6fb]/15" />
          {isExpanded && locations.map((location) => (
            <div key={location.name} className={`absolute ${location.position} flex -translate-x-1/2 -translate-y-full flex-col items-center`}>
              <span className="whitespace-nowrap rounded bg-[#002c5b] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg">{location.name}</span>
              <span className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-[#b51219] text-lg text-white shadow-lg after:absolute after:bottom-[-5px] after:h-2 after:w-2 after:rotate-45 after:bg-[#b51219]">•</span>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse location map" : "Expand location map"}
            className="absolute bottom-4 right-4 grid h-14 w-14 place-items-center !rounded-full bg-[#b51219] text-3xl text-white shadow-lg transition hover:bg-[#d2212a] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#b51219] sm:bottom-6 sm:right-6"
          >
            <span className={`transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`} aria-hidden="true">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}