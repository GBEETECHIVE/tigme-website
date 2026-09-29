"use client";

import { useEffect, useRef } from "react";

export type ResourceLogo = {
  name: string;
  mark: string;
  className: string;
};

export function LogoCarousel({ logos, label }: { logos: ResourceLogo[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || logos.length < 2) return;

    const interval = window.setInterval(() => {
      const firstLogo = track.querySelector<HTMLElement>("[data-logo]");
      if (!firstLogo) return;

      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      const step = firstLogo.getBoundingClientRect().width + gap;
      const loopWidth = track.scrollWidth / 2;

      if (track.scrollLeft + track.clientWidth + step >= loopWidth) {
        track.scrollTo({ left: Math.max(0, track.scrollLeft - loopWidth), behavior: "smooth" });
      } else {
        track.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3000);

    return () => window.clearInterval(interval);
  }, [logos.length]);

  const loopedLogos = [...logos, ...logos];

  return (
    <div
      ref={trackRef}
      aria-label={label}
      className="flex snap-x snap-mandatory gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {loopedLogos.map((logo, index) => (
        <div
          key={`${logo.name}-${index}`}
          data-logo
          aria-label={logo.name}
          className="flex h-20 w-[48%] shrink-0 snap-start items-center justify-center px-2 sm:w-[31%] lg:w-[23%]"
        >
          <div className={`flex max-w-full items-center gap-2 ${logo.className}`}>
            <span aria-hidden="true" className="font-display text-3xl font-bold leading-none sm:text-4xl">{logo.mark}</span>
            <span className="max-w-32 text-xs font-semibold leading-tight sm:text-sm">{logo.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}