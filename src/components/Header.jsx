import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-3xl font-bold text-orange-500">MytalorZone</div>

        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "inline" : "hidden"
          } absolute flex flex-col top-14 left-0 w-full bg-gray-100 md:static md:flex md:w-auto md:bg-transparent  md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0 px-4 md:px-0 shadow-md md:shadow-none`}
        >
          <a href="/" className="text-lg text-gray-600 hover:text-gray-900">
            HOME
          </a>
          <a href="/about" className="text-lg text-gray-600 hover:text-gray-900">
            ABOUT
          </a>
          <a
            href="/services"
            className="text-lg text-gray-600 hover:text-gray-900"
          >
            SERVICES
          </a>
          <a
            href="/contact"
            className="text-lg text-gray-600 hover:text-gray-900"
          >
            CONTACT
          </a>
          <a href="/blog" className="text-lg text-gray-600 hover:text-gray-900">
            BLOG
          </a>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="text-lg text-gray-600 hover:text-gray-900">
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
