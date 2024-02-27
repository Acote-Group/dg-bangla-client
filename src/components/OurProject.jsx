import { MoveRight } from "lucide-react";
import lp1 from "../assets/lp/lp1.jpg";
import lp10 from "../assets/lp/lp10.jpg";
import lp11 from "../assets/lp/lp11.jpg";
import lp12 from "../assets/lp/lp12.jpg";
import lp13 from "../assets/lp/lp13.jpg";
import lp14 from "../assets/lp/lp14.jpg";
import lp15 from "../assets/lp/lp15.jpg";
import lp16 from "../assets/lp/lp16.jpg";
import lp17 from "../assets/lp/lp17.jpg";
import lp18 from "../assets/lp/lp18.jpg";
import lp19 from "../assets/lp/lp19.jpg";
import lp2 from "../assets/lp/lp2.jpg";
import lp21 from "../assets/lp/lp21.jpg";
import lp22 from "../assets/lp/lp22.jpg";
import lp23 from "../assets/lp/lp23.jpg";
import lp24 from "../assets/lp/lp24.jpg";
import lp25 from "../assets/lp/lp25.jpg";
import lp26 from "../assets/lp/lp26.jpg";
import lp27 from "../assets/lp/lp27.jpg";
import lp28 from "../assets/lp/lp28.jpg";
import lp29 from "../assets/lp/lp29.jpg";
import lp3 from "../assets/lp/lp3.jpg";
import lp30 from "../assets/lp/lp30.jpg";
import lp31 from "../assets/lp/lp31.jpg";
import lp32 from "../assets/lp/lp32.jpg";
import lp4 from "../assets/lp/lp4.jpg";
import lp5 from "../assets/lp/lp5.jpg";
import lp6 from "../assets/lp/lp6.jpg";
import lp7 from "../assets/lp/lp7.jpg";
import lp8 from "../assets/lp/lp8.jpg";
import lp9 from "../assets/lp/lp9.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OurProject = () => {
  const location = useLocation();

  const project = location.pathname.includes("/project");
  return (
    <>
      <section className="w-auto max-w-6xl 2xl:max-w-7xl mx-auto my-[120px]">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-center md:justify-start gap-4 items-center">
            <h1 className="font-ubuntu font-[500] text-[38px] tracking-widest">
              <span className="text-primary">Our</span> Projects
            </h1>

            <div className="flex flex-col ">
              <hr className="border-t-2 border-primary w-8" />
              <hr className="border-t-2 border-primary w-5 mt-3" />
            </div>
          </div>

          <div
            className="pb-1 flex space-x-none md:space-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 justify-center font-ubuntu"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap active text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-1"
              data-hs-tab="#horizontal-scroll-tab-1"
              aria-controls="horizontal-scroll-tab-1"
              role="tab"
            >
              All Projects <span className="hidden md:block">&nbsp;</span>/
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-2"
              data-hs-tab="#horizontal-scroll-tab-2"
              aria-controls="horizontal-scroll-tab-2"
              role="tab"
            >
              Civil Work <span className="hidden md:block">&nbsp;</span>/
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-3"
              data-hs-tab="#horizontal-scroll-tab-3"
              aria-controls="horizontal-scroll-tab-3"
              role="tab"
            >
              Electrical Work <span className="hidden md:block">&nbsp;</span>/
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-4"
              data-hs-tab="#horizontal-scroll-tab-4"
              aria-controls="horizontal-scroll-tab-4"
              role="tab"
            >
              Fire Fighting <span className="hidden md:block">&nbsp;</span>/
            </button>

            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-5"
              data-hs-tab="#horizontal-scroll-tab-5"
              aria-controls="horizontal-scroll-tab-5"
              role="tab"
            >
              Automation Work <span className="hidden md:block">&nbsp;</span>/
            </button>

            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-5"
              data-hs-tab="#horizontal-scroll-tab-5"
              aria-controls="horizontal-scroll-tab-5"
              role="tab"
            >
              Dredging Work
            </button>
          </div>
        </div>

        <div className="mt-[60px] gap-6 md:flex font-ubuntu">
          {/* tab-1  */}
          <div className="ms-3">
            <div
              id="horizontal-scroll-tab-1"
              role="tabpanel"
              aria-labelledby="horizontal-scroll-tab-item-1"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0 relative"
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                <img
                  src={lp1}
                  className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30"
                  alt=""
                />

                <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                    <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                      Residential
                    </button>
                    <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                      Ansar Barrack at BSC Yard
                    </h1>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                <img
                  src={lp2}
                  className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30"
                  alt=""
                />

                <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                    <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                      Commercial
                    </button>
                    <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                      Land Development at Bay Terminal
                    </h1>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                <img
                  src={lp3}
                  className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                  alt=""
                />

                <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                    <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                      Commercial
                    </button>
                    <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                      Govrakura Land Port Ofﬁce complex
                    </h1>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                <img
                  src={lp4}
                  className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                  alt=""
                />

                <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                    <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                      Residential
                    </button>
                    <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                      Govrakura Land Port Yard
                    </h1>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                <img
                  src={lp5}
                  className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                  alt=""
                />

                <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                    <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                      Commercial
                    </button>
                    <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                      Govrakura Land Port Gate
                    </h1>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                <img
                  src={lp6}
                  className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                  alt=""
                />

                <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                    <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                      Commercial
                    </button>
                    <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                      Laldiya Boundary wall
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* tab-2  */}
          <div
            id="horizontal-scroll-tab-2"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-2"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp7}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp8}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Level Checking for yard
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp9}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    PPFT Land Development_1
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp10}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    PPFT Land Development_2
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp11}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Land Development by Sand Pile
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp12}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Boring works for Earthing System
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* tab-3  */}
          <div
            id="horizontal-scroll-tab-3"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0 h-fit"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-3"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp13}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp14}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp15}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp16}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp17}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp18}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* tab-4  */}
          <div
            id="horizontal-scroll-tab-4"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-4"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp19}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp11}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp21}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp22}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp23}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp24}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* tab-5  */}
          <div
            id="horizontal-scroll-tab-5"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-5"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp25}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp26}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp27}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp28}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp29}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
              <img
                src={lp30}
                className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30 "
                alt=""
              />

              <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                  <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                    Commercial
                  </button>
                  <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                    Electro-mechanical Works at PCT
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {project ? null : (
          <div className="flex justify-center mt-8 md:mt-[40px]">
            <Link
              className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3.5 text-white focus:outline-none focus:ring mx-auto justify-center"
              to="/projects"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <MoveRight fill="black" />
              </span>

              <span className="uppercase font-medium transition-all group-hover:me-4">
                Explore More
              </span>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default OurProject;
