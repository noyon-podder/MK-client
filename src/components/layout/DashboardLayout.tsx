import { Outlet } from "react-router-dom";
import SidebarDashboard from "../page/dashboard/SidebarDashboard";
import DashboardNavbar from "../page/dashboard/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="">
      <SidebarDashboard />
      <div className="ml-[260px] bg-[#F2F6F9]">
        <DashboardNavbar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
