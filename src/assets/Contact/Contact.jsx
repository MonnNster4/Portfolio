import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Contact() {
  return (
    <>
      <div id="contact" className="flex flex-col gap-8 py-40 mx-auto  max-w-[1200px] ">
        <div className="flex flex-col gap-8 px-14">
          <h1 className="font-semibold text-3xl uppercase">Contact</h1>
          <p className="">
            Feel free to contact me through email at any time. Please don't
            hesitate to send me a message.
          </p>
          <div className="flex gap-4 justify-center items-center w-[200px] h-14 relative border border-black group text-black hover:text-white z-40  bg-white dark:border-white ">
            <h5 className="uppercase text-sm">Email me</h5>
            <IoIosArrowForward  className="animate-pulse " />
            <div className="absolute inset-0 -z-50 bg-black w-[10px] transition-all duration-500 ease-out group-hover:w-full dark:bg-slate-800"></div>
          </div>
        </div>
     
          
 
      </div>  
    </>
  );
}     

export default Contact;
