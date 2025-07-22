import Link from "../NavItem/NavItem";

const Links = ({ closeMenu }) => {
  const routes = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/statistics",
      name: "Statistics",
    },
    {
      id: 3,
      path: "/dashboard",
      name: "Dashboard",
    },
  ];

  return (
    <div>
      <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-4">
        {routes.map((route) => (
          <Link key={route.id} route={route} closeMenu={closeMenu} />
        ))}
      </ul>
    </div>
  );
};

export default Links;
