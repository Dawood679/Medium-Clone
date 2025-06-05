import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-[#fefaf6] min-h-screen flex flex-col font-serif">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-8">
        <h1 className="text-3xl font-bold">Medium</h1>
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="/">Home</a>
          <a href="/signup">Write</a>
          <a href="/signin">Sign in</a>
          <Link to={"/signup"}><button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">Get started</button></Link> 
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 max-w-4xl mx-auto text-gray-800 pt-[15vh]">
        <h2 className="text-5xl font-bold mb-6">About Medium</h2>
        <p className="text-lg leading-relaxed mb-4">
          Medium is a place where words matter. We're building a new kind of
          platform for reading and writing—one that rewards depth, nuance, and
          insight over clickbait and superficiality.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Whether you're a seasoned journalist, an amateur thinker, or someone
          with a story that needs to be told, Medium gives you the tools and
          audience to share ideas that matter.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          We believe that great ideas can come from anywhere and anyone. Our
          mission is to help those ideas reach people who need them.
        </p>
        <p className="text-lg leading-relaxed">
          Join us in shaping the future of storytelling, one thoughtful piece at
          a time.
        </p>
      </main>

      {/* Footer */}
      <footer className="mt-12 px-6 py-4 text-sm text-gray-500 flex flex-wrap gap-4 justify-center">
        <a href="#">Help</a>
        <a href="#">Status</a>
        <a href="#">Careers</a>
        <a href="#">Blog</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </footer>
    </div>
  );
};

export default AboutPage;
