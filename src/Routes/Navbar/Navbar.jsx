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

  // return the navbar
  return (
    <div className="px-4 pt-4 md:px-8 md:pt-8 bg-slate-100">
      <div className="navbar px-4 bg-purple-700 text-white rounded-t-xl md:rounded-t-2xl" ref={navbarRef}>
        <div className="navbar-start">
          <a
            href="/"
            className=" md:px-4 md:py-2 text-2xl lg:text-3xl font-bold rounded-md hover:bg-white hover:text-purple-700 transition-all duration-300"
          >
            Our Gadgets
          </a>
        </div>
        <div
          className={`absolute right-11 duration-700 ease-in-out py-2 px-5 rounded-lg text-sm bg-white shadow-lg
          ${
            isOpen ? "top-20 z-50" : "-top-48"
          } md:static md:duration-75 md:navbar-center md:flex md:py-0 md:px-0 md:bg-purple-700 md:rounded-none md:shadow-none`}
        >
          <Links closeMenu={closeMenu} />
        </div>
        <div className="navbar-end flex items-center gap-2">
          <a className="btn btn-circle btn-sm lg:btn-md hover:bg-purple-200 transition-all duration-100">
            <HiOutlineShoppingCart className="text-xl text-purple-700" />
          </a>
          <a className="btn btn-circle btn-sm lg:btn-md hover:bg-purple-200 transition-all duration-100">
            <FaRegHeart className="text-xl text-purple-700" />
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
    </div>
  );
};

export default Navbar;
