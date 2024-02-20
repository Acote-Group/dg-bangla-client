import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import t1 from "../assets/team/t1.png";
import t2 from "../assets/team/t2.png";
import t3 from "../assets/team/t3.png";
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

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 w-fit mx-auto">
              <div className="text-center bg-[#FBFBFB] mt-6">
                <img
                  alt="Dilruba Akhter"
                  className="mx-auto object-cover"
                  src={t1}
                />
                <div className="border-l-8 border-primary py-4 text-start pl-8 hover:bg-primary hover:text-white group">
                  <h3 className="text-xl font-semibold font-roboto">
                    Dilruba Akhter
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    HR, Admin
                  </p>
                </div>
              </div>

              <div className="text-center pb-4">
                <img
                  alt="Engr. Arsad Parvez"
                  className="mx-auto object-cover"
                  src={t2}
                />
                <div className="border-l-8 border-primary py-4 text-start pl-8 hover:bg-primary hover:text-white group">
                  <h3 className="text-xl font-semibold font-roboto">
                    Proprietor Engr. Arsad Parvez
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    MD & Founder
                  </p>
                </div>
              </div>

              <div className="text-center bg-[#FBFBFB] pb-4 mt-6">
                <img
                  alt="Md. Saiful Islam"
                  className="mx-auto object-cover"
                  src={t3}
                />

                <div className="border-l-8 border-primary py-4 text-start pl-8 hover:bg-primary hover:text-white group">
                  <h3 className="text-xl font-semibold font-roboto">
                    Md. Saiful Islam
                  </h3>
                  <p className="text-[#6E6E6E] group-hover:text-white">
                    Finance & Accounts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GetConsultation />
      </section>
    </>
  );
};

export default Team;
