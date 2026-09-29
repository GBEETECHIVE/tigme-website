type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-[#c5222c]">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-[#002c5b] sm:text-5xl">{title}</h2>
      {copy && <p className="mt-4 text-sm leading-7 text-slate-600">{copy}</p>}
    </div>
  );
}
