import ProductReviewCard from "./ProductReviewCard";

const ProductReviews = () => {
  return (
    <div className="mt-8 ">
      <div className="border-t border-b py-2 border-borderColor">
        <h2 className="text-lg font-semibold text-headingColor">
          Product Reviews
        </h2>
      </div>

      {/* //!write a review button it is only show for authenticated user */}
      <div className="mt-5 flex items-center justify-end ">
        <button className="bg-[#F8E5E5] px-6 py-2 outline-none rounded-md border-none text-base font-semibold text-headingColor">
          Write Review
        </button>
      </div>
      <div className="my-5">
        <ProductReviewCard />
        <ProductReviewCard />
      </div>
    </div>
  );
};

export default ProductReviews;
