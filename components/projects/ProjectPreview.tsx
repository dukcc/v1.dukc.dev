"use client";

import Link from "next/link";
import {ProjectMetadata} from "./ProjectMetadata";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import moment from 'moment';

const tiltOptions = {
	reverse: true,
	max: 8,
	perspective: 1000,
	scale: 1,
	transition: false,
};

export default function ProjectPreview(props: ProjectMetadata) {
	return (
		<motion.div
			initial={{y: -25, opacity: 0}}
			whileInView={{y: 0, opacity: 1}}
			transition={{type: "spring", stiffness: 200, duration: 0.4, damping: 20, delay: 0.1}}
		>
			<Tilt options={tiltOptions}>
				<Link
					href={`/work/${props.slug}`}
					className="bg-cover bg-center bg-clip-padding w-full h-auto aspect-[3/3] max-[800px]:aspect-[1.7/2.21] max-[600px]:aspect-[1.7/1.35] flex flex-col place-content-end align-bottom place-items-end p-32 rounded-in border border-stroke-2 hover:scale-[1.04] active:scale-[.75] duration-150 ease-out max-[540px]:p-24"
					style={{
						backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.8)), url(${props.image})`,
					}}
				>
					<h3 className="text-3 w-full font-medium max-[540px]:text-body">
						{props.title}
					</h3>
					<p className="text-sub w-full">{props.type} - {moment(props.date).format("MMMM D, YYYY")}</p>
				</Link>
			</Tilt>
		</motion.div>
	);
}