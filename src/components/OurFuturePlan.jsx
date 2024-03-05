import { Fade } from "react-reveal";
import ofp1 from "../assets/photos/ofp1.png";
import ofp2 from "../assets/photos/ofp2.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function OurFuturePlan() {
  const { data } = useQuery({
    queryKey: ["whoData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://backend.dg-bangla.com/api/v1/about/get"
        );

        return response.data?.data;
      } catch (error) {
        // Handle errors here
        throw new Error("Network response was not ok");
      }
    },
  });
  return (
    <section className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto font-ubuntu" id="mission">
        <div className="text-center my-16 md:my-[60px]">
          <div className="flex justify-center gap-4 items-center">
            <div className="flex flex-col">
              <hr className="border-t-2 border-primary w-8 ml-auto" />
              <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
            </div>

            <Fade bottom>
              <h1 className="text-[20px] md:text-[38px] font-[500] font-ubuntu leading-[44px] uppercase">
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
            <p className="mb-4 text-[24px] leading-[38px] text-justify">
              {data?.descriptionMission}
            </p>
            {/* <p className="mt-4 text-[24px] leading-[32px] text-justify">
              Through our dedication to developing international skills for
              economic empowerment and contributing in the societies where we
              operate, we aim for making a positive and lasting impact.
            </p> */}
          </div>
          <div>
            <Fade right>
              <img
                alt="Illustration of future plan"
                className="mx-auto"
                src={ofp1}
              />
            </Fade>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <Fade left>
              <img
                alt="Illustration of mission"
                className="mx-auto"
                src={ofp2}
              />
            </Fade>
          </div>
          <div className="text-right flex flex-col justify-end">
            <h3 className="text-[32px] font-bold mb-4 leading-[36px] border-b-2 border-primary pb-1 w-fit self-end">
              Our Vision
            </h3>
            <p className="mb-4 text-[24px] leading-[38px] text-justify">
              {data?.descriptionVission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
