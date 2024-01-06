import fs from "fs";
import Markdown from "markdown-to-jsx";
import getProjectMetadata from "../../../components/projects/getProjectMetadata";
import matter from "gray-matter";
import {HiMiniArrowLeft} from "react-icons/hi2";
import Link from "next/link";
import moment from "moment";

const getProjectContent = (slug: string) => {
	const folder = "projects/";
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, "utf8");
	const matterResult = matter(content);
	return {
		content: matterResult.content,
		image: matterResult.data.image,
		date: matterResult.data.date,
	};
};

export const generateStaticParams = () => {
	const projects = getProjectMetadata();
	return projects.map((project) => ({
		slug: project.slug,
	}));
};

export default function Project(props: any) {
	const slug = props.params.slug;
	const {content, image, date} = getProjectContent(slug);
	return (
		<div className="w-full overflow-y-auto overflow-clip flex flex-col items-center h-full gap-64 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
			<div
				className="aspect-[12/4] max-[800px]:aspect-[12/8] w-full h-auto bg-cover p-64 max-[800px]:p-24 flex justify-between items-start"
				style={{
					backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0)), url(${image})`,
				}}
			>
				<Link
					href={"/"}
					className="flex gap-8 w-fit group place-items-center hover:text-brand-blue ease-out duration-500"
				>
					<HiMiniArrowLeft className="group-hover:rotate-[135deg] ease-out duration-500" />
					<p>Back</p>
				</Link>
				<p className="text-body">{moment(date).format("MMMM D, YYYY")}</p>
			</div>
			<article className="px-32 pb-72 prose w-full prose-img:rounded-in lg:prose-xl prose-h1:text-1 prose-h1:font-bold prose-h2:text-2 prose-h3:text-3 prose-p:text-text-1 prose-p:text-body prose-li:text-body prose-ul:text-body prose-p:font-normal prose-headings:w-full prose-headings:text-text-1 prose-a:text-brand-blue prose-a:font-normal prose-a:ease-out prose-a:transition-all prose-a:duration-150 hover:prose-a:text-brand-blue/80 prose-code:text-[#b3b3b3] prose-li:text-text-1 prose-ul:text-text-1 prose-blockquote:text-[#d3d3d3]">
				<Markdown>{content}</Markdown>
			</article>
			<div className="h-screen"></div>
		</div>
	);
}
