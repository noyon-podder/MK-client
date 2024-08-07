import Rating from "../../components/Rating";

const RatingLiveWrapper = () => {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        <li className="flex items-center gap-3">
          <Rating
            rating={5}
            color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
            size={13}
          />
          <div className="max-w-[170px] w-full h-[6px] bg-[#f2f2f2] rounded-[6px] relative">
            <div className="h-full bg-[#6f747f] absolute top-0 left-0 w-[30%] rounded-tl-[6px] rounded-bl-[6px]"></div>
          </div>
          <span className="block text-[0f172a99] text-sm font-normal">5</span>
        </li>
        <li className="flex items-center gap-3">
          <Rating
            rating={4}
            color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
            size={13}
          />
          <div className="max-w-[170px] w-full h-[6px] bg-[#f2f2f2] rounded-[6px] relative">
            <div className="h-full bg-[#6f747f] absolute top-0 left-0 w-[26%] rounded-tl-[6px] rounded-bl-[6px]"></div>
          </div>
          <span className="block text-[0f172a99] text-sm font-normal">4</span>
        </li>
        <li className="flex items-center gap-3">
          <Rating
            rating={3}
            color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
            size={13}
          />
          <div className="max-w-[170px] w-full h-[6px] bg-[#f2f2f2] rounded-[6px] relative">
            <div className="h-full bg-[#6f747f] absolute top-0 left-0 w-[37%] rounded-tl-[6px] rounded-bl-[6px]"></div>
          </div>
          <span className="block text-[0f172a99] text-sm font-normal">3</span>
        </li>
        <li className="flex items-center gap-3">
          <Rating
            rating={2}
            color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
            size={13}
          />
          <div className="max-w-[170px] w-full h-[6px] bg-[#f2f2f2] rounded-[6px] relative">
            <div className="h-full bg-[#6f747f] absolute top-0 left-0 w-[20%] rounded-tl-[6px] rounded-bl-[6px]"></div>
          </div>
          <span className="block text-[0f172a99] text-sm font-normal">2</span>
        </li>
        <li className="flex items-center gap-3">
          <Rating
            rating={1}
            color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
            size={13}
          />
          <div className="max-w-[170px] w-full h-[6px] bg-[#f2f2f2] rounded-[6px] relative">
            <div className="h-full bg-[#6f747f] absolute top-0 left-0 w-[10%] rounded-tl-[6px] rounded-bl-[6px]"></div>
          </div>
          <span className="block text-[0f172a99] text-sm font-normal">1</span>
        </li>
      </ul>
    </div>
  );
};

export default RatingLiveWrapper;
