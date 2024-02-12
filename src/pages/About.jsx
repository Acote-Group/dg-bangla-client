import { Link } from "react-router-dom";
import waveLine from "../assets/photos/waveLine2.png";
import AwesomeFacts from "../components/AwesomeFacts";
import ContactUs from "../components/ContactUs";
import MileStone from "../components/MileStone";
import Navbar from "../components/Navbar";
import OurTeam from "../components/OurTeam";
import WhyChooseUs from "../components/WhyChooseUs";

const About = () => {
  return (
    <>
      <section className="max-w-[1920px] mx-auto">
        <Navbar />

        <div className="w-full h-[300px] bg-aboutBg bg-cover bg-no-repeat pt-[10rem]">
          <h1 className="text-[60px] font-poppins uppercase text-white text-center font-semibold">
            About Us
          </h1>
        </div>

        <div className="container max-w-[1360px] mx-auto mt-[22px] pb-[80px]">
          <div className="font-openSans font-bold px-6">
            <ol
              className="flex items-center whitespace-nowrap"
              aria-label="Breadcrumb"
            >
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-gray-500 hover:text-primary focus:outline-none"
                  to="/"
                >
                  <svg
                    className="flex-shrink-0 me-3 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Home
                </Link>

                <svg
                  className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </li>
              <li
                className="inline-flex items-center font-bold text-primary truncate dark:text-gray-200"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </div>
        </div>

        <div className="w-full bg-whyBg bg-cover bg-no-repeat md:py-[80px]">
          <WhyChooseUs />
        </div>

        <AwesomeFacts />
        <OurTeam />
        <img src={waveLine} alt="" />
        <MileStone />
        <ContactUs />
      </section>
    </>
  );
};

export default About;
