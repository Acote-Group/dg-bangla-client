import story from "../assets/photos/storyPic.png";
export default function OurStory() {
  return (
    <section className="container mx-auto px-4 py-8 md:flex md:items-center md:justify-between gap-8 font-ubuntu">
      <div className="md:w-1/2">
        <h2 className="text-lg font-bold tracking-wide border-b-4 border-primary w-fit pb-1">
          Our Story
        </h2>
        <h1 className="mt-4 text-[44px] font-[500] leading-[65px]">
          DG Bangla&apos;s Success Story
        </h1>
        <p className="mt-4 text-[18px] leading-[28px]">
          Since 2012, we have made significant paces and are advancing rapidly.
          Presently, we present ourselves as an experienced and diverse company
          offering comprehensive property design and construction solutions,
          while also expanding into electrical works, equipment & spare parts
          importing, supply, and servicing.
        </p>
        <p className="mt-4 text-[18px] leading-[28px]">
          We have been taking a leading role in providing construction services
          with an uncompromised commitment to Quality, Health, Safety, and
          Environment. We do this through the combination of an open
          relationship with our employees based on mutual trust, transparency,
          accountability, and discipline
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img alt="DG Bangla Excavator" className="w-full h-auto" src={story} />
      </div>
    </section>
  );
}
