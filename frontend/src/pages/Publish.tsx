import { useState } from "react";
import Appbar from "../Components/Appbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { BECKEND_URL } from "../Components/config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handlePublish = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        `${BECKEND_URL}/api/v1/post`,
        {
          title,
          content,
          // send only the text, no html tags
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Post published:", response.data);
        navigate("/blogs");
      })
      .catch((error) => {
        console.error("Error publishing post:", error.response?.data || error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <div className="max-w-4xl mx-auto p-6 mt-10 ">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Write a New post</h1>

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
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md "
          >
            Publish post
          </button>
        </div>
      </div>

      {/* Inline CSS to expand editable area inside ReactQuill */}
      <style>{`
        .ql-editor {
          min-height: 350px !important;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default Publish;
