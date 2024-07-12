import Advirtisement from "../components/Advirtisement";
import Brand from "../components/page/Brand";
import HeroSlider from "../components/page/HeroSlider";
import Product from "../components/Product";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Brand />
      <Advirtisement />
      <Product />
      <Reviews />
    </>
  );
};

export default Home;
