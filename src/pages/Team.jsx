import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import t1 from "../assets/team/t1.png";
import t2 from "../assets/team/t2.png";
import t3 from "../assets/team/t3.png";
import Fade from "react-reveal/Fade";

const Team = () => {
  return (
    <>
      <section>
        <div className="w-full h-[300px] bg-teamBg bg-cover bg-no-repeat">
          <Navbar />
          <h1 className="text-4xl md:text-[60px] font-poppins uppercase text-white text-center font-semibold">
            Management Team
          </h1>
        </div>

        <div className="container max-w-[1360px] mx-auto mt-[22px] pb-[80px]">
          <div className="font-openSans font-bold">
            <ol
              className="flex items-center whitespace-nowrap"
              aria-label="Breadcrumb"
            >
              <li className="inline-flex items-center">
                <Link
                  className="flex items-center text-gray-500 hover:text-primary focus:outline-none focus:text-primary dark:focus:text-blue-500"
                  to="/"
                >
                  <svg
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
                  </svg>
                  Home
                </Link>

                <svg
                  className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-primary"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </li>
              <li
                className="inline-flex items-center font-bold text-primary truncate dark:text-gray-200"
                aria-current="page"
              >
                Management Team
              </li>
            </ol>
          </div>
        </div>

        <section className="bg-teamBg2 bg-cover bg-no-repeat pt-16 pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-[25px]">
              <div className="flex justify-center gap-4 items-center">
                <div className="flex flex-col">
                  <hr className="border-t-2 border-primary w-8 ml-auto" />
                  <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
                </div>

                <Fade bottom>
                  <h1 className="font-roboto text-[35px] font-[700] uppercase text-white">
                    <span className="text-primary">Our</span> Team
                  </h1>
                </Fade>

                <div className="flex flex-col ">
                  <hr className="border-t-2 border-primary w-8" />
                  <hr className="border-t-2 border-primary w-5 mt-3" />
                </div>
              </div>

              <p className="text-center font-openSans text-white mt-2 normal-case w-[50%] mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-fit mx-auto">
              <div className="text-center pb-4 bg-[#FBFBFB] mt-6">
                <img
                  alt="Dilruba Akhter"
                  className="mx-auto object-cover"
                  src={t1}
                />
                <div className="">
                  <h3 className="mt-4 text-xl font-semibold text-gray-600 font-roboto">
                    Dilruba Akhter
                  </h3>
                  <p className="text-gray-600 font-poppins">HR, Admin</p>
                </div>
              </div>

              <div className="text-center bg-primary pb-4 text-white">
                <img
                  alt="Engr. Arsad Parvez"
                  className="mx-auto object-cover"
                  src={t2}
                />
                <h3 className="mt-4 text-xl font-semibold font-roboto">
                  Proprietor Engr. Arsad Parvez
                </h3>
                <p className="font-openSans">CEO & Founder</p>
              </div>

              <div className="text-center bg-[#FBFBFB] pb-4 mt-6">
                <img
                  alt="Md. Saiful Islam"
                  className="mx-auto object-cover"
                  src={t3}
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-600 font-roboto">
                  Md. Saiful Islam
                </h3>
                <p className="text-gray-600 font-openSans">
                  Finance & Accounts
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Team;
