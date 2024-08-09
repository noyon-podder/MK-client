import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FiMinus, FiPlus } from "react-icons/fi";
import { updateQuantity } from "../../redux/featured/product/cartSlice";
import { TbCurrencyTaka } from "react-icons/tb";

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="">
      {cart.items.length === 0 ? (
        <div className="p-5 bg-white rounded-[12px]">
          <h2 className="text-[18px] font-medium text-center text-headingColor">
            Your cart is empty.
          </h2>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b">Product Image</th>
                <th className="px-6 py-3 border-b">Product Title</th>
                <th className="px-6 py-3 border-b">Price</th>
                <th className="px-6 py-3 border-b">Quantity</th>
                <th className="px-6 py-3 border-b">Total</th>
                <th className="px-6 py-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="px-6 py-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <h2 className="text-headingColor font-semibold">
                      {item.name}
                    </h2>
                  </td>
                  <td className="px-6 py-4">
                    <p className="flex items-center gap-[2px]">
                      <TbCurrencyTaka size={24} />
                      {item.price}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    {/* quantity button   */}
                    <div className="flex ">
                      <button
                        onClick={() =>
                          handleQuantityChange(item._id, item.quantity - 1)
                        }
                        className={`h-[32px] w-10 border-none bg-[#f2f2f2] hover:bg-[#eaeaea] flex items-center justify-center ${
                          item.quantity === 0
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                        disabled={item.quantity === 0}
                      >
                        <FiMinus />
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        className=" outline-none  w-[70px] text-center h-[32px] border-t px-3  border-b border-[#f2f2f2]"
                      />
                      <button
                        onClick={() =>
                          handleQuantityChange(item._id, item.quantity + 1)
                        }
                        className="h-[32px] w-10 border-none bg-[#f2f2f2] hover:bg-[#eaeaea] flex items-center justify-center"
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="flex items-center gap-[2px]">
                      <TbCurrencyTaka size={24} />
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      // onClick={() => handleRemove(item._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CartPage;
