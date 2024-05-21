import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FramerContainer, navItem } from "../FramerMotion/NavAnimation";

function About() {
  return (
    <>
      <div id="about" className='xl:p-40'>
        <div  className="flex flex-col gap-5 px-14 pt-24 ">
          {/* <div>
          <img
            className="flex justify-center m-auto w-32 "
            src="./src/img/css3.png"
          />
        </div>
        <div className="flex justify-center gap-4 ">
          <div className="relative w-full lg:w-[250px]">
            <input
              name="username"
              type="text"
              id="email"
              className=" px-2.5 pb-1.5 pt-3 text-xs text-black w-full border peer  focus:ring-0  rounded-sm "
              placeholder=" "
            ></input>
            <label
              for="email"
              className="absolute text-xs  bg-white text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-[#C70039] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Username
            </label>
          </div>
          <div className="relative w-full lg:w-[250px]">
            <input
              name="password"
              type="password"
              id="password"
              className="block px-2.5 pb-1.5 pt-3 text-xs w-full border border-gray-300 peer outline-none focus:ring-0 focus:border-[#22092C] rounded-sm "
              placeholder=" "
            />
            <label
              for="password"
              className="absolute text-xs  text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#C70039] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Password
            </label>
           
          </div>
          <button className=" rounded-sm h-[2rem] w-[80px] border bg-neutral-950 text-white hover:bg-secondary/80 transition-all duration-300 text-xs font-semibold uppercase border-none">
              Submit
            </button>
        </div> */}
          <motion.h1
            variants={navItem}
            className="flex justify-start text-3xl uppercase font-semibold"
          >
            About Me
          </motion.h1>
          <p className="leading-10 ">
            I am 23 years old and recently graduated from college, obtaining a
            bachelor's degree in Information Technology from STI Las Pinas
            College. Presently, my main focus revolves around responsive and
            visually appealing interfaces, while also maintaining a consistent
            commitment to learning about modern technologies. I am actively
            exploring job opportunities that can facilitate my growth as a
            front-end developer.
          </p>
        </div>
        <div>
          <p className="px-14 py-16  leading-10">
            I'm currently focused on tasks like connecting APIs, using React
            Hooks, and developing the back-end. Furthermore, for front-end
            development, I consistently aim to stay updated with the latest
            libraries and writing some tests in program's requirements using
            chai and Redux for state management in React.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
