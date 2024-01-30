import i1 from "../assets/clients/p1.jpg";
import i2 from "../assets/clients/p2.jpg";
import i3 from "../assets/clients/p3.jpg";
import i4 from "../assets/clients/p4.jpg";
import i5 from "../assets/clients/p5.jpg";
import i6 from "../assets/clients/p6.jpg";
import l1 from "../assets/clients/l1.jpg";
import l2 from "../assets/clients/l2.jpg";
import l3 from "../assets/clients/l3.jpg";
import l4 from "../assets/clients/l4.jpg";
import l5 from "../assets/clients/l5.jpg";
import l6 from "../assets/clients/l6.png";
import l7 from "../assets/clients/l7.png";
import l8 from "../assets/clients/l8.png";
import l9 from "../assets/clients/l9.jpg";
import l10 from "../assets/clients/l10.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  return (
    <>
      {/* <!-- Clients --> */}
      <div className="max-w-[1620px] px-4 py-10 sm:px-6 lg:px-8 lg:pt-10 mx-auto">
        {/* <!-- Title --> */}
        {/* <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6 text-6xl font-roboto font-bold">
          <h2 className="text-primary dark:text-gray-400">Our Alliances</h2>
        </div> */}
        {/* <!-- End Title --> */}

        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3}
          centerMode={false}
          className="photos "
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
          <img className="" src={i1} />
          <img className="" src={i2} />
          <img className="" src={i3} />
          <img className="" src={i4} />
          <img className="" src={i5} />
          <img className="" src={i6} />
        </Carousel>

        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={2}
          centerMode={false}
          className="photos md:mb-10"
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
          <img className="" src={l1} />
          <img className="" src={l2} />
          <img className="" src={l3} />
          <img className="" src={l4} />
          <img className="" src={l5} />
          <img className="" src={l6} />
          <img className="" src={l7} />
          <img className="" src={l8} />
          <img className="" src={l9} />
          <img className="" src={l10} />
        </Carousel>

        {/* <div className="flex justify-center gap-4 photos">
          <img className="" src={i1} />
          <img className="" src={i2} />
          <img className="" src={i3} />
          <img className="" src={i4} />
          <img className="" src={i5} />
          <img className="" src={i6} />
        </div> */}
      </div>
      {/* <!-- End Clients --> */}
    </>
  );
};

export default OurClients;
