import { useGetProductQuery } from "../redux/api/baseApi";
import { TProduct } from "../types/common";
import Container from "./Container";
import ProductCard from "./shared/ProductCard";

const Product = () => {
  const { data } = useGetProductQuery(undefined);

  const productData = data?.data?.slice(0, 6);
  return (
    <div className="lg:py-8 lg:px-0 p-5">
      <Container>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured Products
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productData?.map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
