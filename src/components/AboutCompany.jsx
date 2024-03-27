import { MoveRight } from "lucide-react";
import builder from "../assets/photos/about.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <>
      <section className="bg-acBg bg-no-repeat bg-cover md:py-[60px]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-[42px] justify-center items-center">
            <div>
              <Fade left>
                <div className="w-full h-auto">
                  <img src={builder} alt="Construction Work" className="" />
                </div>
              </Fade>
            </div>

            <div className="w-full md:w-1/2 space-y-5 font-ubuntu">
              <div>
                <div className="flex justify-center md:justify-start gap-4 items-center">
                  <h1 className="font-ubuntu font-[500] text-[38px] leading-[44px]">
                    <span className="text-primary">About</span> Company
                  </h1>

                  <div className="flex flex-col ">
                    <hr className="border-t-2 border-primary w-8" />
                    <hr className="border-t-2 border-primary w-5 mt-3" />
                  </div>
                </div>
                <h1 className="text-[28px] 2xl:text-[30px] font-[500] font-ubuntu 2xl:leading-[44px] lg:w-3/4 2xl:w-full mt-[25px] text-justify">
                  We are committed to innovating in construction and
                  engineering.
                </h1>
                <h1 className="font-ubuntu leading-[26px] mt-[20px] text-justify">
                  Since 2012, we have made significant paces and are advancing
                  rapidly. Presently, we present ourselves as an experienced and
                  diverse company offering comprehensive property design and
                  construction solutions, while also expanding into electrical
                  works, equipment & spare parts importing, supply, & servicing.
                </h1>

                <Link
                  className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3.5 text-white focus:outline-none focus:ring md:mt-[40px] mt-4"
                  to="/about-us"
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <MoveRight fill="black" />
                  </span>

                  <span className="uppercase font-medium transition-all group-hover:me-4">
                    Explore More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
