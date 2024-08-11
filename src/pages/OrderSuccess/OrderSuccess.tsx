import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center px-2">
      <div className="bg-white py-7 px-12 lg:px-20 text-center flex flex-col items-center">
        <div className="w-[60px] h-[60px] border border-[#EC2D89] flex items-center justify-center rounded-full">
          <IoMdCheckmark size={40} className="text-[#EC2D89]" />
        </div>
        <p className="text-lg mt-2 text-headingColor">Hey, Noyon Podder</p>

        <h2 className="text-xl text-headingColor font-semibold mt-4 ">
          Your Order is Confirmed!
        </h2>

        <p className="text-base text-gray-600 mt-2 font-medium ">
          We'll send you a shipping confirmation email
          <br />
          as soon as your order ships.
        </p>

        <div className="mt-6">
          <Link
            to={"/"}
            className="bg-[#ec2d89] text-white px-10 py-2 block rounded-md   font-medium capitalize"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
