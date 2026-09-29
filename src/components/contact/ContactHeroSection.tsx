import Image from "next/image";

function ContactInquiryForm() {
  return (
    <form className="space-y-2.5 rounded-2xl bg-white p-5 text-[#222] shadow-sm sm:p-6">
      <h2 className="font-display text-2xl font-bold uppercase text-[#002c5b]">Let&apos;s Connect</h2>
      <p className="text-xs leading-5 text-slate-700">
        Whether you are a prospective resident, healthcare organization, academic institution, or community partner, we welcome your questions and inquiries.
      </p>
      <label className="block pt-1 text-xs text-slate-700">
        Name <span aria-hidden="true" className="text-[#a61922]">*</span>
        <input name="name" autoComplete="name" required className="mt-1 block h-10 w-full rounded border border-slate-200 bg-[#f3f3f3] px-3 outline-none focus:border-[#a61922] focus:ring-1 focus:ring-[#a61922]" />
      </label>
      <label className="block text-xs text-slate-700">
        Email <span aria-hidden="true" className="text-[#a61922]">*</span>
        <input name="email" type="email" autoComplete="email" required className="mt-1 block h-10 w-full rounded border border-slate-200 bg-[#f3f3f3] px-3 outline-none focus:border-[#a61922] focus:ring-1 focus:ring-[#a61922]" />
      </label>
      <label className="block text-xs text-slate-700">
        Message <span aria-hidden="true" className="text-[#a61922]">*</span>
        <textarea name="message" required rows={4} className="mt-1 block w-full resize-y rounded border border-slate-200 bg-[#f3f3f3] px-3 py-2 outline-none focus:border-[#a61922] focus:ring-1 focus:ring-[#a61922]" />
      </label>
      <button type="submit" className="h-10 w-full rounded bg-[#a61922] text-sm font-semibold text-white transition-colors hover:bg-[#002c5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002c5b]">
        Submit
      </button>
    </form>
  );
}

export function ContactHeroSection() {
  return (
    <section className="px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
      <div className="relative mx-auto max-w-[1600px] overflow-visible rounded-xl">
        <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#002c5b] sm:min-h-[440px] lg:min-h-[550px]">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=90"
            alt="Healthcare campus surrounded by gardens"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#001b3d]/55" />
          <div className="relative max-w-xl px-5 py-7 text-white sm:px-8 sm:py-8 lg:px-6 lg:py-12">
            <h1 className="font-display text-4xl font-bold uppercase leading-none sm:text-5xl">Contact TIGME</h1>
            <p className="mt-4 max-w-md text-sm leading-5 text-white/95">
              Whether you are a prospective resident, healthcare organization, academic institution, or community partner, we welcome your questions and inquiries.
            </p>
          </div>
        </div>
        <div className="relative z-10 mx-4 -mt-8 sm:absolute sm:right-6 sm:top-[70px] sm:mx-0 sm:mt-0 sm:w-[min(42%,395px)] lg:right-6 lg:top-[88px]">
          <ContactInquiryForm />
        </div>
      </div>
    </section>
  );
}