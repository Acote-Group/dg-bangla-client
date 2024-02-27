import { MoveRight } from "lucide-react";
import Fade from "react-reveal/Fade";
import banner from "../assets/photos/banner-min.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="max-w-[1920px] mx-auto bg-banner-bg bg-cover bg-no-repeat">
        {/* Hero */}
        <div className="w-full mx-auto px-4 md:px-0 bg-black bg-opacity-50">
          <Navbar />

          {/* left text field */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
            <Fade left>
              <div className="md:col-span-1 md:ml-[30px] lg:ml-[100px] xl:ml-[150px] 2xl:ml-[270px] mt-8 md:mt-16 lg:mt-24">
                <h1 className="text-white font-ubuntu md:mb-[10px]">
                  From Foundations to Finishes
                </h1>

                <h1 className="2xl:text-[58px] font-[800] bg-gradient-to-r from-red-500 via-pink-600 to-rose-800 text-transparent bg-clip-text text-3xl lg:text-4xl lg:leading-tight  font-ubuntu">
                  Building Sustainable Futures Worldwide
                </h1>
                <h1 className="mt-3 text-sm font-ubuntu text-white dark:text-white text-justify leading-[25px]">
                  DG Bangla stands as youthful leaders in civil construction and
                  electro-mechanical engineering, with headquarters in Dhaka and
                  a branch in Chattogram. Our expertise lies in roadways, yards,
                  dredging, low land development, and electrification projects.
                  We employ heavy earth-moving equipment and efficient logistics
                  to ensure timely project completion.
                </h1>

                {/* */}
                <div className="mt-7 md:grid md:grid-cols-2 md:gap-3 w-fit">
                  {/* <button
                    type="button"
                    className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-ubuntu font-semibold rounded-sm bg-gradient-to-r from-rose-700 to-rose-500 hover:shadow-lg transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-1 dark:focus:ring-primary text-white uppercase"
                  >
                    See All Services <MoveRight fill="black" />
                  </button> */}

                  <Link
                    className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3.5 text-white focus:outline-none focus:ring"
                    to="/services"
                  >
                    <span className="absolute -end-full transition-all group-hover:end-4">
                      <MoveRight fill="black" />
                    </span>

                    <span className="uppercase font-medium transition-all group-hover:me-4">
                      See All Services
                    </span>
                  </Link>
                </div>
              </div>
            </Fade>

            {/* right image  */}
            <div className="rounded-sm pt-8 md:pt-24">
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
