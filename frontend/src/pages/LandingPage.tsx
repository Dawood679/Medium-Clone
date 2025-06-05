import { Link } from "react-router-dom";

const MediumClone = () => {
  return (
    <div className="bg-[#fefaf6] min-h-screen px-6 py-8 font-serif">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 sm:gap-0">
        <h1 className="text-3xl font-bold">Medium</h1>
        <nav className="flex flex-wrap gap-4 items-center text-sm font-medium text-gray-700">
          <Link to="/about" className="hover:underline">
            Our story
          </Link>
          <a href="#" className="hover:underline">
            Membership
          </a>
          <Link to="/blogs" className="hover:underline">
            Write
          </Link>
          <Link to="/signin" className="hover:underline">
            Sign in
          </Link>
          <Link to="/signup">
            <button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition">
              Get started
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pl-0 lg:pl-[12vw] h-[60vh]">
        <main className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-5xl sm:text-8xl font-thin leading-tight">
              Human <span className="whitespace-nowrap">stories & ideas</span>
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              A place to read, write, and deepen your understanding
            </p>
            <Link to="/signup">
              <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg cursor-pointer hover:bg-gray-800 transition">
                Start reading
              </button>
            </Link>
          </div>

          {/* Right Image (hidden on mobile) */}
          <div className="mt-10 lg:mt-0 lg:ml-16 hidden lg:block max-w-lg w-full">
            <img
              src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
              alt="Illustration"
              className="w-full h-auto max-h-[78vh]"
            />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-5 text-sm text-gray-500 flex flex-wrap gap-4 justify-center border-t border-gray-300 w-full">
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Status</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Careers</a>
        <a href="#" className="hover:underline">Press</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Rules</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Text to speech</a>
      </footer>
    </div>
  );
};

export default MediumClone;
