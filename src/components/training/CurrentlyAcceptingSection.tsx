import Image from "next/image";
import Link from "next/link";

const specialties = [
  "Pediatrics",
  "Sports Medicine",
  "Diabetic Foot Care",
  "Collaborative Care",
  "Foot Health Education",
  "Foot and Ankle Surgery",
  "Lower Extremity Biomechanics",
];

export function CurrentlyAcceptingSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <h2 className="font-display text-3xl font-semibold uppercase text-[#002c5b] sm:text-4xl">Currently accepting</h2>
        <p className="mt-4 text-xs leading-5 text-[#002c5b] sm:text-sm">
          Podiatric Medicine and Surgery only. Programs listed as in development are not accredited and are not receiving applications.
        </p>
      </div>

      <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f8f8] p-3 sm:p-4 lg:grid-cols-2 lg:items-stretch lg:gap-6">
        <div className="relative min-h-56 overflow-hidden rounded-xl sm:min-h-72 lg:min-h-[330px]">
          <Image
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
            alt="Podiatrist examining a patient's foot"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col px-1 py-5 text-[#002c5b] sm:px-2 lg:py-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide">CPME - Accredited</p>
          <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">Podiatric Medicine &amp; Surgery</h3>
          <p className="mt-3 text-xs leading-5 sm:text-sm">
            Three-year residency with reconstructive rearfoot and ankle training. Positions, curriculum, and rotation schedule.
          </p>
          <ul className="mt-3 grid gap-x-5 text-xs leading-5 sm:grid-cols-2">
            {specialties.map((specialty) => <li key={specialty} className="list-inside list-disc">{specialty}</li>)}
          </ul>
          <div className="mt-auto flex items-center justify-end gap-3 pt-5">
            <Link href="/programs/podiatric-medicine-surgery" className="rounded-full bg-[#a61922] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#82141b]">Apply now</Link>
            <Link href="/programs/podiatric-medicine-surgery" aria-label="View Podiatric Medicine and Surgery program" className="grid h-10 w-10 place-items-center rounded-full bg-[#102f59] text-lg text-white transition hover:bg-[#a61922]">↗</Link>
          </div>
        </div>
      </article>

      <aside className="mt-5 flex flex-col gap-3 rounded-xl border border-[#edd0d0] bg-[#fbf2f2] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold uppercase text-[#a61922]">Important</h3>
          <p className="mt-1 text-xs text-[#a61922]">Do not submit through ERAS / NRMP for this program.</p>
        </div>
        <Link href="" className="inline-flex items-center gap-4 text-xs font-medium text-[#002c5b]">Get the full guide <span className="text-lg" aria-hidden="true">⟶</span></Link>
      </aside>
    </section>
  );
}