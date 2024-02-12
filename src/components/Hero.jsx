import { MoveRight } from "lucide-react";
import Fade from "react-reveal/Fade";
import banner from "../assets/photos/banner-min.png";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <>
      <section className="max-w-[1920px] mx-auto bg-banner-bg bg-cover bg-no-repeat">
        {/* Hero */}
        <div className="w-full mx-auto px-4 md:px-0 bg-black bg-opacity-50">
          <Navbar />

          {/* left text field */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
            <Fade left cascade>
              <div className="md:col-span-1 md:ml-[100px] 2xl:ml-[280px]">
                <h1 className="text-white font-ubuntu md:mb-[10px]">
                  From Foundations to Finishes
                </h1>

                <h1 className="xl:text-[58px] font-[800] bg-gradient-to-r from-red-500 via-pink-600 to-rose-800 text-transparent bg-clip-text sm:text-4xl lg:text-6xl lg:leading-tight  font-ubuntu">
                  Building Sustainable Futures Worldwide
                </h1>
                <h1 className="mt-3 text-sm font-ubuntu text-white dark:text-white text-balance leading-[25px]">
                  Youth-driven leadership in civil construction and
                  electro-mechanical engineering, headquartered in Dhaka with a
                  branch in Chittagong. Specializing in road construction, yard
                  management, dredging, low-lying area development, and
                  electrification. Employing heavy earth-moving machinery and
                  efficient logistics to ensure timely project completion.
                </h1>

                {/* */}
                <div className="mt-7 md:grid md:grid-cols-2 md:gap-3 w-fit">
                  {/* <button
                    type="button"
                    className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-ubuntu font-semibold rounded-sm bg-gradient-to-r from-rose-700 to-rose-500 hover:shadow-lg transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-1 dark:focus:ring-primary text-white uppercase"
                  >
                    See All Services <MoveRight fill="black" />
                  </button> */}

                  <a
                    className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3.5 text-white focus:outline-none focus:ring"
                    href="/download"
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <MoveRight fill="black" />
                    </span>

                    <span className="uppercase font-medium transition-all group-hover:me-4">
                      See All Services
                    </span>
                  </a>
                </div>
              </div>
            </Fade>

            {/* right image  */}
            <div className="rounded-sm pt-24">
              <Fade right>
                <img className="w-full" src={banner} alt="Image Description" />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
