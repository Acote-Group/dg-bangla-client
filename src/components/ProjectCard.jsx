import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    padding: "0%",
  },
};

export default function ProjectCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  return (
    <>
      <div
        className="rounded-lg border text-card-foreground max-w-md mx-auto overflow-hidden bg-white shadow-lg md:max-w-2xl font-ubuntu"
        data-v0-t="card"
      >
        <div className="md:flex md:h-[350px] items-center">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-fit md:w-96 flex-shrink-0"
              src={data?.images[0]}
              alt="Dredging Works at Karnofuli River"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-lg font-semibold text-pretty line-clamp-3">
              {data?.title}
            </div>
            <p className="mt-4 text-xs leading-tight font-medium text-[#737373] hover:underline line-clamp-5 text-justify">
              {data?.overview}
            </p>

            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-10 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded"
              data-hs-overlay="#hs-vertically-centered-modal"
              onClick={handleOpenModal}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Project Details"
      >
        <ProjectModal data={data} onClose={handleCloseModal} />
      </Modal>
    </>
  );
}
