import Container from "../../components/Container";
import Breadcrumbs from "../../components/shared/Breadcrumbs";
import { useGetProductQuery } from "../../redux/featured/product/productApi";
import ProductSidebar from "./ProductSidebar";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import ProductCard from "../../components/shared/ProductCard";
import { TProduct } from "../../types/common";
import ProductListStyleCard from "../../components/shared/ProductListStyleCard";
import ProductGridLoadingSkeleton from "./ProductGridLoadingSkeleton";
import { useLocation, useNavigate } from "react-router-dom";
import ProductListLoadingSkeleton from "./ProductListLoadingSkeleton";

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const view = params.get("view") || "grid";
  const { data, isLoading } = useGetProductQuery(undefined);

  const toggleView = (newView: string) => {
    params.set("view", newView);
    navigate({ search: params.toString() });
  };

  return (
    <Container>
      <div className="py-3">
        <Breadcrumbs />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <ProductSidebar data={data?.data} />
        <div className="lg:col-span-9 col-span-12 ">
          {/* product card top heading */}
          <div className="border-t border-b px-4 lg:px-0 py-3 border-borderColor  flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className={`w-[30px] h-[30px]  flex items-center justify-center  ${
                  view === "grid"
                    ? "bg-[#333] text-white"
                    : "text-[#333] bg-transparent"
                }`}
              >
                <BsFillGrid3X3GapFill
                  size={18}
                  className={``}
                  onClick={() => toggleView("grid")}
                />
              </button>
              <button
                className={`w-[30px] h-[30px]  flex items-center justify-center  ${
                  view === "list"
                    ? "bg-[#333] text-white"
                    : "text-[#333] bg-transparent"
                }`}
              >
                <FaListCheck
                  size={18}
                  className={``}
                  onClick={() => toggleView("list")}
                />
              </button>
            </div>

            {/* sorting selection */}
            <div className="flex items-center">
              <span className="text-[#666] text-sm mr-[4px] hidden lg:block">
                Sort By:
              </span>
              <select
                name=""
                id=""
                className="outline-none bg-[#eee] px-[15px] h-[30px] max-w-[145px] text-sm cursor-pointer border-none leading-[30px]"
              >
                <option value="newest">Featured</option>
                <option value="price-descending">Price, low to high</option>
                <option value="price-ascending">Price, high to low</option>
                <option value="created-ascending">Newest</option>
                <option value="created-descending">Oldest</option>
              </select>
            </div>
          </div>

          {/* product card body part */}
          {view === "grid" ? (
            <>
              {/* grid card start */}
              {isLoading ? <ProductGridLoadingSkeleton /> : null}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-4 gap-5 px-4 lg:px-0">
                {data?.data?.map((item: TProduct) => (
                  <ProductCard key={item._id} product={item} />
                ))}
              </div>
            </>
          ) : (
            <>
              {/* list card start */}
              {isLoading ? <ProductListLoadingSkeleton /> : null}
              <div className="grid grid-cols-1 py-6 gap-5 px-4 lg:px-0">
                {data?.data?.map((item: TProduct) => (
                  <ProductListStyleCard key={item._id} product={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
