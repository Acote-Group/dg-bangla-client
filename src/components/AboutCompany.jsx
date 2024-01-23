import builder from "../assets/photos/worker2.png";
import Fade from "react-reveal/Fade";

const AboutCompany = () => {
  return (
    <>
      <section className="bg-[#F8F8F8] md:py-[60px]">
        <div className="container mx-auto px-4 py-8 bg-[#F8F8F8]">
          <div className="flex flex-col md:flex-row gap-[42px] justify-center">
            <Fade left>
              <div className="w-full md:w-1/4 h-auto">
                <img src={builder} alt="Construction Work" className="" />
              </div>
            </Fade>

            <div className="w-full md:w-1/2 space-y-4">
              <Fade right cascade>
                <div className="font-inter font-[800] text-[18px] uppercase tracking-widest">
                  About Company
                  <hr className="border-t-[6px] border-primary w-28" />
                </div>
                <h1 className="text-[40px] font-[500] font-inter max-w-[560px]">
                  Government Contractor For Civil &amp; Electrical Works
                </h1>
                <p className="text-[#767676] font-openSans text-sm max-w-[660px] text-justify">
                  Starting from 2012 to now, we have far gone a long way &amp;
                  progressing rapidly. Today, we disclose us as an experienced
                  &amp; multi-dimensional company that provides not only your
                  complete property design &amp; construction solutions but also
                  growing quickly to provide all electrical works, equipment
                  &amp; spare parts importing, supplying &amp; servicing.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#EEE] hidden md:block"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary w-7 h-7 flex-shrink-0"
                    >
                      <rect
                        width="16"
                        height="20"
                        x="4"
                        y="2"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>

                    <div>
                      <h3 className="font-semibold font-roboto hidden md:block">
                        Building
                      </h3>
                      <p className="text-gray-500 font-openSans text-sm">
                        Lorem ipsum dolor sit piscing sed diam nonmy end.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#EEE]"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary w-6 h-6 flex-shrink-0"
                    >
                      <path d="M21 7v6h-6"></path>
                      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold font-roboto">Renovation</h3>
                      <p className="text-gray-500 font-openSans text-sm">
                        Lorem ipsum dolor sit piscing sed diam nonmy end.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#EEE] hidden md:block"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary w-6 h-6 flex-shrink-0"
                    >
                      <path d="M2 22v-5l5-5 5 5-5 5z"></path>
                      <path d="M9.5 14.5 16 8"></path>
                      <path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"></path>
                    </svg>
                    <div>
                      <h3 className="font-semibold font-roboto">Digging</h3>
                      <p className="text-gray-500 font-openSans text-sm">
                        Lorem ipsum dolor sit piscing sed diam nonmy end.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#EEE] hidden md:block"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary w-6 h-6 flex-shrink-0"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <div>
                      <h3 className="font-semibold font-roboto">Interior</h3>
                      <p className="text-gray-500 font-openSans text-sm">
                        Lorem ipsum dolor sit piscing sed diam nonmy end.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
