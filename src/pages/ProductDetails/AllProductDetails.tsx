import Rating from "../../components/Rating";
import { TProduct } from "../../types/common";
import { formatPrice } from "../../utils/formatPrice";

type TAllProductDetailsProps = {
  product: TProduct;
};

const AllProductDetails = ({ product }: TAllProductDetailsProps) => {
  return (
    <div className="grid lg:grid-cols-11 grid-cols-1 gap-4">
      <div className="lg:col-span-5 col-span-1">
        <div className="w-full">
          <img src={product?.image} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12 ">
        <h2 className="font-semibold text-headingColor">{product?.name}</h2>
        <div className=" flex items-center mt-4 gap-[12px]">
          <div className="flex items-center ">
            <Rating
              rating={product?.rating}
              color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
            />
            <span className="text-[#0f172a99] text-[15px] font-medium ml-3">
              4.7
            </span>
          </div>
          <span className="text-[#0f172a99] text-[15px] font-medium">
            38 Reviews
          </span>
          <span className="text-[#0f172a99] text-[15px] font-medium">
            354 Sold
          </span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="text-headingColor lg:text-[36px] text-[24px] font-bold">
            <span className="lg:text-[18px] text-base text-normal">BDT</span>
            {/* {formatPrice(product?.price)} */}
            {`${formatPrice(product?.price)}`}
          </div>
          <div className="lg:text-sm text-xs text-[#0f172a99] line-through font-bold leading-[22px]">
            <span>BDT</span>
            1837
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDetails;
