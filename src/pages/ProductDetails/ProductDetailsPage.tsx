import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/featured/product/productApi";
import Container from "../../components/Container";
import { useEffect, useState } from "react";
import ProductActionHandler from "./ProductActionHandler";
import AllProductDetails from "./AllProductDetails";
import Loading from "../../components/shared/Loading";
import { ProductDescriptionAccordion } from "./ProductDescriptionAccordion";
import CustomerServiceInfo from "../Product/CustomerServiceInfo";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const { data: product, isLoading } = useGetSingleProductQuery(id);
  const [finalQuantity, setFinalQuantity] = useState(0);

  useEffect(() => {
    setFinalQuantity(product?.data?.quantity);
    const presentQuantity = product?.data?.quantity - count;
    setFinalQuantity(presentQuantity);
  }, [product, count]);

  return (
    <div className="py-7">
      <Container>
        <div className="bg-white">
          <div className="grid lg:grid-cols-10 grid-cols-1 gap-7 py-4 px-4 lg:p-4 ">
            <div className="lg:col-span-7 col-span-12">
              {isLoading ? (
                <Loading />
              ) : (
                <AllProductDetails product={product?.data} />
              )}
            </div>
            <div className="lg:col-span-3 col-span-12  ">
              <div className="sticky top-0">
                <ProductActionHandler
                  finalQuantity={finalQuantity}
                  count={count}
                  setCount={setCount}
                  isLoading={isLoading}
                  brand={product?.data?.brand}
                  product={product?.data}
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-10 grid-cols-1 gap-7 py-4 px-4 lg:p-4">
            <div className="lg:col-span-7 col-span-12">
              <ProductDescriptionAccordion product={product?.data} />
            </div>
            <div className="lg:col-span-3 col-span-12 sticky">
              <CustomerServiceInfo />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
