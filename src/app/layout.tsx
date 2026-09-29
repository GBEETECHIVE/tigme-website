import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "TIGME | Physicians Practice",
  description: "The Texas Institute for Graduate Medical Education.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-800 antialiased">{children}</body>
    </html>
  );
}
