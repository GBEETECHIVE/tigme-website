import { AboutSectionTitle } from "./AboutSectionTitle";

const accreditingBodies = [
  { acronym: "ACGME", copy: "TIGME is accredited by the Accreditation Council for Graduate Medical Education as a Sponsoring Institution, and holds institutional responsibility for the programs it sponsors under the ACGME Institutional Requirements.", fields: ["ACGME Institution ID", "Status", "Last Review"] },
  { acronym: "CPME", copy: "Podiatric residency training is accredited by the Council on Podiatric Medical Education, not by the ACGME. Requirements, application timelines, and matching for this program follow CPME and podiatric match rules.", fields: ["CPME Program ID", "Status", "Approved Positions"] },
];

export function AccreditationSection() {
  return (
    <section className="bg-white px-5 py-10 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <AboutSectionTitle title="Who Accredits What" copy="Two accrediting bodies govern the programs described on this site. Applicants and reviewers should know which applies to which." />
        <div className="rounded-2xl bg-[#fcf7f7] p-5 sm:p-8 lg:p-10">
          <h3 className="font-display text-2xl font-semibold text-[#002c5b] sm:text-3xl">Institutional Accreditation</h3>
          <div className="mt-7 grid gap-8 md:grid-cols-2 md:gap-10">
            {accreditingBodies.map((body) => (
              <article key={body.acronym} className="min-w-0">
                <h4 className="font-display text-lg font-semibold text-[#002c5b]">{body.acronym}</h4>
                <p className="mt-2 min-h-[88px] text-xs leading-[1.35] text-[#17314f] sm:text-sm">{body.copy}</p>
                <div className="mt-7 space-y-3 rounded-md bg-white p-4 sm:p-5">
                  {body.fields.map((field) => (
                    <label key={field} className="block font-serif text-xs text-[#456080]">
                      {field}
                      <input aria-label={field} readOnly value="" className="mt-1 h-9 w-full rounded-md border border-slate-200 bg-white px-2 text-xs outline-none" />
                    </label>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}