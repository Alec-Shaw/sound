import { useState } from "react";
import { Triangle } from "./constants/assets";
import video from "../assets/Comp.mp4";

const Video = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="flex justify-center">
        <div className="fixed bottom-5 l z-30">
          <button
            onClick={() => setModal(true)}
            className="flex items-center w-[246px] h-[56px] rounded-[40px] bg-[#FFFFFF] text-xl"
          >
            <div className="ml-6">
              <Triangle />
            </div>
            <div className="ml-6 ">Смотреть видео</div>
          </button>
        </div>
      </div>
      <div></div>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="flex items-center justify-center fixed bg-black/50 top-0 left-0 right-0 bottom-0 z-50 "
        >
          <div className="lg:w-[800px] md:w-[500px] xs:w-[400px] xxs:w-[400px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2 z-50">
            <button
              onClick={() => setModal(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <video autoPlay controls src={video}></video>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
