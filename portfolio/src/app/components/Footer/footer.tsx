import React from "react";
import { ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Nigee Hettige</p>
            <p className="text-gray-400 text-sm">
              Computer Science Undergraduate
            </p>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <button
              onClick={scrollToTop}
              className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-full transition-colors duration-300 mb-2"
            >
              <ArrowUp size={20} />
            </button>
            <span className="text-sm text-gray-400">Back to top</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nigee Hettige. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Designed and built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
