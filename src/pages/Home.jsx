import AboutCompany from "../components/AboutCompany";
import AchievementCounter from "../components/AchievementCounter";
import GetConsultation from "../components/GetConsultation";
import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurProject from "../components/OurProject";
import OurServices from "../components/OurServices";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhoWeAre />
      <AboutCompany />
      <OurServices />
      <AchievementCounter />
      <OurProject />
      <OurClients />
      <GetConsultation />
    </div>
  );
};

export default Home;
