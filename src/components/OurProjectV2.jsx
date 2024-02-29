import { useState } from "react";
import p1 from "../assets/project/p1.png";
import p2 from "../assets/project/p2.png";
import p3 from "../assets/project/p3.png";
import axios from "axios";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProjectCard from "./ProjectCard";
import { SkeletonLoader } from "../shared/SkeletonLoader";

export default function OurProjectV2() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://backend.dg-bangla.com/api/v1/project/get/all"
        );
        setItems(res.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const res = await axios.get(
        `https://backend.dg-bangla.com/api/v1/project/get/all`
      );
      setItems((prevItems) => [...prevItems, ...res.data.data]);

      res.data.length > 0 ? setHasMore(true) : setHasMore(false);
    } catch (err) {
      console.log(err);
    }

    setIndex((prevIndex) => prevIndex + 1);
  };

  const categoryData = async (searchParam) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://backend.dg-bangla.com/api/v1/category/search?name=${searchParam}`
      );
      setCats(response.data?.data[0]?.projects || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="w-auto max-w-[1460px] mx-auto my-[120px]">
        <div className="md:flex justify-between items-center px-4">
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
              Civil Work <span className="hidden md:block">&nbsp;</span>/
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
              Electrical Work <span className="hidden md:block">&nbsp;</span>/
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
              Automation Work <span className="hidden md:block">&nbsp;</span>/
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
              Dredging Work
            </button>
          </div>
        </div>

        <div className="mt-[60px] gap-6 md:flex font-ubuntu px-4">
          {/* tab-1  */}
          <div
            id="horizontal-scroll-tab-1"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-1"
            className=""
          >
            <InfiniteScroll
              dataLength={items.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={
                <div className="flex justify-center">
                  <h1 className="text-4xl text-primary font-semibold font-ubuntu">
                    Loading...
                  </h1>
                </div>
              }
              className="grid grid-cols-1 md:grid-cols-2 justify-center gap-12 mx-auto"
            >
              {items &&
                items.map((item) => <ProjectCard data={item} key={item._id} />)}
            </InfiniteScroll>
          </div>

          {/* tab-2  */}
          <div
            id="horizontal-scroll-tab-2"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-2"
            className="hidden grid grid-cols-2 justify-center gap-12 mx-auto"
          >
            {loading ? (
              <>
                <div className="">
                  <SkeletonLoader />
                </div>
                <div className="">
                  <SkeletonLoader />
                </div>
              </>
            ) : (
              cats.map((item) => <ProjectCard data={item} key={item._id} />)
            )}
          </div>

          {/* tab-3  */}
          <div
            id="horizontal-scroll-tab-3"
            className="hidden grid grid-cols-2 justify-center gap-12 max-w-[1460px] mx-auto"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-3"
          >
            {loading ? (
              <>
                <div className="">
                  <SkeletonLoader />
                </div>
                <div className="">
                  <SkeletonLoader />
                </div>
              </>
            ) : (
              cats.map((item) => <ProjectCard data={item} key={item._id} />)
            )}
          </div>

          {/* tab-4  */}
          <div
            id="horizontal-scroll-tab-4"
            className="hidden grid grid-cols-2 justify-center gap-12 max-w-[1460px] mx-auto"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-4"
          >
            {loading ? (
              <>
                <div className="">
                  <SkeletonLoader />
                </div>
                <div className="">
                  <SkeletonLoader />
                </div>
              </>
            ) : (
              cats.map((item) => <ProjectCard data={item} key={item._id} />)
            )}
          </div>

          {/* tab-5  */}
          <div
            id="horizontal-scroll-tab-5"
            className="hidden grid grid-cols-2 justify-center gap-12 max-w-[1460px] mx-auto"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-5"
          >
            {loading ? (
              <>
                <div className="">
                  <SkeletonLoader />
                </div>
                <div className="">
                  <SkeletonLoader />
                </div>
              </>
            ) : (
              cats.map((item) => <ProjectCard data={item} key={item._id} />)
            )}
          </div>

          {/* tab-6  */}
          <div
            id="horizontal-scroll-tab-6"
            className="hidden grid grid-cols-2 justify-center gap-12 max-w-[1460px] mx-auto"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-6"
          >
            {loading ? (
              <>
                <div className="">
                  <SkeletonLoader />
                </div>
                <div className="">
                  <SkeletonLoader />
                </div>
              </>
            ) : (
              cats.map((item) => <ProjectCard data={item} key={item._id} />)
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
        id="hs-vertically-centered-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center lg:max-w-4xl lg:w-full lg:mx-auto">
          <div className="w-full flex flex-col bg-white border shadow-sm">
            <div className="overflow-y-auto relative">
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none absolute top-0 right-0 z-50"
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              {/* <!-- Slider --> */}
              <div
                data-hs-carousel='{
                "loadingClasses": "opacity-0",
                "isAutoPlay": true
                }'
                className="relative"
              >
                <div className="hs-carousel relative overflow-hidden min-h-[350px] bg-white rounded-none">
                  <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div className="hs-carousel-slide">
                      <div className="flex justify-center h-full">
                        <img
                          src={p1}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="hs-carousel-slide">
                      <div className="flex justify-center h-full">
                        <img src={p2} className="w-full object-cover" alt="" />
                      </div>
                    </div>
                    <div className="hs-carousel-slide">
                      <div className="flex justify-center h-full">
                        <img src={p3} className="w-full object-cover" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
                >
                  <span className="text-2xl" aria-hidden="true">
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </span>
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  type="button"
                  className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
                >
                  <span className="sr-only">Next</span>
                  <span className="text-2xl" aria-hidden="true">
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>

                <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                  <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                  <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                  <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                </div>
              </div>
              {/* <!-- End Slider --> */}

              <div className="font-ubuntu flex justify-between">
                <div className="bg-primary text-white text-center w-1/3">
                  <p className="text-start ml-4 py-2">Civil Work (2022-2023)</p>
                  <hr />
                  <h1 className="text-xl font-semibold text-start ml-4 mt-6">
                    Dredging Works at Karnofuli River
                  </h1>
                </div>
                <div className="w-2/3 p-4">
                  <h1 className="text-[20px] font-bold leading-5">Overview</h1>
                  <p className="mt-2 leading-5 text-justify">
                    Dredging Works at Karnofuli River is a construction project
                    undertaken by DG Bangla Construction Company. The project
                    involves the construction of barracks for the Ansar, a
                    paramilitary force in Bangladesh, at the BSC (Bangladesh
                    Shipping Corporation) Yard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
