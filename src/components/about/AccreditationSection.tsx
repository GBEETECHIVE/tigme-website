import { AboutSectionTitle } from "./AboutSectionTitle";

const accreditingBodies = [
  { title: "Institutional Accreditation", acronym: "ACGME", copy: "TIGME is accredited by the Accreditation Council for Graduate Medical Education. Our graduate medical education programs follow national standards for learning, supervision, and patient care.", fields: ["ACGME Institution ID", "Status", "Last Review"] },
  { title: "Podiatric Medicine", acronym: "CPME", copy: "Podiatric residency training is accredited by the Council on Podiatric Medical Education and prepares residents for comprehensive, evidence-based practice.", fields: ["CPME Program ID", "Status", "Approved Positions"] },
];

export function AccreditationSection() {
  return (
    <section className="bg-white px-5 py-10 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <AboutSectionTitle title="Who Accredits What" copy="The accrediting bodies govern the programs on this site. Applicants and reviewers should know which applies to each program." />
        <div className="grid gap-5 lg:grid-cols-2">
          {accreditingBodies.map((body) => (
            <article key={body.acronym} className="rounded-lg bg-[#fcf8f8] p-5 sm:p-7">
              <h3 className="font-display text-xl font-semibold text-[#002c5b]">{body.title}</h3>
              <p className="mt-2 text-[11px] leading-5 text-slate-600">{body.copy}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {body.fields.map((field) => <label key={field} className="block text-[10px] text-slate-500">{field}<input aria-label={field} readOnly value="" className="mt-1 h-9 w-full rounded-sm border border-slate-200 bg-white px-2 text-xs outline-none" /></label>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}