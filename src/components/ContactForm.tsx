"use client";

export function ContactForm() {
  return (
    <form className="mt-3 space-y-2" onSubmit={(event) => event.preventDefault()}>
      <input aria-label="Email address" type="email" placeholder="joe123@.com" className="h-9 w-full rounded-sm border-0 bg-white px-2 text-base text-[#001b3d] outline-none placeholder:text-slate-400" />
      <textarea aria-label="Message" placeholder="type message..." rows={4} className="w-full resize-none rounded-sm border-0 bg-white px-2 py-1 text-base text-[#001b3d] outline-none placeholder:text-slate-400" />
      <button type="submit" className="h-9 w-full rounded-sm bg-[#c5222c] text-base font-medium text-white transition-colors hover:bg-[#a91b24]">Submit</button>
    </form>
  );
}
