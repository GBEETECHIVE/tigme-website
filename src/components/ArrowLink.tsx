import type { ReactNode } from "react";

type ArrowLinkProps = {
  children: ReactNode;
  href?: string;
};

export function ArrowLink({ children, href = "#programs" }: ArrowLinkProps) {
  return (
    <a className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-[#c5222c]" href={href}>
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
