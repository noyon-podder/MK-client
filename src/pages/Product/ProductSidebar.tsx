import CustomerServiceInfo from "./CustomerServiceInfo";

interface TProps {
  handleMinPrice: (e: { target: { value: string } }) => void;
  handleMaxPrice: (e: { target: { value: string } }) => void;
}

const ProductSidebar = ({ handleMinPrice, handleMaxPrice }: TProps) => {
  return (
    <div className="">
      {/* filter by brand */}
      <div className="border border-borderColor mb-[30px] bg-white  lg:max-w-[300px]">
        <h3 className="py-[10px] pl-[10px] border-b border-borderColor font-bold text-heading capitalize">
          Filter By Price
        </h3>
        <div className="px-[10px] py-5 flex  flex-col gap-3 ">
          <div className="flex-1 ">
            <label
              htmlFor="minPrice"
              className="block text-sm font-semibold text-headingColor mb-1"
            >
              Min Price
            </label>
            <input
              type="text"
              onChange={handleMinPrice}
              id="minPrice"
              className="border px-3 py-1 w-full outline-none focus:border-main border-gray-400 rounded-md"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="maxPrice"
              className="block text-sm font-semibold text-headingColor mb-1"
            >
              Max Price
            </label>
            <input
              type="text"
              onChange={handleMaxPrice}
              id="maxPrice"
              className="border px-3 py-1 outline-none focus:border-main w-full border-gray-400 rounded-md"
            />
          </div>
        </div>
      </div>
      {/* customer service information */}
      <CustomerServiceInfo />
    </div>
  );
};

export default ProductSidebar;
