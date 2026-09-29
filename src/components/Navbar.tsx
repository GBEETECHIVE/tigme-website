"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = ["About", "Training", "GME", "Research", "Network", "Become a Partner"];
const aboutLinks = ["Who We Are", "Mission, Vision & Values", "Leadership", "Governance", "Accreditation", "History"];
const affiliationLinks = ["All Affiliation", "Sul Ross State University International", "Ibn Sina Foundation"];
const gmeLinks = [
  "Sponsoring Institution",
  "Designated Institutional Officials",
  "GMEC",
  "Clinical Learning Environment",
  "Quality & Patient Safety",
  "Well-Being",
  "Institutional Policies",
];
const trainingGroups = [
  { title: "Programs", links: ["Podiatric Medicine & Surgery", "Program in Development"] },
  { title: "Before You Apply", links: ["Eligibility & Visa Sponsorship", "Salary & Benefits", "How to Apply", "Meet our Residents", "Life in the Region", "Applicant FAQ"] },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setHoveredItem(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-[1280px] -translate-x-1/2">
      <div className="flex h-[64px] items-center gap-4 rounded-full border border-slate-200/90 bg-white/95 px-4 shadow-[0_3px_14px_rgba(0,0,0,0.08)] backdrop-blur-md sm:h-[72px] sm:px-5 lg:gap-8 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="TIGME home">
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-slate-300 bg-white sm:h-12 sm:w-12">
            <span className="font-display text-lg font-bold text-[#002c5b]">T</span>
            <span className="absolute inset-1 rounded-full border border-[#c5222c]/50" />
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-[15px] font-semibold text-[#002c5b] lg:flex">
          <Link href="/news-and-events" className="transition-colors hover:text-[#c5222c]">News &amp; Events</Link>
          <Link href="/contact-us" className="transition-colors hover:text-[#c5222c]">Contact</Link>
        </nav>

        <label className="ml-auto hidden h-14 max-w-[414px] flex-1 items-center rounded-full border border-slate-200 bg-white px-6 text-[#002c5b] lg:flex">
          <span className="sr-only">Search</span>
          <input type="search" placeholder="Search" className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-slate-400" />
          <span className="text-2xl leading-none text-slate-500" aria-hidden="true">⌕</span>
        </label>

        <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="site-menu" aria-label={isOpen ? "Close navigation" : "Open navigation"} className="ml-auto grid h-12 w-12 shrink-0 place-items-center rounded-full lg:ml-0">
          <span className="flex w-9 flex-col gap-[6px]">
            <span className={`h-[6px] rounded-full bg-[#a61922] transition-transform ${isOpen ? "translate-y-3 rotate-45" : ""}`} />
            <span className={`h-[6px] rounded-full bg-[#a61922] transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-[6px] rounded-full bg-[#a61922] transition-transform ${isOpen ? "-translate-y-3 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div id="site-menu" onMouseLeave={() => setHoveredItem(null)} className={`absolute left-0 right-0 top-[calc(100%+0.75rem)] origin-top overflow-hidden rounded-[28px] border border-slate-200 bg-[#fff9f9] shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ${isOpen ? "visible max-h-[calc(100vh-6rem)] scale-100 opacity-100" : "invisible max-h-0 scale-95 opacity-0"}`}>
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:p-10">
          <nav className="flex flex-col">
            {menuItems.map((item) => {
              const hasSubmenu = item === "About" || item === "Training" || item === "GME";
              const href = item === "Network" ? "#locations" : item === "GME" ? "/programs" : "#contact";
              const className = "flex w-full items-center justify-between border-b border-[#a61922]/45 py-5 text-left text-[21px] font-medium text-[#a61922] transition-colors hover:bg-white sm:py-6 sm:text-2xl";

              return hasSubmenu ? (
                <button
                  key={item}
                  type="button"
                  aria-expanded={hoveredItem === item}
                  onMouseEnter={() => setHoveredItem(item)}
                  onFocus={() => setHoveredItem(item)}
                  onClick={() => setHoveredItem((current) => current === item ? null : item)}
                  className={className}
                >
                  <span>{item}</span><span aria-hidden="true" className="text-2xl">›</span>
                </button>
              ) : (
                <a
                  key={item}
                  href={href}
                  onMouseEnter={() => setHoveredItem(null)}
                  onFocus={() => setHoveredItem(null)}
                  onClick={() => { setIsOpen(false); setHoveredItem(null); }}
                  className={className}
                >
                  <span>{item}</span><span aria-hidden="true" className="text-2xl">›</span>
                </a>
              );
            })}
          </nav>
          {hoveredItem === "About" ? (
            <div className="rounded-[28px] bg-white p-7 lg:p-8">
              <p className="font-display text-xl font-bold uppercase tracking-wide text-[#002c5b]">About</p>
              <div className="mt-5 space-y-4">{aboutLinks.map((link) => <Link key={link} href="/about-us" onClick={() => setIsOpen(false)} className="block text-[17px] text-[#a61922] hover:text-[#002c5b]">{link}</Link>)}</div>
              <p className="mt-12 font-display text-xl font-bold uppercase tracking-wide text-[#002c5b]">Affiliation</p>
              <div className="mt-5 space-y-4">{affiliationLinks.map((link) => <Link key={link} href={link === "All Affiliation" ? "/about-us/affiliation" : "/about-us"} onClick={() => setIsOpen(false)} className="block text-[17px] text-[#a61922] hover:text-[#002c5b]">{link}</Link>)}</div>
            </div>
          ) : hoveredItem === "Training" ? (
            <div className="rounded-[28px] bg-white p-7 lg:p-8">
              {trainingGroups.map((group, groupIndex) => (
                <section key={group.title} className={groupIndex > 0 ? "mt-10" : ""}>
                  <h2 className="font-display text-xl font-bold uppercase tracking-wide text-[#002c5b]">{group.title}</h2>
                  <div className="mt-5 space-y-4">
                    {group.links.map((link) => (
                      <Link
                        key={link}
                        href={link === "Podiatric Medicine & Surgery" ? "/programs/podiatric-medicine-surgery" : link === "Eligibility & Visa Sponsorship" ? "/training/eligibility-visa-sponsorship" : link === "How to Apply" ? "/training/how-to-apply" : "/programs#programs-in-development"}
                        onClick={() => { setIsOpen(false); setHoveredItem(null); }}
                        className="block text-[17px] text-[#a61922] hover:text-[#002c5b]"
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : hoveredItem === "GME" ? (
            <div className="rounded-[28px] bg-white p-7 lg:p-8">
              <div className="space-y-4">
                {gmeLinks.map((link) => (
                  <a
                    key={link}
                    href={`/gme#${link.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`}
                    onClick={() => { setIsOpen(false); setHoveredItem(null); }}
                    className="block text-[17px] text-[#a61922] hover:text-[#002c5b]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative hidden min-h-[330px] overflow-hidden rounded-[28px] lg:block">
              <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85" alt="Medical students walking together" fill className="object-cover" sizes="(max-width: 1280px) 50vw, 560px" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
