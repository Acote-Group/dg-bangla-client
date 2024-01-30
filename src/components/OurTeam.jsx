import w1 from "../assets/team/w1.png";
import w2 from "../assets/team/w2.png";
import w3 from "../assets/team/w3.png";
import t1 from "../assets/team/t1.png";
import t2 from "../assets/team/t2.png";
import t3 from "../assets/team/t3.png";
import Fade from "react-reveal/Fade";

const OurTeam = () => {
  const people = [
    {
      name: "Richard Wagner",
      role: "Building Worker",
      picture:
        "https://fancytailwind.com/static/profile16-3468a6740e58a45b951142454acb94d0.jpg",
      description:
        "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
      facebookURL: "#link",
      twitterURL: "#link",
      linkedinURL: "#link",
      vineURL: "#link",
    },
    {
      name: "Lisa Anderson",
      role: "Building Worker",
      picture:
        "https://fancytailwind.com/static/profile13-9abe52b1e8851f9e4afde349f2789d3e.jpg",
      description:
        "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
      facebookURL: "#link",
      twitterURL: "#link",
      linkedinURL: "#link",
      vineURL: "#link",
    },
    {
      name: "Tommy Atkins",
      role: "Building Worker",
      picture:
        "https://fancytailwind.com/static/profile13-9abe52b1e8851f9e4afde349f2789d3e.jpg",
      description:
        "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
      facebookURL: "#link",
      twitterURL: "#link",
      linkedinURL: "#link",
      vineURL: "#link",
    },
    {
      name: "John Halpern",
      role: "Designer",
      picture:
        "https://fancytailwind.com/static/profile13-9abe52b1e8851f9e4afde349f2789d3e.jpg",
      description:
        "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
      facebookURL: "#link",
      twitterURL: "#link",
      linkedinURL: "#link",
      vineURL: "#link",
    },
  ];
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto font-roboto">
          <div className="text-center">
            <div className="flex justify-center gap-4 items-center">
              <div className="flex flex-col">
                <hr className="border-t-2 border-primary w-8 ml-auto" />
                <hr className="border-t-2 border-primary w-5 mt-3 ml-auto" />
              </div>

              <Fade bottom>
                <h1 className="font-roboto text-[35px] font-[700] uppercase">
                  <span className="text-primary">our</span> team
                </h1>
              </Fade>

              <div className="flex flex-col ">
                <hr className="border-t-2 border-primary w-8" />
                <hr className="border-t-2 border-primary w-5 mt-3" />
              </div>
            </div>
            <p className="text-center font-openSans text-[#767676] mt-2 normal-case w-[80%] mx-auto">
              At DG-Bangla, our team isn't just building structures, we're
              building a better Bangladesh. Fueled by passion and relentless
              drive, we're a diverse group of architects, engineers, and
              visionaries pushing the boundaries of innovation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Fade left>
              <div className="flex flex-col items-start bg-[#f2f2f2]">
                <img alt="Richard Wagner" className="w-fit" src={t1} />
                <div className="flex space-x-2 px-[20px] bg-[#1A1A1A] w-full p-[20px]">
                  <FacebookIcon className="text-white" />
                  <LinkedinIcon className="text-white" />
                  <TwitterIcon className="text-white" />
                </div>
                <div className="p-[20px] text-start">
                  <h3 className="text-lg font-medium text-gray-800">
                    Dilruba Akhter
                  </h3>
                  <p className="text-gray-600">HR, Admin</p>
                </div>
              </div>
            </Fade>

            <Fade top>
              <div className="flex flex-col items-start bg-[#f2f2f2]">
                <img alt="Richard Wagner" className="w-fit" src={t2} />
                <div className="flex space-x-2 px-[20px] bg-[#1A1A1A] w-full p-[20px]">
                  <FacebookIcon className="text-white" />
                  <LinkedinIcon className="text-white" />
                  <TwitterIcon className="text-white" />
                </div>
                <div className="p-[20px] text-start">
                  <h3 className="text-lg font-medium text-gray-800 uppercase">
                    Proprietor Engr. Arsad Parvez
                  </h3>
                  <p className="text-gray-600 font-openSans">CEO & Founder</p>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="flex flex-col items-start bg-[#f2f2f2]">
                <img alt="Richard Wagner" className="w-fit" src={t3} />
                <div className="flex space-x-2 px-[20px] bg-[#1A1A1A] w-full p-[20px]">
                  <FacebookIcon className="text-white" />
                  <LinkedinIcon className="text-white" />
                  <TwitterIcon className="text-white" />
                </div>
                <div className="p-[20px] text-start">
                  <h3 className="text-lg font-medium text-gray-800 uppercase">
                    Md. Saiful Islam
                  </h3>
                  <p className="text-gray-600 font-openSans">
                    Finance & Accounts
                  </p>
                </div>
              </div>
            </Fade>

            {/* <div className="flex flex-col items-start bg-[#f2f2f2]">
              <img alt="Richard Wagner" className="w-fit" src={w1} />
              <div className="flex space-x-2 px-[20px] bg-[#1A1A1A] w-full p-[20px]">
                <FacebookIcon className="text-white" />
                <LinkedinIcon className="text-white" />
                <TwitterIcon className="text-white" />
              </div>
              <div className="p-[20px] text-start">
                <h3 className="text-lg font-medium text-gray-800 uppercase">
                  john halpern
                </h3>
                <p className="text-gray-600 font-openSans">Building Worker</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
