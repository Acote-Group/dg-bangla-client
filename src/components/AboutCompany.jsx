import { MoveRight } from "lucide-react";
import builder from "../assets/photos/worker2.png";
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

            <div className="w-full md:w-1/2 space-y-5">
              <div>
                <Fade right cascade>
                  <div className="font-ubuntu font-[700] text-[18px] uppercase leading-[25px]">
                    About Company
                    <hr className="border-t-[2px] border-primary w-28" />
                  </div>
                  <h1 className="text-[28px] 2xl:text-[45px] font-[500] font-ubuntu 2xl:leading-[65px] text-justify lg:w-3/4 2xl:w-full mt-[25px]">
                    We are committed to innovating in construction and
                    engineering.
                  </h1>
                  <p className="font-ubuntu leading-[26px] text-justify mt-[20px]">
                    Since 2012, we have made significant paces and are advancing
                    rapidly. Presently, we present ourselves as an experienced
                    and diverse company offering comprehensive property design
                    and construction solutions, while also expanding into
                    electrical works, equipment & spare parts importing, supply,
                    & servicing.
                  </p>

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
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
