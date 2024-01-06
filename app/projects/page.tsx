import Project from "@/components/Project";

export default function Projects() {
	return (
		<div className="w-full overflow-y-auto h-full flex flex-col gap-48 max-[800px]:p-32 p-64 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
			<h2 className="text-2 font-semibold">Projects and Clients</h2>
			<Project
				title="DuckyHQ"
				description="An organization creating unique open source software for the world."
				link1="https://duckyhq.com"
				link2="https://duckyhq.com"
				type="Organization"
			/>
			<Project
				title="HQLauncher"
				description="A functional Minecraft launcher with several features and
							beautiful UI.
							Work in progress. Not available for download yet. Under the organization DuckyHQ."
				link1="https://duckyhq.com/projects/HQLauncher"
				link2="https://duckyhq.com/projects/HQLauncher"
				type="App"
			/>
			<Project
				title="MorphUI"
				description="A dark, minimalist, modern, and open source UI kit for DuckyHQ with components built for React and Figma, and it's fully documented. (Not finished or released yet.)"
				link1="#"
				link2="#"
				type="UI Kit"
			/>
			<Project
				title="Hypercube Website"
				description='A minimalist, dark website for the new Minecraft SMP called Hypercube. "Thats amazing" - Artsign, owner of server'
				link1="/work/hypercube-website"
				link2="https://www.hypercubemc.com/"
				type="Website"
			/>
			<Project
				title="TVS Website"
				description="A very simple website for the game developer TVS. It's a simple website with very little content. Just all of the game's showcase images, with a contact page too."
				link1="https://www.trashvomitstudios.com/"
				link2="https://www.trashvomitstudios.com/"
				type="Website"
			/>
			<div className="h-screen"></div>
		</div>
	);
}
