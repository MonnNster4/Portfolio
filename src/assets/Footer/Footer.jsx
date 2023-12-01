import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TbNoCopyright } from "react-icons/tb";

function Footer() {
  return (
    <>
      <div className="flex flex-col gap-8 p-16 bg-primary text-white justify-end dark:bg-white dark:text-black" >  {/*h-[46.7rem]*/}
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
