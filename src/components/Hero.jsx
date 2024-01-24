import { MoveRight } from "lucide-react";
import banner from "../assets/photos/banner-min.png";
import Fade from "react-reveal/Fade";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <>
      <section className="bg-banner-bg bg-cover bg-no-repeat">
        <Navbar />

        {/* Hero */}
        <div className="w-auto mx-auto px-4 md:px-0">
          {/* left text field */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
            <Fade left cascade>
              <div className="md:col-span-1 md:ml-[315px]">
                <h1 className="text-white font-inter">
                  From Foundations to Finishes
                </h1>
                <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white font-inter">
                  Building Better
                  <span className="text-primary block">Futures</span>
                </h1>
                <h1 className="mt-3 text-sm font-inter text-white dark:text-white text-balance">
                  Have you skipped how great construction tastes? It is not the
                  luxury of the building you should seek; it’s the construction
                  of your foundation that will stand the question of time. We
                  design your dream & construct your dream place.
                </h1>

                {/* */}
                <div className="mt-7 md:grid md:grid-cols-2 md:gap-3 w-fit">
                  <button
                    type="button"
                    className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-inter font-semibold rounded-sm bg-gradient-to-r from-rose-700 to-rose-500 hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 text-white uppercase"
                  >
                    See All Services <MoveRight fill="black" />
                  </button>
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
