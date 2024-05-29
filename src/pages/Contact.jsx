import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";
import { MapPin } from "lucide-react";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.promise(
      axios.post(
        "https://backend.dg-bangla.com/api/v1/contact-us/send-email",
        formData
      ),
      {
        loading: "Sending Message...",
        success: "Message Sent Successfully",
        error: "Something went wrong! 😢",
      },
      {
        success: {
          duration: 5000,
          // icon: "🔥",
        },
      }
    );

    try {
      await toastId;
      setFormData({
        name: "",
        email: "",
        subject: "",
        msg: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { data } = useQuery({
    queryKey: ["basicData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://backend.dg-bangla.com/api/v1/data/info-get"
        );

        return response.data?.data;
      } catch (error) {
        // Handle errors here
        throw new Error("Network response was not ok");
      }
    },
  });

  const { data: sData } = useQuery({
    queryKey: ["socialData"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://backend.dg-bangla.com/api/v1/data/social-get"
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
      <section className="max-w-[1920px] mx-auto">
        <Navbar />
        <div className="w-full h-[300px] bg-navBg bg-cover bg-no-repeat pt-[8rem]">
          <h1 className="text-[60px] font-poppins uppercase text-white text-center font-semibold">
            Contact
          </h1>

          <div className="font-ubuntu w-fit mx-auto">
            <ol
              className="flex items-center whitespace-nowrap"
              aria-label="Breadcrumb"
            >
              <li className="inline-flex items-center gap-2">
                <Link
                  className="flex items-center text-[#8B8B8B] hover:text-primary focus:outline-none focus:text-primary text-[18px] font-[500] leading-[28px]"
                  to="/"
                >
                  {/* <svg
                    className="flex-shrink-0 me-3 h-4 w-4"
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg> */}
                  Home
                </Link>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.375 3.75L10.625 10L4.375 16.25"
                    stroke="#A8223B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.625 3.75L16.875 10L10.625 16.25"
                    stroke="#A8223B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>

              <li
                className="inline-flex items-center text-white truncate text-[18px] font-[500] leading-[28px] ml-2"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </div>
        </div>
        <div className="container max-w-[1360px] mx-auto my-16">
          <div className="relative mx-auto w-full max-w-7xl bg-white">
            <div>
              <h1 className="text-[32px] md:text-[48px] font-bold text-center">
                Let&apos;s Talk With Us
              </h1>
            </div>
            <div className="grid grid-cols-2">
              {/* :CONTACT FORM CONTAINER */}
              <div className="order-3 md:order-2 col-span-full md:col-span-1 py-5 md:py-10 font-ubuntu">
                <form
                  action=""
                  className="mx-auto max-w-xl space-y-4 font-roboto"
                  onSubmit={handleSubmit}
                >
                  {/* ::Name Input */}
                  <h1 className="font-bold">Full Name</h1>
                  <div className="relative">
                    <input
                      type="text"
                      className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Enter Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg
                        className="flex-shrink-0 w-4 h-4 text-gray-500"
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>

                  <h1 className="font-bold">Email Address</h1>
                  {/* ::Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Enter Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mail flex-shrink-0 w-4 h-4 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#597e8d"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                    </div>
                  </div>

                  <h1 className="font-bold">Subject</h1>
                  {/* ::subject Input */}
                  <div className="relative">
                    <input
                      type="text"
                      className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Write a Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-book-2 flex-shrink-0 w-4 h-4 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#597e8d"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
                        <path d="M19 16h-12a2 2 0 0 0 -2 2" />
                        <path d="M9 8h6" />
                      </svg>
                    </div>
                  </div>

                  <h1 className="font-bold">Message</h1>
                  {/* ::Message Input */}
                  <div className="col-span-full">
                    <textarea
                      className="py-3 px-4 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                      rows="10"
                      placeholder="Write Your Message..."
                      name="msg"
                      value={formData.msg}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* ::Submit Button */}
                  <div>
                    <button
                      className="group relative inline-flex items-center overflow-hidden bg-gradient-to-r from-rose-700 to-rose-500 px-8 py-3.5 text-white focus:outline-none focus:ring mt-[10px]"
                      type="submit"
                    >
                      <span className="absolute -end-full transition-all group-hover:end-4">
                        <MoveRight fill="black" />
                      </span>

                      <span className="uppercase font-medium transition-all group-hover:me-4">
                        Send Message
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              {/* :CONTACT INFOS CONTAINER */}
              <div className="order-2 md:order-3 col-span-full md:col-span-1 py-5 md:py-10 px-6 font-ubuntu">
                <div className="mx-auto max-w-xl flex flex-col space-y-2">
                  <div>
                    {/* ::Title Contact Us */}
                    <h2 className="text-[24px] md:text-[28px] font-semibold uppercase">
                      We are here to help you always
                    </h2>
                    {/* ::Text */}
                    <p className="text-gray-800 mt-4 text-justify">
                      DG Bangla Engineering Ltd. isn't just any company. We're a
                      young, dynamic force in the civil construction and
                      electro-mechanical engineering space, making waves in
                      roadways, yards, dredging, low land development and
                      electrification. With heavy machinery, logistics know-how
                      and offices in Dhaka and Chattogram, we're equipped to
                      tackle any infrastructure challenge Bangladesh throws our
                      way.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 pt-[40px] font-ubuntu w-full gap-10">
                    <div>
                      <h1 className="text-[24px] font-bold leading-[30px]">
                        Office Address
                      </h1>
                      {/* ::Address */}
                      <p className="leading-5 inline-flex mt-4">
                        <MapPin className="mr-2 w-5 text-gray-400 flex-shrink-0" />
                        {data?.address}
                      </p>
                    </div>

                    <div className="mt-6 md:mt-0">
                      <h1 className="text-[24px] font-bold leading-[30px]">
                        Email Address
                      </h1>
                      {/* ::Email contact */}
                      <a
                        href="#mail"
                        className="inline-flex items-center leading-5 mt-4"
                      >
                        <Mail className="mr-2 w-5 text-gray-400" />
                        {data?.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 md:pt-[50px]">
                    <h1>Follow Us On</h1>
                    {/* ::Socials */}
                    <div className="flex items-center mt-5">
                      {/* :Twitter */}
                      <a
                        href={sData?.twitter}
                        target="_blank"
                        className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#1DA1F2] text-white filter hover:brightness-125"
                        style={{ backgroundColor: "#1DA1F2" }}
                        rel="noreferrer"
                      >
                        {/* ::twitter svg */}
                        <svg
                          className="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      {/* :FACEBOOK */}
                      <a
                        href={sData?.facebook}
                        target="_blank"
                        className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                        style={{ backgroundColor: "#4267B2" }}
                        rel="noreferrer"
                      >
                        {/* ::facebook svg */}
                        <svg
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                        </svg>
                      </a>
                      {/* :Instagram */}
                      <a
                        href={sData?.instagram}
                        target="_blank"
                        className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125"
                        rel="noreferrer"
                      >
                        {/* ::instagram svg */}
                        <svg
                          className="w-4 h-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      {/* :Linkedin */}
                      <a
                        href={sData?.linkedin}
                        target="_blank"
                        className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white filter hover:brightness-125"
                        rel="noreferrer"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" rx="20" fill="#0A66C2" />
                          <path
                            d="M29.376 9H10.624C10.1933 9 9.78023 9.1711 9.47567 9.47567C9.1711 9.78023 9 10.1933 9 10.624V29.376C9 29.8067 9.1711 30.2198 9.47567 30.5243C9.78023 30.8289 10.1933 31 10.624 31H29.376C29.8067 31 30.2198 30.8289 30.5243 30.5243C30.8289 30.2198 31 29.8067 31 29.376V10.624C31 10.1933 30.8289 9.78023 30.5243 9.47567C30.2198 9.1711 29.8067 9 29.376 9ZM15.5572 27.7413H12.2496V17.2347H15.5572V27.7413ZM13.9011 15.7788C13.5259 15.7766 13.1598 15.6634 12.8488 15.4534C12.5379 15.2434 12.2962 14.946 12.1541 14.5987C12.0121 14.2514 11.9761 13.8699 12.0507 13.5022C12.1253 13.1345 12.3072 12.7971 12.5733 12.5326C12.8395 12.2682 13.178 12.0885 13.5462 12.0163C13.9144 11.944 14.2957 11.9825 14.642 12.1267C14.9884 12.271 15.2842 12.5147 15.4923 12.8269C15.7003 13.1392 15.8111 13.5061 15.8108 13.8813C15.8144 14.1324 15.7673 14.3818 15.6724 14.6144C15.5776 14.847 15.4368 15.0582 15.2586 15.2352C15.0804 15.4123 14.8684 15.5517 14.6351 15.6451C14.4019 15.7384 14.1523 15.7839 13.9011 15.7788ZM27.7489 27.7504H24.4428V22.0106C24.4428 20.3178 23.7232 19.7953 22.7943 19.7953C21.8135 19.7953 20.851 20.5347 20.851 22.0533V27.7504H17.5433V17.2424H20.7242V18.6983H20.7669C21.0863 18.0521 22.2046 16.9475 23.9111 16.9475C25.7567 16.9475 27.7504 18.0429 27.7504 21.2513L27.7489 27.7504Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* google map  */}
        <div className="order-1 col-span-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1534.4283836641605!2d90.3718416776628!3d23.83614866751305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1e7bd81fe61%3A0x5f936d1a14f9b63!2sDGBangla%20Engineering%20Ltd.!5e0!3m2!1sen!2sbd!4v1711598028997!5m2!1sen!2sbd"
            title="map"
            scrolling="no"
            frameBorder="0"
            width="100%"
            height="300px"
            className=""
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
