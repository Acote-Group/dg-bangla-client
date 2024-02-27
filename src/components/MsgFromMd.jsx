import md from "../assets/photos/mdPic.png";
import chairman from "../assets/photos/chairman.png";
import { Fade } from "react-reveal";
export default function MsgFromMd() {
  return (
    <>
      <section className="mb-[160px]">
        <div className="container px-4 py-8 font-ubuntu max-w-[1360px] mx-auto">
          <div className="flex flex-col md:flex-row gap-[42px] justify-center items-center">
            <div>
              <Fade left>
                <div className="w-full h-auto">
                  <img src={md} alt="Construction Work" className="" />
                </div>
              </Fade>
            </div>

            <div className="w-full md:w-1/2">
              <Fade right>
                <div className="font-[700] text-[22px] leading-[27px] italic text-primary md:mb-[15px]">
                  Message from MD
                </div>
                <h1 className="text-[24px] md:text-[28px] font-[700] leading-[34px] md:mb-[30px] text-justify">
                  Engineering Firm with a focus on delivering innovative
                  solutions! Perpetual technological advancement for a secure
                  and more practical world!
                </h1>
                <p className="leading-[26px] md:mb-[50px] text-justify">
                  DG Bangla is a swiftly expanding, youth-driven enterprise
                  specializing in Civil Construction and Electro-Mechanical
                  Engineering for projects encompassing roadways, yards,
                  dredging, low land development, electrification utilizing
                  robust earth-moving machinery, and comprehensive logistics
                  solutions. <br /> <br /> DG Bangla will further contribute the
                  expertise towards driving operational excellence, fostering
                  client relationships, and spearheading initiatives that
                  position the organization as a leader in the diverse sectors
                  of Construction, Technology, and Maritime Infrastructure.
                </p>

                <div className="mt-6 md:mt-0">
                  <h1 className="font-[700] text-[25px] leading-[30px]">
                    Md. Arsad Parvez
                  </h1>
                  <p className="text-primary">Managing Director</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="container max-w-[1860px] px-4 py-8 font-ubuntu mx-auto md:mt-[120px]">
          <div className="flex flex-col md:flex-row gap-x-8 justify-center items-center">
            <div>
              <Fade left>
                <div className="w-full h-auto">
                  <img src={chairman} alt="Construction Work" className="" />
                </div>
              </Fade>
            </div>

            <div className="w-full md:w-1/2 md:-mb-10">
              <Fade right>
                {/* <div className="font-[700] text-[24px] leading-[27px] italic text-primary md:mb-[15px]">
                  Our Honorable MD
                </div> */}
                <h1 className="text-[32px] md:text-[48px] font-[700] leading-[55px] md:mb-[30px]">
                  Message from Our Chairman
                </h1>
                <p className="leading-[26px] md:mb-[50px] text-justify">
                  Our company embodies progress, driven by a visionary spirit,
                  and innovative thinking. and unwavering dedication. Emerging
                  from humble origins, we've emerged as leaders m urban
                  development, reshaping skylines and redefining landscapes with
                  our daring projects. <br /> <br /> At our core lies an
                  unrelenting pursuit of excellence. We cultivate an environment
                  of innovation where creativity flourishes and boundaries are
                  pushed. Whether it's pioneering architectural designs or
                  sustainable infrastructure, we set the bar for excellence in
                  every endeavor. Yet our influence extends beyond mere
                  structures. We serve as agents of change, igniting growth and
                  advocating for community development. Nth each project, the
                  aim is to enrich both the physical environment and the Wes of
                  those fl serves, creating inclusive spaces that foster
                  connection, opportunity, and prosperity. <br /> <br /> As we
                  look ahead, lets continue to embrace innovation, upholding our
                  commitment to excellence. integrity. and social
                  responsibility. Lets remain mindful of the profound impact our
                  work has on the world, ensuring a brighter tomorrow for all.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
