import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown, FaChevronUp, FaStethoscope } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { PiSignInLight } from "react-icons/pi";

type Props = {};

const Header: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const langDropdownRef = useRef<HTMLDivElement>(null); // Reference for the dropdown

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleLangDropdown = () => setIsLangDropdownOpen((prev) => !prev);

  const closeDropdown = () => setIsLangDropdownOpen(false); // Function to close the dropdown
  const closeMenu = () => setIsMenuOpen(false); // Function to close the main menu

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close both the dropdown and the menu
  const handleLinkClick = () => {
    closeDropdown();
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-100 sm:showdow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-indigo-600 flex">
          <FaStethoscope className="h-10 w-auto" />{" "}
          <span className="text-2xl"> HMIS</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full bg-white lg:flex lg:items-center lg:w-auto lg:space-x-6 mb-4 lg:mb-0 sm:pb-5 lg:pb-0 md:pb-0`}
        >
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600"
            onClick={closeMenu} // Close the menu when a link is clicked
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600"
            onClick={closeMenu} // Close the menu when a link is clicked
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600"
            onClick={closeMenu} // Close the menu when a link is clicked
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-800 hover:text-blue-600"
            onClick={closeMenu} // Close the menu when a link is clicked
          >
            Contact
          </Link>

          {/* Language Selector Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              className="flex items-center text-gray-800 focus:outline-none w-full justify-between px-4 py-4"
              onClick={toggleLangDropdown}
            >
              <span className="mr-2">
                <CgProfile className="h-5 w-auto" />
              </span>
              <span>Account</span>
              {isLangDropdownOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>

            {/* Dropdown Menu */}
            {isLangDropdownOpen && (
              <div className="absolute left-0 mt-0 bg-white border border-gray-200 rounded shadow-md w-full">
                <Link
                  to="/login"
                  className="flex gap-4 text-indigo-500 px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                  <PiSignInLight className="h-5 w-auto" />
                   <span> Sign In</span>
                </Link>
                <Link
                  to="/register"
                  className="flex gap-4 text-indigo-500 px-4 py-2 text-gray-800 hover:bg-gray-100 z-100"
                  onClick={handleLinkClick}
                >
                  <HiOutlineUserPlus className="h-5 w-auto" />
                  <span>Sign Up</span>
                </Link>
                <Link
                  to="/logout"
                  className="flex text-indigo-500 gap-4 px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={handleLinkClick}
                >
                   <CiLogout className="h-5 w-auto" />
                   <span className="text-indigo-500">Log Out</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
