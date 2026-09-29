import { LogoCarousel, type ResourceLogo } from "@/components/program-detail/LogoCarousel";

const podiatryResources: ResourceLogo[] = [
  { mark: "CPME", name: "Council on Podiatric Medical Education", className: "text-[#1571ad]" },
  { mark: "ACFAS", name: "American College of Foot and Ankle Surgeons", className: "text-[#642a6c]" },
  { mark: "APMA", name: "American Podiatric Medical Association", className: "text-[#0063a8]" },
  { mark: "ABFAS", name: "Board of Foot and Ankle Surgery", className: "text-[#2c7d51]" },
  { mark: "AOFAS", name: "American Orthopaedic Foot & Ankle Society", className: "text-[#257995]" },
];

export function PodiatryResourcesSection() {
  return (
    <section className="px-3 py-8 sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-xl font-medium uppercase text-[#002c5b] sm:text-2xl">Podiatry Resources &amp; Organizations</h2>
        <p className="mt-2 text-[10px] text-slate-700 sm:text-xs">One program accepting applications, with additional programs in development across the network.</p>
        <div className="mt-5 bg-[#f7fafb] px-2 sm:px-4"><LogoCarousel logos={podiatryResources} label="Podiatry resources and organizations" /></div>
      </div>
    </section>
  );
}