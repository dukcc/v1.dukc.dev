import getProjectMetadata from "@/components/projects/getProjectMetadata";
import ProjectPreview from "@/components/projects/ProjectPreview";
import motion from "framer-motion";

export default function Home() {
  const projectMetadata = getProjectMetadata();
  const projectPreviews = projectMetadata.map((project) => (
    <ProjectPreview key={project.slug} {...project} />
  ));

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
    },
  };

  return (
    <div className="w-full overflow-y-auto flex flex-col gap-12 h-full p-64 max-[1000px]:p-24 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
      <div className="flex w-full h-fit items-center gap-24">
        <h3 className="text-3 font-medium whitespace-nowrap">Featured Work</h3>
        <div className="w-full h-[1px] bg-white/10"></div>
      </div>
      <div className="grid grid-cols-3 max-[1270px]:grid-cols-2 max-[600px]:grid-cols-1 gap-24 max-[1000px]:gap-16">
        {projectPreviews}
      </div>
      <div className="h-screen max-[800px]:hidden"></div>
    </div>
  );
}
