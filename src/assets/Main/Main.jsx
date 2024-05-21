import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { MdLightMode } from "react-icons/md";
// import { MdOutlineDarkMode } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { FramerContainer, navItem } from "../FramerMotion/NavAnimation";
import { TfiClose } from "react-icons/tfi";

import clsx from "clsx";
import { styled } from "@mui/system";
import { useSwitch } from "@mui/base/useSwitch";

import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function UseSwitchesCustom() {
  return <Main defaultChecked />;
}

const useStyles = (theme) => ({
  highlighted: {
    borderColor: "gray",
    borderWidth: "1px",
    padding: "4px",
    borderRadius: "20px",
  },
});

function Main(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  };

  const s = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  const [bar, setbar] = useState();
  // const [color, setColor] = useState("white");

  // const handleChangeColor = () => {
  //   setColor(color);
  // };

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    theme === "light"
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
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem className="hidden sm:flex">
              <BreadcrumbLink href="#" className="">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem
              activeStyle={{ color: "yellow" }}
              // onClick={() => setActiveItemIndex(1)}
              // className={activeItemIndex === 1 ? s.highlighted : null}
            >
              <BreadcrumbLink href="#about">About</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem
              onClick={() => setActiveItemIndex(2)}
              className={activeItemIndex === 2 ? s.highlighted : null}
            >
              <BreadcrumbLink href="#projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="#contact">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <motion.div className="flex gap-4">
          <motion.button variants={navItem} onClick={handleThemeChange}>
            <SwitchRoot className={clsx(stateClasses)}>
              <SwitchTrack>
                <SwitchThumb className={clsx(stateClasses)} />
              </SwitchTrack>
              <SwitchInput {...getInputProps()} aria-label="Demo switch" />
            </SwitchRoot>
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
        className="flex justify-center lg:max-w bg-slate-100 dark:bg-slate-900 dark:text-white "
      >
        <div className="xl:max-w-screen-xl  lg:flex py-20">
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
            <div className="lg:flex lg:flex-col lg:gap-4 lg:w-[calc(75%-2rem)] xl:w-[calc(75%-2rem)] ">
              <div className="flex justify-center underline decoration-2 ">
                <motion.h5 variants={navItem}>Stack</motion.h5>
              </div>

              <ul className="flex flex-wrap  sm:w-[calc(75%-1rem)]:w-full  gap-4  justify-center  text-3xl  mt-8 xl:mt-0  w-full ">
                <motion.li
                  variants={navItem}
                  className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
                >
                  <img className="h-10" src={"./static/img/html.png"} />
                </motion.li>
                <motion.li
                  variants={navItem}
                  className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
                >
                  <img className="h-10" src={"./static/img/css3.png"} />
                </motion.li>
                <motion.li
                  variants={navItem}
                  className="h-12 w-12 md:h-15 md:w-15 bg-white rounded-full items-center flex justify-center shadow-md hover:scale-125 transition duration-200 cursor-pointer text-orange-400"
                >
                  <img
                    className="h-9"
                    src={"./static/img/javascriptimage.png"}
                  />
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
          </div>

          <div className="w-full h-auto flex justify-center lg:items-center  lg:pb-16">
            <img
              className="w-52 lg:w-72"
              src={"./static/img/student1.png"}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

const blue = {
  700: "#0059B2",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const SwitchRoot = styled("span")`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 36px;
  padding: 8px;
`;

const SwitchInput = styled("input")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled("span")`
  position: absolute;
  display: block;
  background-color: ${blue[700]};
  width: 30px;
  height: 30px;
  border-radius: 8px;
  top: 3px;
  left: 4px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;

    /* false positive: */
    /* stylelint-disable unit-no-unknown */
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')
      center center no-repeat;
    /* stylelint-enable unit-no-unknown */
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(24px);

    &::before {
      /* false positive: */
      /* stylelint-disable unit-no-unknown */
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>');
      /* stylelint-enable unit-no-unknown */
    }
  }
`;

const SwitchTrack = styled("span")(
  ({ theme }) => `
  background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[400]};
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: block;
`
);

export default UseSwitchesCustom;
