import pic3 from "../assets/project/pic-3.png";
import pic4 from "../assets/project/pic-4.png";
import pic5 from "../assets/project/pic-5.png";
import pic6 from "../assets/project/pic-6.png";
import pic7 from "../assets/project/pic-7.png";
import pic8 from "../assets/project/pic-8.png";
import pic9 from "../assets/project/pic-9.png";
import projects from "../assets/photos/projects.png";

const OurProject = () => {
  return (
    <>
      <section className=" w-auto max-w-7xl mx-auto my-[160px]">
        <div className="flex justify-start gap-4 items-center">
          <h1 className="font-roboto font-[500] text-[38px] uppercase tracking-widest">
            <span className="text-primary font-[300]">Our</span> Projects
          </h1>

          <div className="flex flex-col ">
            <hr className="border-t-2 border-primary w-8" />
            <hr className="border-t-2 border-primary w-5 mt-3" />
          </div>
        </div>

        <div className="mt-[60px] gap-6 flex">
          <div className="w-[270px] h-fit p-[30px] space-y-[30px] border text-center font-inter font-[500] uppercase rounded-sm bg-[#F6F7F8] cursor-pointer">
            <nav
              className="flex flex-col space-y-[30px]"
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
              className="mx-auto grid grid-cols-4 gap-6"
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
            className="hidden"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-2"
          >
            <p className="text-gray-500 dark:text-gray-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                second
              </em>{" "}
              item's tab body.
            </p>
          </div>

          <div
            id="vertical-tab-with-border-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-3"
          >
            <p className="text-gray-500 dark:text-gray-400">
              This is the{" "}
              <em className="font-semibold text-gray-800 dark:text-gray-200">
                third
              </em>{" "}
              item's tab body.
            </p>
          </div>
        </div>

        <div className="-ml-[15%] -mt-[5%] hidden md:block">
          <img src={projects} alt="" />
        </div>
      </section>
    </>
  );
};

export default OurProject;
