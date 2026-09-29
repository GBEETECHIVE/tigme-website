import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[720px] overflow-hidden bg-[#f8fbfc] pt-28 text-[#002c5b] sm:min-h-[800px] lg:min-h-[860px]">
      <Image className="absolute inset-0 h-full w-full object-cover object-center opacity-75" src="/reference/hero-home.png" alt="A diverse group of physicians collaborating" fill priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-white/10" />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/80 to-transparent" />
      <div className="relative mx-auto flex min-h-[590px] max-w-8xl items-center px-5 pb-16 lg:px-10 lg:pb-0">
        <div className="max-w-[630px]">
          <h1 className="font-display text-5xl font-semibold leading-[0.96] tracking-tight sm:text-7xl lg:text-[70px]">Physicians Practice<br />Where They Train.<br /><span className="text-[#a61922]">So We Train Them Here.</span></h1>
          <p className="mt-8 max-w-[560px] text-sm leading-6 text-slate-700 sm:text-base">TIGME builds and sponsors accredited residency programs along the Texas border and in East Houston, developed with local hospitals and universities so the physicians who train in these communities are the physicians who stay in them.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="#programs" className="bg-[#a61922] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#002c5b] rounded-[10px]">Apply to a program</a><a href="#contact" className="border border-[#a61922] px-7 py-4 text-sm font-bold text-[#a61922] transition hover:bg-[#a61922] hover:text-white rounded-[10px]">Develop a residency with us</a></div>
          <div className="mt-16 flex items-center gap-3"><div className="flex -space-x-3">{["photo-1531123897727-8f129e1688ce", "photo-1500648767791-00dcc994a43e", "photo-1506794778202-cad84cf45f1d", "photo-1519085360753-af0119f7cbe7"].map((image) => <Image key={image} src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=120&q=80`} alt="TIGME physician" width={58} height={58} className="h-14 w-14 rounded-full border-2 border-white object-cover" />)}</div><span className="grid h-16 w-16 place-items-center rounded-full bg-[#a61922] text-center font-display text-xl font-bold leading-5 text-white">16+</span></div>
        </div>
      </div>
      <div className="absolute bottom-8 right-4 hidden w-64 lg:block xl:right-14"><div className="relative ml-8 overflow-hidden rounded-2xl border-8 border-white/80 bg-[#e8f1f5] shadow-xl"><Image src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=85" alt="Dr. Saima Khan" width={500} height={600} className="h-44 w-full object-cover" /><div className="bg-white px-3 py-3"><p className="text-sm font-semibold text-slate-600">Dr. Saima Khan</p><p className="text-xs text-slate-400">Dentist</p></div></div><div className="absolute -left-8 top-12 w-44 overflow-hidden rounded-2xl border-8 border-white/80 bg-[#e8f1f5] shadow-lg"><Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=85" alt="TIGME physician" width={400} height={500} className="h-32 w-full object-cover" /></div></div>
    </section>
  );
}
