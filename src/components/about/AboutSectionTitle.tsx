type AboutSectionTitleProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  centered?: boolean;
};

export function AboutSectionTitle({ eyebrow, title, copy, centered = false }: AboutSectionTitleProps) {
  return (
    <div className={centered ? "mx-auto mb-8 max-w-5xl text-center" : "mb-8 max-w-5xl"}>
      {eyebrow && <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.12em] text-[#a61922]">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-[#002c5b] sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 text-xs leading-6 text-slate-700 sm:text-sm">{copy}</p>}
    </div>
  );
}