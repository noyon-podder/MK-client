import COD from "/cod.png";
import BKASH from "/bkash.png";
import NAGAD from "/nagad.png";
import SSL from "/ssl.png";

type TPaymentMethodProps = {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
};

const PaymentMethodSelect = ({
  paymentMethod,
  setPaymentMethod,
}: TPaymentMethodProps) => {
  const selectPaymentMethod = [
    {
      id: 1,
      name: "Cash On Delivery",
      value: "COD",
      image: COD,
    },
    {
      id: 2,
      name: "Bkash",
      value: "BKASH",
      image: BKASH,
    },
    {
      id: 3,
      name: "Nagad",
      value: "NAGAD",
      image: NAGAD,
    },
    {
      id: 4,
      name: "SSL Commerz",
      value: "SSLCOMMERZ",
      image: SSL,
    },
  ];
  return (
    <div className="p-5 bg-white rounded-[12px] mt-6 shadow-sm">
      <h2 className="text-base font-bold text-headingColor leading-[18px] mb-5">
        Select Payment Method
      </h2>

      <div className="">
        {selectPaymentMethod.map((method) => (
          <div
            key={method.id}
            className={`flex items-center gap-3 border py-3 px-3 rounded-lg  cursor-pointer ${
              method.value === paymentMethod
                ? "border-noyonColor"
                : "border-transparent"
            }`}
            onClick={() => setPaymentMethod(method.value)}
          >
            <img
              src={method.image}
              alt={method.name}
              width={60}
              className="shadow-md"
            />
            <h2 className="text-gray-500 text-base font-medium">
              {method.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelect;
