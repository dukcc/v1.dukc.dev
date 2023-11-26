"use client";

import Link from "next/link";
import {HiArrowUpRight} from "react-icons/hi2";
import {motion} from "framer-motion";

interface ProjectProps {
	title: string;
	description: string;
	link1: string;
	link2: string;
	type: string;
}

export default function Project({
	title,
	description,
	link1,
	link2,
	type,
}: ProjectProps) {
	return (
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
			className="h-fit w-full flex gap-64 max-[990px]:flex-col max-[995px]:gap-32"
		>
			<h2 className="text-2 font-medium">{title}</h2>
			<div className="flex flex-col gap-16 max-[995px]:gap-32">
				<p className="text-body">{description}</p>
				<div className="flex gap-64 gap-y-8 flex-wrap">
					<p className="text-sub">{type}</p>
					<Link
						href={link1}
						className="flex gap-8 place-items-center hover-active-effect"
					>
						<p className="text-sub">Learn More</p>
						<HiArrowUpRight className="w-[24px] h-[24px]" />
					</Link>
					<Link
						href={link2}
						className="flex gap-8 place-items-center hover-active-effect"
					>
						<p className="text-sub">Website</p>
						<HiArrowUpRight className="w-[24px] h-[24px]" />
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
