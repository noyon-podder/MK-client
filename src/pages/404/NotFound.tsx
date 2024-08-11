import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full flex-col">
      <h2 className="lg:text-[140px] leading-[145px] text-[80px] font-extrabold text-headingColor">
        404
      </h2>
      <p className="text-lg text-headingColor font-semibold">
        Oops! Page Not Found
      </p>

      <Link
        to={"/"}
        className="px-10  mt-9 py-3 bg-headingColor text-white text-lg font-medium rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
