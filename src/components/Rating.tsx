import { IoMdStarOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

type TRating = {
  rating: number;
  color: {
    filled: string;
    unfilled: string;
  };
};

const Rating = ({ rating, color }: TRating) => {
  const count = 5;
  const stars = [];

  for (let i = 1; i <= count; i++) {
    stars.push(
      <span key={i} className={i <= rating ? color.filled : color.unfilled}>
        {i <= rating ? <FaStar size={20} /> : <IoMdStarOutline size={20} />}
      </span>
    );
  }

  return <div className="flex items-center gap-[4px]">{stars}</div>;
};

export default Rating;
