import Rating from "../../components/Rating";
import RatingLiveWrapper from "./RatingLiveWrapper";

const CustomerReviews = () => {
  return (
    <div>
      <div className="mb-[25px]">
        <h2 className="text-lg font-semibold text-headingColor ">
          Customer Reviews (47)
        </h2>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="lg:col-span-6 col-span-12 lg:border-r  lg:pb-0 pb-5 border-b lg:border-b-0  border-[#f2f2f2]">
          <div className="mb-4">
            <h1 className="text-[52px] text-headingColor font-bold mb-7">
              4.6
            </h1>
            <Rating
              rating={5}
              color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
            />
          </div>
          <p className="text-base font-normal text-gray-500 leading-[21px]">
            All reviews come from verified purchasers
          </p>
        </div>
        <div className="lg:col-span-6 col-span-12 lg:px-3 lg:py-0 py-5">
          <h2 className="text-lg font-semibold text-headingColor">
            <RatingLiveWrapper />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
