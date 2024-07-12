import Rating from "./Rating";

const ReviewCard = () => {
  return (
    <div>
      <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg ">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-main rounded-full"
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>

        <Rating
          rating={4.5}
          color={{ filled: "text-yellow-400", unfilled: "text-gray-300" }}
        />

        <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">
          Mechanical Keyboard
        </h2>

        <p className="mt-2 text-sm text-gray-600 ">
          May musical arrival beloved luckily adapted him. Shyness mention
          married son she his started now. Rose if as past near were.
        </p>

        <div className="flex justify-end mt-4">
          <a href="#" className="text-lg font-medium text-main " role="link">
            John Doe
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
