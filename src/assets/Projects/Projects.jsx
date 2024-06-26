import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className="dark:bg-slate-900 bg-slate-100  dark:text-white">
      <div id="projects" className="py-56 mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-8  px-14">
        <h1 className="text-3xl font-semibold uppercase">Projects</h1>

        <div className=" lg:gap-10 lg:items-center lg:grid lg:grid-cols-2 flex flex-col gap-8">
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
                  href="https://chatbot-ui-ashen-delta.vercel.app/ "
                  target="_blank"
                >
                  <h4 className="hover:underline hover:cursor-pointer ">
                    Visit Site
                  </h4>
                </a>
                <a
                  href="https://chatbot-ui-ashen-delta.vercel.app/"
                  target="_blank"
                >
                  <FaExternalLinkAlt className="mt-1 hover:scale-125 transition duration-200 hover:cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-full shadow-lg shadow-black-500 h-80 relative bg-black opacity-90 rounded-t-2xl ">
            <img
              src={"./static/img/crudimage.JPG"}
              alt=""
              className="h-full w-full opacity-30"
            ></img>
            <div className="flex flex-col gap-4 absolute bottom-0 left-3 px-2 pb-4 z-50 text-white ">
              <div>
                <h5 className="font-bold">simple CRUD</h5>
                <p>A simple crud application built with Axios.</p>
                <div className="flex mt-3 ">
                  <img
                    className="h-7 hover:scale-125 transition duration-200"
                    src={"./static/img/html.png"}
                  />
                  <img
                    className="h-7 hover:scale-125 transition duration-200"
                    src={"./static/img/css3.png"}
                  />
                  <img
                    className="h-[1.6rem] mt-[0.08rem] hover:scale-125 transition duration-200"
                    src={"./static/img/javascriptimage.png"}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://crud-sand-mu.vercel.app/" target="_blank">
                  <h4 className="hover:underline hover:cursor-pointer ">
                    Visit Site
                  </h4>
                </a>
                <a href="https://crud-sand-mu.vercel.app/" target="_blank">
                  <FaExternalLinkAlt className="mt-1 hover:scale-125 transition duration-200 hover:cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
