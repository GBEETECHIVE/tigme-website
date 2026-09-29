import { LogoCarousel, type ResourceLogo } from "@/components/program-detail/LogoCarousel";

const otherResources: ResourceLogo[] = [
  { mark: "N", name: "New Innovations", className: "bg-[#075582] px-3 py-2 text-white" },
  { mark: "Health", name: "Stream", className: "text-[#e31d37]" },
  { mark: "tiger", name: "connect", className: "text-[#d32234]" },
  { mark: "PubMed", name: "National Library of Medicine", className: "text-[#176ca2]" },
  { mark: "ACGME", name: "Accreditation Council", className: "text-[#004c77]" },
];

export function OtherResourcesSection() {
  return (
    <section className="px-3 pb-10 pt-6 sm:px-6 sm:pb-14 lg:px-10">
      <div className="mx-auto max-w-7xl border-t border-slate-200 pt-5">
        <h2 className="font-display text-xl font-medium uppercase text-[#002c5b] sm:text-2xl">Other Resources</h2>
        <p className="mt-2 text-[10px] text-slate-700 sm:text-xs">One program accepting applications, with additional programs in development across the network.</p>
        <div className="mt-5 bg-[#f7fafb] px-2 sm:px-4"><LogoCarousel logos={otherResources} label="Other program resources" /></div>
      </div>
    </section>
  );
}