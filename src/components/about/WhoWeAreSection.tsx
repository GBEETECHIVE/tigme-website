import { AboutSectionTitle } from "./AboutSectionTitle";

export function WhoWeAreSection() {
  return (
    <section className="bg-white px-5 py-10 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <AboutSectionTitle title="Who We Are" centered />
        <div className="mx-auto max-w-6xl space-y-3 text-center text-[11px] leading-[1.7] text-slate-700 sm:text-xs">
          <p>
            The Texas Institute for Graduate Medical Education (TIGME) is a nonprofit organization established to develop innovative graduate medical education programs that prepare physicians for the evolving needs of healthcare. We bring together hospitals, universities, physician groups, clinics, and healthcare organizations to create collaborative training environments.
          </p>
          <p>
            TIGME brings together the people, institutions, and communities that make excellent medical education possible. Through high-quality clinical training, research, and mentorship, we prepare compassionate physicians who are ready to serve Texas.
          </p>
        </div>
      </div>
    </section>
  );
}