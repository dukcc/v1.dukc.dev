import LinkButton from "@/components/LinkButton";

export default function NotFound() {
	return (
		<div className="w-full overflow-y-auto justify-center items-center content-center flex flex-col h-full p-64 max-[1000px]:p-24 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
			<div className="flex flex-col gap-8 items-center border-b border-stroke-1 pb-18 mb-24 w-[50%]">
				<h1 className="text-1 font-semibold text-center">404</h1>
				<h3 className="text-3 font-medium text-center">Not found</h3>
			</div>
			<div className="flex flex-col gap-8 items-center">
				<p className="text-body text-center">Could not find requested resource.</p>
				<LinkButton text="Return to Home" link="/" />
			</div>
			<div className="h-screen"></div>
		</div>
	);
}
