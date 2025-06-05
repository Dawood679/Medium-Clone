import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface BlogInterface {
  id: string;
  title: string;
  content: string;
  author_avatar: string; // Can be name or avatar URL
  createdAt: string;
}

const BlogsCard = ({
  id,
  title,
  content,
  author_avatar,
  createdAt,
}: BlogInterface) => {
  const postDate = new Date(createdAt).toLocaleDateString();
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const links = contentRef.current?.querySelectorAll("a");
    links?.forEach((link) => {
      (link as HTMLAnchorElement).style.color = "#2563eb";
      (link as HTMLAnchorElement).style.textDecoration = "underline";
    });
  }, []);

  return (
    <Link to={`/blog/${id}`}>
      <div className="px-[15vw] pt-10 py-3">
        <div className="border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="border-b border-slate-400 p-4">
            <div className="flex flex-cols items-center gap-2">
              <Avator author_avatar={author_avatar} />
              <h3 className="font-bold">{author_avatar}</h3>
              <div className="text-md font-thin">{postDate}</div>
            </div>

            <div className="pl-2 pt-5 w-full">
              <div className="text-xl font-bold">{title}</div>
              <div
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: content }}
                className="text-gray-800 whitespace-nowrap mb-8"
                style={{ color: "#1f2937" }}
              />
              <div className="font-thin whitespace-nowrap">
                {Math.ceil(content.length / 100)} minute(s)
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;

interface AvatorProps {
  author_avatar: string;
}

export function Avator({ author_avatar }: AvatorProps) {
  const [isHovered, setHovered] = useState(false);
  const initials = author_avatar?.charAt(0)?.toUpperCase() || "A";

  return (
    <div>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border dark:bg-gray-600 hover:bg-black cursor-pointer"
      >
        <span
          className={`font-medium text-gray-600 dark:text-gray-300 ${
            isHovered ? "text-white" : ""
          }`}
        >
          {initials}
        </span>
      </div>
    </div>
  );
}
