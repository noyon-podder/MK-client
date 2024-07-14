import { Link, useLocation } from "react-router-dom";
import { dashboardRoute } from "../../../data/menudata";

const SidebarDashboard = () => {
  const params = useLocation();

  return (
    <div className="hidden lg:block min-w-[260px] bg-gray-800 text-white h-screen  fixed top-0 left-0 ">
      <div className="flex items-center justify-center h-[70px] border-b border-gray-700">
        <h2 className="text-2xl  font-semibold text-white ">Mk Shop</h2>
      </div>

      <nav>
        <ul className="py-5  flex flex-col ">
          {dashboardRoute.map((route) => (
            <li key={route.id}>
              <Link
                to={route.path}
                className={`px-4 flex items-center  py-4  gap-1 ${
                  route.path === params.pathname
                    ? "bg-white text-black"
                    : "text-white"
                }`}
              >
                <span>{route.icon}</span>
                <span className="ml-4">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarDashboard;
