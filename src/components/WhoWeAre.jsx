import worker from "../assets/photos/who.png";
import Fade from "react-reveal/Fade";

const WhoWeAre = () => {
  return (
    <>
      <div className="py-4 sm:py-8 my-[15%]">
        <div className="text-center text-2xl sm:text-3xl font-bold uppercase tracking-widest  font-roboto">
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

            <div className="flex flex-col ">
              <hr className="border-t-2 border-primary w-8" />
              <hr className="border-t-2 border-primary w-5 mt-3" />
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between sm:gap-4 max-w-[1280px] mx-auto px-6 sm:px-4">
          <Fade left cascade>
            <div className="md:col-span-1 mr-4 mt-16">
              <h2 className="text-[34px] sm:text-2xl font-roboto">
                Our <span className="font-bold">Mission</span>
              </h2>
              <p className="mt-2 sm:mt-4 text-justify font-poppins text-sm">
                Lorem ipsum available, but the majority have suffered alteration
                in some form, by ious veris ons have evolved over the years,
                sometimes by accident
              </p>
              <ul className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 font-poppins text-sm font-[500]">
                <li>› Construction Management</li>
                <li>› Pre Construction Services</li>
                <li>› Contract Administration</li>
                <li>› Implementation</li>
                <li>› Leed consultation</li>
              </ul>
              <button className="inline-flex items-center justify-between rounded-md text-sm font-medium h-10 px-4 py-2 mt-4 sm:mt-6 float-right hover:text-primary font-poppins">
                Read More ›
              </button>
            </div>
          </Fade>

          <div className="md:col-span-1 mt-4 sm:mt-0">
            <img
              src={worker}
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full "
            />
          </div>

          <Fade right cascade>
            <div className="md:col-span-1 mt-4 sm:mt-8 md:mt-16 ml-4">
              <h2 className="text-[34px] sm:text-2xl font-roboto">
                Our <span className="font-bold">Vision</span>
              </h2>
              <p className="mt-2 sm:mt-4 font-poppins text-justify text-sm">
                Lorem ipsum available, but the majority have suffered alteration
                in some form, by ious veris ons have evolved over the years,
                sometimes by accident
              </p>
              <ul className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 font-poppins text-sm font-[500]">
                <li>› Construction Management</li>
                <li>› Pre Construction Services</li>
                <li>› Contract Administration</li>
                <li>› Implementation</li>
                <li>› Leed consultation</li>
              </ul>
              <button className="inline-flex items-center justify-between rounded-md text-sm font-medium h-10 px-4 py-2 mt-4 sm:mt-6 float-right hover:text-primary font-poppins">
                Read More ›
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
