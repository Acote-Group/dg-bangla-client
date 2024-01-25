const AwesomeFacts = () => {
  return (
    <>
      <section>
        <div className="bg-aboutBg2 bg-cover bg-no-repeat text-white py-12 md:py-[50px]">
          <div className="container max-w-6xl mx-auto px-4 font-roboto">
            <div className="text-right mb-6 md:mb-10">
              <h2 className="text-2xl font-semibold">
                The Construction Company
              </h2>
              <h1 className="text-[60px] font-semibold uppercase">
                Awesome Facts
              </h1>
              <p className="mt-4 text-sm md:text-base font-openSans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
                tortor mi, eleifend ornare lobortis non. Nulla porta purus quis
                lacinia ultrices. Proin aliquam sem at nibh hendrerit sagittis.
                Nullam ornare odio eu lacus tincidunt malesuada.
              </p>
            </div>

            <div className="flex flex-wrap justify-end gap-8">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <h3 className="text-4xl font-bold text-primary">1150</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="4"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                </div>
                <p className="mt-2 text-sm uppercase">Project Completed</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <h3 className="text-4xl font-bold text-primary">5223</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <p className="mt-2 text-sm uppercase">Happy Clients</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <h3 className="text-4xl font-bold text-primary">4522</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect
                      width="20"
                      height="14"
                      x="2"
                      y="7"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <p className="mt-2 text-sm uppercase">Workers Employed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwesomeFacts;
