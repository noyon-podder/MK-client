import { formatPrice } from "../../utils/formatPrice";
import Rating from "../Rating";
import { TbCurrencyTaka } from "react-icons/tb";
import { TProduct } from "../../types/common";
import { Link } from "react-router-dom";

type TProductListProps = {
  product: TProduct;
};

const ProductListStyleCard = ({ product }: TProductListProps) => {
  const description =
    product?.description.length > 200
      ? `${product.description.slice(0, 200)}...`
      : `${product.description}`;
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
          className="my-3 text-sm text-gray-600 "
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <Rating
          rating={product.rating}
          color={{ filled: "text-yellow-500", unfilled: "text-gray-300" }}
        />

        <div className="flex justify-between mt-3 item-center">
          <h1 className="lg:text-xl text-lg font-bold  flex items-center">
            <TbCurrencyTaka size={24} />
            {formatPrice(product.price)}
          </h1>
          <Link
            className="text-base font-medium text-noyonColor"
            to={`/product/${product._id}`}
          >
            {/* <Button size="sm">See Details</Button> */}
            See Details..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListStyleCard;
