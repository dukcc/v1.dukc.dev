import fs from "fs";
import matter from "gray-matter";

interface BlogMetadata {
  title: string;
  type: string;
  image: string;
  slug: string;
  date: string;
}

const getBlogMetadata = (): BlogMetadata[] => {
  const folder = "blogs/";
  const files = fs.readdirSync(folder);
  const markdownBlogs = files.filter((file) => file.endsWith(".md"));

  const blogs = markdownBlogs
    .map((filename) => {
      const fileContents = fs.readFileSync(`blogs/${filename}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        type: matterResult.data.type,
        image: matterResult.data.image,
        date: matterResult.data.date,
        slug: filename.replace(".md", ""),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return blogs;
};

export default getBlogMetadata;
