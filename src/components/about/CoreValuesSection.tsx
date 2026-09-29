import { AboutSectionTitle } from "./AboutSectionTitle";

const coreValues = [
  { title: "Excellence in Education", copy: "Focusing on providing high-quality medical education and training." },
  { title: "Academic Rigor and Innovation", copy: "Encouraging continuous learning, research, and innovation." },
  { title: "Patient-Centered Care", copy: "Emphasizing compassion and empathy in the provision of healthcare." },
  { title: "Leadership Development", copy: "Equipping residents and fellows with the skills to lead." },
  { title: "Quality, Safety, and Outcomes", copy: "Promoting excellence through evidence-based healthcare." },
  { title: "Professionalism and Ethics", copy: "Instilling integrity, respect, and responsibility in care." },
  { title: "Diversity, Equity, and Inclusivity", copy: "Valuing diverse perspectives and equitable opportunities." },
  { title: "Collaboration and Mentorship", copy: "Fostering supportive partnerships between learners and faculty." },
];

export function CoreValuesSection() {
  return (
    <section className="bg-[#fcf8f8] px-5 py-10 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <AboutSectionTitle title="Our Core Values" copy="TIGME wants to become a national leader in medical education, producing physicians who are strong in clinical care, research, and healthcare leadership while maintaining compassion." />
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <li key={value.title} className="flex gap-3  pt-4">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#a61922] font-display text-xs font-bold text-white">{index + 1}</span>
              <div><h3 className="font-display text-sm font-semibold text-[#002c5b]">{value.title}</h3><p className="mt-1 text-[11px] leading-5 text-slate-600">{value.copy}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}