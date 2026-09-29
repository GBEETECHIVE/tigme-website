import Image from "next/image";
import { AboutSectionTitle } from "./AboutSectionTitle";

const missionImage = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=90";
const visionImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90";

function MissionVisionBlock({
  title,
  accent,
  copy,
  image,
  imageAlt,
  reverse = false,
}: {
  title: string;
  accent: string;
  copy: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <article className={`grid items-center gap-7 lg:grid-cols-2 lg:gap-12 ${reverse ? "" : ""}`}>
      <div className={`relative aspect-[1.2/1] overflow-hidden rounded-md bg-[#eaf6fb] ${reverse ? "lg:order-2" : ""}`}>
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className={`px-1 py-3 ${reverse ? "lg:order-1" : ""}`}>
        <h3 className="font-display text-2xl font-semibold uppercase text-[#002c5b]">{title}</h3>
        <p className="mt-1 font-display text-xs font-semibold uppercase text-[#a61922]">{accent}</p>
        <p className="mt-4 max-w-xl text-xs leading-6 text-slate-700 sm:text-sm">{copy}</p>
      </div>
    </article>
  );
}

export function MissionVisionSection() {
  return (
    <section className="bg-white px-5 py-10 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <AboutSectionTitle title="Our Mission and Vision" copy="TIGME wants to become a national leader in medical education, producing physicians who are strong in clinical care, research, and healthcare leadership while maintaining compassion." />
        <div className="space-y-9 sm:space-y-12">
          <MissionVisionBlock title="Our Mission" accent="Train exceptional physicians" copy="Develop critical thinkers and lifelong learners who deliver compassionate, research-informed care through education, innovation, and scholarship." image={missionImage} imageAlt="Physicians working together as a team" />
          <MissionVisionBlock title="Our Vision" accent="Shape the future of healthcare" copy="Become a nationally recognized leader in graduate medical education by developing skilled, compassionate physicians who lead with purpose and serve their communities." image={visionImage} imageAlt="Medical professionals collaborating in a clinical setting" reverse />
        </div>
      </div>
    </section>
  );
}