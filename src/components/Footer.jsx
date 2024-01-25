const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-primary text-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h5 className="font-semibold uppercase mb-4">Headquarter</h5>
            <p>Rose Pool (6th), H# 557, R# 9, Mirpur DOHS, Dhaka</p>
            <p className="my-4">+880244806615</p>
            <a className="text-primary hover:text-primary" href="#">
              Find us on map
            </a>
          </div>
          <div>
            <h5 className="font-semibold uppercase mb-4">Sales Offices</h5>
            <p>Rose Pool (6th), H# 557, R# 9, Mirpur DOHS, Dhaka</p>
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
            <button className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-700 hover:bg-primary text-white font-semibold rounded-sm shadow-lg">
              Sign up
            </button>
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
