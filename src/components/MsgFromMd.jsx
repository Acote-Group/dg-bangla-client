import md from "../assets/photos/mdPic.png";
import { Fade } from "react-reveal";
export default function MsgFromMd() {
  return (
    <>
      <section className="max-w-[1360px] mx-auto">
        <div className="container mx-auto px-4 py-8 ubuntu">
          <div className="flex flex-col md:flex-row gap-[42px] justify-center items-center">
            <div>
              <Fade left>
                <div className="w-full h-auto">
                  <img src={md} alt="Construction Work" className="" />
                </div>
              </Fade>
            </div>

            <div className="w-full md:w-1/2">
              <Fade right cascade>
                <div className="font-[700] text-[24px] leading-[27px] italic text-primary md:mb-[15px]">
                  Our Honorable MD
                </div>
                <h1 className="text-[48px] font-[700] leading-[55px] md:mb-[30px]">
                  Message from MD
                </h1>
                <p className="leading-[26px] md:mb-[50px]">
                  We started our journey with a mission to recognize higher
                  priority client satisfaction and maintains standard services
                  with quality civil construction services that will build
                  long-lasting relationships with clients. <br /> <br /> Our
                  obligation is to provide the highest quality products and
                  services to meet the needs of our customers. DG. Bangla has
                  the ability to facilitate small, medium and large orders.
                  Customizing various types of civil construction, electro
                  mechanical and automations work according to clients need.
                </p>

                <div>
                  <h1 className="font-[700] text-[25px] leading-[30px]">
                    Md. Arsad Parvez
                  </h1>
                  <p className="text-primary">Managing Director</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
