import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Container from "./Container";
import { Button } from "./ui/button";

const HeroSlider = () => {
  const sliderData = [
    {
      image:
        "https://images.pexels.com/photos/7915439/pexels-photo-7915439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Titne65 Keyboard Kit",
      description: "Aluminium Or Brass cases in stunning white and black",
    },
    {
      image:
        "https://images.pexels.com/photos/7915211/pexels-photo-7915211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Discord TKL Mechanical Keyboard",
      description: "On Sale",
    },
    {
      image:
        "https://images.pexels.com/photos/9020269/pexels-photo-9020269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Live Sales",
      description: "Save on your next desk upgrade",
    },
  ];
  return (
    <Container>
      <Carousel>
        <CarouselContent>
          {
            sliderData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="w-full lg:h-[500px] md:h-[400px] h-[300px] relative">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full absolute inset-0 bg-black opacity-40"></div>

                  <div className="lg:left-20 md:left-16 left-14 absolute top-1/2 -translate-y-1/2">
                    <h2 className="text-white  xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-4 font-bold">
                      {item.title}{" "}
                    </h2>
                    <p className="text-[#f7f7f7] text-xl mb-8 lg:mb-12 ">
                      {item.description}
                    </p>
                    <Button size="lg" className="text-xl font-semibold ">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))

            // Add more items as needed in the sliderData array.
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default HeroSlider;
