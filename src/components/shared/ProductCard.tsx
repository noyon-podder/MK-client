import { useState } from "react";
import { TProduct } from "../../types/common";
import Rating from "../Rating";
import { Button } from "../ui/button";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { brand, name, price, rating, quantity } = product;

  const [isHovered, setIsHovered] = useState(false);

  const mainImage =
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

  const hoverImage =
    "https://cdn.pixabay.com/photo/2023/04/10/10/30/keyboard-7913431_640.jpg";
  return (
    <div>
      <div
        className="w-full  overflow-hidden bg-white rounded-lg border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="object-cover object-center w-full h-56"
          src={isHovered ? mainImage : hoverImage}
          alt="avatar"
        />

        <div className="px-6 py-4">
          <span className="text-gray-900 text-sm mb-1 font-semibold">
            {brand}
          </span>
          <h1 className="text-xl font-semibold text-gray-800 ">{name}</h1>

          <div className="flex items-center justify-between mt-3">
            <Rating
              rating={rating}
              color={{ filled: "text-yellow-500", unfilled: "text-gray-300" }}
            />

            <h2 className="text-xl font-bold text-gray-900">${price}</h2>
          </div>

          <div className="flex items-center justify-between mt-2">
            <p>
              <b>Quantity:</b> {quantity}
            </p>
            <Button>See Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
