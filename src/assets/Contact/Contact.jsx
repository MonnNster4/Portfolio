import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Contact() {
  return (
    <>
      <div id="contact" className="flex flex-col gap-8 p-16 xl:p-28 ">
        <div className="flex flex-col gap-8">
          <h1 className="font-semibold text-3xl uppercase">Contact</h1>
          <p className="">
            Feel free to contact me through email at any time. Please don't
            hesitate to send me a message.
          </p>
        </div>
        <div className="flex justify-start">
          <div className="flex gap-4 justify-center items-center w-52 h-14 bg-black text-white dark:bg-slate-800 dark:text-white">
            <h5 className="uppercase text-sm">Email me</h5>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
