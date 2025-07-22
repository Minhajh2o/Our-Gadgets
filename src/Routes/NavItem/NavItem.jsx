import { NavLink } from "react-router-dom";

const NavItem = ({ route, closeMenu }) => {
  const handleClick = () => {
    // Close menu when a route is clicked (only on mobile)
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
            ? "text-white md:bg-purple-950 md:px-3 md:py-2 rounded-md font-semibold"
            : "md:px-3 md:py-2 hover:underline transition-all duration-300"
        }
      >
        {route.name}
      </NavLink>
    </li>
  );
};
export default NavItem;
