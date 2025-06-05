import { useState } from "react";
import { Avator } from "./BlogsCard";
import { Link, useNavigate } from "react-router-dom";

import { userdata } from "../hooks";

const Appbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const nevigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const { blogs } = userdata();
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    setIsDropdownOpen(false);
    localStorage.setItem("token", "");
    nevigate("/signin");
  };

  function handleProfile() {
    nevigate("/profile");
  }

  return (
    <div className="px-10 py-2 border-b border-slate-300 relative">
      <div className="flex flex-cols justify-between">
        <div className="cursor-pointer">
          <Link to={"/blogs"}>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-serif text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700 pt-1 cursor-pointer">
              Medium
            </h1>
          </Link>
        </div>

        <div className="flex gap-[5vw]">
          <div>
            <Link to={"/publish"}>
              <button
                type="button"
                className="focus:outline-none text-white bg-black hover:bg-slate-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
              >
                New
              </button>
            </Link>
          </div>
          <div className="relative">
            <button onClick={toggleDropdown} className="cursor-pointer">
              <Avator author_avatar={blogs} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button
                  onClick={handleProfile}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
