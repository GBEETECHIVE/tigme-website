"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const questions = [
  { label: "Medical degree country", placeholder: "Select your country", options: ["United States", "Canada", "Other country"] },
  { label: "USMLE / COMLEX status", placeholder: "Select status", options: ["Not started", "In progress", "Completed"] },
  { label: "After training, do you plan to stay in the US?", placeholder: "Select intent", options: ["Yes", "No", "Undecided"] },
  { label: "Current visa or status", placeholder: "Select current status", options: ["U.S. citizen or permanent resident", "F-1 / OPT", "J-1", "H-1B", "Other"] },
];

export function SponsorshipFinder() {
  const [hasResults, setHasResults] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasResults(true);
  }

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mb-9 text-center">
        <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-[#002c5b] sm:text-4xl">We Sponsor<br />The Physicians Who Matter.</h2>
        <p className="mx-auto mt-5 max-w-5xl text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">Understanding eligibility and visa requirements is an important part of preparing for residency training. TIGME provides applicants with information about program-specific requirements, application pathways, and visa sponsorship where applicable.</p>
      </div>

      <div className="relative">
        <div className="relative flex h-[340px] items-start justify-center overflow-hidden rounded-xl bg-[#002c5b] px-5 pt-16 text-center text-white sm:h-[380px] sm:pt-20 lg:h-[405px] lg:pt-[100px]">
          <Image src="/reference/Rectangle 112.png" alt="Physicians walking together through a hospital" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#06182b]/55" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="font-display text-2xl font-semibold uppercase sm:text-3xl">Find Your Sponsorship Path</h3>
            <p className="mt-3 text-xs leading-5 text-white/90">Answer three questions and we&apos;ll show the right visa route for your situation.</p>
            <a href="#sponsorship-form" className="mt-6 inline-flex items-center rounded-md bg-[#a61922] px-8 py-3 text-xs font-semibold text-white hover:bg-[#88151c]">Download PDF&nbsp; ↓</a>
          </div>
        </div>

        <form id="sponsorship-form" onSubmit={handleSubmit} className="relative z-20 mx-auto -mt-10 w-[94%] rounded-2xl border border-slate-100 bg-white p-5 text-left text-[#002c5b] shadow-sm sm:-mt-16 sm:p-7 lg:-mt-[142px] lg:w-[92%] lg:p-8">
          <h3 className="font-display text-xl font-semibold uppercase sm:text-2xl">Find Your Sponsorship Path</h3>
          <p className="mt-2 text-xs leading-5 text-slate-700">Understanding eligibility and visa requirements is an important part of preparing for residency training.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {questions.map((question) => (
              <label key={question.label} className="block text-[10px] font-bold uppercase tracking-wide">
                {question.label}
                <select required defaultValue="" className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-[#f5f5f5] px-3 text-xs font-normal normal-case tracking-normal text-slate-700 outline-none focus:border-[#002c5b]">
                  <option value="" disabled>{question.placeholder}</option>
                  {question.options.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
            ))}
          </div>
          <div className="mt-5 text-center">
            <button type="submit" className="rounded-lg bg-[#102f5a] px-7 py-3 text-xs font-semibold text-white hover:bg-[#082449]">Show my sponsorship options&nbsp; ⌕</button>
            {hasResults && <p role="status" className="mt-3 text-xs text-[#002c5b]">Your answers are ready for review with the program&apos;s designated institutional official.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}