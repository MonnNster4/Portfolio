import React, { useEffect, useState } from "react";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="py-7 px-8 flex justify-between shadow-md">
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <button>
            <FaBarsStaggered />
          </button>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="flex flex-col p-16 gap-4">
          <h1 className="font-bold text-2xl">YNW Melly</h1>
          <h5 className="">Rapper Artist</h5>
          <p className="leading-8">
            Jamell Maurice Demons, known professionally as YNW Melly, is an
            American rapper and singer from Gifford, Florida. He rose to fame in
            2018 following the commercial release of his single "Murder on My
            Mind", a trap song which explores homicidal ideation.
          </p>
          <div className="flex gap-4">
            <FaGithub />
            <FaGithub />
            <FaGithub />
            <FaGithub />
          </div>
        </div>
        <div>
          <div className="flex justify-center underline decoration-2">
            <h5>Tech Stack</h5>
          </div>
          <div className="grid grid-cols-4 gap-7 p-14">
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center">
              <img className="h-10" src="./src/img/html.png" />
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center">
              <img className="h-10" src="./src/img/css3.png" />
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center">
              3
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center">
              4
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center">
              5
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center">
              6
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center">
              7
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center">
              8
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center ml-10">
              9
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center ml-10">
              10
            </div>
            <div className="flex rounded-full bg-white w-12 h-12 justify-center items-center ml-10">
              11
            </div>
          </div>
          <div className="flex justify-center  ">
            <img className="w-52" src="./src/img/student1.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
