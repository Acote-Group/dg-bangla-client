import Fade from "react-reveal/Fade";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const OurServices = () => {
  const location = useLocation();
  const services = location.pathname.includes("/services");

  const { isPending, data } = useQuery({
    queryKey: ["serviceData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://backend.dg-bangla.com/api/v1/service/get/all"
        );

        return response.data?.data;
      } catch (error) {
        // Handle errors here
        throw new Error("Network response was not ok");
      }
    },
  });
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
            DG Bangla Engineering Ltd. isn't just raising skylines - we're
            shaping the future of Bangladesh's business landscape. From
            state-of-the-art office towers to innovative logistics centers, we
            deliver commercial projects that empower businesses and communities.
          </p>
        </div>

        <div className="my-[60px]">
          {isPending ? (
            <div className="flex flex-col justify-center">
              <div
                className="animate-spin inline-block size-24 border-[3px] border-current border-t-transparent text-primary rounded-full mx-auto"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
                {data?.map((service) => (
                  <>
                    <a
                      className=" bg-white hover:shadow-lg hover:relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary"
                      href="#"
                    >
                      <div className="relative">
                        <img
                          className="w-full h-[235px] object-cover"
                          src={service?.image}
                          alt={service?.title}
                        />
                      </div>
                      <div className="py-[30px] px-4">
                        <h3 className="text-lg font-semibold text-primary font-ubuntu">
                          {service?.title}
                        </h3>
                        <p className="mt-1 text-[#767676] font-ubuntu text-justify">
                          {service?.overview}
                        </p>
                      </div>
                    </a>
                  </>
                ))}
              </div>
            </>
          )}

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
