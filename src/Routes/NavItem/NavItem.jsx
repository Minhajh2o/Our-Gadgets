// src/Routes/NavItem/NavItem.jsx - UPDATED

import { NavLink } from "react-router-dom";

const NavItem = ({ route, closeMenu }) => {
  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <li className="">
      <NavLink
        to={route.path}
        onClick={handleClick}
        className={({ isActive }) =>
          isActive
            ? "text-purple-700 bg-white px-3 py-2 rounded-md font-semibold" 
            : "md:px-3 md:py-2 hover:bg-white hover:text-purple-700 rounded-md transition-all duration-300"
        }
      >
        {route.name}
      </NavLink>
    </li>
  );
};
export default NavItem;