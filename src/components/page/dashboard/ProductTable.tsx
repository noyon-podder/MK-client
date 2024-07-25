import { AiFillEye } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { TProduct } from "../../../types/common";
import { formatPrice } from "../../../utils/formatPrice";
import Loading from "../../shared/Loading";
import {
  useDeleteProductMutation,
  useGetProductQuery,
} from "../../../redux/featured/product/productApi";
import { toast } from "sonner";
import EditModal from "./EditModal";
import React from "react";

const ProductTable: React.FC = () => {
  const { data, isLoading } = useGetProductQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) return <Loading />;

  const handleProductDelete = (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product"
    ) as boolean;

    if (confirm) {
      deleteProduct(id);
      toast.success("Product deleted successfully");
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="py-5 ">
      <div className="overflow-x-auto">
        <table
          id="data-table"
          className={`min-w-full border  table-auto  
              border-gray-200 divide-y divide-gray-200
          `}
        >
          <thead className={`"bg-gray-100"`}>
            <tr>
              <th
                className={`border-l px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                `}
              >
                PRODUCT
              </th>
              <th
                className={`border-l px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                `}
              >
                brand
              </th>
              <th
                className={`border-l px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                `}
              >
                STOCK
              </th>

              <th
                className={`border-l px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                `}
              >
                PRICE
              </th>
              <th
                className={`border-l px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                `}
              >
                QTY
              </th>
              <th
                className={`border-l px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                `}
              >
                Rating
              </th>
              <th
                className={`border-l px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                `}
              >
                STATUS
              </th>
              <th
                className={`border-l px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500
                `}
              >
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.data?.map((item: TProduct) => (
              <tr key={item._id}>
                <td className="border-l px-2 py-4 whitespace-nowrap flex gap-2">
                  <div
                    className={`w-[40px] h-[40px] rounded-md p-2 bg-[#f2f2f3]
                    `}
                  >
                    <img src={item.image} alt="" className="w-full" />
                  </div>
                  <span>
                    <h6
                      className={`text-[15px] pb-1 font-medium text-gray-600
                      `}
                    >
                      {item.name}
                    </h6>
                  </span>
                </td>
                <td
                  className={`border-l px-2 py-4 whitespace-nowrap  text-gray-600  
                  `}
                >
                  {/* <FaXmark className="text-gray-400 text-base" /> */}
                  {item?.brand}
                </td>
                <td className="border-l px-2 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.quantity > 0
                        ? "bg-success-100 text-success-400"
                        : "text-[#7367f0] bg-gray-100"
                    }`}
                  >
                    {item.quantity > 0 ? "In Stock" : "Out of stock"}
                  </span>
                </td>
                <td
                  className={`border-l px-2 py-4 whitespace-nowrap  text-gray-600 text-base
                  `}
                >
                  {formatPrice(item.price)}
                </td>
                <td
                  className={`border-l px-2 py-4 whitespace-nowrap  text-gray-600
                  `}
                >
                  {item.quantity}
                </td>
                <td
                  className={`border-l px-2 py-4 whitespace-nowrap  text-gray-600
                  `}
                >
                  {item.rating}
                </td>
                <td className="border-l px-2 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.quantity > 0
                        ? "bg-[#E8F9EF] text-[#22c55e]"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {item.quantity > 0 ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="border-l px-2 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-white ">
                      <AiFillEye className=" text-[12px]" />
                    </button>
                    <EditModal item={item} />
                    <button
                      onClick={() => handleProductDelete(item._id)}
                      className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-white"
                    >
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
  );
};

export default ProductTable;
