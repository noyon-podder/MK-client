import Rating from "../../components/Rating";

const ProductReviewCard = () => {
  return (
    <div className="mb-8">
      <div className="flex items-start  gap-4">
        <div className="w-14 h-14 rounded-full min-w-14 min-h-14">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full  h-full  rounded-full"
          />
        </div>
        <div>
          <h2 className="text-gray-700 leading-[16px] font-semibold mb-[5px]">
            Rohima Begum
          </h2>
          <Rating
            rating={5}
            size={14}
            color={{ filled: "text-[#ffa20f]", unfilled: "text-gray-300" }}
          />
          <p className="text-sm text-gray-500 mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem adipisci vero vitae esse! Autem voluptatibus vitae
            nostrum eveniet animi, quae sequi provident quas iure atque aut
            nobis eum deleniti at quidem. Accusantium assumenda repellat fuga
            dolor eligendi. Laudantium similique fuga saepe dolore! Libero
            corrupti doloremque recusandae debitis error nemo excepturi!
          </p>
        </div>
      </div>
      <div className="flex items-stretch gap-3 mt-5">
        <div className="w-1/4 border border-[#dfe2e6] rounded-[6px] overflow-hidden ">
          <img
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="w-1/4 border border-[#dfe2e6] rounded-[6px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductReviewCard;
