import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import TabLinks from "@/components/TabLinks";
import HeroImg from "@/public/home_hero.png";
import SideTabBtn from "@/components/SideTabBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <SideTabBtn />
      <Image className="w-full" src={HeroImg} alt="Hero" />

      <TabLinks />
      {children}
    </div>
  );
}
