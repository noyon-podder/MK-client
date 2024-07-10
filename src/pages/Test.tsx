import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
const Test = () => {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        <CarouselItem>Hello Developer</CarouselItem>
        <CarouselItem>I am fine</CarouselItem>
        <CarouselItem>Ami r tmi</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Test;
