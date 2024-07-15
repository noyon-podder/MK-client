import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useGetProductQuery } from "../../../redux/api/baseApi";
import Breadcrumbs from "../../shared/Breadcrumbs";

const Dashboard = () => {
  const { data } = useGetProductQuery(undefined);

  const handleCheckboxChange = (index: number) => () => {
    // dispatch(toggleCheckbox(index));
    console.log(index);
  };

  const tableData = [
    {
      id: 1,
      name: "Zoolab",
      category: "Household",
      isStatus: true,
      sku: "SKU123",
      price: "$50.00",
      quantity: 5,
      isActive: true,
    },
    {
      id: 2,
      name: "Zoolab",
      category: "Household",
      isStatus: false,
      sku: "SKU123",
      price: "$50.00",
      quantity: 5,
      isActive: false,
    },
    {
      id: 3,
      name: "Zoolab",
      category: "Household",
      isStatus: false,
      sku: "SKU123",
      price: "$50.00",
      quantity: 5,
      isActive: false,
    },
    {
      id: 3,
      name: "Zoolab",
      category: "Household",
      isStatus: false,
      sku: "SKU123",
      price: "$50.00",
      quantity: 5,
      isActive: false,
    },
    {
      id: 3,
      name: "Zoolab",
      category: "Household",
      isStatus: false,
      sku: "SKU123",
      price: "$50.00",
      quantity: 5,
      isActive: false,
    },
    {
      id: 3,
      name: "Zoolab",
      category: "Household",
      isStatus: false,
      sku: "SKU123",
      price: "$50.00",
      quantity: 5,
      isActive: false,
    },
  ];
  const isDarkMode = false;

  return (
    <div className="py-6 lg:px-5">
      <div className=" px-5 flex items-center justify-between bg-white py-5">
        <h2 className="text-xl font-medium text-gray-800">All Products</h2>
        <Breadcrumbs />
      </div>

      <div className="py-5 px-5 rounded bg-white mt-5">
        {/* Products filtering */}
        <div>
          <div className="pt-3 pb-5">
            <h3
              className={` text-[20px] font-medium ${
                isDarkMode ? "text-darkColorText" : "text-bgray-800"
              }`}
            >
              Filter
            </h3>
          </div>
          <div className="lg:flex items-center justify-between">
            <div className="mb-4 flex-1">
              <label
                htmlFor="vendor1"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-darkColorText" : "text-gray-700"
                }`}
              >
                Status
              </label>
              <select
                id="vendor1"
                name="vendor1"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${
                  isDarkMode
                    ? "bg-darkColorCard border-darkColorBody border text-darkColorText "
                    : "bg-lightColor hover:border-gray-400 border-gray-300 border"
                }`}
              >
                {/* Vendor options */}
                <option>Status </option>
                <option>Scheduled</option>
                <option>Publish</option>
                <option>Inactive</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4 flex-1 lg:mx-4">
              <label
                htmlFor="vendor2"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-darkColorText" : "text-gray-700"
                }`}
              >
                Category
              </label>
              <select
                id="vendor2"
                name="vendor2"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${
                  isDarkMode
                    ? "bg-darkColorCard border-darkColorBody border text-darkColorText "
                    : "bg-lightColor hover:border-gray-400 border-gray-300 border"
                }`}
              >
                {/* Vendor options */}
                <option>Category</option>
                <option>Household</option>
                <option>Office</option>
                <option>Electronics</option>
                <option>Shoes</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4 flex-1">
              <label
                htmlFor="vendor3"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-darkColorText" : "text-gray-700"
                }`}
              >
                Stock
              </label>
              <select
                id="vendor3"
                name="vendor3"
                className={`form-control mt-1 p-3   block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${
                  isDarkMode
                    ? "bg-darkColorCard border-darkColorBody text-darkColorText border "
                    : "bg-lightColor hover:border-gray-400 border border-gray-300 "
                }`}
              >
                {/* Vendor options */}
                <option>Stock</option>
                <option>Out Of Stock</option>
                <option>In Stock</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>
        {/* product table  */}
        {/* Products table */}

        <div className="py-5">
          <div className="overflow-x-auto">
            <table
              id="data-table"
              className={`min-w-full border  table-auto  ${
                isDarkMode
                  ? "border-darkColorBody"
                  : "border-gray-200 divide-y divide-gray-200"
              }`}
            >
              <thead
                className={`${isDarkMode ? "bg-[#131A26]" : "bg-gray-100"}`}
              >
                <tr>
                  <th className="p-2">
                    <input
                      type="checkbox"
                      className={`form-checkbox h-4 w-4 ${
                        isDarkMode ? "text-black" : "text-indigo-600"
                      }`}
                      // checked={selectAll}
                      // onChange={handleHeaderCheckboxChange}
                    />
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-lightColor" : "text-gray-500"
                    }`}
                  >
                    PRODUCT
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-lightColor" : "text-gray-500"
                    }`}
                  >
                    CATEGORY
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-lightColor" : "text-gray-500"
                    }`}
                  >
                    STOCK
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-lightColor" : "text-gray-500"
                    }`}
                  >
                    SKU
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-lightColor" : "text-gray-500"
                    }`}
                  >
                    PRICE
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-lightColor" : "text-gray-500"
                    }`}
                  >
                    QTY
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-lightColor" : "text-gray-500"
                    }`}
                  >
                    STATUS
                  </th>
                  <th
                    className={`border-l pl-2 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-lightColor" : "text-gray-500"
                    }`}
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {tableData.map((item, index) => (
                  <tr key={item.id}>
                    <td className="">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-Vindigo-800 ml-5"
                        // checked={checkboxes[index] || false}
                        onChange={handleCheckboxChange(index)}
                      />
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap flex gap-2">
                      <div
                        className={`w-[40px] h-[40px] rounded-md p-2 ${
                          isDarkMode ? "bg-[#131A26]" : "bg-[#f2f2f3]"
                        }`}
                      >
                        <img
                          src="https://react.spruko.com/synto-js/preview/assets/11-70a2cfce.png"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <span>
                        <h6
                          className={`text-[15px] pb-1 font-medium ${
                            isDarkMode ? "text-lightColor" : "text-textColor"
                          }`}
                        >
                          {item.name}
                        </h6>
                      </span>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${
                        isDarkMode ? "text-lightColor" : "text-textColor"
                      }`}
                    >
                      {item.category}
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.isStatus
                            ? "bg-success-100 text-success-400"
                            : "text-[#7367f0] bg-gray-100"
                        }`}
                      >
                        {item.isStatus ? "In Stock" : "Out of stock"}
                      </span>
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${
                        isDarkMode ? "text-lightColor" : "text-textColor"
                      }`}
                    >
                      {item.sku}
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${
                        isDarkMode ? "text-lightColor" : "text-textColor"
                      }`}
                    >
                      {item.price}
                    </td>
                    <td
                      className={`border-l pl-2 py-4 whitespace-nowrap ${
                        isDarkMode ? "text-lightColor" : "text-textColor"
                      }`}
                    >
                      {item.quantity}
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.isActive
                            ? "bg-[#E8F9EF] text-[#22c55e]"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="border-l pl-2 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-lightColor ">
                          <AiFillEye className=" text-[12px]" />
                        </button>
                        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor">
                          <AiFillEdit className=" text-[12px] " />
                        </button>
                        <button className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor">
                          <RiDeleteBin7Line className="text-[12px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
