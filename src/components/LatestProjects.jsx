import waveLine from "../assets/photos/wave-line.png";
import waveLine2 from "../assets/photos/waveLine2.png";
import p1 from "../assets/project/p1.png";
import p2 from "../assets/project/p2.png";
import p3 from "../assets/project/p3.png";
import p4 from "../assets/project/p4.png";
import p5 from "../assets/project/p5.png";
import p6 from "../assets/project/p6.png";
import Fade from "react-reveal/Fade";

const LatestProjects = () => {
  return (
    <>
      <section className="w-auto">
        <div className="hidden md:block">
          <img src={waveLine} alt="" />
        </div>

        <div className="w-auto max-w-[1360px] mx-auto">
          <div className="flex flex-col items-center mb-[25px]">
            <div className="flex justify-center gap-4 items-center">
              <div className="flex flex-col">
                <hr className="border-t-2 border-primary w-8 ml-auto" />
                <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
              </div>

              <Fade bottom>
                <h1 className="font-roboto text-[35px] font-[700] uppercase">
                  <span className="text-primary">LATEST</span> PROJECTS
                </h1>
              </Fade>

              <div className="flex flex-col ">
                <hr className="border-t-2 border-primary w-8" />
                <hr className="border-t-2 border-primary w-5 mt-3" />
              </div>
            </div>

            <p className="text-center font-openSans text-[#767676] mt-2 normal-case w-[80%] mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>

          <div>
            <div
              className="pb-1 flex space-x-none md:space-x-6 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 justify-center"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 active font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-1"
                data-hs-tab="#horizontal-scroll-tab-1"
                aria-controls="horizontal-scroll-tab-1"
                role="tab"
              >
                All <span className="hidden md:block">&nbsp;</span> /
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-2"
                data-hs-tab="#horizontal-scroll-tab-2"
                aria-controls="horizontal-scroll-tab-2"
                role="tab"
              >
                House <span className="hidden md:block">&nbsp;</span> /
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-3"
                data-hs-tab="#horizontal-scroll-tab-3"
                aria-controls="horizontal-scroll-tab-3"
                role="tab"
              >
                Building <span className="hidden md:block">&nbsp;</span> /
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-4"
                data-hs-tab="#horizontal-scroll-tab-4"
                aria-controls="horizontal-scroll-tab-4"
                role="tab"
              >
                Office <span className="hidden md:block">&nbsp;</span> /
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-5"
                data-hs-tab="#horizontal-scroll-tab-5"
                aria-controls="horizontal-scroll-tab-5"
                role="tab"
              >
                Garden <span className="hidden md:block">&nbsp;</span> /
              </button>
              <button
                type="button"
                className="hs-tab-active:font-semibold hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-primary focus:outline-none focus:text-primary disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 font-openSans uppercase text-sm md:text-base font-semibold"
                id="horizontal-scroll-tab-item-5"
                data-hs-tab="#horizontal-scroll-tab-5"
                aria-controls="horizontal-scroll-tab-5"
                role="tab"
              >
                Interior
              </button>
            </div>

            <div className="mt-3">
              <div
                id="horizontal-scroll-tab-1"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-1"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2 md:p-0">
                  <div className="space-y-2">
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    />
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                    />
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                  </div>
                  <div className="space-y-2">
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    />
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    />
                  </div>
                  <div className="space-y-2">
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    />
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                    />
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="space-y-2">
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                    />
                    <img
                      className="w-full h-auto object-cover"
                      src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
                    />
                  </div>
                </div>
              </div>
              <div
                id="horizontal-scroll-tab-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0">
                  <img className="w-full h-auto object-cover" src={p1} />
                  <img className="w-full h-auto object-cover" src={p2} />
                  <img className="w-full h-auto object-cover" src={p3} />
                  <img className="w-full h-auto object-cover" src={p4} />
                  <img className="w-full h-auto object-cover" src={p5} />
                  <img className="w-full h-auto object-cover" src={p6} />
                </div>
              </div>
              <div
                id="horizontal-scroll-tab-3"
                className="hidden"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0">
                  <img className="w-full h-auto object-cover" src={p1} />
                  <img className="w-full h-auto object-cover" src={p2} />
                  <img className="w-full h-auto object-cover" src={p3} />
                  <img className="w-full h-auto object-cover" src={p4} />
                  <img className="w-full h-auto object-cover" src={p5} />
                  <img className="w-full h-auto object-cover" src={p6} />
                </div>
              </div>
              <div
                id="horizontal-scroll-tab-4"
                className="hidden"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0">
                  <img className="w-full h-auto object-cover" src={p1} />
                  <img className="w-full h-auto object-cover" src={p2} />
                  <img className="w-full h-auto object-cover" src={p3} />
                  <img className="w-full h-auto object-cover" src={p4} />
                  <img className="w-full h-auto object-cover" src={p5} />
                  <img className="w-full h-auto object-cover" src={p6} />
                </div>
              </div>
              <div
                id="horizontal-scroll-tab-5"
                className="hidden"
                role="tabpanel"
                aria-labelledby="horizontal-scroll-tab-item-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-none p-2 md:p-0">
                  <img className="w-full h-auto object-cover" src={p1} />
                  <img className="w-full h-auto object-cover" src={p2} />
                  <img className="w-full h-auto object-cover" src={p3} />
                  <img className="w-full h-auto object-cover" src={p4} />
                  <img className="w-full h-auto object-cover" src={p5} />
                  <img className="w-full h-auto object-cover" src={p6} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={waveLine2} alt="" className="mt-[30px]" />
        </div>
      </section>
    </>
  );
};

export default LatestProjects;
