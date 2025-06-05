






import Appbar from "../Components/Appbar";
import useBlogs from "../hooks";
import BlogsCard from "../Components/BlogsCard";
import CircularIndeterminate from "../Components/config";





export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <CircularIndeterminate />;
  }

  return (
    <div>
      <Appbar />
      <div>
        
        {
        
        blogs.map((post: any) => (
          <BlogsCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
            author_avatar={post.author.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;



