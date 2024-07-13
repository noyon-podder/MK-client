import Advirtisement from "../components/Advirtisement";
import Brand from "../components/page/Brand";
import HeroSlider from "../components/page/HeroSlider";
import Product from "../components/Product";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Brand />
      <Advirtisement />
      <Product />
      <Reviews />
      <WhyChooseUs />
    </>
  );
};

export default Home;
