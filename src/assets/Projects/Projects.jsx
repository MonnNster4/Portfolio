import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div id="projects">
      <div className="flex flex-col gap-10 bg-slate-100 p-14 dark:bg-slate-900 dark:text-white xl:p-56 ">
        <div className="">
          <h1 className="text-3xl font-semibold uppercase">Projects</h1>
        </div>
        <div className="flex flex-col gap-10 lg:gap-10 lg:items-center lg:grid lg:grid-cols-2 ">
          <div className="max-w-full shadow-lg shadow-black-500 h-80 relative bg-black opacity-90 rounded-t-2xl ">
            <img
              src={"./static/img/groupnb.JPG"}
              className="h-full w-full opacity-30"
            ></img>
            <div className="flex flex-col gap-4 absolute bottom-0 left-3 px-2 pb-4 z-50 text-white ">
              <div>
                <h5 className="font-bold">ERP</h5>
                <p>A company website built with TailwindCSS and ReactJS.</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://erp-immigration.groupnb.com.ph/ "
                  target="_blank"
                >
                  <h4 className="hover:underline hover:cursor-pointer ">
                    Visit Site
                  </h4>
                </a>

                <a
                  href="https://erp-immigration.groupnb.com.ph/ "
                  target="_blank"
                >
                  <FaExternalLinkAlt className="mt-1 hover:scale-125 transition duration-200 hover:cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-full shadow-lg shadow-black-500 h-80 relative bg-black opacity-90 rounded-t-2xl ">
            <img
              src={"./static/img/chatbotimage.JPG"}
              className="h-full w-full opacity-30"
            ></img>
            <div className="flex flex-col gap-4 absolute bottom-0 left-3 px-2 pb-4 z-50 text-white ">
              <div>
                <h5 className="font-bold">chatbot-ui</h5>
                <p>
                  conversational tools that perform routine tasks efficiently.
                </p>
                <div className="flex mt-3 ">
                  <img
                    className="h-7 hover:scale-125 transition duration-200"
                    src={"./static/img/html.png"}
                  />
                  <img
                    className="h-7 hover:scale-125 transition duration-200"
                    src={"./static/img/css3.png"}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://erp-immigration.groupnb.com.ph/ "
                  target="_blank"
                >
                  <h4 className="hover:underline hover:cursor-pointer ">
                    Visit Site
                  </h4>
                </a>
                <a
                  href="https://erp-immigration.groupnb.com.ph/ "
                  target="_blank"
                >
                  <FaExternalLinkAlt className="mt-1 hover:scale-125 transition duration-200 hover:cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-full shadow-lg shadow-black-500 h-80 relative bg-black opacity-90 rounded-t-2xl ">
            <img
              // src={"./static/img/groupnb.JPG"}
              alt=""
              className="h-full w-full opacity-30"
            ></img>
            <div className="flex flex-col gap-4 absolute bottom-0 left-3 px-2 pb-4 z-50 text-white ">
              <div>
                <h5 className="font-bold">n/a</h5>
                {/* <p>A company website built with TailwindCSS and ReactJS.</p> */}
              </div>
              <div className="flex gap-3">
                <a
                  // href="https://erp-immigration.groupnb.com.ph/ "
                  target="_blank"
                >
                  <h4 className="hover:underline hover:cursor-pointer ">
                    Visit Site
                  </h4>
                </a>
                <a
                  // href="https://erp-immigration.groupnb.com.ph/ "
                  target="_blank"
                >
                  <FaExternalLinkAlt className="mt-1 hover:scale-125 transition duration-200 hover:cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
