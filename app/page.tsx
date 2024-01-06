import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";

export default function Home() {
	const projectMetadata = getProjectMetadata();
	const projectPreviews = projectMetadata.map((project) => (
		<ProjectPreview key={project.slug} {...project} />
	));
	return (
		<div className="w-full overflow-y-auto flex flex-col h-full p-64 max-[1000px]:p-24 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
			<div className="grid grid-cols-3 max-[1270px]:grid-cols-2 max-[600px]:grid-cols-1 gap-32 max-[1000px]:gap-16">
				{projectPreviews}
			</div>
			<div className="h-screen max-[800px]:hidden"></div>
		</div>
	);
}
