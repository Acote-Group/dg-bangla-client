import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
export default function AchievementCounter() {
  return (
    <>
      <section className="bg-counterBg bg-cover bg-no-repeat max-w-[1920px]">
        <div className="container max-w-[1360px] mx-auto px-4 md:px-6 justify-center md:pt-[220px] md:pb-[262px] md:flex gap-[120px]">
          <div className="font-ubuntu">
            <div className="flex items-end">
              <h1 className="font-ubuntu font-[700] 2xl:text-[180px] md:text-[90px] bg-gradient-to-r from-rose-800 to-rose-600 bg-clip-text text-transparent leading-none">
                <CountUp start={0} end={39}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <div className="">
                <svg
                  width="40"
                  height="43"
                  viewBox="0 0 40 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4658 0.660156V16.2607H39.7041V26.1924H25.4658V42.584H14.5234V26.1924H0.197266V16.2607H14.5234V0.660156H25.4658Z"
                    fill="url(#paint0_linear_1085_753)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1085_753"
                      x1="-2"
                      y1="-58.3462"
                      x2="47.7961"
                      y2="-56.9408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A8223B" />
                      <stop offset="1" stopColor="#FE385D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="13"
                  height="54"
                  viewBox="0 0 13 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H13V54L0 42.5V0Z"
                    fill="url(#paint0_linear_1092_42)"
                  />
                  <path
                    d="M0 0L12 5L6.18966 48L0 42.5V0Z"
                    fill="url(#paint1_linear_1092_42)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1092_42"
                      x1="-8.23683e-08"
                      y1="2.59615"
                      x2="14.3864"
                      y2="2.98714"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A8223B" />
                      <stop offset="1" stopColor="#FE385D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1092_42"
                      x1="-7.54529e-08"
                      y1="2.42611"
                      x2="12.1747"
                      y2="2.72571"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EC294E" />
                      <stop offset="1" stopColor="#37000A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <h1 className="font-[500] text-[#565969] text-sm uppercase leading-[32px] tracking-tight">
                  project
                </h1>
                <h2 className="font-[700] text-[36.5px] leading-[30px] text-white">
                  Completed
                </h2>
              </div>
            </div>
          </div>

          <div className="font-ubuntu">
            <div className="flex items-end">
              <h1 className="font-ubuntu font-[700] 2xl:text-[180px] md:text-[90px] bg-gradient-to-r from-rose-800 to-rose-600 bg-clip-text text-transparent leading-none">
                <CountUp start={0} end={16}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <div className="">
                <svg
                  width="40"
                  height="43"
                  viewBox="0 0 40 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4658 0.660156V16.2607H39.7041V26.1924H25.4658V42.584H14.5234V26.1924H0.197266V16.2607H14.5234V0.660156H25.4658Z"
                    fill="url(#paint0_linear_1085_753)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1085_753"
                      x1="-2"
                      y1="-58.3462"
                      x2="47.7961"
                      y2="-56.9408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A8223B" />
                      <stop offset="1" stopColor="#FE385D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="13"
                  height="54"
                  viewBox="0 0 13 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H13V54L0 42.5V0Z"
                    fill="url(#paint0_linear_1092_42)"
                  />
                  <path
                    d="M0 0L12 5L6.18966 48L0 42.5V0Z"
                    fill="url(#paint1_linear_1092_42)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1092_42"
                      x1="-8.23683e-08"
                      y1="2.59615"
                      x2="14.3864"
                      y2="2.98714"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A8223B" />
                      <stop offset="1" stopColor="#FE385D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1092_42"
                      x1="-7.54529e-08"
                      y1="2.42611"
                      x2="12.1747"
                      y2="2.72571"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EC294E" />
                      <stop offset="1" stopColor="#37000A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <h1 className="font-[500] text-[#565969] text-sm uppercase leading-[32px] tracking-tight">
                  project
                </h1>
                <h2 className="font-[700] text-[36.5px] leading-[30px] text-white">
                  Ongoing
                </h2>
              </div>
            </div>
          </div>

          <div className="font-ubuntu">
            <div className="flex items-end">
              <h1 className="font-ubuntu font-[700] 2xl:text-[180px] md:text-[90px] bg-gradient-to-r from-rose-800 to-rose-600 bg-clip-text text-transparent leading-none">
                <CountUp start={0} end={50}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <div className="">
                <svg
                  width="40"
                  height="43"
                  viewBox="0 0 40 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4658 0.660156V16.2607H39.7041V26.1924H25.4658V42.584H14.5234V26.1924H0.197266V16.2607H14.5234V0.660156H25.4658Z"
                    fill="url(#paint0_linear_1085_753)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1085_753"
                      x1="-2"
                      y1="-58.3462"
                      x2="47.7961"
                      y2="-56.9408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A8223B" />
                      <stop offset="1" stopColor="#FE385D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="13"
                  height="54"
                  viewBox="0 0 13 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H13V54L0 42.5V0Z"
                    fill="url(#paint0_linear_1092_42)"
                  />
                  <path
                    d="M0 0L12 5L6.18966 48L0 42.5V0Z"
                    fill="url(#paint1_linear_1092_42)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1092_42"
                      x1="-8.23683e-08"
                      y1="2.59615"
                      x2="14.3864"
                      y2="2.98714"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A8223B" />
                      <stop offset="1" stopColor="#FE385D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1092_42"
                      x1="-7.54529e-08"
                      y1="2.42611"
                      x2="12.1747"
                      y2="2.72571"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EC294E" />
                      <stop offset="1" stopColor="#37000A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <h1 className="font-[500] text-[#565969] text-sm uppercase leading-[32px] tracking-tight">
                  total
                </h1>
                <h2 className="font-[700] text-[36.5px] leading-[30px] text-white">
                  Employee
                </h2>
              </div>
            </div>
          </div>

          <div className="font-ubuntu">
            <div className="flex items-end">
              <h1 className="font-ubuntu font-[700] 2xl:text-[180px] md:text-[90px] bg-gradient-to-r from-rose-800 to-rose-600 bg-clip-text text-transparent leading-none">
                <CountUp start={0} end={5}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start}>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h1>
              <div className="">
                <svg
                  width="40"
                  height="43"
                  viewBox="0 0 40 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4658 0.660156V16.2607H39.7041V26.1924H25.4658V42.584H14.5234V26.1924H0.197266V16.2607H14.5234V0.660156H25.4658Z"
                    fill="url(#paint0_linear_1085_753)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1085_753"
                      x1="-2"
                      y1="-58.3462"
                      x2="47.7961"
                      y2="-56.9408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A8223B" />
                      <stop offset="1" stopColor="#FE385D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="13"
                  height="54"
                  viewBox="0 0 13 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0H13V54L0 42.5V0Z"
                    fill="url(#paint0_linear_1092_42)"
                  />
                  <path
                    d="M0 0L12 5L6.18966 48L0 42.5V0Z"
                    fill="url(#paint1_linear_1092_42)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1092_42"
                      x1="-8.23683e-08"
                      y1="2.59615"
                      x2="14.3864"
                      y2="2.98714"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A8223B" />
                      <stop offset="1" stopColor="#FE385D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1092_42"
                      x1="-7.54529e-08"
                      y1="2.42611"
                      x2="12.1747"
                      y2="2.72571"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EC294E" />
                      <stop offset="1" stopColor="#37000A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <h1 className="font-[500] text-[#565969] text-sm uppercase leading-[32px] tracking-tight">
                  total
                </h1>
                <h2 className="font-[700] text-[36.5px] leading-[30px] text-white">
                  Achievement
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
