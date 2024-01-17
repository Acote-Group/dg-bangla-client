const Footer = () => {
  return (
    <>
      <footer className="bg-[#1a1a1a] text-white font-inter">
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
              className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
              placeholder="Your email address"
              type="email"
            />
            <button className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3 bg-primary hover:bg-primary text-black font-semibold rounded-sm">
              Sign up
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 DG Bangla. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-4 sm:mt-0">DG Bangla</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
