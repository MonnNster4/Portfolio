import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook,BsInstagram} from "react-icons/bs";

function Footer() {
  return (
    <div className="dark:bg-slate-900  text-black dark:text-white bg-slate-100">
      <div className="max-[425px]:w-[320px] sm:max-w-2xl lg:max-w-screen-lg xl:max-w-screen-xl m-auto py-20">
        <div className="flex flex-col-reverse items-center justify-center  gap-8 lg:flex-row-reverse lg:justify-around xl:justify-between px-8">

          
          <h1 className="font-light text-sm md:text-base ">
            © 2024 Solomon Santiago
          </h1>

          <ul className="flex gap-4 text-xl sm:text-2xl ">
            <li className="hover:scale-125 transition duration-200 ">
              <a href="https://github.com/fiel777" target="_blank">
                <AiFillGithub  />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200 ">
              <a href="https://www.linkedin.com/in/jeremiah-monfiel-8201b023b/" target="_blank">
                <AiFillLinkedin  />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200   ">
              <a href="https://wwww.facebook.com/mayamonfiel" target="_blank">
                <BsFacebook />
              </a>
            </li>
            <li className="hover:scale-125 transition duration-200 ">
              <a href="https://www.instagram.com/miahmonfiel" target="_blank">
                <BsInstagram />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
    // <>
    //   <div className="flex flex-col gap-8 p-16 bg-primary justify-end dark:bg-white dark:text-black">
    //     {" "}
    //     {/*h-[46.7rem]*/}
    //     <div className="flex justify-center gap-4 ">
    //       <div><img className="h-10" src="./src/img/css3.png" /></div>
    //       <div class="relative w-full lg:w-[250px]">
    //         <input
    //           name="username"
    //           type="text"
    //           id="email"
    //           className="block px-2.5 pb-1.5 pt-3 text-xs text-black w-full border border-gray-300 peer outline-none focus:ring-0 focus:border-[#22092C] rounded-sm "
    //           placeholder=" "
    //           value=""
    //         ></input>
    //         <label
    //           for="email"
    //           class="absolute text-xs  text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#C70039] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
    //         >
    //           Username
    //         </label>
            
    //       </div>
    //       <div class="relative w-full lg:w-[250px]">
    //         <input
    //           name="username"
    //           type="password"
    //           id="email"
    //           className="block px-2.5 pb-1.5 pt-3 text-xs w-full border border-gray-300 peer outline-none focus:ring-0 focus:border-[#22092C] rounded-sm "
    //           placeholder=" "
    //           value=""
    //         ></input>
    //         <label
    //           for="email"
    //           class="absolute text-xs  text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#C70039] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
    //         >
    //           Password
    //         </label>
            
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default Footer;
