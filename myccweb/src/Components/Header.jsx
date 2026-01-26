import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const TopHeader = () => {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="bg-gray-100 text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

      
        <div className="flex items-center gap-4 text-gray-600">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-600" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
        </div>

        <div className="flex items-center gap-6 text-gray-700">

          <a href="#" className="hover:text-blue-600">Support</a>
          <a href="#" className="hover:text-blue-600">Help</a>
          <a href="#" className="hover:text-blue-600">Login</a>

          {/* Language Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <span className="flex items-center gap-1">
              EN ▾
            </span>

            {langOpen && (
              <div className="absolute right-0 top-6 bg-white shadow rounded w-28">
                <p className="px-4 py-2 hover:bg-gray-100">English</p>
                <p className="px-4 py-2 hover:bg-gray-100">Urdu</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
