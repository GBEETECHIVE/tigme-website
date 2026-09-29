import Image from "next/image";

const benefits = [
  "Outstanding teaching & training environment",
  "Experienced faculty & staff",
  "Interdisciplinary curriculum",
  "State of the art facilities",
  "Excellent board exam outcomes",
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-10 sm:py-20 lg:px-10 lg:py-20">
      <div className="max-w-6xl">
        <h2 className="font-display text-4xl font-bold uppercase leading-none text-[#002c5b] sm:text-5xl">About TIGME</h2>
        <p className="mt-7 max-w-6xl text-[11px] font-medium leading-[1.55] tracking-[0.01em] text-slate-700 sm:text-xs">
          TIGME Is A Nonprofit Organization Dedicated To Advancing Graduate Medical Education By Developing Innovative Training Programs That Prepare Physicians For The Evolving Needs Of Healthcare. By Bringing Together Community Hospitals, Physician Groups, Clinics, Academic Institutions, And Healthcare Organizations, TIGME Creates Collaborative Learning Environments Where Physicians Can Develop Strong Clinical Skills While Gaining Experience In Research, Scholarship, Leadership, And Innovation. Through This Community-Centered Approach, TIGME Aims To Prepare Critical Thinkers, Lifelong Learners, And Compassionate Physicians Who Are Equipped To Deliver High-Quality Patient Care And Make A Lasting Impact In The Communities They Serve.
        </p>
      </div>

      <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="relative aspect-[1.18/1] overflow-hidden rounded-lg bg-[#eaf6fb] sm:aspect-[1.25/1] lg:aspect-[1.08/1]">
          <Image src="/reference/home-about.png" alt="Medical professionals walking through a hospital" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
        </div>

        <div className="lg:pl-2">
          <h3 className="max-w-xl font-display text-4xl font-medium uppercase leading-[0.95] text-[#002c5b] sm:text-5xl">Cultivating medical excellence</h3>
          <p className="mt-8 font-display text-lg font-semibold uppercase tracking-wide text-[#a61922] sm:text-xl">Texas Institute For Graduate Medical Education</p>
          <p className="mt-6 max-w-xl text-sm font-semibold leading-5 text-[#24456e]">Programs offered on this site are accredited by either ACGME or ABPS. Applicants and reviewers should confirm the governing body applicable to their specific specialty.</p>
          <ul className="mt-8 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-4 text-xs font-semibold uppercase text-[#24456e] sm:text-sm">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 border-[#c5222c] text-sm leading-none text-[#c5222c]">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
          <a href="/about-us" className="mt-10 inline-flex min-w-40 items-center justify-center bg-[#a61922] px-6 py-4 text-xs font-bold text-white transition hover:bg-[#002c5b] rounded-[10px]">Learn More</a>
        </div>
      </div>
    </section>
  );
}
