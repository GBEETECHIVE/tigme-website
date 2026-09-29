import { ContactForm } from "./ContactForm";
import Link from "next/link";
import Image from "next/image";

const usefulLinks = ["About", "Training", "GME", "Research", "Network", "Become a Partner"];
const programs = ["Podiatric Medicine & Surgery", "Family Medicine", "Internal Medicine"];

function FooterLink({ children, href }: { children: React.ReactNode; href: string }) {
  return <Link href={href} className="block transition-colors hover:text-[#c5222c]">{children}</Link>;
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#001b3d] px-5 py-10 text-white sm:px-8 lg:px-10 lg:py-8">
      <div className="mx-auto grid max-w-[1180px] gap-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.95fr_0.95fr_1.4fr] lg:gap-12">
        <section className="text-base leading-6 text-white/90">
          {/* <Link href="/" className="inline-flex items-center gap-3" aria-label="TIGME home">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/80 font-display text-3xl font-bold">T</span>
            <span className="font-display text-2xl font-bold uppercase leading-none">TIGME<span className="mt-1 block max-w-[180px] font-sans text-base font-medium normal-case leading-5 tracking-wide">Texas Institute for Graduate Medical Education</span></span>
          </Link> */}
          <Link
  href="/"
  className="flex shrink-0 items-center gap-3"
  aria-label="TIGME home"
>
  <span className="relative h-30 w-30 shrink-0 sm:h-12 sm:w-12">
    <Image
      src="/reference/TIGME-Logo.png"
      alt="TIGME Logo"
      fill
      priority
      sizes="60px"
      className="object-contain"
    />
  </span>
</Link>
          <p className="mt-5">Address:</p>
          <p>1917 Ashland Dr Houston, TX 77008</p>
          <div className="mt-5 space-y-1 text-white/85">
            <p><span className="mr-3 text-white/60">⌕</span>346-646-3309</p>
            <p><span className="mr-3 text-white/60">♧</span>281-783-2115</p>
            <p><span className="mr-3 text-white/60">✉</span>info@tigme.org</p>
          </div>
        </section>

        <section>
          <h2 className="border-b border-[#c5222c]/40 pb-2 font-sans text-base font-medium text-[#c5222c]">Useful Links</h2>
          <nav className="mt-3 space-y-2 text-base leading-6 text-white/90" aria-label="Useful links">
            {usefulLinks.map((link) => <FooterLink key={link} href={link === "About" ? "/about-us" : link === "Training" ? "/programs" : link === "Network" ? "/#locations" : "/#contact"}>{link}</FooterLink>)}
          </nav>
        </section>

        <section>
          <h2 className="border-b border-[#c5222c]/40 pb-2 font-sans text-base font-medium text-[#c5222c]">Programs</h2>
          <nav className="mt-3 space-y-3 text-base leading-6 text-white/90" aria-label="Programs">
            {programs.map((program) => <FooterLink key={program} href={program === "Podiatric Medicine & Surgery" ? "/programs/podiatric-medicine-surgery" : "/programs"}>{program}</FooterLink>)}
          </nav>
        </section>

        <section>
          <h2 className="border-b border-[#c5222c]/40 pb-2 font-sans text-base font-medium text-[#c5222c]">Contact Us</h2>
          <ContactForm />
          <div className="mt-12 flex justify-end gap-4 text-base font-semibold text-white" aria-label="Social links">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[#c5222c]">▣</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="font-bold hover:text-[#c5222c]">in</a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-[#c5222c]">▷</a>
            <a href="https://x.com" aria-label="X" className="text-xl hover:text-[#c5222c]">𝕏</a>
          </div>
        </section>
      </div>
    </footer>
  );
}
