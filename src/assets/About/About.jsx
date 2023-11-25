import React, { useEffect, useState } from "react";

function About() {
  return (
    <>
      <div>
        <div className="flex flex-col gap-5 px-14 pt-24 ">
          <h1 className="flex justify-start text-3xl uppercase font-semibold">
            About Me
          </h1>
          <p className="leading-10 ">
            I am 23 years old and recently graduated from college, obtaining a
            bachelor's degree in Information Technology from STI Las Pinas
            College. Presently, my main focus revolves around responsive and
            visually appealing interfaces, while also maintaining a consistent
            commitment to learning about modern technologies. I am actively
            exploring job opportunities that can facilitate my growth as a
            front-end developer.
          </p>
        </div>
        <div>
          <p className="px-14 py-16  leading-10">
            I'm currently focused on tasks like connecting APIs, using React
            Hooks, and developing the back-end. Furthermore, for front-end
            development, I consistently aim to stay updated with the latest
            libraries and writing some tests in program's requirements using
            chai and Redux for state management in React.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
