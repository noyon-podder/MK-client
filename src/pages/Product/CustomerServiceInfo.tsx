import { FaStripe } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";
import { IoReturnDownForwardSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const CustomerServiceInfo = () => {
  return (
    <div className="border border-borderColor mb-[30px] bg-white ">
      <h3 className="py-[10px] pl-[10px] border-b border-borderColor font-bold text-heading uppercase">
        Customer service
      </h3>
      <div className="px-[10px]">
        <ul className="py-[5px]">
          <li className="py-[15px] border-dashed border-b border-borderColor px-4 leading-[28px] flex items-center gap-4">
            <TbTruckDelivery size={32} className="text-noyonColor" />
            <div>
              <h2 className="text-sm font-bold uppercase text-[#444]">
                Free Delivery
              </h2>
              <span className="text-xs text-[#666] leading-[22px]">
                From $59.89
              </span>
            </div>
          </li>
          <li className="py-[15px] border-dashed border-b border-borderColor px-4 leading-[28px] flex items-center gap-4">
            <HiOutlineSupport size={32} className="text-noyonColor" />
            <div>
              <h2 className="text-sm font-bold uppercase text-[#444]">
                Support 24/7
              </h2>
              <span className="text-xs text-[#666] leading-[22px]">
                Online 24 Hours
              </span>
            </div>
          </li>
          <li className="py-[15px] border-dashed border-b border-borderColor px-4 leading-[28px] flex items-center gap-4">
            <IoReturnDownForwardSharp size={32} className="text-noyonColor" />
            <div>
              <h2 className="text-sm font-bold uppercase text-[#444]">
                free return
              </h2>
              <span className="text-xs text-[#666] leading-[22px]">
                365 a day
              </span>
            </div>
          </li>
          <li className="py-[15px] px-4 leading-[28px] flex items-center gap-4">
            <FaStripe size={32} className="text-noyonColor" />
            <div>
              <h2 className="text-sm font-bold uppercase text-[#444]">
                Payment Method
              </h2>
              <span className="text-xs text-[#666] leading-[22px]">
                Secure Payment
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomerServiceInfo;
