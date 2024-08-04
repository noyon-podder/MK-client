import { formatPrice } from "../../utils/formatPrice";
import Rating from "../Rating";
import { TbCurrencyTaka } from "react-icons/tb";
import { Button } from "../ui/button";
import { TProduct } from "../../types/common";

type TProductListProps = {
  product: TProduct;
};

const ProductListStyleCard = ({ product }: TProductListProps) => {
  return (
    <div className="flex  overflow-hidden bg-white rounded-lg border border-[#eee] ">
      <div
        className="w-1/3 bg-cover border-r border-borderColor"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="line-clamp-2 text-[18px] font-semibold text-gray-800 ">
          {product.name}
        </h1>

        <p
          className="my-3 text-sm text-gray-600 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>
        <Rating
          rating={product.rating}
          color={{ filled: "text-yellow-500", unfilled: "text-gray-300" }}
        />

        <div className="flex justify-between mt-3 item-center">
          <h1 className="lg:text-xl text-lg font-bold text-base flex items-center">
            <TbCurrencyTaka size={24} />
            {formatPrice(product.price)}
          </h1>
          <Button size="sm">See Details</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductListStyleCard;
