import { useEffect, useState } from "react";
import Appbar from "../Components/Appbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import CircularIndeterminate, { BECKEND_URL } from "../Components/config";
import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks";

const Update = () => {
  const { id } = useParams();
  const { loading, blogs } = useBlog({ id: id || "" });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  if (loading) {
    return <CircularIndeterminate />;
  }

  
  const handlePublish = () => {
    const token = localStorage.getItem("token");

    axios
      .put(
        `${BECKEND_URL}/api/v1/post/${id}`,
        {
          title:title ||blogs.title,
          content: content || blogs.content,
          id:id
          
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Post published:", response.data);
        navigate(`/blog/${id}`);
      })
      .catch((error) => {
        console.error(
          "Error publishing post:",
          error.response?.data || error.message
        );
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <div className="max-w-4xl mx-auto p-6 mt-10 ">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Write a New post
        </h1>
        {title}
        {content}
        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Rich Text Editor */}
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="mb-6 bg-white"
          placeholder="Write an article..."
          style={{ height: "400px", marginBottom: "24px" }}
        />

        {/* Publish Button */}
        <div className="pt-10">
          <button
            onClick={handlePublish}
            
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md "
            }`}
          >
            Publish post
          </button>
        </div>
      </div>

      {/* Inline CSS to expand editable area inside ReactQuill */}
      <style jsx>{`
        .ql-editor {
          min-height: 350px !important;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Update;
