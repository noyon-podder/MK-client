import { useState } from "react";
import { TProduct } from "../../types/common";
import Rating from "../Rating";
import { Button } from "../ui/button";
import "../../styles/custom.css";
import { formatPrice } from "../../utils/formatPrice";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { brand, name, image, hoverImage, price, rating, quantity, _id } =
    product;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="w-full  overflow-hidden bg-white rounded-lg border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="object-cover object-center w-full h-56"
          src={isHovered ? hoverImage : image}
          alt="avatar"
        />

        <div className="px-4 pt-2 py-3 border-t border-borderColor">
          <span className="text-main text-sm mb-2 block font-semibold">
            {brand}
          </span>
          <h1 className="line-clamp-2 text-[16px] font-semibold text-gray-800 ">
            {name}
          </h1>

          <div className="flex items-center justify-between mt-3">
            <Rating
              rating={rating}
              color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
            />

            <h2 className="lg:text-xl text-lg font-bold  flex items-center">
              <TbCurrencyTaka size={24} />
              {formatPrice(price)}
            </h2>
          </div>

          <div className="flex items-center justify-between mt-5">
            <p>
              <b>Quantity:</b> {quantity}
            </p>
            <Link to={`/product/${_id}`}>
              <Button size="sm">See Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
