import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <section className="bg-contactBg bg-cover bg-no-repeat max-w-[1920px] mx-auto">
        <div className="container max-w-[1260px] mx-auto px-4 md:px-6 py-[30px] md:flex justify-between items-center">
          <div className="space-y-3">
            <h1 className="text-white font-roboto text-lg uppercase font-semibold ">
              We are ready to build your dream tell us more about your project
            </h1>

            <p className="font-openSans text-white text-sm">
              We are available for 24/7. Reach out to us if you have any queries
            </p>
          </div>

          <div className="mt-2 md:mt-0">
            <Link
              to="/contact"
              type="button"
              className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-inter rounded-sm  bg-gradient-to-r from-rose-800 via-pink-700 to-rose-600 text-white hover:bg-primary w-fit md:w-auto relative overflow-hidden group hover:bg-gradient-to-r hover:from-red-800 hover:to-pink-600 hover:ring-2 hover:ring-offset-2 hover:ring-red-700 transition-all ease-out duration-300 mr-1 shadow-xl"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative font-semibold font-inter uppercase">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
