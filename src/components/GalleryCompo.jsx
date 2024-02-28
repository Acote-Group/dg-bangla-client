import pic3 from "../assets/project/pic-3.png";
import pic4 from "../assets/project/pic-4.png";
import pic5 from "../assets/project/pic-5.png";
import pic6 from "../assets/project/pic-6.png";
import pic7 from "../assets/project/pic-7.png";
import pic8 from "../assets/project/pic-8.png";
import pic9 from "../assets/project/pic-9.png";
import projects from "../assets/photos/projects.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function GalleryCompo() {
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
                className="py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-1"
                data-hs-tab="#vertical-tab-with-border-1"
                aria-controls="vertical-tab-with-border-1"
                role="tab"
              >
                All
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-2"
                data-hs-tab="#vertical-tab-with-border-2"
                aria-controls="vertical-tab-with-border-2"
              >
                Commercial
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-3"
                data-hs-tab="#vertical-tab-with-border-3"
                aria-controls="vertical-tab-with-border-3"
                role="tab"
              >
                Education
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-3"
                data-hs-tab="#vertical-tab-with-border-3"
                aria-controls="vertical-tab-with-border-3"
                role="tab"
              >
                Hospital
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-3"
                data-hs-tab="#vertical-tab-with-border-3"
                aria-controls="vertical-tab-with-border-3"
                role="tab"
              >
                Residential
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-3"
                data-hs-tab="#vertical-tab-with-border-3"
                aria-controls="vertical-tab-with-border-3"
                role="tab"
              >
                Office
              </button>
              <button
                type="button"
                className=" py-1 pe-4 inline-flex items-center gap-x-2 border-transparent whitespace-nowrap text-black hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-primary active text-center mx-auto font-poppins uppercase"
                id="vertical-tab-with-border-item-3"
                data-hs-tab="#vertical-tab-with-border-3"
                aria-controls="vertical-tab-with-border-3"
                role="tab"
              >
                Reconstruction
              </button>
            </nav>
          </div>

          <div className="ms-3">
            <div
              id="vertical-tab-with-border-1"
              role="tabpanel"
              aria-labelledby="vertical-tab-with-border-item-1"
              className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            >
              <div>
                <img src={pic5} alt="" />
              </div>
              <div>
                <img src={pic3} alt="" />
              </div>
              <div>
                <img src={pic4} alt="" />
              </div>

              <div>
                <img src={pic6} alt="" />
              </div>
              <div>
                <img src={pic7} alt="" />
              </div>
              <div>
                <img src={pic8} alt="" />
              </div>
              <div>
                <img src={pic9} alt="" />
              </div>
            </div>
          </div>

          <div
            id="vertical-tab-with-border-2"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-2"
            className="hidden grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
          >
            <div>
              <img src={pic5} alt="" />
            </div>
            <div>
              <img src={pic3} alt="" />
            </div>
            <div>
              <img src={pic4} alt="" />
            </div>

            <div>
              <img src={pic6} alt="" />
            </div>
            <div>
              <img src={pic7} alt="" />
            </div>
            <div>
              <img src={pic8} alt="" />
            </div>
            <div>
              <img src={pic9} alt="" />
            </div>
          </div>

          <div
            id="vertical-tab-with-border-3"
            className="hidden grid grid-cols-1 md:grid-cols-4 gap-6 justify-center mx-auto w-1/2 md:w-full mt-6 md:mt-0"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-3"
          >
            <div>
              <img src={pic5} alt="" />
            </div>
            <div>
              <img src={pic3} alt="" />
            </div>
            <div>
              <img src={pic4} alt="" />
            </div>

            <div>
              <img src={pic6} alt="" />
            </div>
            <div>
              <img src={pic7} alt="" />
            </div>
            <div>
              <img src={pic8} alt="" />
            </div>
            <div>
              <img src={pic9} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
