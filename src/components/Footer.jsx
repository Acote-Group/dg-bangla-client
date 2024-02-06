import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-primary text-white font-inter max-w-[1920px] mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h5 className="font-semibold uppercase mb-4">Headquarter</h5>
            <p>
              House-456, Road 6, Avenue- 06, <br /> Mirpur DOHS, Dhaka
            </p>
            <p className="my-4">+880244806615</p>
            <a className="text-primary hover:text-primary" href="#">
              Find us on map
            </a>
          </div>
          <div>
            <h5 className="font-semibold uppercase mb-4">Sales Offices</h5>
            <p>
              House-456, Road 6, Avenue- 06, <br /> Mirpur DOHS, Dhaka
            </p>
            <p className="my-4">+880244806615</p>
            <a className="text-primary hover:text-primary" href="#">
              Find us on map
            </a>
          </div>
          <div>
            <h5 className="font-semibold uppercase mb-4">Subscription</h5>
            <p className="mb-4">For more information, please join us.</p>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 mb-4 text-black"
              placeholder="Enter Your Email"
            />
            <Link
              to="/contact"
              type="button"
              className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-inter rounded-sm  bg-gradient-to-r from-rose-800 via-pink-700 to-rose-600 text-white hover:bg-primary w-fit md:w-auto relative overflow-hidden group hover:bg-gradient-to-r hover:from-red-800 hover:to-pink-600 hover:ring-2 hover:ring-offset-2 hover:ring-red-700 transition-all ease-out duration-300 mr-1 shadow-xl"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease "></span>
              <span className="relative font-semibold font-inter">Sign Up</span>
            </Link>
          </div>
        </div>
        <div className=" bg-contactBg bg-cover bg-no-repeat py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-white">
              © {currentYear} DG Bangla. All rights reserved.
            </p>
            <p className="text-sm text-white mt-4 sm:mt-0">DG Bangla</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
