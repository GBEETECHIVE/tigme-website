import Image from "next/image";

const committee = [
  {
    name: "Dr. Gary Lepow",
    role: "Chairman",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "Dr. Randal Lepow",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "Dr. Rebecca Schwartz",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "Dr. Sarah Sykes",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "Dr. Jason Miller",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=320&q=85",
  },
  {
    name: "Dr. Eugenio Rivera",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=320&q=85",
  },
];

function CommitteeMember({ name, role, image }: (typeof committee)[number]) {
  return (
    <article className="flex flex-col items-center text-center text-[#002c5b]">
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#002c5b] bg-slate-200 sm:h-24 sm:w-24">
        <Image src={image} alt={name} fill sizes="96px" className="object-cover" />
      </div>
      <h3 className="mt-2 max-w-36 font-display text-base font-semibold leading-tight sm:text-lg">{name}</h3>
      {role && <p className="mt-1 text-xs text-[#c5222c]">{role}</p>}
    </article>
  );
}

export function ProgramCommitteeSection() {
  const [chair, ...members] = committee;

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h2 className="font-display text-2xl font-semibold uppercase text-[#002c5b] sm:text-3xl">Program Committee Members</h2>
          <p className="mt-3 text-xs text-slate-700 sm:text-sm">Medical graduates who are undergoing postgraduate clinical training through a residency program.</p>
        </header>
        <div className="mb-7 flex justify-center"><CommitteeMember {...chair} /></div>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 sm:gap-x-10">
          {members.slice(0, 3).map((member) => <CommitteeMember key={member.name} {...member} />)}
        </div>
        <div className="mx-auto mt-7 grid max-w-lg grid-cols-2 gap-x-5 sm:gap-x-10">
          {members.slice(3).map((member) => <CommitteeMember key={member.name} {...member} />)}
        </div>
      </div>
    </section>
  );
}