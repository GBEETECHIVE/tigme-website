import Image from "next/image";
import { AboutSectionTitle } from "./AboutSectionTitle";

export function GovernanceSection() {
  return (
    <section className="bg-white px-5 py-2 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <AboutSectionTitle title="How TIGME Is Governed" copy="Every training decision traces back through one line of accountability. Select any office to see what it does and who it serves." />
        <Image
          src="/reference/chart_updated.png"
          alt="TIGME governance structure chart"
          width={1030}
          height={740}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="mx-auto h-auto w-full max-w-5xl"
        />
      </div>
    </section>
  );
}