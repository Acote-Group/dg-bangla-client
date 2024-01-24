import Fade from "react-reveal/Fade";
import service1 from "../assets/service/service1.png";
import service2 from "../assets/service/service2.png";
import service3 from "../assets/service/service3.png";
import service4 from "../assets/service/service4.png";
import service5 from "../assets/service/service5.png";
import service6 from "../assets/service/service6.png";

const OurServices = () => {
  return (
    <>
      <div className="text-center text-2xl sm:text-3xl font-bold uppercase tracking-widest  font-roboto md:mt-[95px]">
        <div className="flex justify-center gap-4 items-center">
          <div className="flex flex-col">
            <hr className="border-t-2 border-primary w-8 ml-auto" />
            <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
          </div>

          <Fade bottom>
            <h1>
              <span className="text-primary">OUR</span> SERVICES
            </h1>
          </Fade>

          <div className="flex flex-col ">
            <hr className="border-t-2 border-primary w-8" />
            <hr className="border-t-2 border-primary w-5 mt-3" />
          </div>
        </div>

        <p className="text-center font-openSans text-[#767676] mt-2 normal-case w-[80%] mx-auto text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
      </div>

      <div className="my-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            className="flex flex-col group bg-white overflow-hidden transition"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={service1}
                alt="Image Description"
              />
            </div>
            <div className="py-[30px] pb-[50px]">
              <h3 className="text-lg font-semibold text-primary font-roboto">
                Civil Construction
              </h3>
              <p className="mt-1 text-[#767676] font-openSans">
                Transforming visions into reality, our Civil Construction
                services lay the foundation for a resilient future in
                Bangladesh.
              </p>
            </div>
          </a>

          <a
            className="flex flex-col group bg-white overflow-hidden transition"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={service2}
                alt="Image Description"
              />
            </div>
            <div className="py-[30px] pb-[50px]">
              <h3 className="text-lg font-semibold text-primary font-roboto">
                Yard & Road Construction
              </h3>
              <p className="mt-1 text-[#767676] font-openSans">
                Navigating the path to progress, our Yard & Road Construction
                expertise paves the way for connectivity and sustainable
                development.
              </p>
            </div>
          </a>

          <a
            className="flex flex-col group bg-white overflow-hidden transition"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={service3}
                alt="Image Description"
              />
            </div>
            <div className="py-[30px] pb-[50px]">
              <h3 className="text-lg font-semibold text-primary font-roboto">
                Dredging & Ground Improvement
              </h3>
              <p className="mt-1 text-[#767676] font-openSans">
                Shaping landscapes and fortifying foundations, our Dredging &
                Ground Improvement services redefine stability and resilience in
                every project.
              </p>
            </div>
          </a>

          <a
            className="flex flex-col group bg-white overflow-hidden transition"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={service4}
                alt="Image Description"
              />
            </div>
            <div className="py-[30px] pb-[50px]">
              <h3 className="text-lg font-semibold text-primary font-roboto">
                Electro-Mechanical
              </h3>
              <p className="mt-1 text-[#767676] font-openSans">
                Powering progress with precision, our Electro-Mechanical
                solutions bring innovation and efficiency to the heart of
                construction in Bangladesh.
              </p>
            </div>
          </a>

          <a
            className="flex flex-col group bg-white overflow-hidden transition"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={service5}
                alt="Image Description"
              />
            </div>
            <div className="py-[30px] pb-[50px]">
              <h3 className="text-lg font-semibold text-primary font-roboto">
                Automation
              </h3>
              <p className="mt-1 text-[#767676] font-openSans">
                Embrace the future with our Automation services, where
                cutting-edge technology meets construction excellence for a
                smarter and more efficient built environment.
              </p>
            </div>
          </a>

          <a
            className="flex flex-col group bg-white overflow-hidden transition"
            href="#"
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                src={service6}
                alt="Image Description"
              />
            </div>
            <div className="py-[30px] pb-[50px]">
              <h3 className="text-lg font-semibold text-primary font-roboto">
                River Bank Protection
              </h3>
              <p className="mt-1 text-[#767676] font-openSans">
                Guardians of Bangladesh&apos;s waterways, our River Bank
                Protection initiatives ensure the preservation of natural beauty
                and safeguard against erosion, securing a sustainable future.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default OurServices;
