import Image from "next/image";

export function EligibilityHero() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-xl bg-[#002c5b] px-5 py-14 text-center text-white sm:min-h-[390px] sm:px-10 lg:min-h-[430px]">
        <Image src="/reference/Eligibility&VisaSponsorship.png" alt="Students standing together on a university campus" fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-4xl">
          <h1 className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">Eligibility &amp; Visa Sponsorship</h1>
          <p className="mx-auto mt-5 max-w-3xl text-xs leading-5 text-white sm:text-sm sm:leading-6">Because requirements can differ by specialty and program, applicants should review the requirements for the specific residency program they are interested in before applying.</p>
        </div>
      </div>
    </section>
  );
}