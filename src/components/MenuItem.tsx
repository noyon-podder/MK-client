import { Link } from "react-router-dom";
import { TSideMenuBarProps } from "../types/common";

const MenuItem: React.FC<TSideMenuBarProps> = ({ setSideMenuBar }) => {
  const menuItems = [
    {
      id: 1,
      path: "/",
      label: "Home",
    },
    {
      id: 2,
      path: "/about",
      label: "About",
    },
    {
      id: 3,
      path: "/contact",
      label: "Contact",
    },
    {
      id: 4,
      path: "/dashboard",
      label: "Dashboard",
    },
  ];
  return (
    <>
      <ul className="flex items-center gap-4 lg:flex-row flex-col  ">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              onClick={() => setSideMenuBar(false)}
              to={item.path}
              className="text-lg font-semibold text-black lg:text-white lg:hover:text-[#ede6e6] duration-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuItem;
