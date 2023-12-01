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
    image: "./src/img/student1.png",
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
              <MdLightMode  /> //className={`${bar ? "sm:text-black" : "sm:text-white"}`}
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
              American rapper and singer from Gifford, Florida. He rose to fame
              in 2018 following the commercial release of his single "Murder on
              My Mind", a trap song which explores homicidal ideation.
            </motion.p>
            <motion.div variants={navItem} className="flex gap-4">
              <FaGithub />
              <FaGithub />
              <FaGithub />
              <FaGithub />
            </motion.div>
          </div>

          <div className="flex justify-center underline decoration-2">
            <motion.h5 variants={navItem}>Tech Stack</motion.h5>
          </div>

          <div className="grid grid-cols-4 gap-y-4 gap-x-4 p-14">
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center"
            >
              <img className="h-10" src="./src/img/html.png" />
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center"
            >
              <img className="h-10" src="./src/img/css3.png" />
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center"
            >
              3
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center"
            >
              4
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center"
            >
              5
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center"
            >
              6
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center"
            >
              7
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center"
            >
              8
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center ml-10"
            >
              9
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center ml-10"
            >
              10
            </motion.div>
            <motion.div
              variants={navItem}
              className="flex rounded-full bg-white w-12 h-12 justify-center items-center ml-10"
            >
              11
            </motion.div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center lg:items-center  lg:pb-16">
          <img className="w-52 lg:w-72" src={user.image} />
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
