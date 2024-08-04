import { Link } from "react-router-dom";
import { TProduct } from "../../types/common";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineSupport } from "react-icons/hi";
import { IoReturnDownForwardSharp } from "react-icons/io5";
import { FaStripe } from "react-icons/fa";

const ProductSidebar = ({ data }: { data: TProduct[] }) => {
  return (
    <div className="">
      {/* filter by brand */}
      <div className="border border-borderColor mb-[30px] bg-white overflow-hidden max-h-[300px] overflow-y-auto">
        <h3 className="py-[10px] pl-[10px] border-b border-borderColor font-bold text-heading uppercase">
          Brand
        </h3>
        <div className="px-[10px]">
          <ul className="py-[5px]">
            {data?.map((item: TProduct) => (
              <li key={item._id} className="py-[5px] leading-[28px]">
                <Link to="" className="text-[#444] font-normal hover:text-base">
                  {item?.brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* customer service information */}
      <div className="border border-borderColor mb-[30px] bg-white ">
        <h3 className="py-[10px] pl-[10px] border-b border-borderColor font-bold text-heading uppercase">
          Customer service
        </h3>
        <div className="px-[10px]">
          <ul className="py-[5px]">
            <li className="py-[15px] border-dashed border-b border-borderColor px-4 leading-[28px] flex items-center gap-4">
              <TbTruckDelivery size={32} className="text-base" />
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
              <HiOutlineSupport size={32} className="text-base" />
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
              <IoReturnDownForwardSharp size={32} className="text-base" />
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
              <FaStripe size={32} className="text-base" />
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
    </div>
  );
};

export default ProductSidebar;
