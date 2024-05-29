import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const OurProject = () => {
  const location = useLocation();
  const project = location.pathname.includes("/project");

  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryData = async (searchParam = "all") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://backend.dg-bangla.com/api/v1/category/search?name=${
          searchParam || "all"
        }`
      );
      setCats(response.data?.data[0]?.projects || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    categoryData();
  }, []);

  console.log(cats);
  return (
    <>
      <section className="w-auto max-w-6xl 2xl:max-w-7xl mx-auto my-[120px]">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-center md:justify-start gap-4 items-center">
            <h1 className="font-ubuntu font-[500] text-[38px] tracking-widest">
              <span className="text-primary">Our</span> Projects
            </h1>

            <div className="flex flex-col ">
              <hr className="border-t-2 border-primary w-8" />
              <hr className="border-t-2 border-primary w-5 mt-3" />
            </div>
          </div>

          <div
            className="pb-1 flex space-x-none md:space-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 justify-center font-ubuntu"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap active text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-1"
              data-hs-tab="#horizontal-scroll-tab-1"
              aria-controls="horizontal-scroll-tab-1"
              role="tab"
              onClick={() => categoryData("all")}
            >
              All Projects <span className="hidden md:block">&nbsp;</span>/
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-2"
              data-hs-tab="#horizontal-scroll-tab-2"
              aria-controls="horizontal-scroll-tab-2"
              role="tab"
              onClick={() => categoryData("civil")}
            >
              Construction <span className="hidden md:block">&nbsp;</span>/
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-3"
              data-hs-tab="#horizontal-scroll-tab-3"
              aria-controls="horizontal-scroll-tab-3"
              role="tab"
              onClick={() => categoryData("electrical")}
            >
              Electrical <span className="hidden md:block">&nbsp;</span>/
            </button>
            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-4"
              data-hs-tab="#horizontal-scroll-tab-4"
              aria-controls="horizontal-scroll-tab-4"
              role="tab"
              onClick={() => categoryData("fire")}
            >
              Fire Fighting <span className="hidden md:block">&nbsp;</span>/
            </button>

            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-5"
              data-hs-tab="#horizontal-scroll-tab-5"
              aria-controls="horizontal-scroll-tab-5"
              role="tab"
              onClick={() => categoryData("auto")}
            >
              Automation <span className="hidden md:block">&nbsp;</span>/
            </button>

            <button
              type="button"
              className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none text-sm md:text-base font-semibold"
              id="horizontal-scroll-tab-item-6"
              data-hs-tab="#horizontal-scroll-tab-6"
              aria-controls="horizontal-scroll-tab-6"
              role="tab"
              onClick={() => categoryData("dredging")}
            >
              Dredging
            </button>
          </div>
        </div>

        <div className="mt-[60px] gap-6 md:flex font-ubuntu">
          {/* tab-1  */}
          <div
            id="horizontal-scroll-tab-1"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-1"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0 relative"
          >
            {cats?.slice(0, 6).map((cat) => (
              <>
                <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                  <img
                    src={cat?.images[0]}
                    className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30"
                    alt=""
                  />

                  <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                      <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                        {cat?.category}
                      </button>
                      <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                        {cat?.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* tab-2  */}
          <div
            id="horizontal-scroll-tab-2"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-2"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
          >
            {cats?.slice(0, 6).map((cat) => (
              <>
                <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                  <img
                    src={cat?.images[0]}
                    className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30"
                    alt=""
                  />

                  <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                      <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                        {cat?.category}
                      </button>
                      <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                        {cat?.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* tab-3  */}
          <div
            id="horizontal-scroll-tab-3"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0 h-fit"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-3"
          >
            {cats?.slice(0, 6).map((cat) => (
              <>
                <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                  <img
                    src={cat?.images[0]}
                    className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30"
                    alt=""
                  />

                  <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                      <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                        {cat?.category}
                      </button>
                      <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                        {cat?.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* tab-4  */}
          <div
            id="horizontal-scroll-tab-4"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-4"
          >
            {cats?.slice(0, 6).map((cat) => (
              <>
                <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                  <img
                    src={cat?.images[0]}
                    className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30"
                    alt=""
                  />

                  <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                      <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                        {cat?.category}
                      </button>
                      <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                        {cat?.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* tab-5  */}
          <div
            id="horizontal-scroll-tab-5"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-5"
          >
            {cats?.slice(0, 6).map((cat) => (
              <>
                <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                  <img
                    src={cat?.images[0]}
                    className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30"
                    alt=""
                  />

                  <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                      <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                        {cat?.category}
                      </button>
                      <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                        {cat?.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* tab-6  */}
          <div
            id="horizontal-scroll-tab-6"
            className="hidden grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-6"
          >
            {cats?.slice(0, 6).map((cat) => (
              <>
                <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 group">
                  <img
                    src={cat?.images[0]}
                    className="w-auto md:w-[465px] md:h-[330px] object-cover group-hover:opacity-30"
                    alt=""
                  />

                  <div className="absolute left-0 right-0 top-0 h-full w-full opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 p-6">
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                      <button className="font-[500] bg-[#A8223B] px-7 py-2 border border-white rounded-full text-white w-fit">
                        {cat?.category}
                      </button>
                      <h1 className="text-white font-[700] text-[25px] leasding-[36px] mt-[10px]">
                        {cat?.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        {project ? null : (
          <div className="flex justify-center mt-8 md:mt-[40px]">
            <Link
              className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3.5 text-white focus:outline-none focus:ring mx-auto justify-center"
              to="/projects"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <MoveRight fill="black" />
              </span>

              <span className="uppercase font-medium transition-all group-hover:me-4">
                Explore More
              </span>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default OurProject;
