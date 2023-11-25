import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbNoCopyright } from "react-icons/tb";

function Footer() {
  return (
    <>
      <div className="flex flex-col gap-8 p-16 bg-slate-600 text-white justify-end">  {/*h-[46.7rem]*/}
        <div className="flex justify-center gap-4 ">
          <FaGithub />
          <FaGithub />
          <FaGithub />
          <FaGithub />
        </div>
        <div className="flex justify-center gap-1">
          <TbNoCopyright className="mt-[0.30rem]"  />
          <span>2023</span>
          <h5>Solomon Santiago</h5>
        </div>
      </div>
    </>
  );
}

export default Footer;
