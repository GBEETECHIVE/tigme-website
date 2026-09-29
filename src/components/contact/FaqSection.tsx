const questions = [
  {
    question: "What Is TIGME?",
    answer: "The Texas Institute for Graduate Medical Education is a nonprofit organization that develops and supports graduate medical education programs and training partnerships.",
  },
  {
    question: "What Is Graduate Medical Education (GME)?",
    answer: "Graduate medical education is the residency and fellowship training physicians complete after medical school to develop specialty expertise under supervision.",
  },
  {
    question: "Who Can Apply To TIGME Programs?",
    answer: "Eligibility depends on the program. Applicants should review each program's requirements, application process, and visa sponsorship information before applying.",
  },
  {
    question: "What Specialties Does TIGME Offer?",
    answer: "TIGME currently supports Podiatric Medicine and Surgery, with additional programs in development across its training network.",
  },
  {
    question: "How Can I Learn More About TIGME Programs?",
    answer: "Visit the Programs page for current offerings, or contact TIGME with questions about training opportunities and program development.",
  },
];

export function FaqSection() {
  return (
    <section className="px-5 pb-20 pt-12 sm:pb-24 sm:pt-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase leading-tight text-[#002c5b] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xs leading-5 text-slate-700 sm:text-sm">
            Understanding eligibility and visa requirements is an important part of preparing for residency training. TIGME provides applicants with information about program-specific requirements, application pathways, and visa sponsorship where applicable.
          </p>
        </header>
        <div className="mx-auto mt-10 max-w-[1040px] space-y-2 sm:mt-12">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group rounded-[22px] border border-[#ece8e8] bg-[#fdfafa] px-5 py-5 open:bg-white sm:px-10 sm:py-8">
              <summary className="grid min-h-12 cursor-pointer list-none grid-cols-[minmax(0,1fr)_48px] items-center gap-4 text-left text-base font-semibold text-[#303030] marker:hidden [&::-webkit-details-marker]:hidden sm:text-xl">
                <span>{question}</span>
                <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-full border border-[#bdbdbd]">
                  <span className="h-2.5 w-2.5 -translate-y-0.5 rotate-45 border-b-2 border-r-2 border-[#a61922] transition-transform group-open:translate-y-0.5 group-open:rotate-[225deg]" />
                </span>
              </summary>
              <p className="pr-8 pt-3 text-sm leading-6 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}