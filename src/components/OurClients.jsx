import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import l1 from "../assets/clients/l1.jpg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const OurClients = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 6,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
  };

  const { data } = useQuery({
    queryKey: ["partnersData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://backend.dg-bangla.com/api/v1/partners/get/all"
        );

        return response.data?.data;
      } catch (error) {
        // Handle errors here
        throw new Error("Network response was not ok");
      }
    },
  });

  return (
    <>
      {/* <!-- Clients --> */}
      <section className="max-w-[1920px] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Title --> */}
        <div className="mx-auto text-center mb-6 flex items-center gap-[20px] justify-center">
          <svg
            width="455"
            height="9"
            viewBox="0 0 455 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="454.368"
              height="1"
              transform="translate(0 4)"
              fill="#D7D7D7"
            />
            <rect width="9" height="9" fill="#A8223B" />
            <rect x="445" width="9" height="9" fill="#A8223B" />
          </svg>

          <h2 className="font-ubuntu uppercase text-[18px] md:text-[22px] md:leading-[32px]">
            MORE THAN 100 PARTNERS TRUST
            <span className="text-primary font-[500]">DG Bangla</span>
          </h2>

          <svg
            width="455"
            height="9"
            viewBox="0 0 455 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="454.368"
              height="1"
              transform="translate(0 4)"
              fill="#D7D7D7"
            />
            <rect width="9" height="9" fill="#A8223B" />
            <rect x="445" width="9" height="9" fill="#A8223B" />
          </svg>
        </div>
        {/* <!-- End Title --> */}

        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3}
          centerMode={false}
          className="photos"
          containerClass="container-with-dots"
          customTransition="all 3s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
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
          shouldResetAutoplay={false}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          transitionDuration={3000}
        >
          {data ? (
            data?.images1?.map((image, index) => (
              <img src={image} alt="" key={index} />
            ))
          ) : (
            <>
              <img src={l1} className="hidden" />
            </>
          )}
        </Carousel>

        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3}
          centerMode={false}
          className="photos md:mb-10 md:mt-[70px]"
          containerClass="container-with-dots"
          customTransition="all 3s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind
          rewindWithAnimation={true}
          rtl={true}
          shouldResetAutoplay={false}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          transitionDuration={3000}
        >
          {data ? (
            data?.images2?.map((image, index) => (
              <img src={image} alt="" key={index} />
            ))
          ) : (
            <>
              <img src={l1} className="hidden" />
            </>
          )}
        </Carousel>
      </section>
      {/* <!-- End Clients --> */}
    </>
  );
};

export default OurClients;
