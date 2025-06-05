import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Appbar from "../Components/Appbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import CircularIndeterminate from "../Components/config";
import { BECKEND_URL } from "../Components/config";
import { useBlog } from "../hooks";

// Blog type definition
interface Blog {
  title: string;
  content: string;
  id: string;
}

const Update = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { loading, blogs }: { loading: boolean; blogs: Blog | null } = useBlog({ id: id || "" });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Set initial values when blog is fetched
  useEffect(() => {
  if (blogs) {
    setTitle((prev) => prev || blogs.title);
    setContent((prev) => prev || blogs.content);
  }
}, [blogs]);


  // Show loader if still fetching or blogs is null
  if (loading || !blogs) {
    return <CircularIndeterminate />;
  }

  const handlePublish = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.put(
        `${BECKEND_URL}/api/v1/post/${id}`,
        {
          title,
          content,
          id,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      console.log("Post updated:", response.data);
      navigate(`/blog/${id}`);
    } catch (error: any) {
      console.error("Error updating post:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />

      <div className="max-w-4xl mx-auto p-6 mt-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Update post</h1>
    {blogs.title}
    {blogs.content}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="mb-6 bg-white"
          placeholder="Write an article..."
          style={{ height: "400px", marginBottom: "24px" }}
        />

        <div className="pt-10">
          <button
            onClick={handlePublish}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
          >
            Update post
          </button>
        </div>
      </div>

      <style>{`
        .ql-editor {
          min-height: 350px !important;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Update;
