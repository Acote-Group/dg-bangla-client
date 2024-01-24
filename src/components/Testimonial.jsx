import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from "react-reveal/Fade";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <section className="bg-testoBg bg-no-repeat bg-cover py-[20px] ">
        <div className="w-auto max-w-[1620px] mx-auto">
          <div className="flex justify-center gap-4 items-center mb-16">
            <div className="flex flex-col">
              <hr className="border-t-2 border-primary w-8 ml-auto" />
              <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
            </div>

            <Fade bottom>
              <h1 className="font-roboto text-xl md:text-[35px] font-[700] uppercase text-white">
                <span className="text-primary">What Our</span> Clients Say
              </h1>
            </Fade>

            <div className="flex flex-col ">
              <hr className="border-t-2 border-primary w-8" />
              <hr className="border-t-2 border-primary w-5 mt-3" />
            </div>
          </div>

          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className="mb-16"
            containerClass="container-with-dots"
            draggable
            focusOnSelect={false}
            infinite
            itemClass="px-6 flex justify-center cursor-pointer pb-16"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            dotListClass=""
          >
            <div className="flex flex-col items-center justify-center w-full space-y-6">
              <svg
                width="38"
                height="40"
                viewBox="0 0 38 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_34_4128)">
                  <path
                    d="M17.5713 21.4285V29.9999C17.5713 31.1904 17.1547 32.2023 16.3213 33.0356C15.488 33.869 14.4761 34.2856 13.2856 34.2856H4.71418C3.52371 34.2856 2.5118 33.869 1.67847 33.0356C0.845134 32.2023 0.428467 31.1904 0.428467 29.9999V14.2856C0.428467 12.738 0.729806 11.2611 1.33248 9.85484C1.93516 8.44859 2.7499 7.23207 3.77668 6.20529C4.80347 5.1785 6.01998 4.36377 7.42623 3.76109C8.83249 3.15841 10.3094 2.85707 11.857 2.85707H13.2856C13.6725 2.85707 14.0073 2.99844 14.2901 3.28118C14.5728 3.56392 14.7142 3.89874 14.7142 4.28564V7.14279C14.7142 7.52969 14.5728 7.86451 14.2901 8.14725C14.0073 8.42999 13.6725 8.57136 13.2856 8.57136H11.857C10.2797 8.57136 8.93293 9.12939 7.81686 10.2455C6.70079 11.3615 6.14275 12.7083 6.14275 14.2856V14.9999C6.14275 15.5952 6.35109 16.1011 6.76775 16.5178C7.18442 16.9345 7.69037 17.1428 8.28561 17.1428H13.2856C14.4761 17.1428 15.488 17.5595 16.3213 18.3928C17.1547 19.2261 17.5713 20.238 17.5713 21.4285ZM37.5713 21.4285V29.9999C37.5713 31.1904 37.1547 32.2023 36.3213 33.0356C35.488 33.869 34.4761 34.2856 33.2856 34.2856H24.7142C23.5237 34.2856 22.5118 33.869 21.6785 33.0356C20.8451 32.2023 20.4285 31.1904 20.4285 29.9999V14.2856C20.4285 12.738 20.7298 11.2611 21.3325 9.85484C21.9352 8.44859 22.7499 7.23207 23.7767 6.20529C24.8035 5.1785 26.02 4.36377 27.4262 3.76109C28.8325 3.15841 30.3094 2.85707 31.857 2.85707H33.2856C33.6725 2.85707 34.0073 2.99844 34.2901 3.28118C34.5728 3.56392 34.7142 3.89874 34.7142 4.28564V7.14279C34.7142 7.52969 34.5728 7.86451 34.2901 8.14725C34.0073 8.42999 33.6725 8.57136 33.2856 8.57136H31.857C30.2797 8.57136 28.9329 9.12939 27.8169 10.2455C26.7008 11.3615 26.1428 12.7083 26.1428 14.2856V14.9999C26.1428 15.5952 26.3511 16.1011 26.7678 16.5178C27.1844 16.9345 27.6904 17.1428 28.2856 17.1428H33.2856C34.4761 17.1428 35.488 17.5595 36.3213 18.3928C37.1547 19.2261 37.5713 20.238 37.5713 21.4285Z"
                    fill="#A8223B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_4128">
                    <rect
                      width="37.16"
                      height="40"
                      fill="white"
                      transform="matrix(1 0 0 -1 0.419922 40)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h1 className="leading-loose text-white font-openSans text-sm text-center w-3/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy .
              </h1>

              <div className="mt-6 -mx-2 flex flex-col justify-center">
                <div className="mx-2">
                  <h1 className="font-semibold text-white dark:text-white font-openSans text-center">
                    Robbert
                  </h1>
                </div>

                <img
                  className="object-cover mx-auto rounded-full w-[90px] h-[90px] mt-2"
                  src="https://avatar.iran.liara.run/public/15"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full space-y-6">
              <svg
                width="38"
                height="40"
                viewBox="0 0 38 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_34_4128)">
                  <path
                    d="M17.5713 21.4285V29.9999C17.5713 31.1904 17.1547 32.2023 16.3213 33.0356C15.488 33.869 14.4761 34.2856 13.2856 34.2856H4.71418C3.52371 34.2856 2.5118 33.869 1.67847 33.0356C0.845134 32.2023 0.428467 31.1904 0.428467 29.9999V14.2856C0.428467 12.738 0.729806 11.2611 1.33248 9.85484C1.93516 8.44859 2.7499 7.23207 3.77668 6.20529C4.80347 5.1785 6.01998 4.36377 7.42623 3.76109C8.83249 3.15841 10.3094 2.85707 11.857 2.85707H13.2856C13.6725 2.85707 14.0073 2.99844 14.2901 3.28118C14.5728 3.56392 14.7142 3.89874 14.7142 4.28564V7.14279C14.7142 7.52969 14.5728 7.86451 14.2901 8.14725C14.0073 8.42999 13.6725 8.57136 13.2856 8.57136H11.857C10.2797 8.57136 8.93293 9.12939 7.81686 10.2455C6.70079 11.3615 6.14275 12.7083 6.14275 14.2856V14.9999C6.14275 15.5952 6.35109 16.1011 6.76775 16.5178C7.18442 16.9345 7.69037 17.1428 8.28561 17.1428H13.2856C14.4761 17.1428 15.488 17.5595 16.3213 18.3928C17.1547 19.2261 17.5713 20.238 17.5713 21.4285ZM37.5713 21.4285V29.9999C37.5713 31.1904 37.1547 32.2023 36.3213 33.0356C35.488 33.869 34.4761 34.2856 33.2856 34.2856H24.7142C23.5237 34.2856 22.5118 33.869 21.6785 33.0356C20.8451 32.2023 20.4285 31.1904 20.4285 29.9999V14.2856C20.4285 12.738 20.7298 11.2611 21.3325 9.85484C21.9352 8.44859 22.7499 7.23207 23.7767 6.20529C24.8035 5.1785 26.02 4.36377 27.4262 3.76109C28.8325 3.15841 30.3094 2.85707 31.857 2.85707H33.2856C33.6725 2.85707 34.0073 2.99844 34.2901 3.28118C34.5728 3.56392 34.7142 3.89874 34.7142 4.28564V7.14279C34.7142 7.52969 34.5728 7.86451 34.2901 8.14725C34.0073 8.42999 33.6725 8.57136 33.2856 8.57136H31.857C30.2797 8.57136 28.9329 9.12939 27.8169 10.2455C26.7008 11.3615 26.1428 12.7083 26.1428 14.2856V14.9999C26.1428 15.5952 26.3511 16.1011 26.7678 16.5178C27.1844 16.9345 27.6904 17.1428 28.2856 17.1428H33.2856C34.4761 17.1428 35.488 17.5595 36.3213 18.3928C37.1547 19.2261 37.5713 20.238 37.5713 21.4285Z"
                    fill="#A8223B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_4128">
                    <rect
                      width="37.16"
                      height="40"
                      fill="white"
                      transform="matrix(1 0 0 -1 0.419922 40)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h1 className="leading-loose text-white font-openSans text-sm text-center w-3/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy .
              </h1>

              <div className="mt-6 -mx-2 flex flex-col justify-center">
                <div className="mx-2">
                  <h1 className="font-semibold text-white dark:text-white font-openSans text-center">
                    Michael
                  </h1>
                </div>

                <img
                  className="object-cover mx-auto rounded-full w-[90px] h-[90px] mt-2"
                  src="https://avatar.iran.liara.run/public/2"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full space-y-6">
              <svg
                width="38"
                height="40"
                viewBox="0 0 38 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_34_4128)">
                  <path
                    d="M17.5713 21.4285V29.9999C17.5713 31.1904 17.1547 32.2023 16.3213 33.0356C15.488 33.869 14.4761 34.2856 13.2856 34.2856H4.71418C3.52371 34.2856 2.5118 33.869 1.67847 33.0356C0.845134 32.2023 0.428467 31.1904 0.428467 29.9999V14.2856C0.428467 12.738 0.729806 11.2611 1.33248 9.85484C1.93516 8.44859 2.7499 7.23207 3.77668 6.20529C4.80347 5.1785 6.01998 4.36377 7.42623 3.76109C8.83249 3.15841 10.3094 2.85707 11.857 2.85707H13.2856C13.6725 2.85707 14.0073 2.99844 14.2901 3.28118C14.5728 3.56392 14.7142 3.89874 14.7142 4.28564V7.14279C14.7142 7.52969 14.5728 7.86451 14.2901 8.14725C14.0073 8.42999 13.6725 8.57136 13.2856 8.57136H11.857C10.2797 8.57136 8.93293 9.12939 7.81686 10.2455C6.70079 11.3615 6.14275 12.7083 6.14275 14.2856V14.9999C6.14275 15.5952 6.35109 16.1011 6.76775 16.5178C7.18442 16.9345 7.69037 17.1428 8.28561 17.1428H13.2856C14.4761 17.1428 15.488 17.5595 16.3213 18.3928C17.1547 19.2261 17.5713 20.238 17.5713 21.4285ZM37.5713 21.4285V29.9999C37.5713 31.1904 37.1547 32.2023 36.3213 33.0356C35.488 33.869 34.4761 34.2856 33.2856 34.2856H24.7142C23.5237 34.2856 22.5118 33.869 21.6785 33.0356C20.8451 32.2023 20.4285 31.1904 20.4285 29.9999V14.2856C20.4285 12.738 20.7298 11.2611 21.3325 9.85484C21.9352 8.44859 22.7499 7.23207 23.7767 6.20529C24.8035 5.1785 26.02 4.36377 27.4262 3.76109C28.8325 3.15841 30.3094 2.85707 31.857 2.85707H33.2856C33.6725 2.85707 34.0073 2.99844 34.2901 3.28118C34.5728 3.56392 34.7142 3.89874 34.7142 4.28564V7.14279C34.7142 7.52969 34.5728 7.86451 34.2901 8.14725C34.0073 8.42999 33.6725 8.57136 33.2856 8.57136H31.857C30.2797 8.57136 28.9329 9.12939 27.8169 10.2455C26.7008 11.3615 26.1428 12.7083 26.1428 14.2856V14.9999C26.1428 15.5952 26.3511 16.1011 26.7678 16.5178C27.1844 16.9345 27.6904 17.1428 28.2856 17.1428H33.2856C34.4761 17.1428 35.488 17.5595 36.3213 18.3928C37.1547 19.2261 37.5713 20.238 37.5713 21.4285Z"
                    fill="#A8223B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_4128">
                    <rect
                      width="37.16"
                      height="40"
                      fill="white"
                      transform="matrix(1 0 0 -1 0.419922 40)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h1 className="leading-loose text-white font-openSans text-sm text-center w-3/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy .
              </h1>

              <div className="mt-6 -mx-2 flex flex-col justify-center">
                <div className="mx-2">
                  <h1 className="font-semibold text-white dark:text-white font-openSans text-center">
                    Jim
                  </h1>
                </div>

                <img
                  className="object-cover mx-auto rounded-full w-[90px] h-[90px] mt-2"
                  src="https://avatar.iran.liara.run/public/28"
                  alt=""
                />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
