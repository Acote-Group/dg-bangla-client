import Fade from "react-reveal/Fade";
import service1 from "../assets/service/service1.png";
import service2 from "../assets/service/service2.png";
import service3 from "../assets/service/service3.png";
import service4 from "../assets/service/service4.png";
import service5 from "../assets/service/service5.png";
import service6 from "../assets/service/service6.png";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <>
      <section className="container max-w-[1360px] mx-auto mt-[22px]">
        <div className="text-center md:mt-[95px]">
          <div className="flex justify-center gap-4 items-center">
            <div className="flex flex-col">
              <hr className="border-t-2 border-primary w-8 ml-auto" />
              <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
            </div>

            <Fade bottom>
              <h1 className="text-[28px] md:text-[38px] font-[500] font-ubuntu leading-[44px]">
                <span className="text-primary">OUR</span> SERVICES
              </h1>
            </Fade>

            <div className="flex flex-col ">
              <hr className="border-t-2 border-primary w-8" />
              <hr className="border-t-2 border-primary w-5 mt-3" />
            </div>
          </div>

          <p className="text-center font-ubuntu text-[#767676] mx-auto mt-6 text-sm font-normal w-[80%] leading-[24px]">
            DG-Bangla isn't just raising skylines - we're shaping the future of
            Bangladesh's business landscape. From state-of-the-art office towers
            to innovative logistics centers, we deliver commercial projects that
            empower businesses and communities.
          </p>
        </div>

        <div className="my-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <a
              className=" bg-white hover:shadow-lg hover:relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary"
              href="#"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={service1}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Civil Construction
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu">
                  Transforming dreams into reality, we build the foundations for
                  a strong and resilient Bangladesh.
                </p>
              </div>
            </a>

            <a
              className=" bg-white hover:shadow-lg hover:relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary"
              href="#"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={service2}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Yard & Road Construction
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu">
                  Connecting communities and paving the way for progress with
                  our expertise in yard and road construction.
                </p>
              </div>
            </a>

            <a
              className=" bg-white hover:shadow-lg hover:relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary"
              href="#"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={service4}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Electro-Mechanical
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu">
                  Lighting up the future with precision, our electro-mechanical
                  solutions are at the heart of efficient and innovative
                  construction.
                </p>
              </div>
            </a>

            <a
              className=" bg-white hover:shadow-lg hover:relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary"
              href="#"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={service5}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Automation
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu">
                  Embrace the future with smart buildings! Our automation
                  services integrate cutting-edge technology with construction
                  excellence.
                </p>
              </div>
            </a>

            <a
              className=" bg-white hover:shadow-lg hover:relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary"
              href="#"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={service6}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  River Bank Protection
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu">
                  Safeguarding Bangladesh's most vital arteries, our river bank
                  protection initiatives preserve beauty and ensure a
                  sustainable future.
                </p>
              </div>
            </a>

            <a
              className=" bg-white hover:shadow-lg hover:relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary"
              href="#"
            >
              <div className="relative">
                <img
                  className="w-full"
                  src={service3}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Dredging & Ground Improvement
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu">
                  From shaping landscapes to strengthening foundations, we
                  ensure stability and resilience with our dredging and ground
                  improvement services.
                </p>
              </div>
            </a>
          </div>

          <div className="flex justify-center md:mt-[60px] md:mb-[120px]">
            <Link
              className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3.5 text-white focus:outline-none focus:ring mx-auto justify-center"
              to="/services"
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
      </section>
    </>
  );
};

export default OurServices;

