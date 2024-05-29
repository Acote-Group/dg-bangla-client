import Fade from "react-reveal/Fade";

const MileStone = () => {
  return (
    <>
      <section className="font-ubuntu max-w-[1920px] mx-auto bg-gray-200">
        <div className="flex justify-center gap-4 items-center pt-12 pb-6">
          <div className="flex flex-col">
            <hr className="border-t-2 border-primary w-8 ml-auto" />
            <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
          </div>

          <Fade bottom>
            <h1 className="font-roboto text-2xl md:text-[35px] font-[700] uppercase">
              <span className="text-primary">our</span> milestones
            </h1>
          </Fade>

          <div className="flex flex-col ">
            <hr className="border-t-2 border-primary w-8" />
            <hr className="border-t-2 border-primary w-5 mt-3" />
          </div>
        </div>

        <div className="flex justify-center pt-10 font-ubuntu">
          <div className="w-auto md:w-3/4 mx-auto">
            {/* first milestone  */}

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-5"></div>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2024
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2">
                  <div className="flex items-center flex-row-reverse">
                    <div className="flex flex-col w-full rounded-lg shadow border-l-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Company Reformation</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white group-hover:bg-gradient-to-l h-[2px] mt-[5px]" />
                        </div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Converted from Proprietorship to Limited Company.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 relative mt-10">
                  <div className="flex items-center">
                    <div className="flex flex-col w-full rounded-lg shadow border-r-[5px] border-primary px-4 py-4 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Electrical</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white group-hover:bg-gradient-to-l h-[2px] mt-[5px]" />
                        </div>
                        <div className="flex flex-"></div>
                      </div>
                      <div className="text-[20px] leading-[23px] mt-2 text-justify">
                        Executed installations for Electrical Substation &
                        Transformer system, Generator with Automatic Transfer
                        Switch & Canopy system, High Tension, Low Tension & Mesh
                        cable laying works, Lightning Protection System,
                        Electrical Earthing system & Busbar trunking system.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>

              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2022
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-2/5 px-2"></div>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-5"></div>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2022
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2 py-10 ">
                  <div className="flex items-center flex-row-reverse">
                    <div className="flex flex-col w-full rounded-lg shadow border-l-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Firefighting</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white group-hover:bg-gradient-to-l h-[2px] mt-[5px]" />
                        </div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Initiated operations on Fire hydrant & sprinkler system,
                        Fire gas & foam suppression system, Fire detection &
                        alarm check valve system, also Fire extinguisher, door,
                        pump & telephone system.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 px-2 pb-5 mt-5">
                  <div className="flex items-center">
                    <div className="flex flex-col w-full rounded-lg shadow border-r-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Dredging</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white h-[2px] mt-[5px] group-hover:bg-gradient-to-l" />
                        </div>
                        <div className="flex flex-row"></div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Implemented a range of dredging solutions including
                        Backhoe dredgers, Suction dredgers, Grab dredgers and
                        Mechanical dredgers to enhance efficiency and
                        effectiveness in waterway maintenance and development.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2021
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-10"></div>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-10"></div>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2017
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2 py-10">
                  <div className="flex items-center flex-row-reverse">
                    <div className="flex flex-col w-full rounded-lg shadow border-l-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Automation</h1>
                          <hr className="bg-gradient-to-r from-primary to-white h-[2px] mt-[5px] group-hover:bg-gradient-to-l" />
                        </div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        The work on Establishment the Global Maritime Distress
                        and Safety System & Integrated Maritime Navigation
                        System (EGIMNS) has been initiated.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 px-2 py-10">
                  <div className="flex items-center">
                    <div className="flex flex-col w-full rounded-lg shadow border-r-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Construction</h1>
                          <hr className="bg-gradient-to-r from-rose-600 to-white h-[2px] mt-[5px] group-hover:bg-gradient-to-l" />
                        </div>
                        <div className="flex flex-row"></div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Involved in the construction of Buildings, Safeguarding
                        River Banks, Roads, Bridged and Culvert infrastructures,
                        as well as overseeing the development of RCC Yards and
                        Land improvement projects.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
                  </div>
                </div>
              </Fade>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2016
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-5"></div>
            </div>

            <div className="flex flex-row w-full justify-center group">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 py-10"></div>
              {/* <!--line column--> */}
              <div className="flex justify-center">
                <div className="relative flex h-full w-2 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-32 w-32 rounded-full border leading-none text-center z-10 shadow-md shadow-red-400/40 bg-white">
                    <div className="w-20 h-20 border-[3px] border-primary rounded-full flex flex-col items-center justify-center mx-auto group-hover:bg-primary">
                      <h1 className="text-primary group-hover:text-white font-ubuntu text-[20px] font-bold">
                        2012
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2 py-10">
                  <div className="flex items-center flex-row-reverse">
                    <div className="flex flex-col w-full rounded-lg shadow border-l-[5px] border-primary px-4 py-5 bg-white group-hover:bg-primary group-hover:text-white">
                      <div className="mb-2 flex justify-between">
                        <div className="font-bold text-[22px] leading-[25px]">
                          <h1>Company Originated</h1>
                          <hr className="bg-gradient-to-r from-primary to-white h-[2px] mt-[5px] group-hover:bg-gradient-to-l" />
                        </div>
                      </div>
                      <div className="text-[20px] leading-[23px] text-justify">
                        Commenced the journey as the general contractor & took
                        part in advancing the country&apos;s development.
                      </div>
                    </div>

                    <div className="w-32 bg-primary h-1 flex items-center"></div>
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

export default MileStone;
