import Image from "next/image";

type PageIntroProps = { eyebrow: string; title: string; copy: string; image: string; imageAlt: string };

export function PageIntro({ eyebrow, title, copy, image, imageAlt }: PageIntroProps) {
  return <section className="bg-[#f8fbfc] px-5 pb-16 pt-36 lg:px-10 lg:pb-24"><div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a61922]">{eyebrow}</p><h1 className="font-display text-6xl font-semibold uppercase leading-[0.9] text-[#002c5b] sm:text-8xl">{title}</h1><p className="mt-6 max-w-xl text-base leading-7 text-slate-600">{copy}</p></div><div className="relative h-64 overflow-hidden rounded-[28px] sm:h-80"><Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" /></div></div></section>;
}