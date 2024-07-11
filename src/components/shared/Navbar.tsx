import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useState } from "react";
import SideMenuBar from "../SideMenuBar";
import MenuItem from "../MenuItem";
import Container from "../Container";

const Navbar = () => {
  const [sideMenuBar, setSideMenuBar] = useState(false);
  return (
    <>
      {/* side bar toggle on mobile device */}
      {sideMenuBar && (
        <SideMenuBar
          setSideMenuBar={setSideMenuBar}
          sideMenuBar={sideMenuBar}
        />
      )}
      <div className="bg-main text-white py-3">
        <Container>
          <div className="flex items-center justify-between w-full gap-4 px-4 xl:px-0">
            <div
              className="block lg:hidden"
              onClick={() => setSideMenuBar(!sideMenuBar)}
            >
              <FaBarsStaggered
                size={30}
                className="text-white cursor-pointer"
              />
            </div>
            {/* header part */}
            <div className="xl:flex-1 ">
              <div className="lg:w-[150px]">
                <h2 className="font-bold text-white text-3xl p-0">LOGO</h2>
              </div>
            </div>
            {/* search part */}
            <div className=" w-full flex-1 lg:flex-1 xl:mr-10 hidden lg:block">
              <div className=" xl:w-[700px] flex  items-center pr-2 w-full h-10 bg-white rounded-lg">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  name=""
                  id=""
                  className="w-full h-full px-3 py-2 rounded-md border-none outline-none text-black"
                />
                <button className="bg-[#ffe1d2] h-7 px-3 rounded-md">
                  <IoSearchOutline size={24} className="text-main" />
                </button>
              </div>
            </div>

            {/* cart part */}
            <div className="xl:flex-1 ">
              {/* <Button>Cart</Button> */}
              <div className="flex items-center gap-5 justify-end">
                <div className="lg:flex hidden items-center gap-3">
                  <BsEnvelope size={24} />
                  <div className="flex flex-col ">
                    <h2 className="text-sm text-white font-semibold">
                      Questions?
                    </h2>
                    <span className="text-xs">support@mk.com</span>
                  </div>
                </div>
                <button>
                  <IoCartOutline className="" size={36} />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className=" w-full flex-1 lg:flex-1 xl:mr-10 block lg:hidden xl:px-0 px-4">
              <div className=" xl:w-[700px] flex  items-center pr-2 w-full h-10 bg-white rounded-md">
                <input
                  type="text"
                  name=""
                  placeholder="What are you looking for?"
                  id=""
                  className="w-full h-full px-3 py-2 rounded-md border-none outline-none text-black"
                />
                <button className="bg-[#ffe1d2] h-7 px-3 rounded-md">
                  <IoSearchOutline size={24} className="text-main" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:flex items-center justify-between xl:px-0 px-4 hidden ">
            <MenuItem />

            <Link
              to="/"
              className="text-white text-xl font-semibold hover:text-[#ede6e6] duration-300"
            >
              Login
            </Link>
          </div>
        </Container>
        <h2></h2>
      </div>
    </>
  );
};

export default Navbar;
