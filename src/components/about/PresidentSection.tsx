import Image from "next/image";
import { AboutSectionTitle } from "./AboutSectionTitle";

const presidentPortrait = "/reference/msg-pres.png";

export function PresidentSection() {
  return (
    <section className="bg-[#fcf8f8] px-5 py-10 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <AboutSectionTitle title="A Message from President" />
        <div className="grid items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <div>
            <div className="relative aspect-[0.92/1] max-h-[520px] overflow-hidden rounded-md bg-[#e5edf0]">
              <Image src={presidentPortrait} alt="TIGME President" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover object-center" />
            </div>
            <div className="mt-4 flex gap-3 text-sm text-[#a61922]" aria-label="President social links">
              <a href="https://www.linkedin.com" aria-label="LinkedIn" className="grid h-7 w-7 place-items-center rounded-sm border border-[#a61922] font-bold">in</a>
              <a href="https://www.youtube.com" aria-label="YouTube" className="grid h-7 w-7 place-items-center rounded-sm border border-[#a61922]">▶</a>
              <a href="https://x.com" aria-label="X" className="grid h-7 w-7 place-items-center rounded-sm border border-[#a61922] font-semibold">𝕏</a>
            </div>
          </div>
          <div className="pt-1 text-xs leading-6 text-slate-700 sm:text-sm">
            <h3 className="font-display text-2xl font-semibold uppercase leading-tight text-[#002c5b] sm:text-3xl">Advancing the future of medicine</h3>
            <p className="mt-4">We are pleased to offer an exceptional graduate medical education program through the Texas Institute for Graduate Medical Education (TIGME). We believe that every resident deserves the opportunity to develop excellence in patient care.</p>
            <p className="mt-4">Through rigorous clinical training, academic learning, physician mentorship, and research opportunities, TIGME bridges the gap between medical knowledge and real-world practices.</p>
            <p className="mt-4">Our programs also address the evolving needs of healthcare through education in areas such as leadership, artificial intelligence in medicine, and the business of medicine.</p>
            <p className="mt-4">To learn more about the TIGME GME Program, contact info@tigme.org. We look forward to welcoming passionate learners and future healthcare leaders into our community.</p>
            <p className="mt-5 font-semibold text-[#002c5b]">Dr. Sohail Rao<br /><span className="font-normal text-slate-600">President</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}