{
  /* <Fade left>
            <div className="relative">
              <a className="absolute inset-0 z-10 bg-black text-center flex flex-col justify-center w-[48%] opacity-100 bg-opacity-70 duration-300 text-white font-inter space-y-6 p-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <mask id="path-1-inside-1_684_1057" fill="white">
                    <path d="M7 7.11011L0 14L-1.22392e-06 1.22392e-06L14 0L7 7.11011Z" />
                  </mask>
                  <path
                    d="M7 7.11011L16.8207 17.0878L16.8992 17.0105L16.9764 16.9321L7 7.11011ZM0 14L-14 14L-14 47.4237L9.82071 23.9777L0 14ZM-1.22392e-06 1.22392e-06L-2.44784e-06 -14L-14 -14L-14 2.44784e-06L-1.22392e-06 1.22392e-06ZM14 0L23.9764 9.82194L47.4295 -14L14 -14L14 0ZM-2.82071 -2.86755L-9.82071 4.02235L9.82071 23.9777L16.8207 17.0878L-2.82071 -2.86755ZM14 14L14 0L-14 2.44784e-06L-14 14L14 14ZM0 14L14 14L14 -14L-2.44784e-06 -14L0 14ZM4.02356 -9.82194L-2.97644 -2.71184L16.9764 16.9321L23.9764 9.82194L4.02356 -9.82194Z"
                    fill="white"
                    mask="url(#path-1-inside-1_684_1057)"
                  />
                </svg>

                <h1 className="md:text-[25px] font-[300] font-roboto">
                  Civil Work
                </h1>
                <p className="font-openSans text-white text-[12px]">
                  DG. Bangla is one of the leaders in Civil Work including plain
                  Concrete casting, reinforcement.
                </p>

                <a
                  href="#"
                  className="text-white font-semibold font-inter text-sm hover:text-primary"
                >
                  View More
                </a>
              </a>

              <div className="w-2 h-full inset-0 z-10 bg-primary absolute mx-auto"></div>

              <a href="#" className="relative">
                <div className="flex flex-wrap content-center">
                  <img src={service1} className="w-full" alt="" />
                </div>
              </a>
            </div>
          </Fade>

          <Fade top>
            <div className="relative">
              <a className="absolute inset-0 z-10 bg-black text-center flex flex-col justify-center w-[48%] opacity-100 bg-opacity-70 duration-300 text-white font-inter space-y-2 p-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <mask id="path-1-inside-1_684_1057" fill="white">
                    <path d="M7 7.11011L0 14L-1.22392e-06 1.22392e-06L14 0L7 7.11011Z" />
                  </mask>
                  <path
                    d="M7 7.11011L16.8207 17.0878L16.8992 17.0105L16.9764 16.9321L7 7.11011ZM0 14L-14 14L-14 47.4237L9.82071 23.9777L0 14ZM-1.22392e-06 1.22392e-06L-2.44784e-06 -14L-14 -14L-14 2.44784e-06L-1.22392e-06 1.22392e-06ZM14 0L23.9764 9.82194L47.4295 -14L14 -14L14 0ZM-2.82071 -2.86755L-9.82071 4.02235L9.82071 23.9777L16.8207 17.0878L-2.82071 -2.86755ZM14 14L14 0L-14 2.44784e-06L-14 14L14 14ZM0 14L14 14L14 -14L-2.44784e-06 -14L0 14ZM4.02356 -9.82194L-2.97644 -2.71184L16.9764 16.9321L23.9764 9.82194L4.02356 -9.82194Z"
                    fill="white"
                    mask="url(#path-1-inside-1_684_1057)"
                  />
                </svg>

                <h1 className="md:text-[25px] font-[300] font-roboto">
                  Yard & Road Work
                </h1>
                <p className="font-openSans text-white text-[12px]">
                  We have extensive experience in various types of Yard & Road
                  construction work eg. HBB Road, RCC Pavement Road.
                </p>

                <a
                  href="#"
                  className="text-white font-semibold font-inter text-sm hover:text-primary"
                >
                  View More
                </a>
              </a>

              <div className="w-2 h-full inset-0 z-10 bg-primary absolute mx-auto"></div>

              <a href="#" className="relative">
                <div className="flex flex-wrap content-center">
                  <img src={service2} className="w-full" alt="" />
                </div>
              </a>
            </div>
          </Fade>

          <Fade right>
            <div className="relative">
              <a className="absolute inset-0 z-10 bg-black text-center flex flex-col justify-center w-[48%] opacity-100 bg-opacity-70 duration-300 text-white font-inter space-y-4 p-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <mask id="path-1-inside-1_684_1057" fill="white">
                    <path d="M7 7.11011L0 14L-1.22392e-06 1.22392e-06L14 0L7 7.11011Z" />
                  </mask>
                  <path
                    d="M7 7.11011L16.8207 17.0878L16.8992 17.0105L16.9764 16.9321L7 7.11011ZM0 14L-14 14L-14 47.4237L9.82071 23.9777L0 14ZM-1.22392e-06 1.22392e-06L-2.44784e-06 -14L-14 -14L-14 2.44784e-06L-1.22392e-06 1.22392e-06ZM14 0L23.9764 9.82194L47.4295 -14L14 -14L14 0ZM-2.82071 -2.86755L-9.82071 4.02235L9.82071 23.9777L16.8207 17.0878L-2.82071 -2.86755ZM14 14L14 0L-14 2.44784e-06L-14 14L14 14ZM0 14L14 14L14 -14L-2.44784e-06 -14L0 14ZM4.02356 -9.82194L-2.97644 -2.71184L16.9764 16.9321L23.9764 9.82194L4.02356 -9.82194Z"
                    fill="white"
                    mask="url(#path-1-inside-1_684_1057)"
                  />
                </svg>

                <h1 className="md:text-[20px] font-[300] font-roboto leading-tight">
                  Dredging & Ground Improvement work
                </h1>
                <p className="font-openSans text-white text-[12px]">
                  DG. Bangla has worked and successfully completed the
                  Maintenance Dredging Project under Chittagong Port Authority
                  to restore.
                </p>

                <a
                  href="#"
                  className="text-white font-semibold font-inter text-sm hover:text-primary"
                >
                  View More
                </a>
              </a>

              <div className="w-2 h-full inset-0 z-10 bg-primary absolute mx-auto"></div>

              <a href="#" className="relative">
                <div className="flex flex-wrap content-center">
                  <img src={service3} className="w-full" alt="" />
                </div>
              </a>
            </div>
          </Fade>

          <Fade left>
            <div className="relative">
              <a className="absolute inset-0 z-10 bg-black text-center flex flex-col justify-center w-[48%] opacity-100 bg-opacity-70 duration-300 text-white font-inter space-y-4 p-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <mask id="path-1-inside-1_684_1057" fill="white">
                    <path d="M7 7.11011L0 14L-1.22392e-06 1.22392e-06L14 0L7 7.11011Z" />
                  </mask>
                  <path
                    d="M7 7.11011L16.8207 17.0878L16.8992 17.0105L16.9764 16.9321L7 7.11011ZM0 14L-14 14L-14 47.4237L9.82071 23.9777L0 14ZM-1.22392e-06 1.22392e-06L-2.44784e-06 -14L-14 -14L-14 2.44784e-06L-1.22392e-06 1.22392e-06ZM14 0L23.9764 9.82194L47.4295 -14L14 -14L14 0ZM-2.82071 -2.86755L-9.82071 4.02235L9.82071 23.9777L16.8207 17.0878L-2.82071 -2.86755ZM14 14L14 0L-14 2.44784e-06L-14 14L14 14ZM0 14L14 14L14 -14L-2.44784e-06 -14L0 14ZM4.02356 -9.82194L-2.97644 -2.71184L16.9764 16.9321L23.9764 9.82194L4.02356 -9.82194Z"
                    fill="white"
                    mask="url(#path-1-inside-1_684_1057)"
                  />
                </svg>

                <h1 className="md:text-[20px] font-[300] font-roboto leading-tight">
                  Electro Mechanical Work
                </h1>
                <p className="font-openSans text-white text-[12px]">
                  Electricity installation, maintenance services, and
                  preventative measures are the most important parts to assure.
                </p>

                <a
                  href="#"
                  className="text-white font-semibold font-inter text-sm hover:text-primary"
                >
                  View More
                </a>
              </a>

              <div className="w-2 h-full inset-0 z-10 bg-primary absolute mx-auto"></div>

              <a href="#" className="relative">
                <div className="flex flex-wrap content-center">
                  <img src={service4} className="w-full" alt="" />
                </div>
              </a>
            </div>
          </Fade>

          <Fade bottom>
            <div className="relative">
              <a className="absolute inset-0 z-10 bg-black text-center flex flex-col justify-center w-[48%] opacity-100 bg-opacity-70 duration-300 text-white font-inter space-y-6 p-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <mask id="path-1-inside-1_684_1057" fill="white">
                    <path d="M7 7.11011L0 14L-1.22392e-06 1.22392e-06L14 0L7 7.11011Z" />
                  </mask>
                  <path
                    d="M7 7.11011L16.8207 17.0878L16.8992 17.0105L16.9764 16.9321L7 7.11011ZM0 14L-14 14L-14 47.4237L9.82071 23.9777L0 14ZM-1.22392e-06 1.22392e-06L-2.44784e-06 -14L-14 -14L-14 2.44784e-06L-1.22392e-06 1.22392e-06ZM14 0L23.9764 9.82194L47.4295 -14L14 -14L14 0ZM-2.82071 -2.86755L-9.82071 4.02235L9.82071 23.9777L16.8207 17.0878L-2.82071 -2.86755ZM14 14L14 0L-14 2.44784e-06L-14 14L14 14ZM0 14L14 14L14 -14L-2.44784e-06 -14L0 14ZM4.02356 -9.82194L-2.97644 -2.71184L16.9764 16.9321L23.9764 9.82194L4.02356 -9.82194Z"
                    fill="white"
                    mask="url(#path-1-inside-1_684_1057)"
                  />
                </svg>

                <h1 className="md:text-[25px] font-[300] font-roboto">
                  Automation
                </h1>
                <p className="font-openSans text-white text-[12px]">
                  It is a venture of DG.Bangla aligned with Government of
                  Bangladesh’s “Smart Bangladesh Vision 2041”.
                </p>

                <a
                  href="#"
                  className="text-white font-semibold font-inter text-sm hover:text-primary"
                >
                  View More
                </a>
              </a>

              <div className="w-2 h-full inset-0 z-10 bg-primary absolute mx-auto"></div>

              <a href="#" className="relative">
                <div className="flex flex-wrap content-center">
                  <img src={service5} className="w-full" alt="" />
                </div>
              </a>
            </div>
          </Fade>

          <Fade right>
            <div className="relative">
              <a className="absolute inset-0 z-10 bg-black text-center flex flex-col justify-center w-[48%] opacity-100 bg-opacity-70 duration-300 text-white font-inter space-y-3 p-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_684_1057" fill="white">
                    <path d="M7 7.11011L0 14L-1.22392e-06 1.22392e-06L14 0L7 7.11011Z" />
                  </mask>
                  <path
                    d="M7 7.11011L16.8207 17.0878L16.8992 17.0105L16.9764 16.9321L7 7.11011ZM0 14L-14 14L-14 47.4237L9.82071 23.9777L0 14ZM-1.22392e-06 1.22392e-06L-2.44784e-06 -14L-14 -14L-14 2.44784e-06L-1.22392e-06 1.22392e-06ZM14 0L23.9764 9.82194L47.4295 -14L14 -14L14 0ZM-2.82071 -2.86755L-9.82071 4.02235L9.82071 23.9777L16.8207 17.0878L-2.82071 -2.86755ZM14 14L14 0L-14 2.44784e-06L-14 14L14 14ZM0 14L14 14L14 -14L-2.44784e-06 -14L0 14ZM4.02356 -9.82194L-2.97644 -2.71184L16.9764 16.9321L23.9764 9.82194L4.02356 -9.82194Z"
                    fill="white"
                    mask="url(#path-1-inside-1_684_1057)"
                  />
                </svg>

                <h1 className="md:text-[20px] font-[300] font-roboto">
                  River Bank Protection
                </h1>
                <p className="font-openSans text-white text-[12px]">
                  DG Bangla has worked and successfully completed the river bank
                  protection works at payra port authority and ongoing.
                </p>

                <a
                  href="#"
                  className="text-white font-semibold font-inter text-sm hover:text-primary"
                >
                  View More
                </a>
              </a>

              <div className="w-2 h-full inset-0 z-10 bg-primary absolute mx-auto"></div>

              <a href="#" className="relative">
                <div className="flex flex-wrap content-center">
                  <img src={service6} className="w-full" alt="" />
                </div>
              </a>
            </div>
          </Fade> */
}
