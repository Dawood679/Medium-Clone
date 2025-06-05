import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blogs from "./pages/Blogs";

import Blog from "./Components/Blog"
import Publish from "./pages/Publish";
import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/About";
import Profile from "./pages/Profile";
import Update from "./pages/Update";
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/blog/:id" element={<Blog/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/publish" element={<Publish/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
