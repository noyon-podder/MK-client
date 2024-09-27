/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useCallback, useEffect, useState } from "react";
import ProductSortSidebar from "./ProductSortSidebar";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";
import { toast } from "sonner";

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [view, setView] = useState("grid");

  // filter search and sort
  const [filters, setFilters] = useState({
    searchTerm: "",
    brand: "",
    rating: "",
    minPrice: 0,
    maxPrice: 0,
    minQuantity: "",
    maxQuantity: "",
    sort: "",
  });

  const { data: productData, isLoading } = useGetProductQuery(filters);

  // automatically change view value if device under 500px
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const currentView = params.get("view") || "grid";
    setView(currentView);

    // Media query to detect screen size
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches && view === "list") {
        setView("grid");
        params.set("view", "grid");
        navigate({ search: params.toString() });
      }
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [location.search, navigate, view]);

  const toggleView = (newView: string) => {
    setView(newView);
    const params = new URLSearchParams(location.search);
    params.set("view", newView);
    navigate({ search: params.toString() });
  };

  // Debounced search handler using lodash's debounce
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        searchTerm: value,
      }));
    }, 300),
    []
  );

  // Handle search input change
  const handleSearchChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    debouncedSearch(value); // Use debounced function to update search term
  };

  // Handle sorting select change
  const handleSortChange = (event: { target: { value: any } }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort: event.target.value,
    }));
  };

  // filter the price handle min price
  const toastId = "invalid-price-error";

  const handleMinPrice = (e: { target: { value: string } }) => {
    const value = e.target.value;
    const numberValue = Number(value);
    if (!isNaN(numberValue)) {
      setFilters((prevFilters) => ({ ...prevFilters, minPrice: numberValue }));
    } else {
      toast.error("Invalid Price Value", {
        id: toastId,
      });
    }
  };

  const handleMaxPrice = (e: { target: { value: string } }) => {
    const numberValue = Number(e.target.value);

    if (!isNaN(numberValue)) {
      setFilters((prevFilters) => ({ ...prevFilters, maxPrice: numberValue }));
    } else {
      toast.error("Invalid Price Value", {
        id: toastId,
      });
    }
  };

  return (
    <Container>
      <div className="py-3 flex items-center justify-between lg:flex-row flex-col lg:px-0 px-4">
        <Breadcrumbs />

        <div className="relative xl:w-[500px] lg:w-[400px] w-full">
          <div className="absolute top-1/2 left-2 -translate-y-1/2">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search Product Name or Brand"
            onChange={handleSearchChange}
            className="py-2 rounded-md px-4 w-full  pl-10 bg-white outline-none focus:border-main border"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 hidden lg:block">
          <ProductSidebar
            handleMinPrice={handleMinPrice}
            handleMaxPrice={handleMaxPrice}
          />
        </div>
        <div className="lg:col-span-9 col-span-12 ">
          {/* product card top heading */}
          <div className="border-t border-b px-4 lg:px-0 py-3 border-borderColor  flex items-center justify-between">
            <div className="lg:flex items-center gap-2 hidden ">
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

            <ProductSortSidebar
              handleMinPrice={handleMinPrice}
              handleMaxPrice={handleMaxPrice}
            />

            {/* sorting selection */}
            <div className="flex items-center">
              <span className="text-[#666] text-sm mr-[4px] hidden lg:block">
                Sort By:
              </span>
              <select
                value={filters.sort}
                onChange={handleSortChange}
                name=""
                id=""
                className="outline-none bg-[#eee] px-[15px] h-[30px] max-w-[145px] text-sm cursor-pointer border-none leading-[30px]"
              >
                <option value="newest">Featured</option>
                <option value="price-asc">Price, low to high</option>
                <option value="price-desc">Price, high to low</option>
              </select>
            </div>
          </div>

          {/* if not have not any data show this message */}

          {productData?.data?.length <= 0 && (
            <h2 className="text-center py-10 text-3xl text-main">
              No Data Found 🙂
            </h2>
          )}

          {/* product card body part */}
          {view === "grid" ? (
            <>
              {/* grid card start */}
              {isLoading ? <ProductGridLoadingSkeleton /> : null}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-4 gap-5 px-4 lg:px-0">
                {productData?.data?.map((item: TProduct) => (
                  <ProductCard key={item._id} product={item} />
                ))}
              </div>
            </>
          ) : (
            <>
              {/* list card start */}
              {isLoading ? <ProductListLoadingSkeleton /> : null}
              <div className="grid grid-cols-1 py-6 gap-5 px-4 lg:px-0">
                {productData?.data?.map((item: TProduct) => (
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
