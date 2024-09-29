import SubBanner from "../../components/shared/SubBanner";
import MeetTheTeam from "./MeetTheTeam";
import MissionSection from "./MissionSection";
import OurStory from "./OurStory";

const AboutPage = () => {
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];
  return (
    <>
      <SubBanner
        title="About Us"
        breadcrumb={breadcrumb}
        backgroundImage={
          "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <MissionSection />
      <MeetTheTeam />
      <OurStory />
    </>
  );
};

export default AboutPage;
