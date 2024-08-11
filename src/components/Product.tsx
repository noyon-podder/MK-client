import ProductGridLoadingSkeleton from "../pages/Product/ProductGridLoadingSkeleton";
import { useGetProductQuery } from "../redux/featured/product/productApi";
import { TProduct } from "../types/common";
import Container from "./Container";
import ProductCard from "./shared/ProductCard";

const Product = () => {
  const { data, isLoading } = useGetProductQuery(undefined);

  const productData = data?.data?.slice(0, 8);
  return (
    <div className="lg:pb-7 lg:px-0">
      <Container>
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-gray-900">
            Featured Products
          </h2>

          {isLoading ? (
            <div className="w-full">
              <ProductGridLoadingSkeleton />
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {productData?.map((product: TProduct) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Product;
