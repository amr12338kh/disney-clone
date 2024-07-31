import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Layouts/Sidebar";
import MobileSidebar from "@/components/Layouts/MobileSidebar";
import Footer from "@/components/Layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "created by Amr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://lumiere-a.akamaihd.net/v1/images/disney_logo_nov_2021_rbg_0fa74b54.jpeg"
      />
      <body className={`${inter.className} bg-[#0f1014]`}>
        <main className="sm:flex">
          <Sidebar className="hidden sm:block" />
          <MobileSidebar className="sm:hidden" />
          <section className="w-full">{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
