import { Link } from "react-router-dom";
import { menuItems } from "../../data/menudata";
import { MdFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-white ">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <Link to="" className="text-2xl text-main font-bold">
              MK shop
            </Link>
            <div className="flex flex-wrap justify-center  mt-7 lg:mt-10 -mx-4">
              <ul className="flex gap-5">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    {" "}
                    <Link
                      to={item.path}
                      className="hover:text-gray-500 text-base font-medium text-gray-950"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 " />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500 ">
              © Copyright 2021. All Rights Reserved. Noyon Podder
            </p>

            <div className="flex gap-3">
              <Link
                to="https://facebook.com"
                className="text-xl text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                <MdFacebook />
              </Link>
              <Link
                to="https://facebook.com"
                className="text-xl text-gray-800 hover:text-red-600 transition-colors duration-300"
              >
                <FaYoutube />
              </Link>
              <Link
                to="https://facebook.com"
                className="text-xl text-gray-800 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
