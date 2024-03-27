import { HashLink } from "react-router-hash-link";
import worker from "../assets/photos/whoImg.png";
import Fade from "react-reveal/Fade";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const WhoWeAre = () => {
  const { data } = useQuery({
    queryKey: ["whoData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://backend.dg-bangla.com/api/v1/about/get"
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
      <section className="bg-wwaBg bg-no-repeat bg-cover py-8 md:py-16 max-w-[1920px] mx-auto">
        <div className="py-4 sm:py-8 max-w-[1280px] mx-auto font-ubuntu">
          <div className="text-center text-[28px] md:text-[38px] uppercase tracking-widest  font-roboto mb-[50px] font-[500]">
            <div className="flex justify-center gap-4 items-center">
              <div className="flex flex-col">
                <hr className="border-t-2 border-primary w-8 ml-auto" />
                <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
              </div>

              <Fade bottom>
                <h1>
                  <span className="text-primary">WHO</span> WE ARE
                </h1>
              </Fade>

              <div className="flex flex-col">
                <hr className="border-t-2 border-primary w-8" />
                <hr className="border-t-2 border-primary w-5 mt-3" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between sm:gap-4 px-6 sm:px-4 pb-10">
            <Fade left>
              <div className="md:col-span-1 mr-4 w-auto md:w-[365px] h-auto md:h-[380px]">
                <div className="p-6">
                  <h2 className="text-[34px] sm:text-2xl font-roboto">
                    Our <span className="font-bold">Mission</span>
                  </h2>
                  <p className="mt-2 sm:mt-4 text-justify font-poppins text-sm line-clamp-[10]">
                    {data?.descriptionMission}
                  </p>
                  <ul className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 font-poppins text-sm font-[500]">
                    <li>› Developing local skills</li>
                    <li>› Volunteerism</li>
                    <li>› Ethical commitment</li>
                    <li>› Project quality focus</li>
                    <li>› Performance measurement</li>
                  </ul>
                  <HashLink
                    smooth
                    to="/about-us#mission"
                    className="inline-flex items-center justify-between rounded-md text-sm font-medium h-10 px-4 py-2 mt-4 sm:mt-6 float-right hover:text-primary font-poppins"
                  >
                    Read More ›
                  </HashLink>
                </div>

                <svg
                  width="49"
                  height="47"
                  viewBox="0 0 49 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bottom-0 relative "
                >
                  <path
                    d="M0 46.5V0.5C2.8 36.9 33.5 46.3333 48.5 46.5H0Z"
                    fill="#A8223B"
                  />
                </svg>
              </div>
            </Fade>

            <div className="md:col-span-1 mt-4 sm:mt-0">
              <img src={worker} alt="Our Mission" className="r" />
            </div>

            <Fade right>
              <div className="md:col-span-1 mr-4 w-auto md:w-[365px] h-auto md:h-[380px]">
                <div className="p-6">
                  <h2 className="text-[34px] sm:text-2xl font-roboto">
                    Our <span className="font-bold">Vision</span>
                  </h2>
                  <p className="mt-2 sm:mt-4 text-justify font-poppins text-sm line-clamp-[10]">
                    {data?.descriptionVission}
                  </p>
                  <ul className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 font-poppins text-sm font-[500]">
                    <li>› Customer centric focus</li>
                    <li>› Employee dedication</li>
                    <li>› Value driven profit</li>
                    <li>› Balanced approach</li>
                    <li>› Lead consultation</li>
                  </ul>
                  <HashLink
                    smooth
                    to="/about-us#mission"
                    className="inline-flex items-center justify-between rounded-md text-sm font-medium h-10 px-4 py-2 mt-4 sm:mt-6 float-right hover:text-primary font-poppins"
                  >
                    Read More ›
                  </HashLink>
                </div>

                <svg
                  width="49"
                  height="47"
                  viewBox="0 0 49 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bottom-0 relative "
                >
                  <path
                    d="M0 46.5V0.5C2.8 36.9 33.5 46.3333 48.5 46.5H0Z"
                    fill="#A8223B"
                  />
                </svg>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
