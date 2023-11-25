import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <>
      <div className="flex flex-col gap-10 bg-slate-100 p-14">
        <div className="">
          <h1 className="text-3xl font-semibold uppercase">Projects</h1>
        </div>
        <div className="max-w-5xl shadow-lg shadow-black-500 h-80 relative bg-black opacity-90 rounded-t-2xl">
          <img
            src="./src/img/groupnb.jpg"
            className="h-full w-full opacity-30"
          ></img>
          <div className="flex flex-col gap-4 absolute bottom-0 left-3 px-2 pb-4 z-50 text-white ">
            <div>
              <h5 className="font-bold">ERP</h5>
              <p>A company website built with TailwindCSS and ReactJS.</p>
            </div>
            <div className="flex gap-3">
              <h4>Visit Site</h4>
              <FaExternalLinkAlt className="mt-1" />
            </div>
          </div>
        </div>
        <div className="bg-white max-w-5xl  h-72"></div>
        <div className="bg-white max-w-5xl h-72"></div>
      </div>
    </>
  );
}

export default Projects;
