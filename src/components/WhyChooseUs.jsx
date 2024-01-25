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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
              <img src={v1} alt="" className="mx-auto mb-4" />

              <h3 className="text-xl font-semibold mb-2">BEST QUALITY</h3>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the Ipsum dummy of the printing indus.
              </p>
            </div>

            <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
              <img src={v2} alt="" className="mx-auto mb-4" />

              <h3 className="text-xl font-semibold mb-2">INTEGRITY</h3>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the Ipsum dummy of the printing indus.
              </p>
            </div>

            <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
              <img src={v3} alt="" className="mx-auto mb-4" />

              <h3 className="text-xl font-semibold mb-2">STRATEGY</h3>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the Ipsum dummy of the printing indus.
              </p>
            </div>
            <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
              <img src={v4} alt="" className="mx-auto mb-4" />

              <h3 className="text-xl font-semibold mb-2">SAFETY</h3>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the Ipsum dummy of the printing indus.
              </p>
            </div>
            <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
              <img src={v5} alt="" className="mx-auto mb-4" />

              <h3 className="text-xl font-semibold mb-2">COMMUNITY</h3>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the Ipsum dummy of the printing indus.
              </p>
            </div>
            <div className="text-center p-[30px] bg-white rounded-lg shadow-md">
              <img src={v6} alt="" className="mx-auto mb-4" />

              <h3 className="text-xl font-semibold mb-2">SUSTAINABILITY</h3>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the Ipsum dummy of the printing indus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
