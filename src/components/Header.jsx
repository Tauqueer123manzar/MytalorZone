import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import {Link} from 'react-router-dom'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-orange-500">MytalorZone</div>

        {/* Hamburger Menu Button */}
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
          className={`${isMenuOpen ? "block" : "hidden"
            } md:flex absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent shadow-md md:shadow-none z-50 md:z-auto`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
            <li>
              <a href="/" className="text-md md:text-lg text-gray-600 hover:text-gray-900">
                HOME
              </a>
            </li>
            <li>
              <a href="/about" className="text-md md:text-lg text-gray-600 hover:text-gray-900">
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-md md:text-lg text-gray-600 hover:text-gray-900"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-md md:text-lg text-gray-600 hover:text-gray-900"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-md md:text-lg text-gray-600 hover:text-gray-900"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center">
          <p
            style={{ fontSize: "25px" }}
            className="p-2"
            href="/cart"
          >
            <CiShoppingCart />
          </p>
          <button className="text-md md:text-lg text-gray-600 hover:text-gray-900">
            <Link to="/login">LOGIN</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
