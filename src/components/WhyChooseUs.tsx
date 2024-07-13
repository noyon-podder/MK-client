import { Link } from "react-router-dom";
import Container from "./Container";
import FaqAccrodion from "./FaqAccrodion";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f8f8f8] lg:py-20 py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 ">
          <div>
            <h2 className="lg:text-4xl text-3xl font-bold text-gray-900 mb-5 ">
              Have a question? We are here to help.
            </h2>
            <p className="text-lg text-gray-600 mb-7 lg:mb-10">
              Check out the full FAQ page or reach out to our customer support
              team.
            </p>
            <Link
              to=""
              className="bg-main  text-white px-7 py-3 text-lg font-medium rounded-3xl hover:bg-orange-500 "
            >
              More Questions
            </Link>
          </div>
          <div className="bg-white p-6">
            <FaqAccrodion />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
