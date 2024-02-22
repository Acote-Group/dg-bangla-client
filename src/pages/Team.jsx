import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import t1 from "../assets/team/kaka.png";
import t2 from "../assets/team/kaki.png";
import Fade from "react-reveal/Fade";
import GetConsultation from "../components/GetConsultation";

const Team = () => {
  return (
    <>
      <section className="max-w-[1920px] mx-auto">
        <Navbar />
        <div className="w-full h-[300px] bg-navBg bg-cover bg-no-repeat pt-[8rem]">
          <h1 className="text-[60px] font-poppins uppercase text-white text-center font-semibold">
            Management
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
                Management
              </li>
            </ol>
          </div>
        </div>

        <div className="pt-16 pb-32 font-ubuntu">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-[25px]">
              <div className="flex justify-center gap-4 items-center">
                <div className="flex flex-col">
                  <hr className="border-t-2 border-primary w-8 ml-auto" />
                  <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
                </div>

                <Fade bottom>
                  <h1 className="leading-[44px] text-[28px] md:text-[38px] font-[700] uppercase">
                    <span className="text-primary">Our</span> Management
                  </h1>
                </Fade>

                <div className="flex flex-col ">
                  <hr className="border-t-2 border-primary w-8" />
                  <hr className="border-t-2 border-primary w-5 mt-3" />
                </div>
              </div>

              <p className="text-center mt-2 normal-case w-[80%] mx-auto">
                A dynamic group of dedicated professionals driven by passion and
                expertise. With a shared commitment to excellence, our team
                brings a diverse range of skills and experiences to the table,
                ensuring unparalleled quality in every project we undertake.
              </p>
            </div>

            {/* 1st portion  */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-8">
              <div className="text-center group transition w-full p-4 sm:w-1/2 md:w-1/4">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[100%] overflow-hidden">
                  <img
                    alt="MD. Mr. Parvez"
                    className="mx-auto object-cover size-full absolute top-0 start-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={t1}
                  />
                </div>
                <div className="border-l-8 border-[#081922] py-4 text-start pl-8 group-hover:bg-[#081922] group-hover:text-white group group-hover:border-primary">
                  <h3 className="text-[22px] leading-[24px] font-bold font-ubuntu">
                    Proprietor Engr. Arsad Parvez
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    MD & Founder
                  </p>
                </div>
              </div>

              <div className="text-center group transition w-full p-4 sm:w-1/2 md:w-1/4">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[100%] overflow-hidden">
                  <img
                    alt="Mrs. Dilruba Akhter"
                    className="mx-auto object-cover size-full absolute top-0 start-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={t2}
                  />
                </div>
                <div className="border-l-8 border-[#081922] py-4 text-start pl-8 group-hover:bg-[#081922] group-hover:text-white group group-hover:border-primary">
                  <h3 className="text-[22px] leading-[24px] font-bold font-ubuntu">
                    Dilruba Akhter
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    Chairman
                  </p>
                </div>
              </div>

              <div className="text-center group transition w-full p-4 sm:w-1/2 md:w-1/4">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[100%] overflow-hidden">
                  <img
                    alt="MD. Mr. Parvez"
                    className="mx-auto object-cover size-full absolute top-0 start-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={t1}
                  />
                </div>
                <div className="border-l-8 border-[#081922] py-4 text-start pl-8 group-hover:bg-[#081922] group-hover:text-white group group-hover:border-primary">
                  <h3 className="text-[22px] leading-[24px] font-bold font-ubuntu">
                    Name
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    GM Construction
                  </p>
                </div>
              </div>

              <div className="text-center group transition w-full p-4 sm:w-1/2 md:w-1/4">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[100%] overflow-hidden">
                  <img
                    alt="MD. Mr. Parvez"
                    className="mx-auto object-cover size-full absolute top-0 start-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={t1}
                  />
                </div>
                <div className="border-l-8 border-[#081922] py-4 text-start pl-8 group-hover:bg-[#081922] group-hover:text-white group group-hover:border-primary">
                  <h3 className="text-[22px] leading-[24px] font-bold font-ubuntu">
                    Name
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    GM Finance
                  </p>
                </div>
              </div>

              <div className="text-center group transition w-full p-4 sm:w-1/2 md:w-1/4">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[100%] overflow-hidden">
                  <img
                    alt="MD. Mr. Parvez"
                    className="mx-auto object-cover size-full absolute top-0 start-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={t1}
                  />
                </div>
                <div className="border-l-8 border-[#081922] py-4 text-start pl-8 group-hover:bg-[#081922] group-hover:text-white group group-hover:border-primary">
                  <h3 className="text-[22px] leading-[24px] font-bold font-ubuntu">
                    Name
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    AGM Business Development
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd portion  */}
            {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 w-1/2 gap-x-8 mx-auto justify-center">
              <div className="text-center group transition">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[100%] overflow-hidden">
                  <img
                    alt="MD. Mr. Parvez"
                    className="mx-auto object-cover size-full absolute top-0 start-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={t1}
                  />
                </div>
                <div className="border-l-8 border-[#081922] py-4 text-start pl-8 group-hover:bg-[#081922] group-hover:text-white group group-hover:border-primary">
                  <h3 className="text-[22px] leading-[24px] font-bold font-ubuntu">
                    Name
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    GM Finance
                  </p>
                </div>
              </div>

              <div className="text-center group transition">
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[100%] overflow-hidden">
                  <img
                    alt="MD. Mr. Parvez"
                    className="mx-auto object-cover size-full absolute top-0 start-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    src={t1}
                  />
                </div>
                <div className="border-l-8 border-[#081922] py-4 text-start pl-8 group-hover:bg-[#081922] group-hover:text-white group group-hover:border-primary">
                  <h3 className="text-[22px] leading-[24px] font-bold font-ubuntu">
                    Name
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    AGM Business Development
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <GetConsultation />
      </section>
    </>
  );
};

export default Team;
