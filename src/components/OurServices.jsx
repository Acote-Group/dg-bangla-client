import Fade from "react-reveal/Fade";
import service1 from "../assets/service/service1.png";
import service2 from "../assets/service/service2.png";
import service3 from "../assets/service/service3.png";
import service4 from "../assets/service/service4.png";
import service5 from "../assets/service/service5.png";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OurServices = () => {
  const location = useLocation();

  const services = location.pathname.includes("/services");
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
                  className="w-full h-[235px] object-cover"
                  src={service1}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Civil Work
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu text-justify">
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
                  className="w-full h-[235px] object-cover"
                  src={service2}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Fire Fighting
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu text-justify">
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
                  className="w-full h-[235px] object-cover"
                  src={service4}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Electrical Work
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu text-justify">
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
                  className="w-full h-[235px] object-cover"
                  src={service5}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Automation Work
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu text-justify">
                  Embrace the future with smart buildings! Our automation
                  services integrate cutting-edge technology with construction
                  excellence.
                </p>
              </div>
            </a>

            {/* <a
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
                <h3 className="text-lg font-semibold text-primary font-ubuntu text-justify">
                  River Bank Protection
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu">
                  Safeguarding Bangladesh's most vital arteries, our river bank
                  protection initiatives preserve beauty and ensure a
                  sustainable future.
                </p>
              </div>
            </a> */}

            <a
              className=" bg-white hover:shadow-lg hover:relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary"
              href="#"
            >
              <div className="relative">
                <img
                  className="w-full h-[235px] object-cover"
                  src={service3}
                  alt="Image Description"
                />
              </div>
              <div className="py-[30px] px-4">
                <h3 className="text-lg font-semibold text-primary font-ubuntu">
                  Dredging Work
                </h3>
                <p className="mt-1 text-[#767676] font-ubuntu text-justify">
                  From shaping landscapes to strengthening foundations, we
                  ensure stability and resilience with our dredging and ground
                  improvement services.
                </p>
              </div>
            </a>
          </div>

          {services ? null : (
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
          )}
        </div>
      </section>
    </>
  );
};

export default OurServices;
