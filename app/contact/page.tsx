"use client";

import SideNav from "@/components/SideNav";
import Image from "next/image";
import {motion} from "framer-motion";
import { HiMiniClipboard, HiMiniArrowUpRight } from "react-icons/hi2";

export default function Contact() {
	return (
		<div className="flex gap-32 min-h-0 max-[800px]:flex-col">
			<SideNav />
			<div className="w-full overflow-hidden h-full flex bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
				<div className="flex flex-col max-[800px]:place-content-start gap-128 p-64 max-[800px]:p-32 h-full w-full overflow-y-scroll">
					<div className="flex flex-col gap-32 h-fit w-full">
						<motion.h2
							initial={{y: -50, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 50,
								duration: 0.2,
								delay: 0,
							}}
							className="text-2 font-medium"
						>
							Contact
						</motion.h2>
						<motion.p
							initial={{opacity: 0}}
							whileInView={{opacity: 1}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 50,
								duration: 0.2,
								delay: 0.2,
							}}
							className="text-body leading-[225%]"
						>
							Want to work with me? Send me a message via Discord or Email. I am
							accepting commisions for a UI design or website.
						</motion.p>
						<motion.h3
							initial={{y: -50, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 50,
								duration: 0.2,
								delay: 0.2,
							}}
							className="text-3 font-medium"
						>
							Discord
						</motion.h3>
						<motion.button
							initial={{opacity: 0}}
							whileInView={{opacity: 1}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 50,
								duration: 0.2,
								delay: 0.2,
							}}
							onClick={() => navigator.clipboard.writeText("dukkcc")}
							className="text-body w-fit hover-active-effect"
						>
							Discord username: dukkcc
							<HiMiniClipboard className="inline ml-8" />
						</motion.button>
						<motion.h3
							initial={{y: -50, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 50,
								duration: 0.2,
								delay: 0.2,
							}}
							className="text-3 font-medium"
						>
							Email
						</motion.h3>
						<motion.a
							initial={{opacity: 0}}
							whileInView={{opacity: 1}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 50,
								duration: 0.2,
								delay: 0.2,
							}}
							href="mailto:hello@dukc.dev"
							className="text-body w-fit"
						>
							Email: hello@dukc.dev
							<HiMiniArrowUpRight className="inline ml-8" />
						</motion.a>
						<motion.form
							initial={{y: -50, opacity: 0}}
							whileInView={{y: 0, opacity: 1}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 50,
								duration: 0.2,
								delay: 0.2,
							}}
							className="flex flex-col gap-16"
							action="https://submit-form.com/MJTUBgv7"
						>
							<label className="text-body">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Name"
								className="fg-1 border w-full border-stroke-2 rounded-in py-8 px-16 placeholder-white/25"
							/>
							<label className="text-body">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								className="fg-1 border w-full border-stroke-2 rounded-in py-8 px-16 placeholder-white/25"
							/>
							<label className="text-body">Message</label>
							<textarea
								id="message"
								name="message"
								placeholder="Message"
								className="fg-1 border w-full h-[10rem] border-stroke-2 rounded-in py-8 px-16 placeholder-white/25 min-h-[48px]"
							></textarea>
							<button
								className="bg-brand-blue/75 text-white rounded-in border border-stroke-2 px-16 py-8 h-fit w-full hover:bg-brand-blue hover:-translate-y-1 active:bg-brand-blue/50 active:translate-y-2 duration-200 cursor-pointer"
								type="submit"
							>
								Send
							</button>
						</motion.form>
					</div>
				</div>
				<Image
					src="/contact.png"
					alt="Contact image"
					width={1000}
					height={1000}
					loading="eager"
					className="w-[50%] min-[1800px]:min-w-[950px] max-[1300px]:hidden object-cover h-screen"
				/>
			</div>
		</div>
	);
}
