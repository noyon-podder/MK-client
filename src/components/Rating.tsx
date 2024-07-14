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
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${i <= rating ? color.filled : color.unfilled}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049.3l1.977 4.006 4.418.646-3.2 3.117.755 4.407-3.95-2.078-3.95 2.078.755-4.407-3.2-3.117 4.418-.646L9.049.3z" />
      </svg>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default Rating;
