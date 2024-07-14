import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const DashboardNavbar = () => {
  return (
    <div className="w-full bg-white  border-b px-10 h-[70px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div>hello world</div>
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
