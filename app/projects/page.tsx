import Project from "@/components/Project";
import SideNav from "@/components/SideNav";

export default function Projects() {
	return (
		<div className="flex gap-32 h-full min-h-0 max-[800px]:flex-col">
			<SideNav />
			<div className="w-full overflow-y-auto h-full flex flex-col gap-64 max-[800px]:p-32 p-64 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
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
				<div className="h-screen"></div>
			</div>
		</div>
	);
}
