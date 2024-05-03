import React, { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FramerContainer, navItem } from "../FramerMotion/NavAnimation";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  const [bar, setbar] = useState();

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const user = {
    name: "Hello",
    image: "./static/img/student1.png",
  };

  return (
    <>
      <motion.div
        className="py-7 sticky top-0 dark:bg-slate-800 dark:text-white dark:shadow-md z-50 px-8 flex justify-between shadow-md bg-white"
        variants={FramerContainer}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1 variants={navItem}>{user.name}</motion.h1>
        </div>
        <motion.div className="flex gap-4">
          <motion.button variants={navItem} onClick={handleThemeChange}>
            {theme === "dark" ? (
              <MdLightMode /> //className={`${bar ? "sm:text-black" : "sm:text-white"}`}
            ) : (
              <MdOutlineDarkMode className="" />
            )}
          </motion.button>
          <motion.button variants={navItem} onClick={() => setbar(!bar)}>
            {bar ? <TfiClose className="" /> : <FaBarsStaggered />}
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={FramerContainer}
        initial="hidden"
        animate="visible"
        className="lg:flex lg:max-w bg-slate-100 dark:bg-slate-900 dark:text-white"
      >
        <div className="xl:max-w-screen-xl mx-auto   lg:flex py-20">
          <div className="lg:max-w-xl">
            <div className="flex flex-col p-16 gap-4">
              <motion.h1 variants={navItem} className="font-bold text-2xl">
                YNW Melly
              </motion.h1>
              <motion.h5 variants={navItem} className="">
                Rapper Artist
              </motion.h5>
              <motion.p variants={navItem} className="leading-8">
                Jamell Maurice Demons, known professionally as YNW Melly, is an
                American rapper and singer from Gifford, Florida. He rose to
                fame in 2018 following the commercial release of his single
                "Murder on My Mind", a trap song which explores homicidal
                ideation.
              </motion.p>
              <motion.div variants={navItem} className="flex gap-4">
                <FaGithub />
                <FaGithub />
                <FaGithub />
                <FaGithub />
              </motion.div>
            </div>

            <div className="flex justify-center underline decoration-2">
              <motion.h5 variants={navItem}>Stack</motion.h5>
            </div>

            <ul className="flex flex-wrap w-[calc(100%-2rem)] sm:w-[calc(75%-1rem)]:w-full  gap-4  justify-center  text-3xl  mt-8 xl:mt-0  xl:w-[calc(75%-2rem)] ">
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                <img className="h-10" src="./src/img/html.png" />
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                <img className="h-10" src="./src/img/css3.png" />
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                3
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                4
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                5
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                6
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                7
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                8
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400 "
              >
                9
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                10
              </motion.li>
              <motion.li
                variants={navItem}
                className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
              >
                11
              </motion.li>
            </ul>
          </div>

          <div className="w-full h-auto flex justify-center lg:items-center  lg:pb-16">
            <img className="w-52 lg:w-72" src={user.image} alt=""/>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
