export function NewsSectionIntro({ title, children, centered = false }: { title: string; children: React.ReactNode; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto mb-8 max-w-4xl text-center sm:mb-10" : "mb-8 sm:mb-10"}>
      <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-[#002c5b] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-xs leading-5 text-[#172f4f] sm:text-sm sm:leading-6">{children}</p>
    </div>
  );
}