import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Links from "../Links/Links";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar px-4 md:p-0 primary-color" ref={navbarRef}>
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-2xl font-bold ">
          Our Gadgets
        </a>
      </div>
      <div
        className={`absolute right-4 duration-700 ease-in-out py-2 px-4 rounded-lg text-sm bg-transparent backdrop-blur-md shadow-lg
          ${
            isOpen ? "top-16" : "-top-48"
          } md:static md:duration-75 md:navbar-center md:flex md:py-0 md:px-0 md:rounded-none md:shadow-none`}
      >
        <Links closeMenu={closeMenu} />
      </div>
      <div className="navbar-end flex items-center gap-2">
        <a className="btn btn-circle hover:bg-gray-300 transition-all duration-100">
          <HiOutlineShoppingCart className="text-xl primary-text" />
        </a>
        <a className="btn btn-circle hover:bg-gray-300 transition-all duration-100">
          <FaRegHeart className="text-xl primary-text" />
        </a>

        {/* Mobile menu toggle */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          {isOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <HiMenuAlt1 className="text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
