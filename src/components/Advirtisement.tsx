import Container from "./Container";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdPayment, MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Advirtisement = () => {
  const advertisementData = [
    {
      id: 1,
      title: "Free Shipping over $99",
      icon: <LiaShippingFastSolid />,
      describe:
        "Most orders of $99 or more will ship for free within the continental U.S.",
    },
    {
      id: 2,
      title: "Quick Payment",
      icon: <MdPayment />,
      describe:
        "Offering the largest dedicated selection of mechanical keyboards",
    },
    {
      id: 3,
      title: "Dedicated Customer Support",
      icon: <MdOutlineSupportAgent />,
      describe: "Our customer service department is ready to help you ",
    },
    {
      id: 4,
      title: "Best Prices, Best Products",
      icon: <AiOutlineDollarCircle />,
      describe: "Your trusted source for mechanical keyboards since 2012",
    },
  ];
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-10 gap-5 lg:py-10  lg:px-0 p-5">
        {advertisementData?.map((item) => (
          <div
            key={item.id}
            className="py-5 px-4  border lg:border-r lg:border-b-0 lg:border-t-0 lg:border-l-0 "
          >
            <span className="text-[32px] ">{item.icon}</span>
            <h2 className="text-lg font-semibold  text-gray-900 mb-2 mt-3">
              {item.title}
            </h2>
            <p className="text-base font-normal text-ellipsis">
              {item.describe}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Advirtisement;
