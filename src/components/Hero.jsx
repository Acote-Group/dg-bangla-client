import { MoveRight } from "lucide-react";
import banner from "../assets/photos/banner.png";

const Hero = () => {
  return (
    <>
      <section className="bg-black">
        {/* <!-- Hero --> */}
        <div className="w-full mx-auto sm:px-6 bg-black">
          {/* <!-- Grid --> */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div className="ml-[25%]">
              <p className="text-white font-inter">
                From Foundations to Finishes
              </p>
              <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white font-inter">
                Building Better
                <span className="text-primary block">Futures</span>
              </h1>
              <p className="mt-3 text-sm font-inter text-white dark:text-white text-balance">
                Have you skipped how great construction tastes? It is not the
                luxury of the building you should seek;it’s the construction of
                your foundation that will stand the question of time.We design
                your dream & construct your dream place
              </p>

              {/* <!-- Buttons --> */}
              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <button
                  type="button"
                  className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-inter font-semibold rounded-sm border border-transparent bg-primary text-black hover:bg-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary dark:bg-white dark:text-black uppercase"
                >
                  See All Services <MoveRight fill="black" />
                </button>
              </div>
              {/* <!-- End Buttons --> */}
            </div>
            {/* <!-- End Col --> */}

            <div className="ms-4 mt-[25px] -mb-[65px] rounded-sm">
              <img className="w-full" src={banner} alt="Image Description" />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Hero --> */}
      </section>
    </>
  );
};

export default Hero;
