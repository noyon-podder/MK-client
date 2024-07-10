import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-main text-white py-3">
      <div className="flex items-center w-full gap-4 ">
        {/* header part */}
        <div className="flex-1 bg-yellow-500">
          <h2 className="font-bold text-white text-3xl p-0">LOGO</h2>
        </div>
        {/* search part */}
        <div className="flex-2 xl:mr-10">
          <div className="w-[700px] h-10 flex ">
            <input
              type="text"
              name=""
              id=""
              className="w-full h-full px-3 py-2"
            />
            <button className="bg-indigo-700 h-full px-3">search</button>
          </div>
        </div>

        {/* cart part */}
        <div className="flex-1 bg-red-600">
          <Button>Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
