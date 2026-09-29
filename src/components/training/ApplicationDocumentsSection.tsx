const documents = [
  ["Application Form", "Applicant", "Online"],
  ["CV/ Resume", "Applicant", "PDF"],
  ["Personal Statement", "Applicant", "PDF"],
  ["Recommendation Letter", "Recommender", "PDF"],
  ["Transcript", "School", "PDF"],
];

export function ApplicationDocumentsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-16 pt-8 lg:px-10 lg:pb-24">
      <h2 className="font-display text-3xl font-semibold uppercase text-[#002c5b] sm:text-4xl">What to submit</h2>
      <p className="mt-4 text-xs leading-5 text-slate-700 sm:text-sm">Every document below is required before your application is considered complete.</p>
      <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border border-[#e7dede] bg-[#fcf8f8]">
        <div className="grid grid-cols-[1.5fr_1fr_0.6fr] bg-[#fff0f0] px-4 py-4 text-[10px] font-semibold uppercase tracking-wide text-[#002c5b] sm:px-7 sm:text-xs">
          <span>Documents</span><span>Provided by</span><span>Format</span>
        </div>
        {documents.map(([document, provider, format]) => (
          <div key={document} className="mx-4 grid grid-cols-[1.5fr_1fr_0.6fr] border-b border-slate-200 px-0 py-4 text-[10px] last:border-0 sm:mx-7 sm:text-xs">
            <span className="text-[#002c5b]">{document}</span><span className="text-slate-500">{provider}</span><span className="text-slate-500">{format}</span>
          </div>
        ))}
      </div>
    </section>
  );
}