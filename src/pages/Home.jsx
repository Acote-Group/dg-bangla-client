import AboutCompany from "../components/AboutCompany";
import Achievements from "../components/Achievements";
import BestServices from "../components/BestServices";
import GetConsultation from "../components/GetConsultation";
import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurProject from "../components/OurProject";
import Testimonial from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <AboutCompany />
      <BestServices />
      <Achievements />
      <OurProject />
      <Testimonial />
      <OurClients />
      <GetConsultation />
    </>
  );
};

export default Home;
