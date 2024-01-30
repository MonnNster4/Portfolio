import React from "react";
import groupnbBlackLogo from "../../img/groupnblogo.png"


const Upload = () => {
  return (
    <>

    <img className='w-24 ' src={groupnbBlackLogo} alt='groupnblogo' loading='lazy' />
     {/* <motion.div
        className="py-7 sticky top-0 dark:bg-slate-800 dark:text-white dark:shadow-md z-50 px-8 flex justify-between shadow-md bg-white"
        variants={FramerContainer}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1 variants={navItem}></motion.h1>
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
      </motion.div> */}

      <div className="grid grid-cols-1 py-20 gap-4 items-center justify-center m-auto md:grid-cols-2 lg:max-w-screen-lg">
        <div className="flex flex-col gap-4 ">
            <label className="font-bold" for="html">Resident ID: </label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Birth Certificate: </label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Marriage and/ or Divorce Certificate:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Financial proof of funds:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Passport:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold"  for="html">Resume:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Work Certificates:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Proof of Employment:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Paystubs:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Diplomas:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">School Transcripts:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Visa photograph:</label>
          <input className='w-[210px] ' name="userfile" type="file" accept="application/pdf" />
        </div>
        <div className="flex flex-col">
            <label className="font-bold" for="html">Police Certificates:</label>
          <input className='w-[210px] '  name="userfile" type="file" accept="application/pdf" />
        </div>
      </div>
    </>
  );
};

export default Upload;
