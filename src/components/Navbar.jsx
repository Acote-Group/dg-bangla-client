import { Facebook, Twitter, Linkedin, MessageCircleIcon } from "lucide-react";
import logo from "../assets/photos/logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector("header");
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "black";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-col w-full fixed z-50 top-0">
        {/* <!-- TopBar --> */}
        {/* <div className="mx-auto w-full h-[15x] px-4 sm:px-6 lg:px-8 bg-[#A8223B] hidden md:block">
          <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-x-5 w-full sm:pt-2 sm:pb-0 my-2">
            <div className="flex justify-center items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_216_527)">
                  <mask
                    id="mask0_216_527"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <path d="M20 0H0V20H20V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_216_527)">
                    <path
                      d="M11.1288 1.22496C10.5453 0.512293 9.4555 0.512295 8.87208 1.22496L8.04552 2.2345C7.98887 2.30369 7.89437 2.32902 7.81072 2.29742L6.59014 1.83639C5.72852 1.51095 4.78469 2.05586 4.63572 2.96478L4.42469 4.25234C4.41022 4.34059 4.34105 4.40977 4.25279 4.42423L2.96524 4.63526C2.05632 4.78423 1.5114 5.72805 1.83685 6.58968L2.29787 7.81026C2.32947 7.89392 2.30415 7.98842 2.23496 8.04507L1.22542 8.87158C0.512751 9.45508 0.512753 10.5449 1.22542 11.1284L2.23496 11.9549C2.30415 12.0116 2.32947 12.1061 2.29787 12.1898L1.83685 13.4103C1.51141 14.2719 2.05632 15.2158 2.96524 15.3648L4.25279 15.5758C4.34105 15.5903 4.41022 15.6594 4.42469 15.7477L4.63572 17.0352C4.78469 17.9441 5.72851 18.489 6.59014 18.1636L7.81072 17.7026C7.89437 17.671 7.98887 17.6963 8.04552 17.7655L8.87208 18.775C9.4555 19.4877 10.5453 19.4877 11.1288 18.775L11.9553 17.7655C12.012 17.6963 12.1065 17.671 12.1902 17.7026L13.4107 18.1636C14.2724 18.489 15.2163 17.9441 15.3652 17.0352L15.5763 15.7477C15.5907 15.6594 15.6598 15.5903 15.7481 15.5758L17.0357 15.3648C17.9446 15.2158 18.4895 14.2719 18.1641 13.4103L17.703 12.1898C17.6714 12.1061 17.6968 12.0116 17.7659 11.9549L18.7755 11.1284C19.4882 10.5449 19.4882 9.45508 18.7755 8.87158L17.7659 8.04507C17.6968 7.98842 17.6714 7.89392 17.703 7.81026L18.1641 6.58968C18.4895 5.72805 17.9446 4.78423 17.0357 4.63526L15.7481 4.42423C15.6598 4.40977 15.5907 4.34059 15.5763 4.25234L15.3652 2.96478C15.2163 2.05587 14.2724 1.51094 13.4107 1.83639L12.1902 2.29742C12.1065 2.32902 12.012 2.30369 11.9553 2.2345L11.1288 1.22496Z"
                      fill="#28B2FF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.0251 6.64139C15.2692 6.88547 15.2692 7.2812 15.0251 7.52528L9.19175 13.3586C9.07459 13.4758 8.91559 13.5417 8.74984 13.5417C8.58409 13.5417 8.42509 13.4758 8.30789 13.3586L4.97456 10.0253C4.73049 9.78117 4.73049 9.3855 4.97456 9.14142C5.21864 8.89733 5.61437 8.89733 5.85844 9.14142L8.74984 12.0328L14.1413 6.64139C14.3853 6.39732 14.781 6.39732 15.0251 6.64139Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_216_527">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h1 className="text-[12px] text-center font-inter text-white">
                Setting the Standard for Excellence in Bangladesh Construction.
              </h1>
            </div>

            <div className="flex justify-center items-center gap-6">
              <a
                href="https://www.facebook.com/dg.bangla.bd"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook
                  size={18}
                  strokeWidth={1}
                  stroke="white"
                  fill="white"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Twitter
                  size={18}
                  strokeWidth={1}
                  stroke="white"
                  fill="white"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Linkedin
                  size={18}
                  strokeWidth={1}
                  stroke="white"
                  fill="white"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <MessageCircleIcon
                  size={18}
                  strokeWidth={1}
                  stroke="white"
                  fill="white"
                />
              </a>
            </div>
          </div>
        </div> */}
        {/* <!-- End Topbar --> */}

        <nav
          className="relative 2xl:max-w-[1360px] w-full mx-auto py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-0 lg:px-6 2xl:px-0 xl:mx-auto dark:border-gray-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                src={logo}
                className="flex-none text-xl font-semibold dark:text-white w-[238px] h-[58px]"
                aria-label="Brand"
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
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7 font-semibold">
              <NavLink
                className="text-white font-inter md:py-6 dark:text-white hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-t-4 aria-[current=page]:border-primary"
                to="/"
                aria-current="page"
              >
                Home
              </NavLink>

              <NavLink
                className="text-white font-inter md:py-6 dark:text-white hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-t-4 aria-[current=page]:border-primary"
                to="/about-us"
              >
                About Us
              </NavLink>
              <NavLink
                className="text-white font-inter md:py-6 dark:text-white hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-t-4 aria-[current=page]:border-primary"
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className="text-white font-inter md:py-6 dark:text-white hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-t-4 aria-[current=page]:border-primary"
                to="/projects"
              >
                Projects
              </NavLink>
              <NavLink
                className="text-white font-inter md:py-6 dark:text-white hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-t-4 aria-[current=page]:border-primary"
                to="/team"
              >
                Team
              </NavLink>
              <NavLink
                className="text-white font-inter md:py-6 dark:text-white hover:text-primary aria-[current=page]:text-red-700 md:aria-[current=page]:border-t-4 aria-[current=page]:border-primary"
                to="/contact"
              >
                Contact
              </NavLink>

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
                className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-inter rounded-sm  bg-gradient-to-r from-rose-800 to-rose-600 text-white hover:bg-primary w-fit md:w-auto relative overflow-hidden group hover:bg-gradient-to-r hover:from-red-800 hover:to-pink-600 hover:ring-2 hover:ring-offset-2 hover:ring-red-700 transition-all ease-out duration-300 mr-1"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Contact Us</span>
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
