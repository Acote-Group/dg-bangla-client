import { Link } from "react-router-dom";
import logo from "../assets/photos/logo.png";
import { MoveRight } from "lucide-react";

const GetConsultation = () => {
  return (
    <>
      <section className="bg-[#232222]">
        <div className="container w-auto max-w-[1227px] mx-auto px-4 md:px-0 space-y-6 py-[60px]">
          {/* Logo stays centered on all screens */}
          <img
            src={logo}
            alt=""
            className="w-full mx-auto md:max-w-[250px] md:mx-0"
          />

          <h1 className="font-inter text-white text-[60px] font-[800] text-center md:text-left">
            Want To Discuss Your Project?
          </h1>

          {/* Rearrange elements for smaller screens */}
          <div className="flex flex-col md:flex-row justify-between items-center w-auto lg:w-[60%]">
            <Link
              className="group relative inline-flex items-center overflow-hidden rounded bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3 text-white focus:outline-none focus:ring"
              to="/contact"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <MoveRight fill="black" />
              </span>

              <span className="uppercase font-medium transition-all group-hover:me-4">
                get a consultation
              </span>
            </Link>

            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <img
                className="inline-block h-[3.875rem] w-[3.875rem] rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />

              <div className="flex flex-col">
                <h1 className="font-inter text-white">Sales Representative</h1>
                <div className="font-inter font-[600] text-[18px] uppercase tracking-widest text-center text-white">
                  <h1>+880244806615</h1>
                  <hr className="border-t-[6px] border-primary w-full mx-auto -mt-[3px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetConsultation;
