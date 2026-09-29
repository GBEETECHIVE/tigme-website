import type { Metadata } from "next";
import { Barlow_Condensed, Open_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Barlow_Condensed({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const bodyFont = Open_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "TIGME | Physicians Practice",
  description: "The Texas Institute for Graduate Medical Education.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-white text-slate-800 antialiased">{children}</body>
    </html>
  );
}
