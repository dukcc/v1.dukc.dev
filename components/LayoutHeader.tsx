"use client";

import {usePathname} from "next/navigation";
import localFont from "next/font/local";

const hanson = localFont({
	src: "./hanson.woff2",
	display: "swap",
});

export default function LayoutHeader() {
	const pathname = usePathname();
	return (
		<>
			{!pathname.startsWith("/work/") && !pathname.startsWith("/vote") && (
				<div className="flex flex-col gap-32">
					<h1
						className={`${hanson.className} text-[75px] max-[800px]:text-1 leading-[50%] text-white`}
					>
						dukc
					</h1>
					<p className="text-body">
						UI, graphic, motion designer, & front-end web developer.
					</p>
				</div>
			)}
		</>
	);
}
