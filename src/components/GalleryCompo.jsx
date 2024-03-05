import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function GalleryCompo() {
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
      <Navbar />
      <div className="w-full h-[300px] bg-navBg bg-cover bg-no-repeat pt-[8rem]">
        <h1 className="text-[60px] font-poppins uppercase text-white text-center font-semibold">
          Gallery
        </h1>

        <div className="font-ubuntu w-fit mx-auto">
          <ol
            className="flex items-center whitespace-nowrap"
            aria-label="Breadcrumb"
          >
            <li className="inline-flex items-center gap-2">
              <Link
                className="flex items-center text-[#8B8B8B] hover:text-primary focus:outline-none focus:text-primary text-[18px] font-[500] leading-[28px]"
                to="/"
              >
                {/* <svg
                    className="flex-shrink-0 me-3 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg> */}
                Home
              </Link>

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.375 3.75L10.625 10L4.375 16.25"
                  stroke="#A8223B"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.625 3.75L16.875 10L10.625 16.25"
                  stroke="#A8223B"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>

            <li
              className="inline-flex items-center text-white truncate text-[18px] font-[500] leading-[28px] ml-2"
              aria-current="page"
            >
              Gallery
            </li>
          </ol>
        </div>
      </div>
      <section className=" w-auto max-w-7xl mx-auto my-[120px]">
        <div className="flex justify-center md:justify-start gap-4 items-center">
          <h1 className="font-roboto font-[500] text-[38px] uppercase tracking-widest">
            <span className="text-primary font-[300]">Projects</span> Gallery
          </h1>

          <div className="flex flex-col ">
            <hr className="border-t-2 border-primary w-8" />
            <hr className="border-t-2 border-primary w-5 mt-3" />
          </div>
        </div>

        <div className="mt-[60px] gap-6 md:flex">
          <div className="w-auto md:w-[270px] h-auto md:h-[460px] p-[30px]  border text-center font-inter font-[500] uppercase rounded-sm bg-[#F6F7F8] cursor-pointer">
            <nav
              className="flex flex-col space-y-4 md:space-y-[30px]"
              aria-label="Tabs"
              role="tablist"
              data-hs-tabs-vertical="true"
            >
              <button
                type="button"
                className="py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase hs-tab-active:text-primary"
                id="vertical-tab-with-border-item-1"
                data-hs-tab="#vertical-tab-with-border-1"
                aria-controls="vertical-tab-with-border-1"
                role="tab"
                onClick={() => categoryData("all")}
              >
                All
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-2"
                data-hs-tab="#vertical-tab-with-border-2"
                aria-controls="vertical-tab-with-border-2"
                onClick={() => categoryData("civil")}
              >
                Civil Work
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-3"
                data-hs-tab="#vertical-tab-with-border-3"
                aria-controls="vertical-tab-with-border-3"
                role="tab"
                onClick={() => categoryData("electrical")}
              >
                Electrical
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-4"
                data-hs-tab="#vertical-tab-with-border-4"
                aria-controls="vertical-tab-with-border-4"
                role="tab"
                onClick={() => categoryData("fire")}
              >
                Fire Fighting
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-5"
                data-hs-tab="#vertical-tab-with-border-5"
                aria-controls="vertical-tab-with-border-5"
                role="tab"
                onClick={() => categoryData("auto")}
              >
                Automation Work
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-6"
                data-hs-tab="#vertical-tab-with-border-6"
                aria-controls="vertical-tab-with-border-6"
                role="tab"
                onClick={() => categoryData("dredging")}
              >
                Dredging Work
              </button>
            </nav>
          </div>

          <div
            id="vertical-tab-with-border-1"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-1"
            className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
          >
            {loading ? (
              <div className="flex flex-col justify-center">
                <div
                  className="animate-spin inline-block size-16 border-[3px] border-current border-t-transparent text-primary rounded-full mx-auto"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                {cats?.map((cat) => (
                  <>
                    <div>
                      <img
                        src={cat?.images[0]}
                        className="w-[410px] h-[320px] object-cover"
                        alt=""
                      />
                    </div>
                  </>
                ))}
              </>
            )}
          </div>

          <div
            id="vertical-tab-with-border-2"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-2"
            className="hidden grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
          >
            {cats?.map((cat) => (
              <>
                <div>
                  <img
                    src={cat?.images[0]}
                    className="w-[410px] h-[320px] object-cover"
                    alt=""
                  />
                </div>
              </>
            ))}
          </div>

          <div
            id="vertical-tab-with-border-3"
            className="hidden grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-3"
          >
            {cats?.map((cat) => (
              <>
                <div>
                  <img
                    src={cat?.images[0]}
                    className="w-[410px] h-[320px] object-cover"
                    alt=""
                  />
                </div>
              </>
            ))}
          </div>

          <div
            id="vertical-tab-with-border-4"
            className="hidden grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-4"
          >
            {cats?.map((cat) => (
              <>
                <div>
                  <img
                    src={cat?.images[0]}
                    className="w-[410px] h-[320px] object-cover"
                    alt=""
                  />
                </div>
              </>
            ))}
          </div>

          <div
            id="vertical-tab-with-border-5"
            className="hidden grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-5"
          >
            {cats?.map((cat) => (
              <>
                <div>
                  <img
                    src={cat?.images[0]}
                    className="w-[410px] h-[320px] object-cover"
                    alt=""
                  />
                </div>
              </>
            ))}
          </div>

          <div
            id="vertical-tab-with-border-6"
            className="hidden grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-6"
          >
            {cats?.map((cat) => (
              <>
                <div>
                  <img
                    src={cat?.images[0]}
                    className="w-[410px] h-[320px] object-cover"
                    alt=""
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
