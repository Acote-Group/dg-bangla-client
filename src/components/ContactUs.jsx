import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <section className="bg-contactBg bg-cover bg-no-repeat">
        <div className="container max-w-[1260px] mx-auto px-4 md:px-6 py-[30px] md:flex justify-between items-center">
          <div className="space-y-3">
            <h1 className="text-white font-roboto text-lg uppercase font-semibold ">
              We are ready to build your dream tell us more about your project
            </h1>

            <p className="font-openSans text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse viverra mauris eget tortor.
            </p>
          </div>

          <div className="mt-2 md:mt-0">
            <Link
              to="/contact"
              className="text-white font-roboto font-semibold text-sm bg-primary px-4 py-3 uppercase "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
