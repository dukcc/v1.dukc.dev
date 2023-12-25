import fs from "fs";
import Markdown from "markdown-to-jsx";
import getProjectMetadata from "../../../components/projects/getProjectMetadata";
import matter from "gray-matter";
import SideNav from "@/components/SideNav";

const getProjectContent = (slug: string) => {
	const folder = "projects/";
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, "utf8");
	const matterResult = matter(content);
	return matterResult.content;
};

export const generateStaticParams = async () => {
	const projects = getProjectMetadata();
	return projects.map((project) => ({
		slug: project.slug,
	}));
};

export default function Project(props: any) {
	const slug = props.params.slug;
	const content = getProjectContent(slug);
	return (
		<div className="flex h-full gap-32 min-h-0 max-[800px]:flex-col">
			<SideNav />
			<div className="w-full overflow-y-auto flex place-content-center h-full p-96 max-[800px]:p-24 bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
				<article className="prose w-full prose-img:rounded-out lg:prose-xl prose-h1:text-1 prose-h1: prose-h2:text-2 prose-h3:text-3 prose-p:text-text-1 prose-headings:text-text-1 prose-a:text-brand-blue hover:prose-a:text-brand-blue/75 prose-code:text-[#b3b3b3] prose-li:text-text-1 prose-ul:text-text-1 prose-blockquote:text-[#d3d3d3]">
					<Markdown>{content}</Markdown>
				</article>
				<div className="h-screen"></div>
			</div>
		</div>
	);
}
