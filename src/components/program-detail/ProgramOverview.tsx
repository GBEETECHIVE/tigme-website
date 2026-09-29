"use client";

import Image from "next/image";
import { useState } from "react";

const specialties = [
  {
    title: "Pediatrics",
    description:
      "Podiatrists also specialize in pediatric podiatry, focusing on foot and ankle conditions affecting children. They diagnose and treat conditions such as flat feet, gait abnormalities, ingrown toenails, and developmental foot problems in pediatric patients.",
  },
  {
    title: "Sports Medicine",
    description:
      "Podiatric sports medicine focuses on preventing, diagnosing, and treating foot and ankle injuries related to athletic activity, helping patients return to movement safely and confidently.",
  },
  {
    title: "Diabetic Foot Care",
    description:
      "Specialized diabetic foot care supports patients through routine assessments, early identification of complications, wound prevention, and coordinated treatment to protect mobility and overall health.",
  },
  {
    title: "Collaborative Care",
    description:
      "Podiatrists work alongside primary care physicians, specialists, and other health professionals to coordinate treatment and provide comprehensive care for each patient.",
  },
  {
    title: "Foot Health Education",
    description:
      "Foot health education helps patients understand prevention, footwear, and daily care practices that support comfort, mobility, and long-term lower-extremity health.",
  },
  {
    title: "Foot and Ankle Surgery",
    description:
      "Podiatric surgeons evaluate and treat a broad range of foot and ankle conditions, using surgical care when appropriate to restore function and relieve pain.",
  },
  {
    title: "Lower Extremity Biomechanics",
    description:
      "Biomechanical assessment examines how the foot and lower extremity move, helping identify contributing factors and guide individualized treatment plans.",
  },
];

export function ProgramOverview() {
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0]);

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-semibold uppercase text-[#002c5b] sm:text-4xl">Overview</h2>
          <p className="mt-4 text-xs leading-[1.45] text-slate-700 sm:text-sm">
            Podiatry is a specialized branch of medicine that focuses on the diagnosis, treatment, and prevention of conditions related to the foot, ankle, and lower extremities. Podiatrists, also known as doctors of podiatric medicine (DPM), are trained to provide comprehensive care for individuals of all ages, from children to the elderly. Their expertise allows them to address a wide range of issues, from promoting mobility, relieving pain, and improving the overall quality of life for their patients.
          </p>
        </header>

        <div className="relative mt-10 min-h-[650px] overflow-hidden rounded-[28px] bg-[#002c5b] text-white sm:min-h-[620px]">
          <Image
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1800&q=85"
            alt="Podiatry care in a clinical setting"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[#002c5b]/75" />
          <div className="relative flex min-h-[650px] flex-col p-6 sm:min-h-[620px] sm:p-8 lg:p-10">
            <ul aria-label="Podiatry areas of care" className="flex flex-col items-start gap-1 sm:gap-2">
              {specialties.map((specialty) => (
                <li key={specialty.title}>
                  <button
                    type="button"
                    aria-pressed={activeSpecialty.title === specialty.title}
                    onClick={() => setActiveSpecialty(specialty)}
                    className={`relative pb-2 pt-1 text-left text-sm font-medium text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-white after:transition-all sm:text-base ${
                      activeSpecialty.title === specialty.title
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }`}
                  >
                    {specialty.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-auto max-w-2xl pt-10">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{activeSpecialty.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white sm:text-base sm:leading-7">
                {activeSpecialty.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}