import Advirtisement from "../components/Advirtisement";
import Brand from "../components/page/Brand";
import HeroSlider from "../components/page/HeroSlider";
import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Brand />
      <Advirtisement />
      <Product />
    </>
  );
};

export default Home;
