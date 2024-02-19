import { Fade } from "react-reveal";

export default function OurWorkProcess() {
  return (
    <>
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white font-ubuntu">
        <div className="max-w-[1560px] mx-auto">
          <div className="text-center md:mt-16">
            <div className="flex justify-center gap-4 items-center">
              <div className="flex flex-col">
                <hr className="border-t-2 border-primary w-8 ml-auto" />
                <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
              </div>

              <Fade bottom>
                <h1 className="text-[18px] md:text-[38px] font-[500] font-ubuntu leading-[44px] uppercase">
                  <span className="text-primary">OUR</span> work process
                </h1>
              </Fade>

              <div className="flex flex-col ">
                <hr className="border-t-2 border-primary w-8" />
                <hr className="border-t-2 border-primary w-5 mt-3" />
              </div>
            </div>

            <p className="text-center font-ubuntu text-[#767676] mx-auto mt-6 text-sm font-normal w-[70%] leading-[24px]">
              We celebrate the opportunity each project brings and leverage our
              30+ years of experience to deliver customized construction
              solutions. Flexibility is essential in today’s world, and every
              project is unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-6 mt-[60px]">
            <div className="flex flex-col items-center p-4 border w-fit hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                01.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Meet & Consultant
              </h3>
              <p className="text-gray-600 text-center leading-[26px]">
                This crucial first step involves understanding your vision,
                needs, and budget for your project. We think of it as laying the
                foundation.
              </p>
            </div>

            <div className="flex flex-col items-center p-4 border w-fit hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                02.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Planning and Design
              </h3>
              <p className="text-gray-600 text-center leading-[26px]">
                Time to assemble your dream team! We work together on
                blueprints, materials, and design choices, bringing your vision
                to life on paper.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 border w-fit hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                03.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Construction Takes Off
              </h3>
              <p className="text-gray-600 text-center leading-[26px]">
                Now's the exciting part! Our team gets to work, meticulously
                constructing your project while carefully managing the budget
                and maximizing value.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 border w-fit hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                04.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Handing Over Your Masterpiece
              </h3>
              <p className="text-gray-600 text-center">
                The finishing touches are applied here, and pride fills the air.
                We ensure everything is perfect before finally handing over your
                completed project – ready for you to enjoy!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
