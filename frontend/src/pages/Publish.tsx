import { useState } from "react";
import Appbar from "../Components/Appbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { BECKEND_URL } from "../Components/config";
import { useNavigate } from "react-router-dom";

const stripHtml = (html: string) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both Title and Content.");
      return;
    }

    setLoading(true);
    setError(null);

    const plainTextContent = stripHtml(content);

    const token = localStorage.getItem("token");

    axios
      .post(
        `${BECKEND_URL}/api/v1/post`,
        {
          title,
          content: plainTextContent,
        },
        {
          headers: {
            Authorization: token ? `${token}` : "",
          },
        }
      )
      .then((response) => {
        console.log("Post published:", response.data);
        navigate("/blogs");
      })
      .catch((error) => {
        console.error("Error publishing post:", error.response?.data || error.message);
        setError(error.response?.data?.message || "Failed to publish post.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <div className="max-w-4xl mx-auto p-6 mt-10">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Write a New post</h1>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />

        {/* Rich Text Editor */}
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="mb-6 bg-white"
          placeholder="Write an article..."
          style={{ height: "400px", marginBottom: "24px" }}
          readOnly={loading}
        />

        {error && <p className="mb-4 text-red-600">{error}</p>}

        {/* Publish Button */}
        <div className="pt-10">
          <button
            onClick={handlePublish}
            disabled={loading}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Publishing..." : "Publish post"}
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
