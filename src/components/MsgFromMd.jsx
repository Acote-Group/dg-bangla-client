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
                  Our Honorable CEO
                </div>
                <h1 className="text-[48px] font-[700] leading-[55px] md:mb-[30px]">
                  Message from CEO
                </h1>
                <p className="leading-[26px] md:mb-[50px]">
                  Hey there! At DG Bangla, we're passionate about putting
                  clients first, not profits. We built our company on top-notch
                  civil construction, electrical, and automation services, with
                  the flexibility to handle any project size, from small fixes
                  to massive builds. Our goal? **Happy clients and long-lasting
                  relationships! ** We pride ourselves on using the best
                  materials and delivering quality work you can trust. Whether
                  you have a small fix or a grand vision, we're here to turn it
                  into reality. Let's build something amazing together!
                </p>

                <div>
                  <h1 className="font-[700] text-[25px] leading-[30px]">
                    Md. Arsad Parvez
                  </h1>
                  <p className="text-primary">Chief Executive Officer</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
