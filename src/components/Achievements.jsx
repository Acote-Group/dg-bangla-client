import Fade from "react-reveal/Fade";

const Achievements = () => {
  return (
    <>
      <div className="bg-circleBg bg-cover bg-no-repeat p-10 lg:py-24 mb-16">
        <Fade bottom>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center max-w-[1280px] w-full mx-auto">
            <div className="flex flex-col items-start justify-center p-6 border border-white rounded w-64 h-64 transform -translate-y-8">
              <span className="text-[70px] font-inter text-white">
                100 <span className="text-[24px]">+</span>
              </span>
              <span className="mt-4 text-[#C2C2C2] font-[800] font-inter">
                Project completed
                <hr className="border-t-[6px] border-primary w-28" />
              </span>
              <p className="mt-2 text-sm font-inter text-white">
                Our interested acceptance our reasonable companions an.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center p-6 border border-white rounded w-64 h-64 transform translate-y-4">
              <span className="text-[70px] font-inter text-white">
                2001 <span className="text-[24px]">#</span>
              </span>
              <span className="mt-4 text-[#C2C2C2] font-[800] font-inter">
                Established
                <hr className="border-t-[6px] border-primary w-28" />
              </span>
              <p className="mt-2 text-sm font-inter text-white">
                Our interested acceptance our reasonable companions an.
              </p>
            </div>

            <div className="flex flex-col items-start justify-center p-6 border border-white rounded w-64 h-64 transform -translate-y-8">
              <span className="text-[70px] font-inter text-white">
                500 <span className="text-[24px]">+</span>
              </span>
              <span className="mt-4 text-[#C2C2C2] font-[800] font-inter">
                Total Employee
                <hr className="border-t-[6px] border-primary w-28" />
              </span>
              <p className="mt-2 text-sm font-inter text-white">
                Our interested acceptance our reasonable companions an.
              </p>
              {/* <div className="mt-4 w-16 h-1 bg-yellow-300"></div> */}
            </div>

            <div className="flex flex-col items-start justify-center p-6 border border-white rounded w-64 h-64 transform translate-y-4">
              <span className="text-[70px] font-inter text-white">
                529 <span className="text-[24px]">+</span>
              </span>
              <span className="mt-4 text-[#C2C2C2] font-[800] font-inter">
                Award Won
                <hr className="border-t-[6px] border-primary w-28" />
              </span>
              <p className="mt-2 text-sm font-inter text-white">
                Our interested acceptance our reasonable companions an.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Achievements;
