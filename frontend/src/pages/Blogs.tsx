import Appbar from "../Components/Appbar";
import useBlogs from "../hooks";
import BlogsCard from "../Components/BlogsCard";
import CircularIndeterminate from "../Components/config";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularIndeterminate />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefaf6] font-serif">
      <Appbar />

      <main className="max-w-5xl mx-auto px-4 py-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((post: any) => (
          <BlogsCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
            author_avatar={post.author.avatar || post.author.name} 
            // If avatar URL is not available, fallback to name (you can handle inside BlogsCard)
          />
        ))}
      </main>
    </div>
  );
};

export default Blogs;
