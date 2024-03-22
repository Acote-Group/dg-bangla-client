import { Fade } from "react-reveal";

export default function OurWorkProcess() {
  return (
    <>
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white font-ubuntu">
        <div className="max-w-7xl mx-auto">
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

          <div className="flex flex-wrap justify-center gap-6 mt-[60px]">
            <div className="flex flex-col items-center p-4 border w-fit lg:w-[350px] hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary ">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                01.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Planning and Design
              </h3>
              <p className="text-gray-600 text-center leading-[26px]">
                Engineers and architects collaborate to develop blueprints and
                plans for construction projects, considering factors like site
                conditions, budget, and client requirements.
              </p>
            </div>

            <div className="flex flex-col items-center p-4 border w-fit lg:w-[350px] hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                02.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Procurement and Logistics
              </h3>
              <p className="text-gray-600 text-center leading-[26px]">
                Procuring materials, equipment, and manpower necessary for
                construction, ensuring timely delivery and efficient resource
                allocation.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 border w-fit lg:w-[350px] hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                03.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Site Preparation
              </h3>
              <p className="text-gray-600 text-center leading-[26px]">
                Clearing the construction site, setting up necessary
                infrastructure like access roads and utilities, and conducting
                surveys or soil testing as required.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 border w-fit lg:w-[350px] hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                04.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Construction
              </h3>
              <p className="text-gray-600 text-center">
                Actual construction work begins, including foundation laying,
                structural erection, installation of utilities, and interior
                finishing, all overseen by project managers and construction
                supervisors.
              </p>
            </div>

            <div className="flex flex-col items-center p-4 border w-fit lg:w-[350px] hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                05.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Quality Control and Handover
              </h3>
              <p className="text-gray-600 text-center">
                Regular inspections and quality checks are conducted throughout
                the construction process to ensure compliance with safety
                standards and client specifications. Upon completion, the
                project is handed over to the client after final inspections and
                documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
