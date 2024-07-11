import Container from "./Container";

const Advirtisement = () => {
  const advertisementData = [
    {
      id: 1,
      title: "Free Shipping over $99",
      describe:
        "Most orders of $99 or more will ship for free within the continental U.S.",
    },
    {
      id: 2,
      title: "Quick Payment",
      describe:
        "Offering the largest dedicated selection of mechanical keyboards",
    },
    {
      id: 3,
      title: "Dedicated Customer Support",
      describe: "Our customer service department is ready to help you ",
    },
    {
      id: 4,
      title: "Best Prices, Best Products",
      describe: "Your trusted source for mechanical keyboards since 2012",
    },
  ];
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
        {advertisementData?.map((item) => (
          <div key={item.id} className="py-2 px-4 border-r">
            <h2 className="text-lg font-semibold  text-gray-900 mb-3">
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
