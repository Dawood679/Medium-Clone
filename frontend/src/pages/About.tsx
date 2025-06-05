import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-[#fefaf6] min-h-screen flex flex-col font-serif">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-6 sm:py-8">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Medium</h1>
        <nav className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 text-sm font-medium text-gray-700 items-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="/signup" className="hover:underline">Write</a>
          <a href="/signin" className="hover:underline">Sign in</a>
          <Link to={"/signup"}>
            <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition">
              Get started
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 max-w-4xl mx-auto text-gray-800 pt-[15vh] sm:pt-[20vh]">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Medium</h2>
        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Medium is a place where words matter. We're building a new kind of
          platform for reading and writing—one that rewards depth, nuance, and
          insight over clickbait and superficiality.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Whether you're a seasoned journalist, an amateur thinker, or someone
          with a story that needs to be told, Medium gives you the tools and
          audience to share ideas that matter.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4">
          We believe that great ideas can come from anywhere and anyone. Our
          mission is to help those ideas reach people who need them.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Join us in shaping the future of storytelling, one thoughtful piece at
          a time.
        </p>
      </main>

      {/* Footer */}
      <footer className="mt-12 px-6 py-4 text-sm text-gray-500 flex flex-wrap gap-4 justify-center">
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Status</a>
        <a href="#" className="hover:underline">Careers</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
      </footer>
    </div>
  );
};

export default AboutPage;
