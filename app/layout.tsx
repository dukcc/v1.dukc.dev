import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import {Viewport} from "next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
};

export const metadata: Metadata = {
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
	authors: [{name: "dukc", url: "https://dukc.dev"}],
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

const outfit = Outfit({subsets: ["latin"]});

const hanson = localFont({
	src: "./hanson.woff2",
	display: "swap",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html className={outfit.className} lang="en">
			<body className="bg-[#050505] overflow-hidden">
				<div className="bg-transparent text-white p-64 max-[800px]:px-24 max-[800px]:pt-48 max-[800px]:pb-24 h-screen min-h-screen overflow-hidden flex flex-col gap-[64px] z-10 max-[800px]:overflow-y-auto">
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
						<div className="flex gap-[8px] align-middle place-items-center">
							<p className="text-[13px]">Available to work</p>
							<div className="w-[6px] h-[6px] bg-green rounded-full"></div>
						</div>
					</nav>
					<div className="min-h-0 w-full flex max-[800px]:flex-col gap-64 max-[800px]:gap-32 max-[800px]:min-h-auto
					">
						<div
							id="left"
							className="w-full h-full flex flex-col gap-32 max-[800px]:gap-24"
						>
							<div className="flex flex-col gap-32">
								<h1
									className={`${hanson.className} text-[75px] max-[800px]:text-1 leading-[50%] text-white`}
								>
									dukc
								</h1>
								<p className="text-body max-[515px]:hidden">
									UI, graphic, motion designer, & front-end web developer.
								</p>
							</div>
							{children}
						</div>
						<div
							id="right"
							className="w-fit h-full max-[800px]:h-fit max-[800px]:w-full flex flex-col gap-32 align-middle place-items-center max-[800px]:pb-32"
						>
							<div className="flex min-[800px]:flex-col gap-16">
								<Link
									href={"https://www.youtube.com/@dukkcc"}
									target="_blank"
									className="hover-active-effect"
								>
									<Image
										width={36}
										height={36}
										alt="YouTube"
										src="/icons/yt.svg"
									/>
								</Link>
								<Link
									href={"https://www.behance.net/duckyhq"}
									target="_blank"
									className="hover-active-effect"
								>
									<Image
										width={36}
										height={36}
										alt="Behance"
										src="/icons/behance.svg"
									/>
								</Link>
								<Link
									href={"https://discord.gg/kVS5dEekmT"}
									target="_blank"
									className="hover-active-effect"
								>
									<Image
										width={36}
										height={36}
										alt="Discord"
										src="/icons/discord.svg"
									/>
								</Link>
								<Link
									href={"https://github.com/dukcc"}
									target="_blank"
									className="hover-active-effect"
								>
									<Image
										width={36}
										height={36}
										alt="GitHub"
										src="/icons/github.svg"
									/>
								</Link>
							</div>
							<div className="w-[1px] h-full border border-white/10 max-[800px]:hidden"></div>
						</div>
					</div>
				</div>
				<div className="relative bottom-[70vh] left-[10vw] h-[30rem] w-[40rem] bg-gradient-to-tr animate-spin-slow from-brand-blue to-brand-purple blur-[128px] rounded-full -z-50"></div>
				<div className="relative bottom-[90vh] left-[80vw] opacity-50 h-[40rem] w-[35rem] bg-gradient-to-tr animate-spin-slow from-brand-purple to-brand-purple blur-[128px] rounded-full -z-50"></div>
			</body>
		</html>
	);
}
