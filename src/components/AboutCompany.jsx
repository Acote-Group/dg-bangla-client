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

            <div className="w-full md:w-1/2 space-y-4">
              <Fade right cascade>
                <div className="font-ubuntu font-[700] text-[18px] uppercase leading-[25px]">
                  About Company
                  <hr className="border-t-[2px] border-primary w-28" />
                </div>
                <h1 className="text-[44px] font-[500] font-ubuntu leading-[65px]">
                  We are Commitment to Innovation <br /> in Construction and
                  Engineering
                </h1>
                <p className="font-ubuntu leading-[26px] text-balance">
                  Since 2012, we have made significant paces and are advancing
                  rapidly. Presently, we present ourselves as an experienced and
                  diverse company offering comprehensive property design and
                  construction solutions, while also expanding into electrical
                  works, equipment & spare parts importing, supply, and
                  servicing.
                </p>

                <Link
                  className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3.5 text-white focus:outline-none focus:ring mt-[40px]"
                  to="/about-us"
                >
                  <span className="absolute -end-full transition-all group-hover:end-4">
                    <MoveRight fill="black" />
                  </span>

                  <span className="uppercase font-medium transition-all group-hover:me-4">
                    Explore More
                  </span>
                </Link>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#EEE] hidden md:block"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary w-7 h-7 flex-shrink-0"
                    >
                      <rect
                        width="16"
                        height="20"
                        x="4"
                        y="2"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>

                    <div>
                      <h3 className="font-semibold font-ubuntu">Building</h3>
                      <p className="text-gray-500 font-ubuntu text-sm">
                        Expert design and construction services for any project,
                        big or small.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#EEE] hidden md:block"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary w-6 h-6 flex-shrink-0"
                    >
                      <path d="M21 7v6h-6"></path>
                      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold font-ubuntu">Renovation</h3>
                      <p className="text-gray-500 font-ubuntu text-sm">
                        Breathe new life into existing spaces with our skilled
                        renovation services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#EEE] hidden md:block"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary w-6 h-6 flex-shrink-0"
                    >
                      <path d="M2 22v-5l5-5 5 5-5 5z"></path>
                      <path d="M9.5 14.5 16 8"></path>
                      <path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold font-ubuntu">Digging</h3>
                      <p className="text-gray-500 font-ubuntu text-sm">
                        Handle any excavation or earthmoving need with our
                        advanced equipment and expertise.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#EEE] hidden md:block"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary w-6 h-6 flex-shrink-0"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <div>
                      <h3 className="font-semibold font-ubuntu">Interior</h3>
                      <p className="text-gray-500 font-ubuntu text-sm">
                        Craft beautiful and functional living spaces that
                        reflect your uniq
                      </p>
                    </div>
                  </div>
                </div> */}
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
