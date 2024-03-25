import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { SkeletonLoader } from "../shared/SkeletonLoader";

export default function OurProjectV2() {
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
            aria-labelledby="horizontal-scroll-tab-item-2"
            className="grid grid-cols-1 md:grid-cols-2 justify-center gap-12 mx-auto"
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

          {/* tab-2  */}
          <div
            id="horizontal-scroll-tab-2"
            role="tabpanel"
            aria-labelledby="horizontal-scroll-tab-item-2"
            className="hidden grid grid-cols-1 md:grid-cols-2 justify-center gap-12 mx-auto"
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
            className="hidden grid grid-cols-1 md:grid-cols-2 justify-center gap-12 max-w-[1460px] mx-auto"
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
            className="hidden grid grid-cols-1 md:grid-cols-2 justify-center gap-12 max-w-[1460px] mx-auto"
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
            className="hidden grid grid-cols-1 md:grid-cols-2 justify-center gap-12 max-w-[1460px] mx-auto"
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
            className="hidden grid grid-cols-1 md:grid-cols-2 justify-center gap-12 max-w-[1460px] mx-auto"
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
    </>
  );
}
