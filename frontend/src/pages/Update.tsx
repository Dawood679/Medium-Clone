import { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import CircularIndeterminate from "../Components/config";
import { BECKEND_URL } from "../Components/config";
import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks";

interface Blog {
  id: string;
  title: string;
  content: string;
}

const Update = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, blogs } : { loading: boolean; blogs: Blog[] } = useBlog({ id: id || "" });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

 

  // Set initial title and content once blog is loaded or changes
  useEffect(() => {
    if (blogs) {
      
      setTitle(blogs[0].title);
      
      setContent(blogs[0].content);
    }
  }, [blogs]);

  if (loading) {
    return <CircularIndeterminate />;
  }

  const handlePublish = () => {
    const token = localStorage.getItem("token");

    axios
      .put(
        `${BECKEND_URL}/api/v1/post/${id}`,
        {
          
          title: title || blogs[0]?.title,
         
          content: content || blogs[0]?.content,
          id: id,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Post updated:", response.data);
        navigate(`/blog/${id}`);
      })
      .catch((error) => {
        console.error("Error updating post:", error.response?.data || error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <div className="max-w-4xl mx-auto p-6 mt-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Update post</h1>
        
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
