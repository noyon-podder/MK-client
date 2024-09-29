import { Link } from "react-router-dom";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Product from "/favicon.png";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useAppDispatch } from "../../redux/hooks";
import { TProduct } from "../../types/common";
// import { productBuy } from "../../redux/featured/product/buyProductSlice";
import { addItem } from "../../redux/featured/product/cartSlice";

type ProductActionProps = {
  isLoading: boolean;
  finalQuantity: number;
  count: number;
  setCount: (value: number) => void;
  brand: string;
  product: TProduct;
};

const ProductActionHandler = ({
  isLoading,
  finalQuantity,
  count,
  setCount,
  brand,
  product,
}: ProductActionProps) => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const handleAddProductToCart = () => {
    dispatch(
      addItem({
        _id: product._id,
        price: product.price,
        name: product.name,
        quantity: count,
        image: product.image,
      })
    );
  };

  // const handleBuyNow = () => {
  //   dispatch(
  //     productBuy({
  //       _id: product._id,
  //       price: product.price,
  //       name: product.name,
  //       quantity: count,
  //       image: product.image,
  //     })
  //   );
  //   navigate("/order");
  // };
  return (
    <>
      {/* shop details */}
      <div className="p-[14px] border-[#f2f2f2] bg-[#f9f9f9]">
        <h2 className="text-[#222] text-base font-medium mb-[10px]">Brand</h2>
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] border border-[#bd000033] p-[10px] bg-[#d2d2d2] rounded-full">
            <img
              src={Product}
              alt="product"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold capitalize text-[#666]">
              {brand}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-[2px]">
                <FaStar size={14} color="#ffa20f" />
                <FaStar size={14} color="#ffa20f" />
                <FaStar size={14} color="#ffa20f" />
                <FaStar size={14} color="#ffa20f" />
                <FaStar size={14} color="#ffa20f" />
              </div>
              <p className="text-xs font-medium">(32 reviews)</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link
            to={""}
            className="py-[6px] px-[20px] text-sm uppercase bg-[#bd00000a] border-[#bd000033] border text-[#bd0000] font-bold w-full block text-center"
          >
            View Shop
          </Link>
        </div>
      </div>
      {/* product action button */}
      <div className="border border-[#f2f2f2] p-3 mt-[25px]">
        <div className=" flex items-center">
          <h2 className="text-[#0f172a] text-sm font-medium">
            Product Stock:{" "}
          </h2>
          <span className="bg-noyonColor py-[3px] px-[10px] inline-block ml-[10px] rounded-[10px] leading-[14px] text-white font-medium">
            {isLoading ? 0 : finalQuantity}
          </span>
        </div>
        <div className="mt-4">
          <h2 className="text-[#0f172a] text-sm font-medium">Quantity: </h2>
          <div className="flex items-center mt-3 gap-4">
            {/* quantity button   */}
            <div className="flex ">
              <button
                onClick={() => setCount(count - 1)}
                className={`h-[32px] w-10 border-none bg-[#f2f2f2] hover:bg-[#eaeaea] flex items-center justify-center ${
                  count === 0 ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={count === 0}
              >
                <FiMinus />
              </button>
              <input
                type="number"
                value={count}
                className=" outline-none  w-[70px] text-center h-[32px] border-t px-3  border-b border-[#f2f2f2]"
              />
              <button
                onClick={() => setCount(count + 1)}
                disabled={finalQuantity === 0}
                className={`h-[32px] w-10 border-none bg-[#f2f2f2] hover:bg-[#eaeaea] flex items-center justify-center  ${
                  finalQuantity === 0 ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <FiPlus />
              </button>
            </div>
            <button className="outline-none border-none w-[40px] h-[32px] text-white text-lg bg-noyonColor flex items-center justify-center">
              <FaRegHeart size={20} />
            </button>
          </div>

          <div className="flex items-center gap-4 mt-5 flex-col">
            {/* <button
              onClick={handleBuyNow}
              className={`py-[7px] px-[25px]  text-white w-full rounded-[25px] text-base font-medium  ${
                finalQuantity === 0
                  ? "bg-[#ce3434e7]"
                  : "bg-noyonColor hover:bg-[#d23000]"
              }`}
              disabled={finalQuantity === 0}
            >
              {finalQuantity === 0 ? "Out Of Stock" : "Buy Now"}
            </button> */}

            <button
              onClick={handleAddProductToCart}
              disabled={finalQuantity === 0}
              className={`py-[7px] px-[25px] hover:bg-[#f2f2f2] border border-[#041826] hover:text-[#041826] w-full rounded-[25px] text-base font-medium bg-[#041826] text-white duration-300 ${
                finalQuantity === 0 ? "opacity-20" : ""
              }`}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductActionHandler;
