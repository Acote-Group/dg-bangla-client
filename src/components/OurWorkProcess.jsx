import { Fade } from "react-reveal";

export default function OurWorkProcess() {
  return (
    <>
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-white font-ubuntu">
        <div className="max-w-[1460px] mx-auto">
          <div className="text-center md:mt-[95px]">
            <div className="flex justify-center gap-4 items-center">
              <div className="flex flex-col">
                <hr className="border-t-2 border-primary w-8 ml-auto" />
                <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
              </div>

              <Fade bottom>
                <h1 className="text-[38px] font-[500] font-ubuntu leading-[44px] uppercase">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[60px]">
            <div className="flex flex-col items-center p-4 border w-fit hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                01.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Meet and Consultant
              </h3>
              <p className="text-gray-600 text-center leading-[26px]">
                This is one of, if not the most important steps in any
                construction project. During the conception stage of your
                project. Aenean eu suscipit arcu.
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
                Choosing a team to bring your project vision to reality is a big
                step that will have a major influence on the outcomes. Aenean eu
                suscipit arcu.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 border w-fit hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                03.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Proceed with Construction
              </h3>
              <p className="text-gray-600 text-center leading-[26px]">
                The team will further develop and analyze the project's budget,
                looking for ways to enhance the value of the building. Aenean eu
                suscipit arcu.
              </p>
            </div>
            <div className="flex flex-col items-center p-4 border w-fit hover:relative hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:right-0 hover:after:w-full hover:after:h-1 hover:after:bg-primary">
              <span className="text-primary font-bold text-[55px] leading-[65px] mb-4">
                04.
              </span>
              <h3 className="text-[22px] leading-[32px] font-bold mb-2">
                Project Handover
              </h3>
              <p className="text-gray-600 text-center">
                As the last of the fixtures are installed and the final coats of
                paint go on the walls, project closeout can begin. Aenean eu
                suscipit arcu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
