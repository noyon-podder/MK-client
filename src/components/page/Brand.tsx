import Container from "../Container";
import Brand1 from "../../assets/image/barnd1.png";
import Brand2 from "../../assets/image/barnd2.png";
import Brand3 from "../../assets/image/brand3.png";

const Brand = () => {
  const images = [
    {
      image: Brand1,
    },
    {
      image: Brand2,
    },
    {
      image: Brand3,
    },
    {
      image: Brand2,
    },
    {
      image: Brand1,
    },
    {
      image: Brand3,
    },
    {
      image: Brand2,
    },
  ];
  return (
    <Container>
      <div className="py-9">
        <div className="flex items-center gap-10 justify-between overflow-y-hidden overflow-x-auto scrollbar-hidden ">
          {images.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt=""
              className="h-auto w-[120px] object-cover mr-4"
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Brand;
