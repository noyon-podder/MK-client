import { Link } from "react-router-dom";
import { TProduct } from "../../types/common";
import CustomerServiceInfo from "./CustomerServiceInfo";

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
      <CustomerServiceInfo />
    </div>
  );
};

export default ProductSidebar;
