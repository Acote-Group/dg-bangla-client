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
          From humble beginnings in 2012, we've grown into a powerhouse! At
          present, we're not just experienced property design and construction
          experts, but also handle electrical works, equipment, and even service
          them!
        </p>
        <p className="mt-4 text-[18px] leading-[28px]">
          We're leading the way in quality construction, putting health, safety,
          and the environment first. How do we do it? By trusting and empowering
          our team, fostering transparency, accountability, and a strong work
          ethic. We're building a better future, brick by brick!
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img alt="DG Bangla Excavator" className="w-full h-auto" src={story} />
      </div>
    </section>
  );
}
