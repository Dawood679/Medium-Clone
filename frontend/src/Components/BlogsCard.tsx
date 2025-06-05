import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

interface bloginterface {
  id: string;
  title: string;
  content: string;
  
  author_avatar: string;
  createdAt:string

}

const BlogsCard = ({
  id,
  title,
  content,
  
  author_avatar,
  createdAt,
}: bloginterface) => {
  const postDate = new Date(createdAt).toLocaleDateString();
console.error(createdAt)
  return (
    <Link to={`/blog/${id}`}>
      <div className="px-[15vw] pt-10 py-3">
        <div className="border-b border-slate-400">
          <div className="flex flex-cols items-center gap-2 ">
            <div>
              <Avator author_avatar={author_avatar}></Avator>
            </div>
            <div>
              <h3 className="font-bold">{author_avatar}</h3>
            </div>
            <div className="text-md font-thin">{postDate}</div>
          </div>
          <div className="pl-2 pt-5">
            <div className="text-xl font-bold">{title}</div>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="text-gray-800 whitespace-pre-wrap mb-8"
              style={{
                color: "#1f2937", // gray-800
              }}
              onLoad={(e) => {
                const links = e.currentTarget.querySelectorAll("a");
                links.forEach((link) => {
                  link.style.color = "#2563eb"; // blue-600
                  link.style.textDecoration = "underline";
                });
              }}
            />

            <div className="font-thin ">
              {Math.ceil(content.length / 100)} mintes(s)
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogsCard;
interface avator {
  author_avatar: string;
}

export function Avator({ author_avatar }: avator) {
  const [isHovered,sethovered] = useState(false)
  return (
    <div className="">
      <div onMouseEnter={()=>sethovered(true)} onMouseLeave={()=>sethovered(false)} className="relative inline-flex items-center justify-center w-10 border h-10 overflow-hidden hover:bg-black bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
        <span className={`font-medium text-gray-600 dark:text-gray-300 ${isHovered ? "text-white":""}`}>
          {author_avatar[0]}
        </span>
      </div>
    </div>
  );
}
