import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useState } from "react";
import SideMenuBar from "../SideMenuBar";
import MenuItem from "../MenuItem";
import Container from "../Container";
import { useAppSelector } from "../../redux/hooks";
import Logo from "/favicon.png";

const Navbar = () => {
  const [sideMenuBar, setSideMenuBar] = useState(false);
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      {/* side bar toggle on mobile device */}
      {sideMenuBar && (
        <SideMenuBar
          setSideMenuBar={setSideMenuBar}
          sideMenuBar={sideMenuBar}
        />
      )}
      <div className="bg-white text-noyonColor py-3 border-b border-[#f2f2f2]">
        <Container>
          <div className="flex items-center justify-between w-full gap-4 px-4 xl:px-0">
            <div
              className="block lg:hidden"
              onClick={() => setSideMenuBar(!sideMenuBar)}
            >
              <FaBarsStaggered
                size={24}
                className="text-headingColor cursor-pointer"
              />
            </div>
            {/* header part */}
            <div className="xl:flex-1 ">
              <Link
                to={"/"}
                className="lg:w-[200px] flex items-center gap-[8px]"
              >
                <img src={Logo} alt="logo" className="lg:w-[40px] w-[25px]" />
                <h2 className="font-extrabold text-headingColor lg:text-[24px] text-[22px] p-0 uppercase">
                  N<span className="text-noyonColor">S</span> S
                  <span className="uppercase text-noyonColor">ho</span>p
                </h2>
              </Link>
            </div>
            {/* search part */}
            <div className=" w-full flex-1 lg:flex-1 xl:mr-10 hidden lg:block">
              <div className=" xl:w-[700px] flex  items-center border border-[#d2d2d2] rounded-[20px] w-full h-11 bg-white">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  name=""
                  id=""
                  className="w-full h-full px-3 py-2  bg-transparent outline-none text-black rounded-tl-[20px] rounded-bl-[20px]"
                />
                <button className="bg-noyonColor h-11 px-5 rounded-tr-[20px] rounded-br-[20px]">
                  <IoSearchOutline size={24} className="text-white" />
                </button>
              </div>
            </div>

            {/* cart part */}
            <div className="xl:flex-1 ">
              {/* <Button>Cart</Button> */}
              <div className="flex items-center gap-5 justify-end">
                <div className="lg:flex hidden items-center gap-3">
                  <BsEnvelope size={32} className="text-headingColor" />
                  <div className="flex flex-col ">
                    <h2 className="text-sm text-headingColor font-semibold">
                      Questions?
                    </h2>
                    <span className="text-xs text-gray-400">
                      support@mk.com
                    </span>
                  </div>
                </div>
                <Link to="/cart">
                  {" "}
                  <button className="relative">
                    <IoCartOutline className="text-headingColor lg:text-[32px] text-[30px]" />
                    {cart.items.length > 0 && (
                      <span className="px-3 rounded-xl block text-center h-6 bg-noyonColor text-white absolute -top-2 -right-4">
                        {cart.items.length}
                      </span>
                    )}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className=" w-full flex-1 lg:flex-1 xl:mr-10 block lg:hidden xl:px-0 px-4">
              <div className=" xl:w-[700px] flex  items-center border border-[#d2d2d2] rounded-[20px] w-full h-10 bg-white">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  name=""
                  id=""
                  className="w-full h-full px-3 py-2  bg-transparent outline-none text-black rounded-tl-[20px] rounded-bl-[20px]"
                />
                <button className="bg-noyonColor h-10 px-3 rounded-tr-[4px] rounded-br-[4px]">
                  <IoSearchOutline size={24} className="text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:flex items-center justify-between xl:px-0 px-4 hidden lg:pb-3">
            <MenuItem setSideMenuBar={setSideMenuBar} />

            <Link
              to="/"
              className="text-headingColor text-xl font-semibold hover:text-[#ede6e6] duration-300"
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
