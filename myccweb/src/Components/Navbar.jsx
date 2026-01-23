import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
const [open, setOpen] = useState(false);

  const [megaOpen, setMegaOpen] = useState(false);

  const navLink =
    "px-4 py-6 transition-all duration-300 flex items-center relative";
  const active = "bg-yellow-400 text-white";

  return (
    <header className="sticky top-0 z-50 bg-white  shadow">
    <nav className="max-w-8xl mx-auto px-10 flex items-center h-24">
  
  
  <div className="flex-1 hidden md:flex items-center gap-3">
    <div className="flex gap-3 text-gray-600 float-icon">
      <FaFacebookF className=" cursor-pointer h-5 w-5 text-blue-600 hover:text-gray-700" />
      <FaInstagram className="cursor-pointer h-5 w-5 text-pink-600 hover:text-gray-600" />
      <FaLinkedinIn className="cursor-pointer h-5 w-5 text-blue-700 hover:text-gray-600" />
      <FaTiktok className="cursor-pointer h-5 w-5 text-black hover:text-gray-600" />
      <FaYoutube className="cursor-pointer h-5 w-5 text-red-600 hover:text-gray-600" />
    </div>
  </div>


  <div className="flex items-center gap-8"> 
    

    <ul className="hidden md:flex items-center font-medium">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${navLink} hover:bg-black hover:text-white ${isActive ? active : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${navLink} hover:bg-black hover:text-white ${isActive ? active : ""}`
        }
      >
        About
      </NavLink>

   
      <li
        className={`${navLink} cursor-pointer relative`}
        onMouseEnter={() => setMegaOpen(true)}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <span className="hover:bg-black hover:text-white px-4 py-6">Courses ▾</span>

        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-150 bg-white text-gray-800 shadow-xl rounded-lg p-6 grid grid-cols-3 gap-6 z-50"
            >
              <div>
                <h4 className="font-semibold mb-3">Development</h4>
                <NavLink to="/courses/web" className="block px-3 py-2 hover:bg-black hover:text-white rounded">Web Development</NavLink>
                <NavLink to="/courses/react" className="block px-3 py-2 hover:bg-black hover:text-white rounded">React JS</NavLink>
                <NavLink to="/courses/node" className="block px-3 py-2 hover:bg-black hover:text-white rounded">Node JS</NavLink>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Design</h4>
                <NavLink to="/courses/uiux" className="block px-3 py-2 hover:bg-black hover:text-white rounded">UI / UX Design</NavLink>
                <NavLink to="/courses/figma" className="block px-3 py-2 hover:bg-black hover:text-white rounded">Figma</NavLink>
                <NavLink to="/courses/graphics" className="block px-3 py-2 hover:bg-black hover:text-white rounded">Graphic Design</NavLink>
              </div>
              <div>
                <h4 className="font-semibold mb-3">AI & Tech</h4>
                <NavLink to="/courses/ai" className="block px-3 py-2 hover:bg-black hover:text-white rounded">AI Chatbot</NavLink>
                <NavLink to="/courses/ml" className="block px-3 py-2 hover:bg-black hover:text-white rounded">Machine Learning</NavLink>
                <NavLink to="/courses/python" className="block px-3 py-2 hover:bg-black hover:text-white rounded">Python</NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    </ul>


    <div className="shrink-0">
      <Link to="/">
        <img src="./src/assets/logo.png" alt="Logo" className="h-16" />
      </Link>
    </div>

    {/* Right Side Links */}
    <div className="hidden md:flex items-center font-medium">
      <NavLink to="/tutorials" className={({ isActive }) => `${navLink} hover:bg-black hover:text-white ${isActive ? active : ""}`}>
        Tutorials
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => `${navLink} hover:bg-black hover:text-white ${isActive ? active : ""}`}>
        Blog
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `${navLink} hover:bg-black hover:text-white ${isActive ? active : ""}`}>
        Contact
      </NavLink>
    </div>
  </div>

  {/* 3. RIGHT SECTION: Mobile Menu Button (Takes up remaining space on right) */}
  <div className="flex-1 flex justify-end">
    <button className="md:hidden text-2xl" onClick={() => setOpen(true)}>
      <FaBars />
    </button>
  </div>

</nav>
 <AnimatePresence>
  {open && (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-9998"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed top-0 right-0 h-screen w-full sm:w-[80%] bg-white z-9999 p-6 overflow-y-auto text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <img src="./src/assets/logo.png" className="h-10" alt="Logo" />
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 text-lg font-medium">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>

          {/* Courses */}
          <details>
            <summary className="cursor-pointer">Courses</summary>
            <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
              <NavLink to="/courses/web" onClick={() => setOpen(false)}>Web Development</NavLink>
              <NavLink to="/courses/react" onClick={() => setOpen(false)}>React JS</NavLink>
              <NavLink to="/courses/uiux" onClick={() => setOpen(false)}>UI / UX</NavLink>
              <NavLink to="/courses/ai" onClick={() => setOpen(false)}>AI Chatbot</NavLink>
            </div>
          </details>

          <NavLink to="/tutorials" onClick={() => setOpen(false)}>Tutorials</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6 text-xl text-gray-600">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>

          <div className="mt-4 text-sm">
            Language: <b>English</b>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>








    </header>
  );
};

export default Navbar;
    