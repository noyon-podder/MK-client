import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex items-center gap-3 justify-center lg:py-20 py-10">
      <AiOutlineLoading className="animate-spin text-[#666]" size={20} />
      <p className=" text-[#444]">Loading...</p>
    </div>
  );
};

export default Loading;
