import logo from "../assets/photos/logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  // window.addEventListener("scroll", function () {
  //   var navbar = document.querySelector("header");
  //   if (window.scrollY > 0) {
  //     navbar.style.backgroundColor = "black";
  //     // navbar.style.paddingTop = "10px";
  //     // navbar.style.paddingBottom = "10px";
  //   } else {
  //     navbar.style.backgroundColor = "transparent";
  //     // navbar.style.paddingTop = "30px";
  //     // navbar.style.paddingBottom = "30px";
  //   }
  // });
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-col w-full md:fixed md:z-50 md:top-0 bg-black">
        <nav
          className="relative max-w-[1360px] w-full mx-auto py-3 px-4 md:flex md:items-center md:justify-between md:py-[20px] md:px-0 lg:px-6 2xl:px-0 xl:mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                src={logo}
                className="w-fit h-8 md:h-[58px]"
                aria-label="Brand Logo"
              />
            </Link>
            {/* toggle btn  */}
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-[45px] md:mt-0 md:ps-7 font-ubuntu font-[400]">
              <NavLink
                className="text-white font-ubuntu md:py-[10px] hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-b-4 aria-[current=page]:border-primary aria-[current=page]:font-[700]"
                to="/"
                aria-current="page"
              >
                Home
              </NavLink>

              <NavLink
                className="text-white font-ubuntu md:py-[10px] hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-b-4 aria-[current=page]:border-primary aria-[current=page]:font-[700]"
                to="/about-us"
              >
                About Us
              </NavLink>
              <NavLink
                className="text-white font-ubuntu md:py-[10px] hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-b-4 aria-[current=page]:border-primary aria-[current=page]:font-[700]"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className="text-white font-ubuntu md:py-[10px] hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-b-4 aria-[current=page]:border-primary aria-[current=page]:font-[700]"
                to="/projects"
              >
                Projects
              </NavLink>
              <NavLink
                className="text-white font-ubuntu md:py-[10px] hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-b-4 aria-[current=page]:border-primary aria-[current=page]:font-[700]"
                to="/team"
              >
                Team
              </NavLink>
              {/* <NavLink
                className="text-white font-ubuntu md:py-[10px] hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-b-4 aria-[current=page]:border-primary aria-[current=page]:font-[700]"
                to="/contact"
              >
                Contact
              </NavLink> */}

              {/* <div>
                <button
                  type="button"
                  className="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                  data-hs-theme-click-value="dark"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                  data-hs-theme-click-value="light"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
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
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 8a2 2 0 1 0 4 4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                </button>
              </div> */}

              <Link
                to="/contact"
                type="button"
                className="py-3.5 px-6 inline-flex items-center gap-x-2 text-sm font-ubuntu  bg-gradient-to-r from-rose-800 to-rose-600 text-white hover:bg-primary w-fit md:w-auto relative overflow-hidden group hover:bg-gradient-to-r hover:from-red-800 hover:to-pink-600  hover:ring-red-700 transition-all ease-out duration-300 mr-1"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative font-semibold">Contact Us</span>
              </Link>

              {/* <a
                href="#_"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Button Text</span>
              </a> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
