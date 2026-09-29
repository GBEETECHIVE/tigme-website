const questions = [
  { question: "Can I switch from a J-1 to an H-1B during residency?", answer: "Visa changes depend on your circumstances, program policy, and applicable federal requirements. Contact your program and designated institutional official for guidance." },
  { question: "Does TIGME cover the cost of visa sponsorship?", answer: "Costs and covered services vary by program. Applicants should confirm details directly with the residency program before applying." },
  { question: "What happens if my visa application is delayed?", answer: "Notify your program as soon as possible. The program can explain timing, documentation, and any available next steps." },
  { question: "Is my family covered under my visa sponsorship?", answer: "Dependent eligibility varies by visa category. Review the relevant federal guidance and speak with your program's visa contact." },
  { question: "Do I need to pass all USMLE steps before getting a visa?", answer: "Examination requirements are program-specific and may also depend on the visa category. Confirm requirements with your chosen program." },
];

export function SponsorshipFaq() {
  return (
    <section className="bg-[#fbf7f7] px-5 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl divide-y divide-slate-200">
        {questions.map(({ question, answer }) => (
          <details key={question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-2 text-xs font-medium text-[#002c5b] marker:content-none sm:text-sm">
              <span>{question}</span>
              <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-300 text-sm text-[#a61922] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-2xl pb-3 pr-10 text-xs leading-5 text-slate-600">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}