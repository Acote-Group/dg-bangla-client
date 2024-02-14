import { Fade } from "react-reveal";
import ofp1 from "../assets/photos/ofp1.png";
import ofp2 from "../assets/photos/ofp2.png";

export default function OurFuturePlan() {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto font-ubuntu">
        <div className="text-center md:my-[60px]">
          <div className="flex justify-center gap-4 items-center">
            <div className="flex flex-col">
              <hr className="border-t-2 border-primary w-8 ml-auto" />
              <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
            </div>

            <Fade bottom>
              <h1 className="text-[38px] font-[500] font-ubuntu leading-[44px] uppercase">
                <span className="text-primary">OUR</span> future plan
              </h1>
            </Fade>

            <div className="flex flex-col ">
              <hr className="border-t-2 border-primary w-8" />
              <hr className="border-t-2 border-primary w-5 mt-3" />
            </div>
          </div>

          <p className="text-center font-ubuntu text-[#767676] mx-auto mt-6 text-sm font-normal w-[90%] leading-[24px]">
            With a focus on sustainable growth, we're expanding into new markets
            and diversifying revenue streams while prioritizing operational
            efficiency and maintaining high standards of quality and client
            satisfaction. Our strategic approach ensures long-term success and
            fosters a resilient and adaptable business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-[32px] font-bold mb-4 leading-[36px] border-b-2 border-primary pb-1 w-fit">
              Our Mission
            </h3>
            <p className="mb-4 text-[24px] leading-[32px]">
              We prioritize the growth of talent and actively engage in
              deliberate efforts within the communities we serve. Our loyal
              commitment to upholding the highest ethical standards is reflected
              in the enduring quality of our projects, consistently meeting and
              exceeding customer expectations.
            </p>
            <p className="mt-4 text-[24px] leading-[38px]">
              Through our dedication to developing international skills for
              economic empowerment and contributing in the societies where we
              operate, we aim for making a positive and lasting impact.
            </p>
          </div>
          <div>
            <img
              alt="Illustration of future plan"
              className="mx-auto"
              src={ofp1}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <img alt="Illustration of mission" className="mx-auto" src={ofp2} />
          </div>
          <div>
            <h3 className="text-[32px] font-bold mb-4 leading-[36px] border-b-2 border-primary pb-1 w-fit">
              Our Vision
            </h3>
            <p className="mb-4 text-[24px] leading-[32px]">
              We started as a grassroots construction service, aiming to evolve
              into a leading global engineering, construction, and project
              management company. Our vision encompasses delivering unparalleled
              outcomes to clients, nurturing rewarding professional paths, and
              creating profitable value. Our journey calls for expanding
              internationally in engineering, surpassing customer expectations,
              empowering fulfilling careers, and achieving profitability through
              exceptional workmanship across all domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
