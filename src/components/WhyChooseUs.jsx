import Fade from "react-reveal/Fade";
import v1 from "../assets/service/v1.png";
import v2 from "../assets/service/v2.png";
import v3 from "../assets/service/v3.png";
import v4 from "../assets/service/v4.png";
import v5 from "../assets/service/v5.png";
import v6 from "../assets/service/v6.png";

const WhyChooseUs = () => {
  return (
    <>
      <section className="">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center gap-4 items-center">
              <div className="flex flex-col">
                <hr className="border-t-2 border-primary w-8 ml-auto" />
                <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
              </div>

              <Fade bottom>
                <h1 className="font-roboto text-[35px] font-[700] uppercase">
                  <span className="text-primary">why</span> choose us
                </h1>
              </Fade>

              <div className="flex flex-col ">
                <hr className="border-t-2 border-primary w-8" />
                <hr className="border-t-2 border-primary w-5 mt-3" />
              </div>
            </div>
            <p className="text-center font-openSans text-[#767676] mt-2 normal-case w-[80%] mx-auto">
              We have been taking a leading role in providing construction
              services with an uncompromised commitment to Quality, Health,
              Safety, and Environment. We do this through the combination of an
              open relationship with our employees based on mutual trust,
              transparency, accountability, and discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Fade left>
              <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
                <img src={v1} alt="" className="mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  UNCOMPROMISING QUALITY
                </h3>
                <p className="text-gray-500">
                  DG-Bangla adheres to the strictest international standards,
                  ensuring every project is built with unwavering excellence and
                  durability.
                </p>
              </div>
            </Fade>

            <Fade top>
              <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
                <img src={v2} alt="" className="mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  INTEGRITY IN EVERY STEP
                </h3>
                <p className="text-gray-500">
                  We uphold ethical practices and transparency in all our
                  operations, fostering trust and long-lasting relationships
                  with our clients.
                </p>
              </div>
            </Fade>

            <Fade right>
              <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
                <img src={v3} alt="" className="mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  INNOVATIVE STRATEGIES
                </h3>
                <p className="text-gray-500">
                  We embrace cutting-edge technologies and techniques to deliver
                  projects that exceed expectations and drive progress in
                  Bangladesh's construction landscape.
                </p>
              </div>
            </Fade>

            <Fade left>
              <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
                <img src={v4} alt="" className="mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  SAFETY FIRST, ALWAYS
                </h3>
                <p className="text-gray-500">
                  We prioritize the wellbeing of our workforce and the
                  communities we serve, upholding stringent safety standards at
                  every stage of construction.
                </p>
              </div>
            </Fade>

            <Fade bottom>
              <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
                <img src={v5} alt="" className="mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  BUILDING A STRONGER BANGLADESH
                </h3>
                <p className="text-gray-500">
                  We are committed to contributing to the nation's development
                  through sustainable construction practices, creating jobs, and
                  empowering local communities.
                </p>
              </div>
            </Fade>

            <Fade right>
              <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
                <img src={v6} alt="" className="mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  GREEN VISION FOR THE FUTURE
                </h3>
                <p className="text-gray-500">
                  We prioritize environmentally conscious construction methods,
                  minimizing our impact on the environment and contributing to a
                  sustainable future for Bangladesh.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
