import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/featured/product/productApi";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import ProductActionHandler from "./ProductActionHandler";
import AllProductDetails from "./AllProductDetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const { data: product, isLoading } = useGetSingleProductQuery(id);
  const [finalQuantity, setFinalQuantity] = useState(0);

  console.log(product);

  useEffect(() => {
    setFinalQuantity(product?.data?.quantity);
    const presentQuantity = product?.data?.quantity - count;
    setFinalQuantity(presentQuantity);
  }, [product, count]);

  console.log(product);
  return (
    <div className="py-7">
      <Container>
        <div className="grid lg:grid-cols-10 grid-cols-1 gap-7 py-4 px-4 lg:p-4 bg-white">
          <div className="lg:col-span-7 col-span-12">
            <AllProductDetails product={product?.data} />
          </div>
          <div className="lg:col-span-3 col-span-12 sticky">
            <ProductActionHandler
              finalQuantity={finalQuantity}
              count={count}
              setCount={setCount}
              isLoading={isLoading}
              brand={product?.data?.brand}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
