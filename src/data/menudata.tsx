import { IoIosHome } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
export const menuItems = [
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

export const dashboardRoute = [
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
