import React from "react";
import { Link } from "react-router-dom";
import groupnbBlackLogo from "../../img/groupnblogo.png";

const Login = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-[90vh]'>
      
          <div>
            <img
              className="flex justify-center m-auto w-32 "
              src={groupnbBlackLogo}
            />
          </div>

          <div className="flex justify-center gap-4 mt-8 ">
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
            <Link to="/upload">
              <button className=" rounded-sm h-[2rem] w-[80px] border bg-neutral-950 text-white hover:bg-secondary/80 transition-all duration-300 text-xs font-semibold uppercase border-none">
                Submit
              </button>
            </Link>
          </div>
       
      </div>
    </>
  );
};

export default Login;
