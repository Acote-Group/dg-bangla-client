import { MoveRight } from "lucide-react";
import banner from "../assets/photos/banner-min.png";
import Fade from "react-reveal/Fade";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <>
      <section className="bg-banner-bg bg-cover bg-no-repeat">
        <Navbar className="sticky" />

        {/* Hero */}
        <div className="w-auto mx-auto px-4 md:px-0 backdrop-opacity-0 bg-opacity-none backdrop-blur-none bg-transparent">
          {/* left text field */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
            <Fade left cascade>
              <div className="md:col-span-1 md:ml-[315px]">
                <h1 className="text-white font-inter">
                  From Foundations to Finishes
                </h1>
                <h1 className="block text-3xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-transparent bg-clip-text sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white font-inter">
                  Building Better <br /> Futures
                </h1>
                <h1 className="mt-3 text-sm font-inter text-white dark:text-white text-balance">
                  Have you skipped how great construction tastes? It is not the
                  luxury of the building you should seek; it’s the construction
                  of your foundation that will stand the question of time. We
                  design your dream & construct your dream place.
                </h1>

                {/* */}
                <div className="mt-7 md:grid md:grid-cols-2 md:gap-3 w-fit">
                  {/* <button
                    type="button"
                    className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-inter font-semibold rounded-sm bg-gradient-to-r from-rose-700 to-rose-500 hover:shadow-lg transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-1 dark:focus:ring-primary text-white uppercase"
                  >
                    See All Services <MoveRight fill="black" />
                  </button> */}

                  <a
                    className="group relative inline-flex items-center overflow-hidden rounded bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3 text-white focus:outline-none focus:ring"
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
            <div className="mt-[25px] -mb-[65px] rounded-sm">
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
