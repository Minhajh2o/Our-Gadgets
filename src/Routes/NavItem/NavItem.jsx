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
            ? "text-purple-700 md:bg-white md:px-3 md:py-2 rounded-md font-bold md:font-semibold  "
            : "md:px-3 md:py-2 text-purple-700 md:text-white hover:font-semibold md:hover:font-normal md:hover:bg-white  md:hover:text-purple-700 rounded-md transition-all duration-300"
        }
      >
        {route.name}
      </NavLink>
    </li>
  );
};
export default NavItem;
