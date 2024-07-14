import { Link, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";

const SidebarDashboard = () => {
  const dashboardRoute = [
    {
      id: 1,
      path: "/dashboard",
      icon: <IoIosHome size={24} />,
      name: "Dashboard",
    },
    {
      id: 2,
      path: "/dashboard/add-product",
      icon: <IoBagAddOutline size={24} />,
      name: "Add Product",
    },
  ];

  const params = useLocation();

  return (
    <div className="min-w-[260px] bg-gray-800 text-white h-screen  fixed top-0 left-0 ">
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
          {/* <li>
            <Link
              to="/dashboard"
              className="px-4 flex items-center text-black py-4 bg-white gap-1"
            >
             
              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/add-product"
              className="px-4 flex items-center text-black bg-white py-4  gap-1"
            >
              
              <span className="ml-4">Add Product</span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarDashboard;
