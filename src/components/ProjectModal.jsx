import Carousel from "react-multi-carousel";

export default function ProjectModal({ data }) {
  console.log(data);
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        className=""
        containerClass=""
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
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data?.images?.map((image, index) => (
          <img
            src={image}
            key={index}
            className="w-full h-[400px] object-contain"
          />
        ))}
      </Carousel>
      <div className="font-ubuntu flex justify-between">
        <div className="bg-primary text-white text-center w-1/3">
          <p className="text-start ml-4 py-2">Civil Work (2022-2023)</p>
          <hr />
          <h1 className="text-xl font-semibold text-start ml-4 mt-6">
            {data?.title}
          </h1>
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-[20px] font-bold leading-5">Overview</h1>
          <p className="mt-2 leading-5 text-justify">{data?.overview}</p>
        </div>
      </div>
    </>
  );
}