import { Link } from "react-router-dom";
import MileStone from "../components/MileStone";
import Navbar from "../components/Navbar";
import MsgFromMd from "../components/MsgFromMd";
import OurStory from "../components/OurStory";
import OurFuturePlan from "../components/OurFuturePlan";
import OurClients from "../components/OurClients";
import GetConsultation from "../components/GetConsultation";

const About = () => {
  return (
    <>
      <section className="max-w-[1920px] mx-auto">
        <Navbar />

        <div className="w-full h-[300px] bg-navBg bg-cover bg-no-repeat pt-[8rem]">
          <h1 className="text-[60px] font-ubuntu uppercase text-white text-center font-semibold">
            About
          </h1>

          <div className="font-ubuntu w-fit mx-auto">
            <ol
              className="flex items-center whitespace-nowrap"
              aria-label="Breadcrumb"
            >
              <li className="inline-flex items-center gap-2">
                <Link
                  className="flex items-center text-[#8B8B8B] hover:text-primary focus:outline-none focus:text-primary text-[18px] font-[500] leading-[28px]"
                  to="/"
                >
                  {/* <svg
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
                  </svg> */}
                  Home
                </Link>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.375 3.75L10.625 10L4.375 16.25"
                    stroke="#A8223B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.625 3.75L16.875 10L10.625 16.25"
                    stroke="#A8223B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>

              <li
                className="inline-flex items-center text-white truncate text-[18px] font-[500] leading-[28px] ml-2"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </div>
        </div>

        <MsgFromMd />
        <OurStory />
        <OurFuturePlan />
        <OurClients />
        <MileStone />
        <GetConsultation />
      </section>
    </>
  );
};

export default About;
