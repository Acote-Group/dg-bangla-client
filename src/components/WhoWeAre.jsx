import worker from "../assets/photos/worker.png";
import Fade from "react-reveal/Fade";

const WhoWeAre = () => {
  return (
    <>
      <section className="bg-wwaBg bg-no-repeat bg-cover py-8 md:py-16">
        <div className="py-4 sm:py-8 max-w-[1280px] mx-auto">
          <div className="text-center text-[28px] md:text-[38px] font-bold uppercase tracking-widest  font-roboto">
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

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between sm:gap-4  px-6 sm:px-4 pb-10">
            <Fade left cascade>
              <div className="md:col-span-1 mr-4 md:mt-16 bg-whoBg bg-cover bg-no-repeat w-auto md:w-[365px] h-auto md:h-[380px]">
                <div className="p-6">
                  <h2 className="text-[34px] sm:text-2xl font-roboto">
                    Our <span className="font-bold">Mission</span>
                  </h2>
                  <p className="mt-2 sm:mt-4 text-justify font-poppins text-sm">
                    We prioritize the growth of talent and actively engage in
                    deliberate efforts within the communities we serve. Our
                    loyal commitment to upholding the highest ethical standards
                    is reflected in the enduring quality of our projects,
                    consistently meeting and exceeding customer expectations.
                    Through our dedication to developing international skills
                    for economic empowerment and contributing in the societies
                    where we operate, we aim for making a positive and lasting
                    impact.
                  </p>
                  <ul className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 font-poppins text-sm font-[500]">
                    <li>› Developing local skills</li>
                    <li>› Volunteerism</li>
                    <li>› Ethical commitment</li>
                    <li>› Project quality focus</li>
                    <li>› Performance measurement</li>
                  </ul>
                  <button className="inline-flex items-center justify-between rounded-md text-sm font-medium h-10 px-4 py-2 mt-4 sm:mt-6 float-right hover:text-primary font-poppins">
                    Read More ›
                  </button>
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

            <Fade right cascade>
              <div className="md:col-span-1 mt-4 sm:mt-8 md:mt-16 ml-4 bg-whoBg bg-cover bg-no-repeat w-auto md:w-[365px] h-auto md:h-[380px]">
                <div className="p-6">
                  <h2 className="text-[34px] sm:text-2xl font-roboto">
                    Our <span className="font-bold">Vision</span>
                  </h2>
                  <p className="mt-2 sm:mt-4 font-poppins text-justify text-sm">
                    We started as a grassroots construction service, aiming to
                    evolve into a leading global engineering, construction, and
                    project management company. Our vision encompasses
                    delivering unparalleled outcomes to clients, nurturing
                    rewarding professional paths, and creating profitable value.
                    Our journey calls for expanding internationally in
                    engineering, surpassing customer expectations, empowering
                    fulfilling careers, and achieving profitability through
                    exceptional workmanship across all domains.
                  </p>
                  <ul className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 font-poppins text-sm font-[500]">
                    <li>› Customer centric focus</li>
                    <li>› Employee dedication</li>
                    <li>› Value driven profit</li>
                    <li>› Balanced approach</li>
                    <li>› Lead consultation</li>
                  </ul>
                  <button className="inline-flex items-center justify-between rounded-md text-sm font-medium h-10 px-4 py-2 mt-4 sm:mt-6 float-right hover:text-primary font-poppins">
                    Read More ›
                  </button>
                </div>

                <svg
                  width="49"
                  height="47"
                  viewBox="0 0 49 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-3"
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
