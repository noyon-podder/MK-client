import { IoClose } from "react-icons/io5";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { TSideMenuBarProps } from "../types/common";

const SideMenuBar: React.FC<TSideMenuBarProps> = ({
  setSideMenuBar,
  sideMenuBar,
}) => {
  return (
    <>
      <div
        className="fixed inset-0 opacity-50 bg-black w-full h-full z-10"
        onClick={() => setSideMenuBar(false)}
      ></div>
      <div
        className={`bg-white  w-full absolute top-0  h-screen z-20 p-5 duration-300 transition-transform ease-in ${
          sideMenuBar ? "left-0 max-w-[300px]" : "-left-96 max-w-[0px]"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-10">
            <Link
              to="/"
              className="text-black text-xl font-semibold hover:text-gray-800 duration-300"
            >
              Login
            </Link>
            <div
              className="flex justify-end "
              onClick={() => setSideMenuBar(false)}
            >
              <IoClose className="h-7 w-7 cursor-pointer text-black hover:text-gray-600" />
            </div>
          </div>
          {/* menu items */}
          <MenuItem setSideMenuBar={setSideMenuBar} />
        </div>
      </div>
    </>
  );
};

export default SideMenuBar;
