import getBlogMetadata from "@/components/blogs/getBlogMetadata";
import BlogPreview from "@/components/blogs/BlogPreview";

export default function Blogs() {
  const blogMetadata = getBlogMetadata();
  const BlogPreviews = blogMetadata.map((blog) => (
    <BlogPreview key={blog.slug} {...blog} />
  ));
  return (
    <div className="w-full overflow-y-auto h-full flex flex-col gap-36 max-[800px]:p-32 p-64 bg-bg-1 border border-stroke-1 backdrop-blur-main rounded-out">
      <h2 className="text-2 font-medium">Blog</h2>
      {BlogPreviews}
      <div className="h-screen"></div>
    </div>
  );
}
