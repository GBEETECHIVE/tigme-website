const dates = [
  "Application Open",
  "Application Deadline",
  "Interview Period",
  "Rank List Due",
  "Match Day",
  "Orientation Begins",
];

export function KeyDatesSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-12 lg:px-10 lg:py-16">
      <h2 className="font-display text-3xl font-semibold uppercase text-[#002c5b] sm:text-4xl">Key dates</h2>
      <p className="mt-4 text-xs leading-5 text-slate-700 sm:text-sm">Every document below is required before your application is considered complete.</p>
      <ol className="relative mt-10 grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-0">
        <span aria-hidden="true" className="absolute left-[8%] right-[8%] top-5 hidden h-px bg-slate-200 lg:block" />
        {dates.map((date, index) => (
          <li key={date} className="relative flex flex-col items-center text-center">
            <span className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border border-[#7d8ea5] font-semibold text-white ${index === 0 ? "bg-[#526b8c]" : "bg-[#bdc5d0] text-[#17314f]"}`}>{index + 1}</span>
            <span className="mt-3 text-[11px] leading-4 text-[#1d2734] sm:text-xs">{date}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}