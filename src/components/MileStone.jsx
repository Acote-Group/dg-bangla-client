import Fade from "react-reveal/Fade";

const MileStone = () => {
  return (
    <>
      <section className="font-ubuntu max-w-[1920px] mx-auto">
        <div className="flex justify-center gap-4 items-center py-6">
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

        <div className="flex justify-center pt-10">
          <div className="w-auto md:w-2/4 mx-auto">
            <div className="flex flex-row w-full">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 px-2 pb-5">
                  <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 pb-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">
                        Electrical & Port Projects
                      </div>
                      <div className="flex flex-row"></div>
                    </div>
                    <div className="text-gray-600">
                      Electrical works, Fire Fighting works have been started,
                      Payra Port, chittagong Port.
                    </div>
                  </div>
                </div>
              </Fade>

              <div className="w-1/5 flex justify-center">
                <div className="relative flex h-full w-1 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-primary leading-none text-center z-10 bg-white">
                    <h1 className="text-black font-inter">2022</h1>
                  </div>
                </div>
              </div>

              <div className="w-2/5 px-2 pb-5"></div>
            </div>

            <div className="flex flex-row w-full">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 pb-5"></div>
              {/* <!--line column--> */}
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-primary leading-none text-center z-10 bg-white">
                    <h1>2021</h1>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2 pb-5">
                  <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">New Mega Projects</div>
                    </div>
                    <div className="text-gray-600">
                      Dredging works, river bank protection, Building
                      construction, PWD, Sheba Authority.
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="flex flex-row w-full">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 px-2 pb-5">
                  <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">Road Works</div>
                      <div className="flex flex-row"></div>
                    </div>
                    <div className="text-gray-600">
                      We did road works, EPC contract for fecal treatment plant.
                    </div>
                  </div>
                </div>
              </Fade>
              {/* <!--line column--> */}
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-primary leading-none text-center z-10 bg-white">
                    <h1>2019</h1>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 pb-5"></div>
            </div>

            <div className="flex flex-row w-full">
              {/* <!-- left col --> */}

              <div className="w-2/5 px-2 pb-5"></div>
              {/* <!--line column--> */}
              <div className="w-1/5  flex justify-center">
                <div className="relative flex h-full w-1 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-primary leading-none text-center z-10 bg-white">
                    <h1>2017</h1>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <Fade right>
                <div className="w-2/5 px-2 pb-5">
                  <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">Land Port Project</div>
                    </div>
                    <div className="text-gray-600">
                      Working with Bangladesh Land Port Authority.
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="flex flex-row w-full">
              {/* <!-- left col --> */}

              <Fade left>
                <div className="w-2/5 px-2 pt-5">
                  <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between">
                      <div className="font-bold">Starting</div>
                      <div className="flex flex-row"></div>
                    </div>
                    <div className="text-gray-600">
                      Civil Works Started As a Main Contractor.
                    </div>
                  </div>
                </div>
              </Fade>
              {/* <!--line column--> */}
              <div className="w-1/5 flex justify-center">
                <div className="relative flex h-full w-1 bg-primary items-center justify-center">
                  <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-primary leading-none text-center z-10 bg-white">
                    <h1>2012</h1>
                  </div>
                </div>
              </div>
              {/* <!--right column--> */}
              <div className="w-2/5 px-2 py-5"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MileStone;
