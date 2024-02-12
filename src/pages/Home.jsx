import AboutCompany from "../components/AboutCompany";
import AchievementCounter from "../components/AchievementCounter";
import Achievements from "../components/Achievements";
import GetConsultation from "../components/GetConsultation";
import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurProject from "../components/OurProject";
import OurServices from "../components/OurServices";
import Testimonial from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <AboutCompany />
      <OurServices />
      <AchievementCounter />
      {/* <Achievements /> */}
      <OurProject />
      <Testimonial />
      <OurClients />
      <GetConsultation />
    </>
  );
};

export default Home;
