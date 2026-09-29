"use client";

import { useState } from "react";

const steps = [
  { title: "Identify the Designated Institutional Officials", detail: "Review the institutional contacts responsible for graduate medical education and sponsorship questions." },
  { title: "Read the Instructional Requirements and FAQs", detail: "Check the program-specific eligibility criteria, application guidance, and frequently asked questions." },
  { title: "Submit the Intent to Apply for Institutional Accreditation", detail: "Complete the institutional intent process before beginning an accreditation application." },
  { title: "Log In to the ADS Portal", detail: "Access the Accreditation Data System using your institution's authorized credentials." },
  { title: "Complete and Submit the Application", detail: "Provide the required institutional and program information and submit the completed application." },
  { title: "Receive Your Institutional Accreditation Decision", detail: "Monitor the application status and review the official decision and any next steps." },
];

const checklist = ["DIO identified", "Requirements reviewed", "Intent form submitted", "ADS credentials received", "Application complete", "Decision received"];

export function EligibilitySteps() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [reviewedSteps, setReviewedSteps] = useState<Set<number>>(() => new Set([0]));
  const reviewedCount = reviewedSteps.size;

  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-16 lg:px-10 lg:pb-24">
      <div className="mb-8 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold uppercase leading-tight text-[#002c5b] sm:text-3xl">Six Steps to<br className="hidden sm:block" /> Getting Accredited</h2>
        <p className="mt-5 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-6">TIGME wants to become a national leader in medical education, producing physicians who are strong in clinical care, research, and healthcare leadership, while maintaining compassion.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.7fr_0.95fr] lg:gap-7">
        <ol className="relative space-y-2 before:absolute before:bottom-1 before:left-5 before:top-1 before:w-px before:bg-slate-300 sm:before:left-6">
          {steps.map((step, index) => {
            const expanded = expandedStep === index;
            return (
              <li key={step.title} className="relative pl-12 sm:pl-[74px]">
                <span className="absolute left-0 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#102f5a] text-sm font-bold text-white sm:h-12 sm:w-12">{index + 1}</span>
                <div className="rounded-2xl border border-[#eee8e8] bg-[#fdfafa] px-4 py-4 sm:px-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#c5222c]">Step {String(index + 1).padStart(2, "0")}</p>
                  <button type="button" aria-expanded={expanded} onClick={() => setExpandedStep(expanded ? null : index)} className="mt-2 flex w-full items-center justify-between gap-4 text-left text-xs font-medium text-slate-800 sm:text-sm">
                    <span>{step.title}</span><span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-slate-300 text-sm text-[#a61922] transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true">⌄</span>
                  </button>
                  {expanded && <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-600">{step.detail}</p>}
                </div>
              </li>
            );
          })}
        </ol>

        <aside className="space-y-4 lg:pt-0">
          <div className="min-h-[244px] w-full max-w-[320px] justify-self-end rounded-xl bg-[#102f5a] p-4 text-white sm:p-4">
            <h3 className="text-xs font-bold uppercase">Your Progress</h3>
            <p className="mt-5 font-display text-2xl font-bold leading-none">{reviewedCount}</p>
            <p className="mt-1 text-[10px] text-white/75">of 6 steps reviewed</p>
            <div className="mt-8 grid grid-cols-6 gap-1" aria-label={`${reviewedCount} of 6 steps reviewed`}>
              {steps.map((step, index) => <span key={step.title} className={`h-1 rounded-full ${index < reviewedCount ? "bg-[#a61922]" : "bg-white"}`} />)}
            </div>
            <p className="mt-8 border-t border-white/15 pt-5 text-[10px] leading-4 text-white/75">{reviewedCount === steps.length ? "All 6 steps reviewed. You have a complete picture of the process. Good luck!" : "Review each step to complete your picture of the accreditation process."}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <h3 className="text-xs font-semibold text-[#002c5b]">Quick start checklist</h3>
            <ul className="mt-5 space-y-3">{checklist.map((item) => <li key={item} className="flex items-center gap-3 text-[10px] text-[#002c5b]"><span className="text-sm text-[#c5222c]">✓</span>{item}</li>)}</ul>
          </div>
        </aside>
      </div>
    </section>
  );
}