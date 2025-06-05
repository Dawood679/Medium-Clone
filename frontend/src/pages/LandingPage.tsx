
import { Link } from "react-router-dom";

const MediumClone = () => {
  return (
    <div className="bg-[#fefaf6] min-h-screen px-6 py-8 font-serif ">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 sm:gap-0 ">
        <h1 className="text-3xl font-bold">Medium</h1>
        <nav className="flex flex-wrap gap-4 items-center text-sm font-medium text-gray-700">
          <Link to={"/about"}><a href="#">Our story</a></Link>
          <a href="#">Membership</a>
          <Link to={'/blogs'}><a href="#">Write</a></Link>
          <Link to={'/signin'}><a href="#">Sign in</a></Link>
          <Link to={'/signup'}><button className="bg-black text-white px-4 py-2 rounded-full cursor-pointer">
            Get started
          </button></Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pl-[12vw] h-[60vh]">
        <main className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-5xl sm:text-8xl font-thin leading-tight ">
              Human <span className="whitespace-nowrap">stories & ideas</span>
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              A place to read, write, and deepen your understanding
            </p>
            <Link to={'/signup'}>
              <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg cursor-pointer">
                Start reading
              </button>
            </Link>
          </div>

          {/* Right Image (hidden on mobile) */}
          <div className="mt-10 lg:mt-0 lg:ml-16 hidden lg:block ">
            <img
              src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
              alt="Illustration"
              className="w-full max-w-lg h-[78vh]"
            />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-33 pt-5 text-sm text-gray-500 flex flex-wrap gap-4 justify-center border-t-1 w-full">
        <a href="#">Help</a>
        <a href="#">Status</a>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
        <a href="#">Blog</a>
        <a href="#">Privacy</a>
        <a href="#">Rules</a>
        <a href="#">Terms</a>
        <a href="#">Text to speech</a>
      </footer>
    </div>
  );
};

export default MediumClone;
