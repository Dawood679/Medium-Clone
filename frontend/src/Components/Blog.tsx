import styled from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";
import Appbar from "../Components/Appbar";
import { useBlog } from "../hooks";
import CircularIndeterminate, { BECKEND_URL } from "../Components/config";
import { Avator } from "./BlogsCard";
import { CalendarDays, PenLine, Trash2 } from "lucide-react";
import axios from "axios";

type BlogType = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  author?: {
    name?: string;
    avatarUrl?: string;
  };
};

const BlogContent = styled.div`
  a {
    color: #2563eb;
    cursor: pointer;
    &:hover {
      color: #1d4ed8;
    }
  }
  color: #1f2937;
  white-space: pre-wrap;
  margin-bottom: 2rem;
`;

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, blogs } = useBlog({ id: id || "" });

  const blog = Array.isArray(blogs) ? blogs[0] : blogs as BlogType;

  if (loading) {
    return <CircularIndeterminate />;
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Appbar />
        <div className="max-w-4xl mx-auto py-16 text-center text-gray-700">
          <h2 className="text-xl font-semibold">Blog not found.</h2>
        </div>
      </div>
    );
  }

  const readingTime = `${Math.ceil(blog.content.length / 100)} Minute(s) read`;
  const postDate = new Date(blog.createdAt).toLocaleDateString();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    const token = localStorage.getItem("token");
    if (confirmDelete && token) {
      axios
        .delete(`${BECKEND_URL}/api/v1/post/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          navigate("/blogs");
        })
        .catch((err) => {
          alert("Error deleting blog.");
          console.error(err);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Appbar />

      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Side: Blog Title & Content */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md border border-gray-200 relative">
            <div className="absolute top-4 right-4 flex gap-3">
              <Link to={`/update/${id}`}>
                <PenLine width={20} cursor={"Pointer"} />
              </Link>

              <button
                className="text-gray-400 hover:text-red-600 cursor-pointer"
                onClick={handleDelete}
                title="Delete Blog"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center text-sm text-gray-500 mb-6">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>Posted on {postDate}</span>
            </div>

            <BlogContent dangerouslySetInnerHTML={{ __html: blog.content }} />

            <div className="border-t pt-4 mt-6">
              <p className="text-sm text-gray-500 italic">{readingTime}</p>
            </div>
          </div>

          {/* Right Side: Author Info */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <Avator
                author_avatar={
                  blog.author?.avatarUrl || blog.author?.name || "A"
                }
              />
              <div className="mt-4 text-gray-800 text-xl font-semibold">
                {blog.author?.name || "Unknown Author"}
              </div>
              <p className="text-sm text-gray-500 mt-1">Blog Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
