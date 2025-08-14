import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ route, closeMenu }) => {
  const location = useLocation();
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
        className={({ isActive }) => {
          if (isActive) {
            return location.pathname === "/"
              ? "text-purple-700 md:bg-white md:px-3 md:py-2 rounded-md font-bold md:font-semibold"
              : "md:px-3 md:py-2 text-purple-700 md:text-white md:bg-purple-700 font-bold md:font-semibold rounded-md";
          } else {
            return location.pathname === "/"
              ? "md:px-3 md:py-2 text-purple-700 md:text-white hover:text-purple-700 md:hover:bg-white rounded-md transition-all duration-300"
              : "md:px-3 md:py-2 text-purple-700 hover:text-purple-700 md:hover:bg-purple-300 rounded-md transition-all duration-300";
          }
        }}
      >
        {route.name}
      </NavLink>
    </li>
  );
};
export default NavItem;
