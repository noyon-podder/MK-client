import { FaBars } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { dashboardRoute } from "../../../data/menudata";
import { Link, useLocation } from "react-router-dom";

const DashboardNavbar = () => {
  const params = useLocation();
  return (
    <div className="w-full bg-white  border-b px-5 lg:px-10 h-[70px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              {" "}
              <FaBars size={20} className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <h2 className="text-3xl mb-5 text-main font-bold">MK Shop</h2>
                </SheetTitle>
                <SheetDescription>
                  <nav>
                    <ul className="py-5  flex flex-col ">
                      {dashboardRoute.map((route) => (
                        <li key={route.id}>
                          <Link
                            to={route.path}
                            className={`px-4 flex items-center  py-4  gap-1 ${
                              route.path === params.pathname
                                ? "bg-main text-white"
                                : "text-black"
                            }`}
                          >
                            <span>{route.icon}</span>
                            <span className="ml-4">{route.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center gap-3 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-base font-semibold">Noyon Podder</h2>
            <span className="text-sm text-main -mt-[3px] block">
              Super Admin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
