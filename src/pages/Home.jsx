import AboutCompany from "../components/AboutCompany";
import BestServices from "../components/BestServices";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <AboutCompany />
      <BestServices />
    </>
  );
};

export default Home;
