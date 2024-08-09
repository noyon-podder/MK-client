import { Link } from "react-router-dom";
import { TSideMenuBarProps } from "../types/common";
import { menuItems } from "../data/menudata";

const MenuItem: React.FC<TSideMenuBarProps> = ({ setSideMenuBar }) => {
  return (
    <>
      <ul className="flex items-center gap-4 lg:flex-row flex-col  ">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              onClick={() => setSideMenuBar(false)}
              to={item.path}
              className="text-base font-semibold text-headingColor  lg:hover:text-gray-600 duration-300"
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
