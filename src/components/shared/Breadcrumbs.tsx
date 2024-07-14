import { IoIosHome } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the pathname into parts
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex py-3" aria-label="breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-main text-sm font-medium"
          >
            <IoIosHome size={18} />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="inline-flex items-center capitalize ">
              <span className="mx-2 text-gray-400"> / </span>
              {isLast ? (
                <span className="text-sm font-medium text-gray-500 ">
                  {value}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-gray-700  text-sm font-medium hover:text-main"
                >
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
