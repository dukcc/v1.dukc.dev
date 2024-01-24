import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Viewport } from "next";
import Status from "@/components/Status";
import { usePathname } from "next/navigation";
import LayoutHeader from "@/components/LayoutHeader";
import SideNav from "@/components/SideNav";
import Socials from "@/components/Socials";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dukc.dev"),
  title: "dukc",
  description:
    "I'm dukc. And I'm a versatile designer / web developer skilled in UI, graphic, motion design, and React / Vue",
  keywords: [
    "Software",
    "Open source",
    "JavaScript",
    "Rust",
    "Minecraft",
    "dukc",
    "HQLauncher",
    "HQDesign",
    "Front-end web developer",
    "Next.js",
    "React",
    "Vue",
    "UI designer",
    "UX designer",
    "Graphic designer",
    "Motion graphics designer",
    "Brand designer",
  ],
  authors: [{ name: "dukc", url: "https://dukc.dev" }],
  creator: "dukc",
  publisher: "dukc",
  openGraph: {
    title: "dukc",
    description:
      "I'm dukc. And I'm a versatile designer / web developer skilled in UI, graphic, motion design, and React / Vue",
    url: "https://dukc.dev",
    siteName: "dukc",
    images: [
      {
        url: "/seoCover.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={outfit.className} lang="en">
      <body className="bg-[#050505] overflow-hidden">
        <div
          className="bg-transparent text-text-1 p-64 max-[800px]:px-24 max-[800px]:pt-32 h-screen
				 overflow-hidden flex flex-col gap-48 z-10 max-[800px]:overflow-y-auto max-[800px]:overflow-x-hidden"
        >
          <nav className="flex place-content-between h-fit w-full align-middle place-items-center">
            <Link href={"/"}>
              <Image
                className="hover-active-effect"
                src="/logo.svg"
                width={24}
                height={24}
                alt="dukc logo"
              />
            </Link>
            <Status />
          </nav>
          <div
            className="min-h-0 w-full flex max-[800px]:flex-col gap-64 max-[800px]:gap-32 max-[800px]:min-h-auto
					"
          >
            <div
              id="left"
              className="w-full h-full flex flex-col gap-32 max-[800px]:gap-24"
            >
              <LayoutHeader />
              <div className="flex h-full gap-32 min-h-0 max-[800px]:flex-col">
                <SideNav />
                {children}
              </div>
            </div>
            <Socials />
          </div>
        </div>
        <div className="relative bottom-[70vh] left-[10vw] h-[30rem] w-[40rem] blur-[256px] bg-gradient-to-tr animate-spin-slow from-brand-blue to-brand-purple rounded-full -z-50"></div>
        <div className="relative bottom-[90vh] left-[80vw] opacity-50 h-[40rem] w-[35rem] blur-[256px] bg-gradient-to-tr animate-spin-slow from-brand-purple to-brand-purple rounded-full -z-50"></div>
      </body>
    </html>
  );
}
