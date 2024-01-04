"use client";

import LinkButton from "./LinkButton";
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
			className="h-fit w-full flex gap-64 max-[990px]:flex-col max-[995px]:gap-32 border-b pb-48 border-stroke-1"
		>
			<h2 className="text-2 font-medium whitespace-nowrap max-[900px]:whitespace-normal">{title}</h2>
			<div className="flex flex-col gap-16 max-[995px]:gap-32">
				<p className="text-body leading-[200%]">{description}</p>
				<div className="flex gap-64 gap-y-8 flex-wrap">
					<p className="text-sub">{type}</p>
					<LinkButton sub text="Learn More" link={link1} />
					<LinkButton sub text="Website" link={link2} />
				</div>
			</div>
		</motion.div>
	);
}
