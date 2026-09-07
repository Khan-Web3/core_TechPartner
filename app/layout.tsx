import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Core Tech Partner | Software Development & Digital Solutions",
  description:
    "Core Tech Partner builds modern web apps, mobile products, and enterprise FMCG solutions. Your trusted technology partner in Islamabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
