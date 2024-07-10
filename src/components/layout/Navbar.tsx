import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import Container from "../Container";

const Navbar = () => {
  return (
    <div className="bg-main text-white py-3">
      <Container>
        <div className="flex items-center justify-between w-full gap-4 px-4">
          {/* header part */}
          <div className="xl:flex-1 ">
            <div className="lg:w-[150px]">
              <h2 className="font-bold text-white text-3xl p-0">LOGO</h2>
            </div>
          </div>
          {/* search part */}
          <div className=" w-full flex-1 lg:flex-1 xl:mr-10">
            <div className=" xl:w-[700px] flex  items-center pr-2 w-full h-10 bg-white rounded-lg">
              <input
                type="text"
                name=""
                id=""
                className="w-full h-full px-3 py-2 rounded-md"
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
              <div className="flex items-center gap-3">
                <BsEnvelope size={28} />
                <div className="flex flex-col">
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
      </Container>
    </div>
  );
};

export default Navbar;
