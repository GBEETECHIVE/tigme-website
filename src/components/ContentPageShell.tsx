import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function ContentPageShell({ children }: { children: React.ReactNode }) {
  return <main><Navbar />{children}<Footer /></main>;
}