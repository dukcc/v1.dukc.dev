"use client";

import SideNav from "@/components/SideNav";
import Image from "next/image";
import Link from "next/link";
import {HiArrowUpRight} from "react-icons/hi2";
import {motion} from "framer-motion";

export default function About() {
	return (
		<div className="flex gap-32 min-h-0 max-[800px]:flex-col">
			<SideNav />
			<div className="w-full overflow-hidden h-full flex bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out max-[800px]:overflow-y-auto">
				<div className="flex flex-col max-[800px]:place-content-start gap-[86px] max-[800px]:gap-[64px] p-[64px] max-[800px]:p-32 h-full w-full overflow-y-scroll">
					<motion.div
						initial={{y: -50, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 50,
							duration: 0.2,
							delay: 0,
						}}
						className="flex flex-col gap-32 h-fit w-full"
					>
						<h2 className="text-2 font-medium">About</h2>
						<p className="text-body leading-[225%]">
							I'm a versatile designer skilled in UI design, graphic design,
							motion design, 3D design, & front-end web development. I'm
							focusing on creating innovative apps, websites, tools, & concept
							videos. I am also learning Rust, and like experimenting with
							Python, Discord.js, and other software.
						</p>
					</motion.div>
					<motion.div
						initial={{y: -50, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 50,
							duration: 0.2,
							delay: 0.2,
						}}
						className="flex flex-col gap-32 h-fit w-full"
					>
						<h2 className="text-2 font-medium">Skills</h2>
						<div className="flex flex-col gap-16">
							<p className="text-body">Tools & Software</p>
							<div className="flex flex-wrap gap-16 h-fit">
								<Image
									width="32"
									height="32"
									alt="Figma"
									src="/icons/skills/figma.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Affinity"
									src="/icons/skills/designer.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="After Effects"
									src="/icons/skills/ae.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Visual Studio Code"
									src="/icons/skills/vscode.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Git"
									src="/icons/skills/git.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Jetbrains"
									src="/icons/skills/jetbrains.svg"
								/>
							</div>
							<p className="text-body">Languages & Frameworks</p>
							<div className="flex flex-wrap gap-16 h-fit">
								<Image
									width="32"
									height="32"
									alt="Javascript"
									src="/icons/skills/js.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Python"
									src="/icons/skills/python.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Nuxt"
									src="/icons/skills/next.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Vue"
									src="/icons/skills/react.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Nuxt"
									src="/icons/skills/nuxt.svg"
								/>
								<Image
									width="32"
									height="32"
									alt="Vue"
									src="/icons/skills/vue.svg"
								/>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{y: -50, opacity: 0}}
						whileInView={{y: 0, opacity: 1}}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 50,
							duration: 0.2,
							delay: 0.2,
						}}
						className="flex flex-col gap-32 h-fit w-full"
					>
						<h2 className="text-2 font-medium">Experience</h2>
						<h3 className="text-3 font-medium">Bananacraft</h3>
						<p className="text-body leading-[225%]">
							I was a developer at the Minecraft network Bananacraft. I designed
							a website for them, and helped out with Minecraft plugin
							configuration.
						</p>
						<h3 className="text-3 font-medium">Extronode & Seanodes</h3>
						<p className="text-body leading-[225%]">
							Extronode/Seanodes <b>were</b> Minecraft server hosting networks.
							I was an admin there, and helped out with the MC server network,
							web & brand design, advertising, and community managment.
						</p>
						<h3 className="text-3 font-medium">TVS</h3>
						<p className="text-body leading-[225%]">
							Designed, coded, and deployed website for TVS. &nbsp;
							<a
								href="https://www.trashvomitstudios.com"
								className="underline"
								target="_blank"
							>
								Visit the website
							</a>
						</p>
					</motion.div>
					<Link
						href="/contact"
						className="flex gap-8 w-fit place-items-center hover-active-effect"
					>
						<p className="text-body font-medium">Contact me</p>
						<HiArrowUpRight className="w-[24px] h-[24px]" />
					</Link>
				</div>
				<Image
					src="/about.png"
					alt="About image"
					width={1000}
					height={1000}
					className="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
				/>
			</div>
		</div>
	);
}
